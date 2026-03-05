# BiblioScrapper

Aquest projecte consisteix en una eina per extreure, processar i visualitzar l'oferta de cursos de les Biblioteques de Barcelona des del portal oficial.

El projecte es divideix en dues parts principals:
1. **L'Scraper (Python)**: Extreu la informació de la pàgina web i la guarda en format estructurat.
2. **L'Interfície Web (HTML/JS/CSS)**: Un cercador visual, modern i interactiu per filtrar i llegir comodament tota l'oferta extreta.

## Estructura de l'Arxiu
- `scraper.py`: Codi Python que realitza l'extracció de les dades.
- `alert.py`: Nou script que compara l'última extracció amb còpies de seguretat anteriors per generar un informe de cursos nous, modificats o eliminats.
- `alert.cfg.template`: Plantilla de configuració per la funcionalitat d'enviament d'emails a l'script d'alertes.
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

---

## 3. Com utilitzar l'script d'Alertes (alert.py)

Aquest nou script permet comparar l'última extracció de cursos (fitxer `courses/courses.json`) amb la còpia de seguretat més recent (`courses\_backup_YYYYMMDD_HHMMSS.json`) generada per l'scraper.

### Funcionalitats:
Aquesta comparació genera un informe net i estructurat per la consola o per email indicant:
- **[NEW COURSES]**: Nous cursos (o biblioteques completes) que anteriorment no hi eren.
- **[CHANGED COURSES]**: Cursos que han modificat la data/horari.
- **[REMOVED COURSES]**: Cursos que han sigut esborrats de l'oferta.

### Execució Bàsica:
Per veure l'informe de canvis per consola, executa:
```bash
python alert.py
```

### Tramesa d'email:
Pots rebre aquest informe directament al teu correu si hi adjuntes el paràmetre `-mail`:
```bash
python alert.py -mail el_teu_correu@exemple.com
```

### Tramesa per Telegram:
Pots rebre aquest informe directament per Telegram si hi adjuntes el paràmetre `-telegram`:
```bash
python alert.py -telegram
```
Perquè això funcioni, necessites proporcionar els detalls del teu bot. Pots fer-ho de dues maneres:
1. Utilitzant els paràmetres explícits per línia de comandes (passen per sobre de qualsevol configuració desada):
```bash
python alert.py -telegram -bot_token EL_TEU_TOKEN -user_chat_id EL_TEU_ID
```
2. Desant els residus al fitxer `alert.cfg` (explicat més avall) per no haver d'escriure'ls cada vegada.

### Configuració (Email i Telegram):
Perquè l'enviament de correus o missatges de Telegram funcioni, necessites establir les dades de connexió pertinents.

1. Busca el fitxer **`alert.cfg.template`** a l'arrel del projecte.
2. **Reanomena aquest fitxer** (o fes-ne una còpia i canvia el nom) perquè es digui exactament **`alert.cfg`**.
3. Obre `alert.cfg` amb un editor de text.
4. Omple els camps amb la teva informació:
   - **[SMTP]**: `server`, `port`, `username`, `password`, `use_tls`, `use_ssl`.
   - **[Telegram]**: `bot_token`, `user_chat_id`. (Pots parlar amb @BotFather a Telegram per crear un bot i aconseguir un token).
   
*__Nota de seguretat__*: El fitxer `alert.cfg` s'ignora automàticament al control de versions (Git), de manera que les vostres contrasenyes i dades privades no es penjaran públicament.
