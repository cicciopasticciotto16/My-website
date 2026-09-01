---
# =============================================================================
# TEMPLATE CURRICULUM (PhD student)
#
# Tutti i contenuti della pagina si scrivono qui sotto, nel front matter:
# il layout `cv` (layouts/page/cv.html) li impagina automaticamente.
#
# Regole utili:
#  - Ogni sezione viene NASCOSTA se la lasci vuota: cancella pure quello
#    che non ti serve (es. `awards:` se non hai premi da elencare).
#  - Per aggiungere una voce, copia un blocco che inizia con `- ` e modificalo.
#  - Le date sono testo libero: scrivi il formato che preferisci
#    ("2024 – oggi", "Nov 2025", "2023-2024").
# =============================================================================

title: "About"
layout: cv
draft: false

# ---------- Intestazione ----------
name: "Claudia Montanaro"
role: "PhD Student in Astrophysics"
affiliation: "Department of Physics and Astronomy — University of ..."
location: "Città, Italia"
photo: "images/default-placeholder.png"   # file in assets/images/, oppure un URL https://
tagline: "Studio la formazione delle galassie con simulazioni idrodinamiche e dati da survey. In una riga: qual è la domanda che ti tiene sveglia la notte."

# Titolo della sezione che mostra il testo libero in fondo al file
about_heading: "Profile"

# ---------- Contatti (chip sotto il nome) ----------
contacts:
  - label: "Email"
    value: "nome.cognome@universita.it"
    url: "mailto:nome.cognome@universita.it"
  - label: "Office"
    value: "Edificio X, stanza 000"
  - label: "Scholar"
    value: "profilo"
    url: "https://scholar.google.com/citations?user=ID-DA-INSERIRE"
  - label: "ORCID"
    value: "0000-0000-0000-0000"
    url: "https://orcid.org/0000-0000-0000-0000"

# PDF del CV: metti il file in static/ (es. static/cv.pdf) e indicalo qui.
# Cancella la riga se non hai un PDF da allegare.
# cv_pdf: "/cv.pdf"   # <- togli il "#" quando hai messo il PDF in static/

# ---------- Interessi di ricerca (sidebar) ----------
interests:
  - "Primo filone di ricerca"
  - "Secondo filone di ricerca"
  - "Metodi / tecniche di cui ti occupi"

# ---------- Formazione ----------
education:
  - period: "2024 – oggi"
    title: "PhD in Astrophysics"
    org: "University of ..."
    place: "Città, IT"
    details: "**Supervisor:** Prof. Nome Cognome — *Tesi (provvisoria):* titolo del progetto di dottorato."
  - period: "2021 – 2024"
    title: "MSc in Physics"
    org: "University of ..."
    place: "Città, IT"
    details: "Voto: 110/110 con lode. *Tesi:* titolo della tesi magistrale (relatore: Prof. ...)."
  - period: "2018 – 2021"
    title: "BSc in Physics"
    org: "University of ..."
    place: "Città, IT"
    details: "*Tesi:* titolo della tesi triennale."

# ---------- Pubblicazioni ----------
# `status` è opzionale: mostra un'etichetta (submitted, in prep., preprint...).
publications:
  - authors: "**Cognome, N.**, Coautore, A., & Coautore, B."
    title: "Titolo dell'articolo"
    venue: "Nome della rivista"
    year: "2026"
    status: "submitted"
    links:
      - label: "arXiv"
        url: "https://arxiv.org/abs/0000.00000"
  - authors: "Coautore, A., **Cognome, N.**, & Coautore, B."
    title: "Titolo del secondo articolo"
    venue: "Nome della rivista, 123, A45"
    year: "2025"
    links:
      - label: "DOI"
        url: "https://doi.org/10.0000/xxxxx"
      - label: "PDF"
        url: "#"

# ---------- Esperienza di ricerca ----------
experience:
  - period: "Estate 2025"
    title: "Visiting Researcher"
    org: "Istituto / Osservatorio"
    place: "Città, Paese"
    bullets:
      - "Cosa hai fatto, con quale metodo, con quale risultato."
      - "Una riga per contributo: sii concreta e quantifica dove puoi."
  - period: "2023 – 2024"
    title: "Research Assistant"
    org: "Gruppo di ricerca"
    place: "Città, IT"
    details: "Breve descrizione del progetto e del tuo ruolo."

# ---------- Didattica ----------
teaching:
  - period: "2025/26"
    title: "Teaching Assistant — Nome del corso"
    org: "Laurea triennale in Fisica"
    details: "Esercitazioni e tutoraggio, ~30 studenti."
  - period: "2024/25"
    title: "Tutor — Laboratorio di ..."
    org: "University of ..."

# ---------- Conferenze e seminari ----------
talks:
  - period: "Set 2025"
    title: "Titolo del contributo (talk)"
    org: "Nome della conferenza"
    place: "Città, Paese"
  - period: "Mag 2025"
    title: "Titolo del poster (poster)"
    org: "Nome del convegno"
    place: "Città, Paese"

# ---------- Premi e borse ----------
awards:
  - period: "2024"
    title: "Nome della borsa / premio"
    org: "Ente che l'ha assegnata"
    details: "Importo o motivazione, se ha senso indicarlo."

# ---------- Attività accademica / terza missione ----------
service:
  - period: "2025 – oggi"
    title: "Rappresentante dei dottorandi"
    org: "Dipartimento di ..."
  - period: "2024 – oggi"
    title: "Divulgazione scientifica"
    org: "Notte dei Ricercatori, serate osservative, scuole"

# ---------- Competenze (sidebar) ----------
skills:
  - group: "Programmazione"
    items: ["Python", "C++", "Bash", "SQL"]
  - group: "Scientific stack"
    items: ["NumPy", "Astropy", "PyTorch", "Jupyter"]
  - group: "Strumenti"
    items: ["Git", "LaTeX", "HPC / Slurm", "Docker"]

# ---------- Lingue (sidebar) ----------
languages:
  - name: "Italiano"
    level: "Madrelingua"
  - name: "Inglese"
    level: "C1"
  - name: "Francese"
    level: "A2"

# ---------- Profili accademici (sidebar) ----------
profiles:
  - name: "Google Scholar"
    value: "profilo"
    url: "https://scholar.google.com/citations?user=ID-DA-INSERIRE"
  - name: "ORCID"
    value: "0000-0000-0000-0000"
    url: "https://orcid.org/0000-0000-0000-0000"
  - name: "LinkedIn"
    value: "profilo"
    url: "https://www.linkedin.com/in/PROFILO-DA-INSERIRE"
  - name: "GitHub"
    value: "@username"
    url: "https://github.com/USERNAME"
---

Sono dottoranda in *nome del programma* presso l'Università di ..., dove lavoro
su *argomento di ricerca* sotto la supervisione del Prof. Nome Cognome.

Due o tre paragrafi in prima persona: da dove vieni, di cosa ti occupi adesso e
perché è interessante. Questo è il posto giusto per il taglio narrativo — le
liste puntuali stanno già nelle sezioni sopra. Chiudi dicendo cosa cerchi
(collaborazioni, periodi all'estero, dati) e come contattarti.

Scrivo anche sul [blog di questo sito](/posts/), dove racconto in modo
divulgativo quello che leggo e studio.
