const scrapeTimestamp = '2026-06-30T10:50:32.590394';
const coursesData = [
    {
        "library_id": "1",
        "library_name": "Biblioteca Barceloneta-La Fraternitat",
        "courses_found": 1,
        "courses": [
            {
                "title": "Un estiu de postal. Postals d'Ulisses. (8 a 12 anys)",
                "date": "Dimarts 21 de juliol (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "19",
        "library_name": "Biblioteca Bon Pastor - Josefina Castellví",
        "courses_found": 3,
        "courses": [
            {
                "title": "Un estiu de postal. Postals de la Barcelona del futur. (8 a 12 anys)",
                "date": "Dimarts 18 d'agost (18:00-19:00 h)"
            },
            {
                "title": "Un estiu de postal. Finestres postals. (3 a 6 anys)",
                "date": "Dijous 3 de setembre (18:00-19:00 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dimarts 20 d'octubre (18:30-20:00 h) | Dimarts 17 de novembre (18:30-20:00 h) | Dimarts 22 de desembre (18:30-20:00 h) | Dimarts 16 de febrer (18:30-20:00 h) | Dimarts 16 de març (18:30-20:00 h) | Dimarts 20 d'abril (18:30-20:00 h) | Dimarts 18 de maig (18:30-20:00 h)"
            }
        ]
    },
    {
        "library_id": "34",
        "library_name": "Biblioteca Camp de l'Arpa - Caterina Albert",
        "courses_found": 7,
        "courses": [
            {
                "title": "Sant Martí barri a barri. Fet al Camp de lArpa.",
                "date": "Dissabte 14 de novembre (10:00-13:00 h)"
            },
            {
                "title": "Club de lectura de llengua anglesa",
                "date": "Dimecres 28 d'octubre (18:30-19:30 h) | Dimecres 25 de novembre (18:30-19:30 h) | Dimecres 27 de gener (18:30-19:30 h) | Dimecres 24 de febrer (18:30-19:30 h) | Dimecres 31 de març (18:30-19:30 h) | Dimecres 28 d'abril (18:30-19:30 h) | Dimecres 26 de maig (18:30-19:30 h)"
            },
            {
                "title": "Club de lectura de llengua catalana (nivell bàsic)",
                "date": "Dijous 8 d'octubre (12:00-13:00 h) | Dijous 12 de novembre (12:00-13:00 h) | Dijous 10 de desembre (12:00-13:00 h) | Dijous 14 de gener (12:00-13:00 h) | Dijous 11 de febrer (12:00-13:00 h) | Dijous 11 de març (12:00-13:00 h) | Dijous 8 d'abril (12:00-13:00 h) | Dijous 13 de maig (12:00-13:00 h) | Dijous 10 de juny (12:00-13:00 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dimecres 7 d'octubre (18:30-19:30 h) | Dimecres 4 de novembre (18:30-19:30 h) | Dimecres 2 de desembre (18:30-19:30 h) | Dimecres 3 de febrer (18:30-19:30 h) | Dimecres 3 de març (18:30-19:30 h) | Dimecres 7 d'abril (18:30-19:30 h) | Dimecres 5 de maig (18:30-19:30 h)"
            },
            {
                "title": "Club de lectura de llengua francesa",
                "date": "Dimecres 21 d'octubre (18:30-19:30 h) | Dimecres 18 de novembre (18:30-19:30 h) | Dimecres 16 de desembre (18:30-19:30 h) | Dimecres 17 de febrer (18:30-19:30 h) | Dimecres 17 de març (18:30-19:30 h) | Dimecres 21 d'abril (18:30-19:30 h) | Dimecres 19 de maig (18:30-19:30 h)"
            },
            {
                "title": "Club de lectura de Còmic infantil (9-12 anys)",
                "date": "Dilluns 19 d'octubre (17:30-18:30 h) | Dilluns 16 de novembre (17:30-18:30 h) | Dilluns 18 de gener (17:30-18:30 h) | Dilluns 15 de febrer (17:30-18:30 h) | Dilluns 15 de març (17:30-18:30 h) | Dilluns 19 d'abril (17:30-18:30 h) | Dilluns 17 de maig (17:30-18:30 h)"
            },
            {
                "title": "FM Taller de ninots de feltre (+ 6 anys)",
                "date": "Dimecres 8 de juliol (17:30-19:00 h)"
            }
        ]
    },
    {
        "library_id": "16",
        "library_name": "Biblioteca Canyelles - M. Àngels Rivas",
        "courses_found": 2,
        "courses": [
            {
                "title": "Club de lectura general",
                "date": "Dimecres 21 d'octubre (18:30-20:00 h) | Dimecres 18 de novembre (18:30-20:00 h) | Dimecres 20 de gener (18:30-20:00 h) | Dimecres 17 de febrer (18:30-20:00 h) | Dimecres 17 de març (18:30-20:00 h) | Dimecres 21 d'abril (18:30-20:00 h) | Dimecres 19 de maig (18:30-20:00 h)"
            },
            {
                "title": "Un estiu de postal. Collage postal. (3 a 6 anys)",
                "date": "Dimarts 28 de juliol (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "38",
        "library_name": "Biblioteca Clarà",
        "courses_found": 3,
        "courses": [
            {
                "title": "Club de lectura general",
                "date": "Dimarts 20 d'octubre (18:30-19:30 h) | Dimarts 17 de novembre (18:30-19:30 h) | Dimarts 19 de gener (18:30-19:30 h) | Dimarts 16 de febrer (18:30-19:30 h) | Dimarts 16 de març (18:30-19:30 h) | Dimarts 20 d'abril (18:30-19:30 h) | Dimarts 18 de maig (18:30-19:30 h)"
            },
            {
                "title": "Club de lectura de llengua anglesa",
                "date": "Dimarts 13 d'octubre (18:30-19:30 h) | Dimarts 17 de novembre (17:00-18:00 h) | Dimarts 15 de desembre (18:30-19:30 h) | Dimarts 9 de febrer (18:30-19:30 h) | Dimarts 9 de març (18:30-19:30 h) | Dimarts 13 d'abril (18:30-19:30 h) | Dimarts 11 de maig (18:30-19:30 h)"
            },
            {
                "title": "Un estiu de postal. El camí del viatge. (8 a 10 anys)",
                "date": "Divendres 24 de juliol (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "40",
        "library_name": "Biblioteca Collserola - Josep Miracle",
        "courses_found": 2,
        "courses": [
            {
                "title": "Itinerari: Casino de la Rabassada.",
                "date": "Dissabte 19 de setembre (10:00-13:30 h)"
            },
            {
                "title": "Club de lectura Biblionatura. Literatura de natura",
                "date": "Dissabte 10 d'octubre (11:00-13:00 h) | Dissabte 14 de novembre (11:00-13:00 h) | Dissabte 9 de gener (11:00-13:00 h) | Dissabte 13 de febrer (11:00-13:00 h) | Dissabte 13 de març (11:00-13:00 h) | Dissabte 10 d'abril (11:00-13:00 h) | Dissabte 8 de maig (11:00-13:00 h)"
            }
        ]
    },
    {
        "library_id": "13",
        "library_name": "Biblioteca El Carmel-Juan Marsé",
        "courses_found": 6,
        "courses": [
            {
                "title": "Club de lectura de còmic",
                "date": "Dijous 18 de setembre (18:00-19:30 h) | Dijous 16 d'octubre (18:00-19:30 h) | Dijous 20 de novembre (18:00-19:30 h) | Dijous 18 de desembre (18:00-19:30 h) | Dijous 15 de gener (18:00-19:30 h) | Dijous 19 de febrer (18:00-19:30 h) | Dijous 19 de març (18:00-19:30 h) | Dijous 16 d'abril (18:00-19:30 h) | Dijous 21 de maig (18:00-19:30 h) | Dijous 18 de juny (18:00-19:30 h) | Dijous 16 de juliol (18:00-19:30 h)"
            },
            {
                "title": "EstàsON. Fabriquem un test de reg automàtic per plantes (6-8 anys)",
                "date": "Dimarts 30 de juny (17:30-19:30 h)"
            },
            {
                "title": "Club de lectura de novel·la barcelonina",
                "date": "Dimarts 13 d'octubre (18:30-20:00 h) | Dimarts 10 de novembre (18:30-20:00 h) | Dimarts 12 de gener (18:30-20:00 h) | Dimarts 9 de febrer (18:30-20:00 h) | Dimarts 9 de març (18:30-20:00 h) | Dimarts 13 d'abril (18:30-20:00 h) | Dimarts 11 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura alternatiu",
                "date": "Dimarts 27 d'octubre (18:30-20:00 h) | Dimarts 24 de novembre (18:30-20:00 h) | Dimarts 22 de desembre (18:30-20:00 h) | Dimarts 26 de gener (18:30-20:00 h) | Dimarts 23 de febrer (18:30-20:00 h) | Dimarts 30 de març (18:30-20:00 h) | Dimarts 27 d'abril (18:30-20:00 h) | Dimarts 25 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura novel·la negra barcelonina.",
                "date": "Dijous 22 d'octubre (18:30-20:00 h) | Dijous 26 de novembre (18:30-20:00 h) | Dijous 17 de desembre (18:30-20:00 h) | Dijous 28 de gener (18:30-20:00 h) | Dijous 25 de febrer (18:30-20:00 h) | Dijous 25 de març (18:30-20:00 h) | Dijous 22 d'abril (18:30-20:00 h) | Dijous 27 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura de còmic",
                "date": "Dijous 17 de setembre (18:00-19:00 h) | Dijous 15 d'octubre (18:00-19:00 h) | Dijous 19 de novembre (18:00-19:00 h) | Dimecres 16 de desembre (18:00-19:00 h) | Dijous 21 de gener (18:00-19:00 h) | Dijous 18 de febrer (18:00-19:00 h) | Dijous 18 de març (18:00-19:00 h) | Dijous 15 d'abril (18:00-19:00 h) | Dijous 20 de maig (18:00-19:00 h) | Dijous 17 de juny (18:00-19:00 h) | Dijous 15 de juliol (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "35",
        "library_name": "Biblioteca El Clot - Josep Benet",
        "courses_found": 7,
        "courses": [
            {
                "title": "Club de lectura puntual. El dol i la superació de la pèrdua.",
                "date": "Dijous 1 d'octubre (18:30-20:00 h) | Dijous 5 de novembre (18:30-20:00 h) | Dijous 3 de desembre (18:30-20:00 h)"
            },
            {
                "title": "Sant Martí barri a barri. Fet al Clot",
                "date": "Dissabte 21 de novembre (10:00-13:00 h)"
            },
            {
                "title": "Club de lectura llegir el teatre",
                "date": "Dimarts 27 d'octubre (18:30-20:00 h) | Dimarts 24 de novembre (18:30-20:00 h) | Dimarts 26 de gener (18:30-20:00 h) | Dimarts 23 de febrer (18:30-20:00 h) | Dimarts 27 d'abril (18:30-20:00 h) | Dimarts 25 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dimecres 21 d'octubre (18:30-20:00 h) | Dimecres 18 de novembre (18:30-20:00 h) | Dimecres 20 de gener (18:30-20:00 h) | Dimecres 17 de febrer (18:30-20:00 h) | Dimecres 17 de març (18:30-20:00 h) | Dimecres 21 d'abril (18:30-20:00 h) | Dimecres 19 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura Llegim el Museu",
                "date": "Dimecres 28 d'octubre (18:30-20:00 h) | Dimecres 25 de novembre (18:30-20:00 h) | Dimecres 27 de gener (18:30-20:00 h) | Dimecres 24 de febrer (18:30-20:00 h) | Dimecres 31 de març (18:30-20:00 h) | Dimecres 28 d'abril (18:30-20:00 h) | Dimecres 26 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura juvenil",
                "date": "Dijous 22 d'octubre (18:00-19:00 h) | Dijous 19 de novembre (18:00-19:00 h) | Dijous 21 de gener (18:00-19:00 h) | Dijous 18 de febrer (18:00-19:00 h) | Dijous 18 de març (18:00-19:00 h) | Dijous 15 d'abril (18:00-19:00 h) | Dijous 20 de maig (18:00-19:00 h)"
            },
            {
                "title": "Un estiu de postal. Les postals exquisides. Taller d'escriptura automàtica. (6 a 8 anys)",
                "date": "Dimecres 22 de juliol (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "30",
        "library_name": "Biblioteca Esquerra de l'Eixample-Agustí Centelles",
        "courses_found": 5,
        "courses": [
            {
                "title": "Club de lectura general",
                "date": "Dilluns 19 d'octubre (11:00-12:30 h) | Dilluns 9 de novembre (11:00-12:30 h) | Dilluns 14 de desembre (11:00-12:30 h) | Dilluns 8 de febrer (11:00-12:30 h) | Dilluns 8 de març (11:00-12:30 h) | Dilluns 12 d'abril (11:00-12:30 h) | Dilluns 10 de maig (11:00-12:30 h)"
            },
            {
                "title": "Club de lectura de fotollibres",
                "date": "Dimarts 13 d'octubre (18:30-20:00 h) | Dimarts 10 de novembre (18:30-20:00 h) | Dimarts 12 de gener (18:30-20:00 h) | Dimarts 9 de febrer (18:30-20:00 h) | Dimarts 9 de març (18:30-20:00 h) | Dimarts 13 d'abril (18:30-20:00 h) | Dimarts 11 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura Literatura i Salut Mental",
                "date": "Dijous 15 d'octubre (18:30-20:00 h) | Dijous 19 de novembre (18:30-20:00 h) | Dijous 21 de gener (18:30-20:00 h) | Dijous 18 de febrer (18:30-20:00 h) | Dijous 18 de març (18:30-20:00 h) | Dijous 15 d'abril (18:30-20:00 h) | Dijous 20 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura sobre literatura basca",
                "date": "Dimarts 27 d'octubre (18:30-20:00 h) | Dimarts 24 de novembre (18:30-20:00 h) | Dimarts 26 de gener (18:30-20:00 h) | Dimarts 23 de febrer (18:30-20:00 h) | Dimarts 30 de març (18:30-20:00 h) | Dimarts 27 d'abril (18:30-20:00 h) | Dimarts 25 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura sobre literatura basca (Euskal Etxea)",
                "date": "Dimarts 20 d'octubre (18:00-19:30 h) | Dimarts 17 de novembre (18:00-19:30 h) | Dimarts 19 de gener (18:00-19:30 h) | Dimarts 16 de febrer (18:00-19:30 h) | Dimarts 16 de març (18:00-19:30 h) | Dimarts 20 d'abril (18:00-19:30 h) | Dimarts 18 de maig (18:00-19:30 h)"
            }
        ]
    },
    {
        "library_id": "4",
        "library_name": "Biblioteca Fort Pienc  Ana María Moix",
        "courses_found": 5,
        "courses": [
            {
                "title": "Club de lectura puntual. Literatura i arquitectura",
                "date": "Dilluns 5 d'octubre (18:30-20:00 h) | Dilluns 2 de novembre (18:30-20:00 h) | Dilluns 30 de novembre (18:30-20:00 h) | Dilluns 11 de gener (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura Literatura Asiàtica",
                "date": "Dilluns 19 d'octubre (18:30-19:30 h) | Dilluns 9 de novembre (18:30-19:30 h) | Dilluns 14 de desembre (18:30-19:30 h) | Dilluns 11 de gener (18:30-19:30 h) | Dilluns 8 de febrer (18:30-19:30 h) | Dilluns 1 de març (18:30-19:30 h) | Dilluns 12 d'abril (18:30-19:30 h) | Dilluns 10 de maig (18:30-19:30 h) | Dilluns 14 de juny (18:30-19:30 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dilluns 26 d'octubre (18:30-19:30 h) | Dilluns 23 de novembre (18:30-19:30 h) | Dilluns 25 de gener (18:30-19:30 h) | Dilluns 22 de febrer (18:30-19:30 h) | Dilluns 15 de març (18:30-19:30 h) | Dilluns 26 d'abril (18:30-19:30 h) | Dilluns 24 de maig (18:30-19:30 h)"
            },
            {
                "title": "Club de lectura de llengua catalana (nivell bàsic)",
                "date": "Divendres 16 d'octubre (10:30-11:30 h) | Divendres 20 de novembre (10:30-11:30 h) | Divendres 18 de desembre (10:30-11:30 h) | Divendres 15 de gener (10:30-11:30 h) | Divendres 19 de febrer (10:30-11:30 h) | Divendres 19 de març (10:30-11:30 h) | Divendres 16 d'abril (10:30-11:30 h) | Divendres 21 de maig (10:30-11:30 h) | Divendres 18 de juny (10:30-11:30 h)"
            },
            {
                "title": "Un estiu de postal. Les postals exquisides. Taller d'escriptura automàtica. (6 a 8 anys)",
                "date": "Dimarts 21 de juliol (11:30-12:30 h)"
            }
        ]
    },
    {
        "library_id": "7",
        "library_name": "Biblioteca Francesc Candel",
        "courses_found": 2,
        "courses": [
            {
                "title": "Club de lectura general",
                "date": "Dilluns 19 d'octubre (18:30-20:00 h) | Dilluns 9 de novembre (18:30-20:00 h) | Dilluns 14 de desembre (18:30-20:00 h) | Dilluns 8 de febrer (18:30-20:00 h) | Dilluns 15 de març (18:30-20:00 h) | Dilluns 12 d'abril (18:30-20:00 h) | Dilluns 10 de maig (18:30-20:00 h)"
            },
            {
                "title": "Un estiu de postal. Servei postal....Joc i mediació literària. (3 a 6 anys).",
                "date": "Dimarts 21 de juliol (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "2",
        "library_name": "Biblioteca Francesca Bonnemaison",
        "courses_found": 5,
        "courses": [
            {
                "title": "Club de lectura Assaig feminista 2026-2027",
                "date": "Dilluns 19 d'octubre (18:00-19:30 h) | Dilluns 16 de novembre (18:00-19:30 h) | Dilluns 18 de gener (18:00-19:30 h) | Dilluns 15 de febrer (18:00-19:30 h) | Dilluns 15 de març (18:00-19:30 h) | Dilluns 19 d'abril (18:00-19:30 h) | Dilluns 17 de maig (18:00-19:30 h)"
            },
            {
                "title": "Club de lectura puntual. Terror en femení.",
                "date": "Dijous 1 d'octubre (18:30-20:00 h) | Dijous 5 de novembre (18:30-20:00 h) | Dijous 3 de desembre (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura: Una lectura pròpia",
                "date": "Dilluns 5 d'octubre (18:00-19:30 h) | Dilluns 9 de novembre (18:00-19:30 h) | Dilluns 11 de gener (18:00-19:30 h) | Dilluns 8 de febrer (18:00-19:30 h) | Dilluns 8 de març (18:00-19:30 h) | Dilluns 12 d'abril (18:00-19:30 h) | Dilluns 10 de maig (18:00-19:30 h)"
            },
            {
                "title": "Un estiu de postal. Postals animades. (6 a 8 anys)",
                "date": "Dimecres 26 d'agost (11:30-12:30 h)"
            },
            {
                "title": "Un estiu de postal. Postals brodades (8 a 10 anys)",
                "date": "Divendres 28 d'agost (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "46",
        "library_name": "Biblioteca Gabriel García Márquez",
        "courses_found": 7,
        "courses": [
            {
                "title": "Club de lectura Internacional Barcelona-Medellín",
                "date": "Dissabte 11 d'abril (18:00-19:30 h) | Dissabte 9 de maig (18:00-19:30 h) | Dissabte 13 de juny (18:00-19:30 h) | Dissabte 11 de juliol (18:00-19:30 h) | Dissabte 19 de setembre (18:00-19:30 h) | Dissabte 17 d'octubre (18:00-19:30 h) | Dissabte 14 de novembre (18:00-19:30 h)"
            },
            {
                "title": "Sant Martí, barri a barri. La Verneda de Sant Martí: dels horts als blocs",
                "date": "Dissabte 3 d'octubre (11:00-13:00 h)"
            },
            {
                "title": "Club de lectura de literatura llatinoamericana del segle XXI",
                "date": "Dijous 8 d'octubre (18:30-20:00 h) | Dijous 12 de novembre (18:30-20:00 h) | Dijous 10 de desembre (18:30-20:00 h) | Dijous 11 de febrer (18:30-20:00 h) | Dijous 11 de març (18:30-20:00 h) | Dijous 8 d'abril (18:30-20:00 h) | Dijous 13 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura de llengua anglesa",
                "date": "Dijous 15 d'octubre (18:30-20:00 h) | Dijous 19 de novembre (18:30-20:00 h) | Dijous 21 de gener (18:30-20:00 h) | Dijous 18 de febrer (18:30-20:00 h) | Dijous 18 de març (18:30-20:00 h) | Dijous 15 d'abril (18:30-20:00 h) | Dijous 20 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dijous 22 d'octubre (18:30-20:00 h) | Dijous 26 de novembre (18:30-20:00 h) | Dijous 28 de gener (18:30-20:00 h) | Dijous 25 de febrer (18:30-20:00 h) | Dijous 18 de març (18:30-20:00 h) | Dijous 22 d'abril (18:30-20:00 h) | Dijous 27 de maig (18:30-20:00 h)"
            },
            {
                "title": "El Vaivenito: construcció duna cançó",
                "date": "Dilluns 13 de juliol (17:00-18:30 h) | Dimarts 14 de juliol (17:00-18:30 h) | Dimecres 15 de juliol (17:00-18:30 h)"
            },
            {
                "title": "Un estiu de postal. Collage postal. (3 a 6 anys)",
                "date": "Dimarts 1 de setembre (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "28",
        "library_name": "Biblioteca Gòtic - Andreu Nin",
        "courses_found": 1,
        "courses": [
            {
                "title": "Club de lectura puntual. GREC 2026: \"El retrat de Dorian Gray\", d'Oscar Wilde.",
                "date": "Dijous 9 de juliol (18:30-20:00 h) | Dijous 16 de juliol (18:30-20:00 h)"
            }
        ]
    },
    {
        "library_id": "14",
        "library_name": "Biblioteca Guinardó-Mercè Rodoreda",
        "courses_found": 4,
        "courses": [
            {
                "title": "Un estiu de postal. Això podria ser... (3-6 anys)",
                "date": "Dilluns 10 d'agost (18:00-19:00 h)"
            },
            {
                "title": "Club de lectura de poesia",
                "date": "Dimarts 13 d'octubre (18:30-20:00 h) | Dimarts 10 de novembre (18:30-20:00 h) | Dimarts 12 de gener (18:30-20:00 h) | Dimarts 9 de febrer (18:30-20:00 h) | Dimarts 9 de març (18:30-20:00 h) | Dimarts 13 d'abril (18:30-20:00 h) | Dimarts 11 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dijous 15 d'octubre (18:30-20:00 h) | Dijous 19 de novembre (18:30-20:00 h) | Dijous 21 de gener (18:30-20:00 h) | Dijous 18 de febrer (18:30-20:00 h) | Dijous 18 de març (18:30-20:00 h) | Dijous 15 d'abril (18:30-20:00 h) | Dijous 20 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura de llengua catalana (nivell bàsic)",
                "date": "Divendres 9 d'octubre (10:00-11:30 h) | Divendres 13 de novembre (10:00-11:30 h) | Divendres 11 de desembre (10:00-11:30 h) | Divendres 8 de gener (10:00-11:30 h) | Divendres 12 de febrer (10:00-11:30 h) | Divendres 12 de març (10:00-11:30 h) | Divendres 9 d'abril (10:00-11:30 h) | Divendres 14 de maig (10:00-11:30 h) | Divendres 11 de juny (10:00-11:30 h)"
            }
        ]
    },
    {
        "library_id": "15",
        "library_name": "Biblioteca Horta-Can Mariner",
        "courses_found": 3,
        "courses": [
            {
                "title": "Club de lectura llegir el teatre",
                "date": "Dimecres 28 d'octubre (18:30-20:00 h) | Dimecres 25 de novembre (18:30-20:00 h) | Dimecres 27 de gener (18:30-20:00 h) | Dimecres 24 de febrer (18:30-20:00 h) | Dimecres 28 d'abril (18:30-20:00 h) | Dimecres 26 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dijous 15 d'octubre (12:00-13:30 h) | Dijous 19 de novembre (12:00-13:30 h) | Dijous 17 de desembre (12:00-13:30 h) | Dijous 18 de febrer (12:00-13:30 h) | Dijous 18 de març (12:00-13:30 h) | Dijous 22 d'abril (12:00-13:30 h) | Dijous 20 de maig (12:00-13:30 h)"
            },
            {
                "title": "Un estiu de postal. Les postals exquisides. Taller d'escriptura automàtica. (6 a 8 anys)",
                "date": "Dijous 23 de juliol (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "20",
        "library_name": "Biblioteca Ignasi Iglésias-Can Fabra",
        "courses_found": 13,
        "courses": [
            {
                "title": "Tallers Premis Junceda 2025. El nas d'en Mic, de l'obra de teatre Mac, Mec, Mic. (3 a 5 anys).",
                "date": "Dijous 2 de juliol (11:30-12:00 h)"
            },
            {
                "title": "Tallers Premis Junceda 2025. Retrat emmirallat. (6 a 10 anys)",
                "date": "Dijous 9 de juliol (18:00-19:00 h)"
            },
            {
                "title": "Tallers Premis Junceda 2025. Uns convidats inesperats. Dibuixem plantes i animals. (6 a 10 anys)",
                "date": "Dimarts 14 de juliol (18:00-19:30 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dimecres 28 d'octubre (18:30-20:00 h) | Dimecres 18 de novembre (18:30-20:00 h) | Dimecres 23 de desembre (18:30-20:00 h) | Dimecres 27 de gener (18:30-20:00 h) | Dimecres 24 de febrer (18:30-20:00 h) | Dimecres 24 de març (18:30-20:00 h) | Dimecres 28 d'abril (18:30-20:00 h) | Dimecres 26 de maig (18:30-20:00 h)"
            },
            {
                "title": "Lhort destiu en test: tomàquets, pebrots i alfàbrega",
                "date": "Dimecres 8 de juliol (18:30-20:00 h)"
            },
            {
                "title": "Taller Premis Junceda. Taller d'il·lustració: Plantes botàniques. (6 a 12 anys)",
                "date": "Dimarts 21 de juliol (18:00-19:30 h)"
            },
            {
                "title": "Club de lectura Llegir en comunitat",
                "date": "Dilluns 19 d'octubre (18:30-20:00 h) | Dilluns 16 de novembre (18:30-20:00 h) | Dilluns 18 de gener (18:30-20:00 h) | Dilluns 15 de febrer (18:30-20:00 h) | Dilluns 15 de març (18:30-20:00 h) | Dilluns 19 d'abril (18:30-20:00 h) | Dilluns 17 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura de còmic",
                "date": "Dimecres 21 d'octubre (18:30-20:30 h) | Dimecres 25 de novembre (18:30-20:30 h) | Dimecres 16 de desembre (18:30-20:30 h) | Dimecres 20 de gener (18:30-20:30 h) | Dimecres 17 de febrer (18:30-20:30 h) | Dimecres 21 d'abril (18:30-20:30 h) | Dimecres 19 de maig (18:30-20:30 h)"
            },
            {
                "title": "Club de lectura d'anime i manga juvenil",
                "date": "Divendres 16 d'octubre (18:00-19:30 h) | Divendres 13 de novembre (18:00-19:30 h) | Divendres 15 de gener (18:00-19:30 h) | Divendres 12 de febrer (18:00-19:30 h) | Divendres 12 de març (18:00-19:30 h) | Divendres 9 d'abril (18:00-19:30 h) | Divendres 14 de maig (18:00-19:30 h)"
            },
            {
                "title": "Club de lectura de llengua francesa",
                "date": "Dijous 1 d'octubre (12:00-13:00 h) | Dijous 5 de novembre (12:00-13:00 h) | Dijous 3 de desembre (12:00-13:00 h) | Dijous 4 de febrer (12:00-13:00 h) | Dijous 4 de març (12:00-13:00 h) | Dijous 1 d'abril (12:00-13:00 h) | Dijous 6 de maig (12:00-13:00 h)"
            },
            {
                "title": "Un estiu de postal. Això podria ser... (3-6 anys)",
                "date": "Dijous 13 d'agost (18:00-19:00 h)"
            },
            {
                "title": "Atrapallibres. Club de lectura infantil",
                "date": "Dimarts 13 d'octubre (17:30-18:30 h) | Dimarts 17 de novembre (17:30-18:30 h) | Dimarts 19 de gener (17:30-18:30 h) | Dimarts 16 de febrer (17:30-18:30 h) | Dimarts 16 de març (17:30-18:30 h) | Dimarts 13 d'abril (17:30-18:30 h)"
            },
            {
                "title": "Club de lectura protagonista jove.",
                "date": "Dimarts 13 d'octubre (18:30-19:30 h) | Dimarts 17 de novembre (18:30-19:30 h) | Dimarts 19 de gener (18:30-19:30 h) | Dimarts 16 de febrer (18:30-19:30 h) | Dimarts 13 d'abril (18:30-19:30 h)"
            }
        ]
    },
    {
        "library_id": "11",
        "library_name": "Biblioteca Jaume Fuster",
        "courses_found": 7,
        "courses": [
            {
                "title": "Club de lectura infantil. Còmic debat",
                "date": "Dimecres 4 de febrer (17:30-18:30 h) | Dimecres 4 de març (17:30-18:30 h) | Dimecres 8 d'abril (17:30-18:30 h) | Dimecres 7 d'octubre (17:30-18:30 h) | Dimecres 4 de novembre (17:30-18:30 h) | Dimecres 2 de desembre (17:30-18:30 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dimecres 14 d'octubre (18:30-19:30 h) | Dimecres 11 de novembre (18:30-19:30 h) | Dimecres 9 de desembre (18:30-19:30 h) | Dimecres 10 de febrer (18:30-19:30 h) | Dimecres 3 de març (18:30-19:30 h) | Dimecres 14 d'abril (18:30-19:30 h) | Dimecres 12 de maig (18:30-19:30 h)"
            },
            {
                "title": "Club de lectura de literatura fantàstica i ciència-ficció",
                "date": "Dimecres 28 d'octubre (18:30-19:30 h) | Dimecres 18 de novembre (18:30-19:30 h) | Dimecres 16 de desembre (18:30-19:30 h) | Dimecres 27 de gener (18:30-19:30 h) | Dimecres 24 de febrer (18:30-19:30 h) | Dimecres 21 d'abril (18:30-19:30 h) | Dimecres 19 de maig (18:30-19:30 h)"
            },
            {
                "title": "Club de lectura puntual. Europa en construcció: veus per entendre el present.",
                "date": "Dimecres 10 de març (18:30-19:30 h) | Dimecres 7 d'abril (18:30-19:30 h) | Dimecres 5 de maig (18:30-19:30 h)"
            },
            {
                "title": "Club de lectura de literatura italiana",
                "date": "Dimecres 21 d'octubre (18:30-20:00 h) | Dimecres 25 de novembre (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura puntual. Lectures de Japó i Corea",
                "date": "Dijous 8 d'abril (18:30-20:00 h) | Dijous 6 de maig (18:30-20:00 h) | Dijous 3 de juny (18:30-20:00 h)"
            },
            {
                "title": "Un estiu de postal. Això podria ser... (3-6 anys)",
                "date": "Dimecres 5 d'agost (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "42",
        "library_name": "Biblioteca Joan Miró",
        "courses_found": 5,
        "courses": [
            {
                "title": "Club de lectura puntual. GREC 2026: \"Lòpera de tres rals\", de Bertolt Brecht.",
                "date": "Diumenge 28 de juny (18:30-20:00 h) | Dimecres 8 de juliol (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura puntual. T'atreveixes amb Proust? (3a part)",
                "date": "Dijous 15 d'octubre (18:30-20:00 h) | Dijous 12 de novembre (18:30-20:00 h) | Dijous 10 de desembre (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura de llengua francesa",
                "date": "Dilluns 12 d'octubre (18:30-20:00 h) | Dilluns 9 de novembre (18:30-20:00 h) | Dilluns 11 de gener (18:30-20:00 h) | Dilluns 8 de febrer (18:30-20:00 h) | Dilluns 8 de març (18:30-20:00 h) | Dilluns 12 d'abril (18:30-20:00 h) | Dilluns 10 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dimecres 21 d'octubre (18:30-20:00 h) | Dimecres 18 de novembre (18:30-20:00 h) | Dimecres 16 de desembre (18:30-20:00 h) | Dimecres 20 de gener (18:30-20:00 h) | Dimecres 17 de febrer (18:30-20:00 h) | Dimecres 17 de març (18:30-20:00 h) | Dimecres 21 d'abril (18:30-20:00 h) | Dimecres 19 de maig (18:30-20:00 h)"
            },
            {
                "title": "Un estiu de postal. El camí del viatge. (8 a 10 anys)",
                "date": "Dijous 30 de juliol (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "25",
        "library_name": "Biblioteca La Sagrera-Marina Clotet",
        "courses_found": 2,
        "courses": [
            {
                "title": "Club de lectura general",
                "date": "Dimecres 21 d'octubre (18:00-19:30 h) | Dimecres 18 de novembre (18:00-19:30 h) | Dimecres 16 de desembre (18:00-19:30 h) | Dimecres 17 de febrer (18:00-19:30 h) | Dimecres 17 de març (18:00-19:30 h) | Dimecres 21 d'abril (18:00-19:30 h) | Dimecres 19 de maig (18:00-19:30 h)"
            },
            {
                "title": "Un estiu de postal. El camí del viatge. (8 a 10 anys)",
                "date": "Divendres 31 de juliol (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "10",
        "library_name": "Biblioteca Les Corts-Miquel Llongueras",
        "courses_found": 4,
        "courses": [
            {
                "title": "Club de lectura puntual. Descobrim els secrets del monestir de Pedralbes.",
                "date": "Dimarts 6 d'octubre (18:00-20:00 h)"
            },
            {
                "title": "Cicle de Conèixer Les Corts. Itinerari per a adults. Entorns de la Maternitat: rieres, masies salut i modernisme",
                "date": "Dissabte 10 d'octubre (11:00-12:30 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dilluns 5 d'octubre (18:30-20:00 h) | Dilluns 2 de novembre (18:30-20:00 h) | Dilluns 14 de desembre (18:30-20:00 h) | Dilluns 1 de febrer (18:30-20:00 h) | Dilluns 1 de març (18:30-20:00 h) | Dilluns 5 d'abril (18:30-20:00 h) | Dilluns 3 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura de literatura de viatges",
                "date": "Dijous 19 de novembre (18:30-20:00 h) | Dijous 17 de desembre (18:30-20:00 h) | Dijous 21 de gener (18:30-20:00 h) | Dijous 18 de febrer (18:30-20:00 h) | Dijous 18 de març (18:30-20:00 h) | Dijous 15 d'abril (18:30-20:00 h) | Dijous 20 de maig (18:30-20:00 h)"
            }
        ]
    },
    {
        "library_id": "17",
        "library_name": "Biblioteca Les Roquetes  Rafa Juncadella",
        "courses_found": 3,
        "courses": [
            {
                "title": "Club de lectura general",
                "date": "Dijous 1 d'octubre (18:30-20:00 h) | Dijous 5 de novembre (18:30-20:00 h) | Dijous 3 de desembre (18:30-20:00 h) | Dijous 4 de febrer (18:30-20:00 h) | Dijous 4 de març (18:30-20:00 h) | Dijous 1 d'abril (18:30-20:00 h) | Dijous 6 de maig (18:30-20:00 h)"
            },
            {
                "title": "Un estiu de postal. Postals de la Barcelona del futur. (8 a 12 anys)",
                "date": "Dimecres 12 d'agost (18:00-19:00 h)"
            },
            {
                "title": "Un estiu de postal. Postals animades. (6 a 8 anys)",
                "date": "Dimecres 2 de setembre (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "37",
        "library_name": "Biblioteca Montbau-Albert Pérez Baró",
        "courses_found": 4,
        "courses": [
            {
                "title": "Club de lectura puntual. 25 anys de Booket",
                "date": "Dijous 15 d'octubre (18:30-20:00 h) | Dijous 19 de novembre (18:30-20:00 h) | Dijous 17 de desembre (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura de novel·la negra",
                "date": "Dimarts 20 d'octubre (18:30-20:00 h) | Dimarts 17 de novembre (18:30-20:00 h) | Dimarts 15 de desembre (18:30-20:00 h) | Dimarts 19 de gener (18:30-20:00 h) | Dimarts 16 de febrer (18:30-20:00 h) | Dimarts 16 de març (18:30-20:00 h) | Dimarts 18 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dimecres 14 d'octubre (18:30-20:00 h) | Dimecres 11 de novembre (18:30-20:00 h) | Dimecres 13 de gener (18:30-20:00 h) | Dimecres 10 de febrer (18:30-20:00 h) | Dimecres 10 de març (18:30-20:00 h) | Dimecres 14 d'abril (18:30-20:00 h) | Dimecres 12 de maig (18:30-20:00 h)"
            },
            {
                "title": "Un estiu de postal. Postals d'Ulisses. (8 a 12 anys)",
                "date": "Dimecres 22 de juliol (11:30-12:30 h)"
            }
        ]
    },
    {
        "library_id": "43",
        "library_name": "Biblioteca Montserrat Abelló",
        "courses_found": 7,
        "courses": [
            {
                "title": "Club Maker",
                "date": "Dimecres 24 de setembre (17:30-19:30 h) | Dimecres 1 d'octubre (17:30-19:30 h) | Dimecres 8 d'octubre (17:30-19:30 h) | Dimecres 15 d'octubre (17:30-19:30 h) | Dimecres 22 d'octubre (15:30-16:30 h) | Dimecres 29 d'octubre (17:30-19:30 h) | Dimecres 5 de novembre (17:30-19:30 h) | Dimecres 12 de novembre (17:30-19:30 h) | Dimecres 19 de novembre (17:30-19:30 h) | Dimecres 26 de novembre (15:30-16:30 h) | Dimecres 3 de desembre (17:30-19:30 h) | Dimecres 10 de desembre (17:30-19:30 h) | Dimecres 17 de desembre (17:30-19:30 h) | Dimecres 24 de desembre (17:30-19:30 h) | Dimecres 31 de desembre (17:30-19:30 h) | Dimecres 7 de gener (17:30-19:30 h) | Dimecres 14 de gener (17:30-19:30 h) | Dimecres 21 de gener (17:30-19:30 h) | Dimecres 28 de gener (15:30-16:30 h) | Dimecres 4 de febrer (17:30-19:30 h) | Dimecres 11 de febrer (17:30-19:30 h) | Dimecres 18 de febrer (17:30-19:30 h) | Dimecres 25 de febrer (15:30-16:30 h) | Dimecres 4 de març (17:30-19:30 h) | Dimecres 11 de març (17:30-19:30 h) | Dimecres 18 de març (17:30-19:30 h) | Dimecres 25 de març (15:30-16:30 h) | Dimecres 1 d'abril (17:30-19:30 h) | Dimecres 8 d'abril (17:30-19:30 h) | Dimecres 15 d'abril (17:30-19:30 h) | Dimecres 22 d'abril (15:30-16:30 h) | Dimecres 29 d'abril (17:30-19:30 h) | Dimecres 6 de maig (17:30-19:30 h) | Dimecres 13 de maig (17:30-19:30 h) | Dimecres 20 de maig (17:30-19:30 h) | Dimecres 27 de maig (17:30-16:30 h) | Dimecres 3 de juny (17:30-19:30 h) | Dimecres 10 de juny (17:30-19:30 h) | Dimecres 17 de juny (17:30-19:30 h) | Dimecres 24 de juny (17:30-19:30 h) | Dimecres 1 de juliol (17:30-19:30 h) | Dimecres 8 de juliol (17:30-19:30 h) | Dimecres 15 de juliol (17:30-19:30 h) | Dimecres 22 de juliol (17:30-19:30 h) | Dimecres 29 de juliol (17:30-19:30 h)"
            },
            {
                "title": "Club de lectura puntual. Descobrim els secrets del monestir de Pedralbes.",
                "date": "Dimarts 6 d'octubre (18:00-20:00 h)"
            },
            {
                "title": "Cicle de Conèixer Les Corts. Itinerari per a adults. Del món dels Güells al Barraquisme",
                "date": "Dissabte 3 d'octubre (11:00-12:30 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dijous 29 d'octubre (18:30-19:30 h) | Dijous 26 de novembre (18:30-19:30 h) | Dijous 28 de gener (18:30-19:30 h) | Dijous 25 de febrer (18:30-19:30 h) | Dijous 1 d'abril (18:30-19:30 h) | Dijous 29 d'abril (18:30-19:30 h) | Dijous 27 de maig (18:30-19:30 h)"
            },
            {
                "title": "Club de lectura: Una lectura pròpia",
                "date": "Dimecres 28 d'octubre (18:30-20:00 h) | Dimecres 25 de novembre (18:30-20:00 h) | Dimecres 27 de gener (18:30-20:00 h) | Dimecres 24 de febrer (18:30-20:00 h) | Dimecres 24 de març (18:30-20:00 h) | Dimecres 28 d'abril (18:30-20:00 h) | Dimecres 26 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura de ciència-ficció",
                "date": "Dijous 15 d'octubre (18:30-20:00 h) | Dijous 19 de novembre (18:30-20:00 h) | Dijous 17 de desembre (18:30-20:00 h) | Dijous 21 de gener (18:30-20:00 h) | Dijous 18 de febrer (18:30-20:00 h) | Dijous 18 de març (18:30-20:00 h) | Dijous 15 d'abril (18:30-20:00 h) | Dijous 20 de maig (18:30-20:00 h)"
            },
            {
                "title": "Un estiu de postal. Fotografies per enviar. (8 a 12 anys)",
                "date": "Dilluns 27 de juliol (11:30-12:30 h)"
            }
        ]
    },
    {
        "library_id": "18",
        "library_name": "Biblioteca Nou Barris - Aurora Díaz Plaja",
        "courses_found": 10,
        "courses": [
            {
                "title": "Club de lectura de llengua catalana (nivell mig)",
                "date": "Dimarts 13 d'octubre (18:30-19:30 h) | Dimarts 10 de novembre (18:30-19:30 h) | Dimarts 12 de gener (18:30-19:30 h) | Dimarts 9 de febrer (18:30-19:30 h) | Dimarts 9 de març (18:30-19:30 h) | Dimarts 13 d'abril (18:30-19:30 h) | Dimarts 11 de maig (18:30-19:30 h)"
            },
            {
                "title": "Club de lectura manga",
                "date": "Dijous 15 d'octubre (18:30-19:30 h) | Dijous 12 de novembre (18:30-19:30 h) | Dijous 14 de gener (18:30-19:30 h) | Dijous 11 de febrer (18:30-19:30 h) | Dijous 11 de març (18:30-19:30 h) | Dijous 8 d'abril (18:30-19:30 h) | Dijous 13 de maig (18:30-19:30 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dimecres 21 d'octubre (18:30-19:30 h) | Dimecres 18 de novembre (18:30-19:30 h) | Dimecres 20 de gener (18:30-19:30 h) | Dimecres 17 de febrer (18:30-19:30 h) | Dimecres 17 de març (18:30-19:30 h) | Dimecres 21 d'abril (18:30-19:30 h) | Dimecres 19 de maig (18:30-19:30 h)"
            },
            {
                "title": "Club de lectura de novel·la històrica",
                "date": "Dimarts 27 d'octubre (18:30-19:30 h) | Dimarts 24 de novembre (18:30-19:30 h) | Dimarts 26 de gener (18:30-19:30 h) | Dimarts 23 de febrer (18:30-19:30 h) | Dimarts 30 de març (18:30-19:30 h) | Dimarts 27 d'abril (18:30-19:30 h) | Dimarts 25 de maig (18:30-19:30 h)"
            },
            {
                "title": "Club de lectura alternatiu",
                "date": "Dilluns 21 de setembre (19:00-20:00 h) | Dilluns 19 d'octubre (19:00-20:00 h) | Dilluns 16 de novembre (19:00-20:00 h) | Dilluns 21 de desembre (19:00-20:00 h) | Dilluns 18 de gener (19:00-20:00 h) | Dilluns 15 de febrer (19:00-20:00 h) | Dilluns 15 de març (19:00-20:00 h) | Dilluns 19 d'abril (19:00-20:00 h) | Dilluns 24 de maig (19:00-20:00 h) | Dilluns 21 de juny (19:00-20:00 h)"
            },
            {
                "title": "Club de lectura de lletra gran",
                "date": "Dimarts 6 d'octubre (18:30-19:30 h) | Dimarts 17 de novembre (18:30-19:30 h) | Dimarts 19 de gener (18:30-19:30 h) | Dimarts 16 de febrer (18:30-19:30 h) | Dimarts 16 de març (18:30-19:30 h) | Dimarts 20 d'abril (18:30-19:30 h) | Dimarts 18 de maig (18:30-19:30 h)"
            },
            {
                "title": "Un estiu de postal. Postals de la Barcelona del futur. (8 a 12 anys)",
                "date": "Dilluns 17 d'agost (18:00-19:00 h)"
            },
            {
                "title": "Club de lectura de llengua catalana (nivell superior)",
                "date": "Dilluns 5 d'octubre (18:30-19:30 h) | Dilluns 9 de novembre (18:30-19:30 h) | Dilluns 11 de gener (18:30-19:30 h) | Dilluns 8 de febrer (18:30-19:30 h) | Dilluns 8 de març (18:30-19:30 h) | Dilluns 12 d'abril (18:30-19:30 h) | Dilluns 10 de maig (18:30-19:30 h)"
            },
            {
                "title": "Un estiu de postal. Collage postal. (3 a 6 anys)",
                "date": "Dimecres 26 d'agost (18:00-19:00 h)"
            },
            {
                "title": "Lletra petita. Sac de rondalles. La bruixeta poruga (+3 anys)",
                "date": "Dimecres 30 de setembre (17:30-18:30 h)"
            }
        ]
    },
    {
        "library_id": "8",
        "library_name": "Biblioteca Poble-sec Francesc Boix",
        "courses_found": 5,
        "courses": [
            {
                "title": "Acampa a la Biblioteca!  Rovelló, relat d'un retorn. (9-12 anys)",
                "date": "Dilluns 13 de juliol (9:30-13:30 h) | Dimarts 14 de juliol (9:30-13:30 h) | Dimecres 15 de juliol (9:30-13:30 h) | Dijous 16 de juliol (9:30-13:30 h) | Divendres 17 de juliol (9:30-13:30 h)"
            },
            {
                "title": "Club de lectura puntual. Veus del Mediterrani, de la costa catalana a Grècia",
                "date": "Dijous 15 d'octubre (18:30-20:00 h) | Dijous 19 de novembre (18:30-20:00 h) | Dijous 21 de gener (18:30-20:00 h) | Dijous 25 de febrer (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dilluns 26 d'octubre (18:30-20:00 h) | Dilluns 23 de novembre (18:30-20:00 h) | Dilluns 25 de gener (18:30-20:00 h) | Dilluns 22 de febrer (18:30-20:00 h) | Dilluns 15 de març (18:30-20:00 h) | Dilluns 26 d'abril (18:30-20:00 h) | Dilluns 24 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura feminista: Atrapades en si mateixes",
                "date": "Dimecres 21 d'octubre (18:30-20:00 h) | Dimecres 18 de novembre (18:30-20:00 h) | Dimecres 16 de desembre (18:30-20:00 h)"
            },
            {
                "title": "Un estiu de postal. Fotografies per enviar. (8 a 12 anys)",
                "date": "Dijous 23 de juliol (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "24",
        "library_name": "Biblioteca Poblenou-Manuel Arranz",
        "courses_found": 8,
        "courses": [
            {
                "title": "Club de lectura de llengua catalana (nivell bàsic)",
                "date": "Dimecres 16 de setembre (18:30-20:00 h) | Dimecres 21 d'octubre (18:30-20:00 h) | Dimecres 18 de novembre (18:30-20:00 h) | Dimecres 20 de gener (18:30-20:00 h) | Dimecres 17 de febrer (18:30-20:00 h) | Dimecres 17 de març (18:30-20:00 h) | Dimecres 21 d'abril (18:30-20:00 h) | Dimecres 19 de maig (18:30-20:00 h) | Dimecres 16 de juny (18:30-20:00 h)"
            },
            {
                "title": "EstàsON. Fabriquem un test de reg automàtic per plantes (6-8 anys)",
                "date": "Dimarts 30 de juny (17:30-19:30 h)"
            },
            {
                "title": "Sant Martí, barri a barri. El Poblenou: el Manchester català",
                "date": "Dissabte 17 d'octubre (10:00-13:00 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dimecres 14 d'octubre (18:30-20:00 h) | Dimecres 11 de novembre (18:30-20:00 h) | Dimecres 13 de gener (18:30-20:00 h) | Dimecres 10 de febrer (18:30-20:00 h) | Dimecres 10 de març (18:30-20:00 h) | Dimecres 14 d'abril (18:30-20:00 h) | Dimecres 12 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura de llengua anglesa",
                "date": "Dilluns 12 d'octubre (18:30-20:00 h) | Dilluns 9 de novembre (18:30-20:00 h) | Dilluns 11 de gener (18:30-20:00 h) | Dilluns 8 de febrer (18:30-20:00 h) | Dilluns 8 de març (18:30-20:00 h) | Dilluns 12 d'abril (18:30-20:00 h) | Dilluns 10 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura jove.",
                "date": "Divendres 16 d'octubre (18:00-19:30 h) | Divendres 13 de novembre (18:00-19:30 h) | Divendres 15 de gener (18:00-19:30 h) | Divendres 19 de febrer (18:00-19:30 h) | Divendres 19 de març (18:00-19:30 h) | Divendres 16 d'abril (18:00-19:30 h) | Divendres 14 de maig (18:00-19:30 h)"
            },
            {
                "title": "Un estiu de postal. Finestres postals. (3 a 6 anys)",
                "date": "Dijous 6 d'agost (18:00-19:00 h)"
            },
            {
                "title": "Atreveix-te amb els llibres. Club de lectura infantil",
                "date": "Divendres 2 d'octubre (17:30-18:30 h) | Divendres 6 de novembre (17:30-18:30 h) | Divendres 8 de gener (17:30-18:30 h) | Divendres 5 de febrer (17:30-18:30 h) | Divendres 5 de març (17:30-18:30 h) | Divendres 2 d'abril (17:30-18:30 h) | Divendres 7 de maig (17:30-18:30 h)"
            }
        ]
    },
    {
        "library_id": "21",
        "library_name": "Biblioteca Ramon d'Alòs-Moner",
        "courses_found": 1,
        "courses": [
            {
                "title": "Un estiu de postal. Mail Art. (6 a 8 anys)",
                "date": "Dimecres 22 de juliol (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "5",
        "library_name": "Biblioteca Sagrada Família-Josep M. Ainaud de Lasa",
        "courses_found": 10,
        "courses": [
            {
                "title": "Taller de descoberta. \"Les invisibles\" L'Anna Mani i l'Art de fer bombolles (5 a 10 anus)",
                "date": "Dijous 9 de juliol (17:30-19:00 h)"
            },
            {
                "title": "Taller de descoberta \" Les invisibles\". Katherine Johnson i el girador de gravetat (5 a 10 anys)",
                "date": "Dijous 17 de setembre (17:30-19:00 h)"
            },
            {
                "title": "Taller de descoberta \"Les invisibles\". Jane Goodall i els ous irrompibles. (5 a 10 anys)",
                "date": "Dijous 22 d'octubre (17:30-19:00 h)"
            },
            {
                "title": "Taller de descoberta \" Les invisibles\". Eugene Clark i l'oceà dins l'ampolla. (5 a 10 anys)",
                "date": "Dijous 5 de novembre (17:30-19:00 h)"
            },
            {
                "title": "Taller de descoberta \"Les invisibles\". Frances Gabe i la robot. (5 a 10 anys)",
                "date": "Dijous 17 de desembre (17:30-19:00 h)"
            },
            {
                "title": "Club de lectura de còmic",
                "date": "Dimecres 28 d'octubre (18:30-19:30 h) | Dimecres 25 de novembre (18:30-19:30 h) | Dimecres 27 de gener (18:30-19:30 h) | Dimecres 24 de febrer (18:30-19:30 h) | Dimecres 31 de març (18:30-19:30 h) | Dimecres 28 d'abril (18:30-19:30 h) | Dimecres 26 de maig (18:30-19:30 h)"
            },
            {
                "title": "Club de lectura puntual. Veus de dones de l'Ebre.",
                "date": "Dimarts 20 d'octubre (18:30-20:00 h) | Dimarts 24 de novembre (18:30-20:00 h) | Dimarts 22 de desembre (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dimecres 14 d'octubre (18:30-19:30 h) | Dimecres 11 de novembre (18:30-19:30 h) | Dimecres 13 de gener (18:30-19:30 h) | Dimecres 10 de febrer (18:30-19:30 h) | Dimecres 10 de març (18:30-19:30 h) | Dimecres 14 d'abril (18:30-19:30 h) | Dimecres 12 de maig (18:30-19:30 h)"
            },
            {
                "title": "Club de lectura LGTBIAQ+",
                "date": "Dimecres 7 d'octubre (18:30-19:30 h) | Dimecres 4 de novembre (18:30-19:30 h) | Dimecres 13 de gener (18:30-19:30 h) | Dimecres 3 de febrer (18:30-19:30 h) | Dimecres 3 de març (18:30-19:30 h) | Dimecres 7 d'abril (18:30-19:30 h) | Dimecres 5 de maig (18:30-19:30 h) | Dimecres 2 de juny (18:30-19:30 h)"
            },
            {
                "title": "Club de lectura de ciència",
                "date": "Dimecres 21 d'octubre (18:30-19:30 h) | Dimecres 18 de novembre (18:30-19:30 h) | Dimecres 20 de gener (18:30-19:30 h) | Dimecres 17 de febrer (18:30-19:30 h) | Dimecres 17 de març (18:30-19:30 h) | Dimecres 21 d'abril (18:30-19:30 h) | Dimecres 19 de maig (18:30-19:30 h)"
            }
        ]
    },
    {
        "library_id": "6",
        "library_name": "Biblioteca Sant Antoni-Joan Oliver",
        "courses_found": 4,
        "courses": [
            {
                "title": "Club de lectura puntual. Memòria històrica del franquisme. \"I després de Franco, què? (1965-1975)\".",
                "date": "Dimecres 29 d'abril (18:00-20:00 h) | Dimecres 27 de maig (18:00-20:00 h) | Dimecres 17 de juny (18:00-20:00 h) | Dimecres 1 de juliol (18:00-20:00 h)"
            },
            {
                "title": "Club de lectura de novel·la negra",
                "date": "Dimarts 20 d'octubre (18:30-20:00 h) | Dimarts 17 de novembre (18:30-20:00 h) | Dimarts 15 de desembre (18:30-20:00 h) | Dimarts 16 de febrer (18:30-20:00 h) | Dimarts 16 de març (18:30-20:00 h) | Dimarts 20 d'abril (18:30-20:00 h) | Dimarts 18 de maig (18:30-20:00 h)"
            },
            {
                "title": "Un estiu de postal. Fotografies per enviar. (8 a 12 anys)",
                "date": "Dilluns 20 de juliol (18:00-19:00 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dimarts 27 d'octubre (18:30-20:00 h) | Dimarts 24 de novembre (18:30-20:00 h) | Dimarts 26 de gener (18:30-20:00 h) | Dimarts 23 de febrer (18:30-20:00 h) | Dimarts 30 de març (18:30-20:00 h) | Dimarts 27 d'abril (18:30-20:00 h) | Dimarts 25 de maig (18:30-20:00 h)"
            }
        ]
    },
    {
        "library_id": "36",
        "library_name": "Biblioteca Sant Gervasi - Joan Maragall",
        "courses_found": 4,
        "courses": [
            {
                "title": "Club de lectura de llengua alemanya",
                "date": "Dilluns 19 d'octubre (18:30-19:30 h) | Dilluns 9 de novembre (18:30-19:30 h) | Dilluns 14 de desembre (18:30-19:30 h) | Dilluns 11 de gener (18:30-19:30 h) | Dilluns 8 de febrer (18:30-19:30 h) | Dilluns 12 d'abril (18:30-19:30 h) | Dilluns 10 de maig (18:30-19:30 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dimecres 14 d'octubre (18:30-19:30 h) | Dimecres 11 de novembre (18:30-19:30 h) | Dimecres 13 de gener (18:30-19:30 h) | Dimecres 10 de febrer (18:30-19:30 h) | Dimecres 10 de març (18:30-19:30 h) | Dimecres 14 d'abril (18:30-19:30 h) | Dimecres 12 de maig (18:30-19:30 h)"
            },
            {
                "title": "Club de lectura de llengua italiana",
                "date": "Dimarts 3 de novembre (18:30-19:30 h) | Dimarts 1 de desembre (18:30-19:30 h) | Dimarts 12 de gener (18:30-19:30 h) | Dimarts 2 de febrer (18:30-19:30 h) | Dimarts 2 de març (18:30-19:30 h) | Dimarts 6 d'abril (18:30-19:30 h) | Dimarts 4 de maig (18:30-19:30 h)"
            },
            {
                "title": "Un estiu de postal. Postals animades. (6 a 8 anys)",
                "date": "Dijous 27 d'agost (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "3",
        "library_name": "Biblioteca Sant Pau-Santa Creu",
        "courses_found": 4,
        "courses": [
            {
                "title": "Club de lectura puntual.  T'atreveixes amb 'El castell', de Franz Kafka?",
                "date": "Dijous 9 de juliol (18:30-20:00 h) | Dijous 17 de setembre (18:30-20:00 h) | Dijous 15 d'octubre (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dimecres 14 d'octubre (18:00-19:30 h) | Dimecres 11 de novembre (18:00-19:30 h) | Dimecres 9 de desembre (18:00-19:30 h) | Dimecres 10 de febrer (18:00-19:30 h) | Dimecres 10 de març (18:00-19:30 h) | Dimecres 14 d'abril (18:00-19:30 h) | Dimecres 12 de maig (18:00-19:30 h)"
            },
            {
                "title": "Un estiu de postal. Finestres postals. (3 a 6 anys)",
                "date": "Dimecres 12 d'agost (18:00-19:00 h)"
            },
            {
                "title": "Un estiu de postal. Postals brodades (8 a 10 anys)",
                "date": "Dilluns 24 d'agost (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "47",
        "library_name": "Biblioteca Sarrià  J. V. Foix",
        "courses_found": 7,
        "courses": [
            {
                "title": "Descobrim Thomas Mann: \"Josep i els seus germans\"",
                "date": "Dijous 18 de juny (18:30-20:00 h) | Dijous 23 de juliol (18:30-20:00 h) | Dijous 1 d'octubre (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura puntual. Tres mirades, una llengua: Arderiu, Bonet i Foix.",
                "date": "Dijous 8 d'octubre (18:30-20:00 h) | Dijous 5 de novembre (18:30-20:00 h) | Dijous 3 de desembre (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura puntual. Literatura i IA.",
                "date": "Dimecres 7 d'octubre (18:30-20:00 h) | Dimecres 4 de novembre (18:30-20:00 h) | Dimecres 2 de desembre (18:30-20:00 h)"
            },
            {
                "title": "Animals fantàstics amb lego wedo 2.0 (8 a 11 anys)",
                "date": "Dilluns 6 de juliol (17:30-19:30 h)"
            },
            {
                "title": "Lab de sumo-bots amb Lego Mindstorms (+12 anys)",
                "date": "Dilluns 13 de juliol (17:30-20:00 h) | Dijous 16 de juliol (17:30-20:00 h)"
            },
            {
                "title": "Construïm i programem un cotxe amb Lego wedo 2.0 (8 a 11 anys)",
                "date": "Dilluns 20 de juliol (17:30-19:30 h)"
            },
            {
                "title": "Un estiu de postal. Mail Art. (6 a 8 anys)",
                "date": "Divendres 31 de juliol (11:30-12:30 h)"
            }
        ]
    },
    {
        "library_id": "41",
        "library_name": "Biblioteca Sofia Barat",
        "courses_found": 3,
        "courses": [
            {
                "title": "EstàsON. Art amb geometria! (6 a 8 anys)",
                "date": "Dimecres 8 de juliol (17:30-19:30 h)"
            },
            {
                "title": "Club de lectura puntual. Música i literatura",
                "date": "Dimarts 20 d'octubre (18:30-20:00 h) | Dimarts 17 de novembre (18:30-20:00 h)"
            },
            {
                "title": "Un estiu de postal. Servei postal....Joc i mediació literària. (3 a 6 anys).",
                "date": "Dijous 23 de juliol (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "33",
        "library_name": "Biblioteca Trinitat Vella - J. Barbero",
        "courses_found": 1,
        "courses": [
            {
                "title": "Club de lectura general",
                "date": "Dimecres 7 d'octubre (18:30-20:00 h) | Dimecres 4 de novembre (18:30-20:00 h) | Dimecres 13 de gener (18:30-20:00 h) | Dimecres 3 de febrer (18:30-20:00 h) | Dimecres 3 de març (18:30-20:00 h) | Dimecres 7 d'abril (18:30-20:00 h) | Dimecres 5 de maig (18:30-20:00 h)"
            }
        ]
    },
    {
        "library_id": "31",
        "library_name": "Biblioteca Vallcarca i els Penitents",
        "courses_found": 4,
        "courses": [
            {
                "title": "Lletra petita - Taller de descoberta - Animalades. Els gossos",
                "date": "Dimecres 16 de setembre (17:30-18:30 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dijous 8 d'octubre (18:30-20:00 h) | Dijous 12 de novembre (18:30-20:00 h) | Dijous 14 de gener (18:30-20:00 h) | Dijous 11 de febrer (18:30-20:00 h) | Dijous 11 de març (18:30-20:00 h) | Dijous 8 d'abril (18:30-20:00 h) | Dijous 13 de maig (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura de llengua anglesa",
                "date": "Dimecres 28 d'octubre (18:30-20:00 h) | Dimecres 25 de novembre (18:30-20:00 h) | Dimecres 27 de gener (18:30-20:00 h) | Dimecres 24 de febrer (18:30-20:00 h) | Dimecres 31 de març (18:30-20:00 h) | Dimecres 28 d'abril (18:30-20:00 h) | Dimecres 26 de maig (18:30-20:00 h)"
            },
            {
                "title": "Un estiu de postal. Servei postal....Joc i mediació literària. (3 a 6 anys).",
                "date": "Dimecres 22 de juliol (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "9",
        "library_name": "Biblioteca Vapor Vell",
        "courses_found": 6,
        "courses": [
            {
                "title": "Acampa a la Biblioteca!  Rovelló, relat d'un retorn. (9-12 anys)",
                "date": "Dilluns 6 de juliol (9:30-13:30 h) | Dimarts 7 de juliol (9:30-13:30 h) | Dimecres 8 de juliol (9:30-13:30 h) | Dijous 9 de juliol (9:30-13:30 h) | Divendres 10 de juliol (9:30-13:30 h)"
            },
            {
                "title": "EstàsON. Fabriquem un test de reg automàtic per plantes (6-8 anys)",
                "date": "Dimarts 30 de juny (17:30-19:30 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dimecres 28 d'octubre (18:30-20:30 h) | Dimecres 25 de novembre (18:30-20:30 h) | Dimecres 27 de gener (18:30-20:30 h) | Dimecres 24 de febrer (18:30-20:30 h) | Dimecres 31 de març (18:30-20:30 h) | Dimecres 28 d'abril (18:30-20:30 h) | Dimecres 26 de maig (18:30-20:30 h)"
            },
            {
                "title": "Club de lectura de llengua catalana (nivell bàsic)",
                "date": "Dimecres 21 d'octubre (10:00-12:00 h) | Dimecres 18 de novembre (10:00-12:00 h) | Dimecres 16 de desembre (10:00-12:00 h) | Dimecres 20 de gener (10:00-12:00 h) | Dimecres 17 de febrer (10:00-12:00 h) | Dimecres 17 de març (10:00-12:00 h) | Dimecres 21 d'abril (10:00-12:00 h) | Dimecres 19 de maig (10:00-12:00 h) | Dimecres 16 de juny (10:00-12:00 h)"
            },
            {
                "title": "Club de lectura de llengua anglesa",
                "date": "Dimecres 21 d'octubre (19:00-20:30 h) | Dimecres 18 de novembre (19:00-20:30 h) | Dimecres 20 de gener (19:00-20:30 h) | Dimecres 17 de febrer (19:00-20:30 h) | Dimecres 17 de març (19:00-20:30 h) | Dimecres 21 d'abril (19:00-20:30 h) | Dimecres 19 de maig (19:00-20:30 h)"
            },
            {
                "title": "Un estiu de postal. Finestres postals. (3 a 6 anys)",
                "date": "Dijous 6 d'agost (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "12",
        "library_name": "Biblioteca Vila de Gràcia - Rosa M. Arquimbau",
        "courses_found": 5,
        "courses": [
            {
                "title": "Club de lectura de llengua catalana (nivell bàsic)",
                "date": "Divendres 9 d'octubre (12:00-13:30 h) | Divendres 13 de novembre (12:00-13:30 h) | Divendres 11 de desembre (12:00-13:30 h) | Divendres 8 de gener (12:00-13:30 h) | Divendres 12 de febrer (12:00-13:30 h) | Divendres 12 de març (12:00-13:30 h) | Divendres 9 d'abril (12:00-13:30 h) | Divendres 14 de maig (12:00-13:30 h) | Divendres 11 de juny (12:00-13:30 h)"
            },
            {
                "title": "Club de lectura puntual. Literatura africana (segona edició)",
                "date": "Dilluns 5 d'octubre (18:30-20:00 h) | Dilluns 9 de novembre (18:30-20:00 h) | Dilluns 11 de gener (18:30-20:00 h) | Dilluns 8 de febrer (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura de filosofia",
                "date": "Dimecres 21 d'octubre (18:00-20:00 h) | Dimecres 18 de novembre (18:00-20:00 h) | Dimecres 20 de gener (18:00-20:00 h) | Dimecres 17 de febrer (18:00-20:00 h) | Dimecres 17 de març (18:00-20:00 h) | Dimecres 21 d'abril (18:00-20:00 h) | Dimecres 19 de maig (18:00-20:00 h)"
            },
            {
                "title": "Club de lectura de llengua alemanya",
                "date": "Dijous 15 d'octubre (18:00-20:00 h) | Dijous 19 de novembre (18:00-20:00 h) | Dijous 17 de desembre (18:00-20:00 h) | Dijous 18 de febrer (18:00-20:00 h) | Dijous 18 de març (18:00-20:00 h) | Dijous 15 d'abril (18:00-20:00 h) | Dijous 20 de maig (18:00-20:00 h)"
            },
            {
                "title": "Club de lectura general",
                "date": "Dimarts 20 d'octubre (18:30-20:00 h) | Dimarts 17 de novembre (18:30-20:00 h) | Dimarts 15 de desembre (18:30-20:00 h) | Dimarts 16 de febrer (18:30-20:00 h) | Dimarts 16 de març (18:30-20:00 h) | Dimarts 20 d'abril (18:30-20:00 h) | Dimarts 18 de maig (18:30-20:00 h)"
            }
        ]
    },
    {
        "library_id": "32",
        "library_name": "Biblioteca Vilapicina i la Torre Llobeta",
        "courses_found": 3,
        "courses": [
            {
                "title": "Club de lectura general",
                "date": "Dimarts 3 de novembre (18:30-20:00 h) | Dimarts 12 de gener (18:30-20:00 h) | Dimarts 2 de febrer (18:30-20:00 h) | Dimarts 2 de març (18:30-20:00 h) | Dimarts 6 d'abril (18:30-20:00 h) | Dimarts 4 de maig (18:30-20:00 h) | Dimarts 1 de juny (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura de llengua catalana (nivell bàsic)",
                "date": "Divendres 16 d'octubre (10:30-12:00 h) | Divendres 20 de novembre (10:30-12:00 h) | Divendres 18 de desembre (10:30-12:00 h) | Divendres 15 de gener (10:30-12:00 h) | Divendres 19 de febrer (10:30-12:00 h) | Divendres 19 de març (10:30-12:00 h) | Divendres 16 d'abril (10:30-12:00 h) | Divendres 21 de maig (10:30-12:00 h) | Divendres 18 de juny (10:30-12:00 h)"
            },
            {
                "title": "Atreveix-te amb els llibres (8 a 10 anys)",
                "date": "Dimarts 20 d'octubre (17:30-18:30 h) | Dimarts 17 de novembre (17:30-18:30 h) | Dimarts 15 de desembre (17:30-18:30 h) | Dimarts 19 de gener (17:30-18:30 h) | Dimarts 16 de febrer (17:30-18:30 h) | Dimarts 16 de març (17:30-18:30 h) | Dimarts 20 d'abril (17:30-18:30 h) | Dimarts 18 de maig (17:30-18:30 h)"
            }
        ]
    },
    {
        "library_id": "23",
        "library_name": "Biblioteca Xavier Benguerel",
        "courses_found": 3,
        "courses": [
            {
                "title": "Club de lectura general",
                "date": "Dimarts 13 d'octubre (18:00-19:30 h) | Dimarts 10 de novembre (18:00-19:30 h) | Dimarts 15 de desembre (18:00-19:30 h) | Dimarts 9 de febrer (18:00-19:30 h) | Dimarts 9 de març (18:00-19:30 h) | Dimarts 13 d'abril (18:00-19:30 h) | Dimarts 11 de maig (18:00-19:30 h)"
            },
            {
                "title": "Club de lectura de cinema i novel·la",
                "date": "Dimarts 20 d'octubre (18:00-19:30 h) | Dimarts 17 de novembre (18:00-19:30 h) | Dimarts 19 de gener (18:00-19:30 h) | Dimarts 16 de febrer (18:00-19:30 h) | Dimarts 16 de març (18:00-19:30 h) | Dimarts 20 d'abril (18:00-19:30 h) | Dimarts 18 de maig (18:00-19:30 h)"
            },
            {
                "title": "Un estiu de postal. Postals d'Ulisses. (8 a 12 anys)",
                "date": "Dilluns 20 de juliol (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "26",
        "library_name": "Biblioteca Zona Nord - Mària Sánchez",
        "courses_found": 8,
        "courses": [
            {
                "title": "Club de lectura fàcil en castellà",
                "date": "Dimecres 1 de juliol (17:00-18:00 h) | Dimecres 8 de juliol (17:00-18:00 h) | Dimecres 15 de juliol (17:00-18:00 h)"
            },
            {
                "title": "Espai Gent gran Estiu",
                "date": "Dilluns 6 de juliol (18:00-19:00 h) | Dilluns 13 de juliol (18:00-19:00 h) | Dilluns 20 de juliol (18:00-19:00 h) | Dilluns 27 de juliol (18:00-19:00 h)"
            },
            {
                "title": "Atreveix-te amb els llibres. Club de lectura infantil",
                "date": "Dimecres 18 de novembre (17:00-18:00 h) | Dijous 10 de desembre (17:00-18:00 h) | Dimecres 13 de gener (17:00-18:00 h) | Dijous 18 de febrer (17:00-18:00 h) | Dimecres 10 de març (17:00-18:00 h) | Dijous 15 d'abril (17:00-18:00 h)"
            },
            {
                "title": "Taller de lectura (6 a 12 anys)",
                "date": "Dimecres 7 d'octubre (17:00-18:00 h) | Dimecres 4 de novembre (17:00-18:00 h) | Dimecres 2 de desembre (17:00-18:00 h) | Dimecres 20 de gener (17:00-18:00 h) | Dimecres 3 de febrer (17:00-18:00 h) | Dimecres 3 de març (17:00-18:00 h) | Dimecres 7 d'abril (17:00-18:00 h) | Dimecres 5 de maig (17:00-18:00 h)"
            },
            {
                "title": "Ficció en joc (de 6 a 12 anys)",
                "date": "Dimecres 28 d'octubre (18:00-19:00 h) | Dimecres 25 de novembre (18:00-19:00 h) | Dimecres 16 de desembre (18:00-19:00 h) | Dimecres 27 de gener (18:00-19:00 h) | Dimecres 24 de febrer (18:00-19:00 h) | Dimecres 24 de març (18:00-19:00 h) | Dimecres 28 d'abril (18:00-19:00 h) | Dimecres 26 de maig (18:00-19:00 h)"
            },
            {
                "title": "Club de lectura puntual: Negra i criminal.",
                "date": "Divendres 9 d'octubre (18:30-20:00 h) | Divendres 13 de novembre (18:30-20:00 h) | Divendres 11 de desembre (18:30-20:00 h)"
            },
            {
                "title": "Club de lectura fàcil en castellà",
                "date": "Dimecres 7 d'octubre (16:00-17:00 h) | Dimecres 14 d'octubre (16:00-17:00 h) | Dimecres 21 d'octubre (16:00-17:00 h) | Dimecres 28 d'octubre (16:00-17:00 h) | Dimecres 4 de novembre (16:00-17:00 h) | Dimecres 11 de novembre (16:00-17:00 h) | Dimecres 18 de novembre (16:00-17:00 h) | Dimecres 25 de novembre (16:00-17:00 h) | Dimecres 2 de desembre (16:00-17:00 h) | Dimecres 9 de desembre (16:00-17:00 h) | Dimecres 16 de desembre (16:00-17:00 h) | Dimecres 23 de desembre (16:00-17:00 h) | Dimecres 30 de desembre (16:00-17:00 h) | Dimecres 13 de gener (16:00-17:00 h) | Dimecres 20 de gener (16:00-17:00 h) | Dimecres 27 de gener (16:00-17:00 h) | Dimecres 3 de febrer (16:00-17:00 h) | Dimecres 10 de febrer (16:00-17:00 h) | Dimecres 17 de febrer (16:00-17:00 h) | Dimecres 24 de febrer (16:00-17:00 h) | Dimecres 3 de març (16:00-17:00 h) | Dimecres 10 de març (16:00-17:00 h) | Dimecres 17 de març (16:00-17:00 h) | Dimecres 24 de març (16:00-17:00 h) | Dimecres 31 de març (16:00-17:00 h) | Dimecres 7 d'abril (16:00-17:00 h) | Dimecres 14 d'abril (16:00-17:00 h) | Dimecres 21 d'abril (16:00-17:00 h) | Dimecres 28 d'abril (16:00-17:00 h) | Dimecres 5 de maig (16:00-17:00 h) | Dimecres 12 de maig (16:00-17:00 h) | Dimecres 19 de maig (16:00-17:00 h) | Dimecres 26 de maig (16:00-17:00 h) | Dimecres 2 de juny (16:00-17:00 h) | Dimecres 9 de juny (16:00-17:00 h) | Dimecres 16 de juny (16:00-17:00 h)"
            },
            {
                "title": "Un estiu de postal. Postals brodades (8 a 10 anys)",
                "date": "Dimecres 26 d'agost (18:00-19:00 h)"
            }
        ]
    },
    {
        "library_id": "44",
        "library_name": "Biblioteques de Barcelona",
        "courses_found": 0,
        "courses": []
    }
];