# BiblioScrapper

Aquest projecte consisteix en una eina per extreure, processar i visualitzar l'oferta de cursos de les Biblioteques de Barcelona des del portal oficial.

El projecte es divideix en dues parts principals:
1. **L'Scraper (Python)**: Extreu la informació de la pàgina web i la guarda en format estructurat.
2. **L'Interfície Web (HTML/JS/CSS)**: Un cercador visual, modern i interactiu per filtrar i llegir comodament tota l'oferta extreta.

## Estructura de l'Arxiu
- `scraper.py`: Codi Python que realitza l'extracció de les dades.
- `index.html`, `style.css`, `script.js`: Codi de l'aplicació web.
- `courses.json`: Dades en brut (`RAW JSON`) generades per l'scraper.
- `courses.js`: Dades exportades com a variable global de JavaScript per permetre la càrrega local de l'HTML sense necessitat d'aixecar un servidor web per restriccions CORS.

---

## 1. Com executar l'Scraper per actualitzar dades

Si en un futur les biblioteques afegeixen nous cursos i vols obtenir l'última informació, has de tornar a executar l'scraper des de zero.

### Prerequisits:
Necessites tenir Python instal·lat juntament amb les següents llibreries:
```bash
pip install requests beautifulsoup4 urllib3
```

### Execució:
Obre una terminal dins d'aquesta mateixa carpeta (`BiblioScrapper`) i determina quin procés vols executar segons els paràmetres següents:

**1. Extreure noves dades i preparar l'entorn web (Recomanat)**
```bash
$env:PYTHONIOENCODING="utf-8"
python scraper.py -scrap -export
```
*(Nota per a usuaris de Windows Powerhsell: El primer comandament assegura que els caràcters especials del català s'imprimeixen correctament a la consola sense provocar un error `UnicodeEncodeError`).*

Aquest comandament s'encarregarà de:
- Extreure la informació actualitzada i guardar-la novament a `courses/courses.json`.
- Crear automàticament una còpia de seguretat de les dades anteriors (si n'hi ha) dins la carpeta `courses/`.
- Auto-generar el document `js/courses.js` transparentment per a la interfície web utilitzant les dades recents.
- Mostrar per pantalla un **resum del temps d'execució** juntament amb el recompte total de **biblioteques** i **cursos trobats**.

**2. Opcions individuals (Avançat)**
Si només vols extreure el JSON sense generar l'arxiu per la pàgina web:
```bash
python scraper.py -scrap
```

Si ja tens un fitxer `.json` descarregat i simplement vols transformar-ho manualment per incrustar-lo a la interfície web `js/courses.js`:
```bash
python scraper.py -export
```

---

## 2. Com utilitzar l'Interfície Web (Visor)

No et cal cap instal·lació, ni cap configuració especial. 

1. Busca el fitxer **`index.html`** dintre aquesta mateixa carpeta.
2. **Fes doble clic** per obrir-lo amb el teu navegador habitual (Chrome, Firefox, Safari...).

### Funcionalitats del Visor:
- **Cerca Lliure:** Pots escriure qualsevol paraula al camp de 'Nom del Curs' (ex: "Club de lectura").
- **Filtre per Data:** Troba cursos al teu mes o dia preferit (ex: "Dimarts").
- **Filtre per Biblioteca:** Escull la biblioteca des del menú desplegable per veure només la seva oferta.
- **Detalls Complet:** Fent clic sobre el nom de qualsevol biblioteca (etiqueta blava/groga) s'obrirà una finestra modal interactiva on podràs consultar immediatament *tots* els cursos que ofereix en format llista.
