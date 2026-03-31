// DOM Elements
const libraryFilter = document.getElementById('library-filter');
const courseFilter = document.getElementById('course-filter');
const dateFilter = document.getElementById('date-filter');
const coursesGrid = document.getElementById('courses-grid');
const loadingState = document.getElementById('loading');
const noResultsState = document.getElementById('no-results');
const resultsStats = document.getElementById('results-stats');
const clearFiltersBtn = document.getElementById('clear-filters-btn');

let allCourses = [];
let uniqueLibraries = new Set();

// Initialize App
function init() {
    try {
        if (typeof coursesData === 'undefined') {
            throw new Error('coursesData is not defined. Ensure courses.js is loaded.');
        }

        // Transform the nested data into a flat array of courses
        flattenData(coursesData);

        // Populate dropdowns and render initial data
        populateLibraryDropdown();
        renderCourses(allCourses);

        // Setup event listeners
        setupEventListeners();

    } catch (error) {
        console.error('Error loading data:', error);
        loadingState.innerHTML = `<p style="color: #ef4444;">Error carregant les dades. Assegura't que l'arxiu <code>courses.js</code> està al mateix directori.</p>`;
    }
}

// Flatten JSON to Course Array
function flattenData(rawData) {
    allCourses = [];
    uniqueLibraries.clear();

    rawData.forEach(libraryRow => {
        // Skip libraries that returned no courses
        if (!libraryRow.courses || libraryRow.courses.length === 0) return;

        const libraryName = libraryRow.library_name;
        uniqueLibraries.add(libraryName);

        libraryRow.courses.forEach(course => {
            // Split dates by the pipe character to display them nicely
            const datesArr = course.date.split('|').map(d => d.trim()).filter(d => d);

            allCourses.push({
                library: libraryName,
                title: course.title,
                dates: datesArr,
                rawDateString: course.date // Keep for easy text searching
            });
        });
    });
}

// Populate Library Select
function populateLibraryDropdown() {
    // Sort libraries alphabetically
    const sortedLibs = Array.from(uniqueLibraries).sort();

    sortedLibs.forEach(lib => {
        const option = document.createElement('option');
        option.value = lib;
        option.textContent = lib;
        libraryFilter.appendChild(option);
    });
}

// Render Course Cards
function renderCourses(courses) {
    // Hide loading
    loadingState.classList.add('hidden');

    // Clear existing
    coursesGrid.innerHTML = '';

    if (courses.length === 0) {
        coursesGrid.classList.add('hidden');
        noResultsState.classList.remove('hidden');
        resultsStats.textContent = `0 cursos trobats`;
        return;
    }

    coursesGrid.classList.remove('hidden');
    noResultsState.classList.add('hidden');

    // Add timestamp info if available
    const timeSuffix = (typeof scrapeTimestamp !== 'undefined') ? ` recuperats el ${scrapeTimestamp}` : '';
    resultsStats.textContent = `Mostrant ${courses.length} curs${courses.length !== 1 ? 'os' : ''}${timeSuffix}`;

    // Create fragments for better performance
    const fragment = document.createDocumentFragment();

    courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';

        // Render up to 3 date badges, show remaining count if more
        let datesHTML = '';
        const displayLimit = 3;
        const shownDates = course.dates.slice(0, displayLimit);
        const remaining = course.dates.length - displayLimit;

        shownDates.forEach(date => {
            datesHTML += `<span class="date-badge">${escapeHTML(date)}</span>`;
        });

        if (remaining > 0) {
            datesHTML += `<span class="date-badge" style="background:#e0f2fe; color:#0369a1; border-color:#bae6fd;">+ ${remaining} dates més</span>`;
        }

        card.innerHTML = `
            <div class="card-library">${escapeHTML(course.library)}</div>
            <h2 class="card-title">${escapeHTML(course.title)}</h2>
            <div class="card-dates">
                ${datesHTML}
            </div>
        `;

        fragment.appendChild(card);
    });

    coursesGrid.appendChild(fragment);
}

// Filter Logic
function handleFilter() {
    const libTerm = libraryFilter.value;
    const courseTerm = courseFilter.value.toLowerCase().trim();
    const dateTerm = dateFilter.value.toLowerCase().trim();

    const filtered = allCourses.filter(course => {
        // Evaluate match conditions
        const matchLib = libTerm === '' || course.library === libTerm;
        const matchCourse = courseTerm === '' || course.title.toLowerCase().includes(courseTerm);
        const matchDate = dateTerm === '' || course.rawDateString.toLowerCase().includes(dateTerm);

        return matchLib && matchCourse && matchDate;
    });

    renderCourses(filtered);
}

// Clear Filters
function clearFilters() {
    libraryFilter.value = '';
    courseFilter.value = '';
    dateFilter.value = '';
    handleFilter();
}

// --- Modal Logic ---
const libraryModal = document.getElementById('library-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalLibraryName = document.getElementById('modal-library-name');
const modalCoursesList = document.getElementById('modal-courses-list');

function openLibraryModal(libraryName) {
    // 1. Get all courses for this specific library
    const libraryCourses = allCourses.filter(c => c.library === libraryName);

    // 2. Populate Modal Header
    modalLibraryName.textContent = libraryName;

    // 3. Populate Modal Body
    modalCoursesList.innerHTML = '';

    if (libraryCourses.length === 0) {
        modalCoursesList.innerHTML = '<p>No hi ha cursos disponibles per aquesta biblioteca.</p>';
    } else {
        const fragment = document.createDocumentFragment();
        libraryCourses.forEach(course => {
            const item = document.createElement('div');
            item.className = 'modal-course-item';

            // Format dates simply with br tags for the modal
            const datesFormatted = course.dates.map(d => `<span>${escapeHTML(d)}</span>`).join('<br>');

            item.innerHTML = `
                <h4>${escapeHTML(course.title)}</h4>
                <div class="dates">${datesFormatted}</div>
            `;
            fragment.appendChild(item);
        });
        modalCoursesList.appendChild(fragment);
    }

    // 4. Show Modal
    libraryModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeLibraryModal() {
    libraryModal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
}

// Setup Listeners
function setupEventListeners() {
    libraryFilter.addEventListener('change', handleFilter);

    // Use input events for text fields to update as user types
    courseFilter.addEventListener('input', debounce(handleFilter, 300));
    dateFilter.addEventListener('input', debounce(handleFilter, 300));

    clearFiltersBtn.addEventListener('click', clearFilters);

    // Setup modal specific listeners
    closeModalBtn.addEventListener('click', closeLibraryModal);

    // Close modal when clicking outside of it
    libraryModal.addEventListener('click', (e) => {
        if (e.target === libraryModal) {
            closeLibraryModal();
        }
    });

    // Add event delegation for the dynamically created library badges
    coursesGrid.addEventListener('click', (e) => {
        const libraryBadge = e.target.closest('.card-library');
        if (libraryBadge) {
            const libraryName = libraryBadge.textContent;
            openLibraryModal(libraryName);
        }
    });
}

// Utility: Debounce wrapper to prevent too many re-renders during typing
function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// Utility: Escape HTML to prevent XSS (though our data is controlled, it's good practice)
function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Boot
document.addEventListener('DOMContentLoaded', init);
