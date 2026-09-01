# Guida al sito

Guida pratica per gestire questo sito **senza saper programmare**.
Tutto quello che serve è saper modificare file di testo.

---

## Indice

1. [Come funziona in due parole](#1-come-funziona-in-due-parole)
2. [Avviare il sito sul tuo computer](#2-avviare-il-sito-sul-tuo-computer)
3. [Le cartelle che contano](#3-le-cartelle-che-contano)
4. [Scrivere un nuovo articolo](#4-scrivere-un-nuovo-articolo)
5. [La scheda iniziale spiegata riga per riga](#5-la-scheda-iniziale-spiegata-riga-per-riga)
6. [Creare una pagina (Contatti, Servizi...)](#6-creare-una-pagina-contatti-servizi)
7. [Aggiungere una voce al menu](#7-aggiungere-una-voce-al-menu)
8. [Le immagini](#8-le-immagini)
9. [Mettere le TUE informazioni al posto di quelle del tema](#9-mettere-le-tue-informazioni-al-posto-di-quelle-del-tema)
10. [Attenzione: cose che sembrano funzionare ma non funzionano](#10-attenzione-cose-che-sembrano-funzionare-ma-non-funzionano)
11. [Trappole da conoscere](#11-trappole-da-conoscere)
12. [Pubblicare le modifiche online](#12-pubblicare-le-modifiche-online)
13. [Problemi comuni](#13-problemi-comuni)

---

## 1. Come funziona in due parole

Questo sito è fatto con **Hugo**. Il principio è semplice:

> Tu scrivi il testo in file `.md` (file di testo normale) → Hugo li trasforma automaticamente in pagine web.

Non esiste un pannello di amministrazione tipo WordPress: **si lavora sui file**. In cambio il sito è velocissimo e non si rompe mai da solo.

I file `.md` si scrivono in **Markdown**, che è testo normale con qualche simbolo per la formattazione:

```markdown
## Questo è un titolo di sezione

Questo è un paragrafo normale.

**Questo è in grassetto**, *questo in corsivo*.

- Punto elenco
- Un altro punto

[Questo è un link](https://esempio.it)
```

Puoi modificare i file con qualsiasi editor di testo. Consigliato: **Visual Studio Code** (gratis), oppure il Blocco Note.

---

## 2. Avviare il sito sul tuo computer

Serve per vedere le modifiche *prima* di pubblicarle online.

**Una volta sola**, se Hugo non è installato, apri PowerShell e lancia:

```powershell
winget install --id Hugo.Hugo.Extended --scope user
```

Poi **chiudi e riapri il terminale** (serve perché Windows si accorga del nuovo programma).

**Ogni volta che vuoi lavorare al sito**, apri il terminale nella cartella del progetto e scrivi:

```powershell
hugo server
```

Poi apri il browser su **http://localhost:1313/**

Da qui in poi, ogni volta che salvi un file **la pagina nel browser si aggiorna da sola**. Non devi riavviare niente.

Per fermare il server: premi `Ctrl+C` nel terminale.

> **Nota:** all'avvio compaiono dei messaggi gialli che iniziano con `WARN deprecated:`. Sono innocui, ignorali. Non toccarli: "sistemarli" romperebbe la pubblicazione online (vedi §11).

---

## 3. Le cartelle che contano

| Cartella | Cosa contiene | Ci metti mano? |
|---|---|---|
| **`content/`** | **Tutti i testi del sito**: articoli e pagine | **Sì, sempre** |
| **`assets/images/`** | Le immagini di articoli e pagine | **Sì, spesso** |
| **`hugo.toml`** | Impostazioni: titolo del sito, menu | **Sì, ogni tanto** |
| `layouts/` | La struttura grafica delle pagine (codice HTML) | Solo per modifiche avanzate |
| `static/` | Le favicon (l'iconcina nella scheda del browser) | Raramente |
| `public/` | Il sito generato in automatico | **Mai** — si rigenera da solo |
| `resources/` | File temporanei di Hugo | **Mai** |

**Regola d'oro:** se non sei sicuro, lavora solo dentro `content/`, `assets/images/` e `hugo.toml`.

---

## 4. Scrivere un nuovo articolo

### Passo 1 — Crea il file

Gli articoli vanno in `content/posts/` dentro la cartella dell'anno.
Per un articolo di oggi:

```
content/posts/2026/il-mio-primo-articolo.md
```

Se la cartella dell'anno non esiste, creala.

> Il modo più semplice e sicuro: **copia un articolo esistente**, rinominalo e cambiane il contenuto. Così sei sicuro di non dimenticare nulla.

### Passo 2 — Incolla questo modello

```markdown
---
title: "Il titolo del mio articolo"
date: 2026-09-01T10:00:00+02:00
slug: /il-mio-primo-articolo/
description: Una frase che riassume l'articolo, appare su Google.
image: images/nome-immagine.jpg
caption: Foto di Mario Rossi.
categories:
  - astronomy
tags:
  - spazio
  - novita
draft: false
---

Qui scrivi il testo dell'articolo.

## Un sottotitolo

Altro testo. **Grassetto** e *corsivo* funzionano.

- Elenco puntato
- Secondo punto
```

### Passo 3 — Salva e guarda

Salva il file e vai su http://localhost:1313/ — l'articolo compare da solo nella home, nella sezione "Recent Post".

L'indirizzo dell'articolo sarà: **`/posts/ANNO/SLUG/`**
Esempio: `/posts/2026/il-mio-primo-articolo/`

---

## 5. La scheda iniziale spiegata riga per riga

La parte tra i due `---` in cima al file si chiama *front matter*. È la **scheda dell'articolo**: non appare nella pagina, ma dice a Hugo come trattarlo.

| Campo | A cosa serve | Obbligatorio? |
|---|---|---|
| `title` | Il titolo che si vede in cima alla pagina | **Sì** |
| `date` | Data di pubblicazione. Ordina gli articoli: i più recenti in alto | **Sì** |
| `slug` | L'indirizzo web. Usa solo minuscole e trattini, niente spazi né accenti | Consigliato |
| `description` | Il riassunto che Google mostra nei risultati di ricerca | Consigliato |
| `image` | L'immagine di copertina (vedi §8) | Consigliato |
| `caption` | Didascalia o crediti sotto l'immagine | No |
| `categories` | Il "raccoglitore" grande dell'articolo | No |
| `tags` | Etichette per argomento | No |
| `draft` | `true` = bozza **invisibile online**. `false` = pubblicato | **Sì** |

### Le due cose che sbagliano tutti

**1. `draft: true`** — L'articolo si vede in locale ma **non** viene pubblicato online. Se un articolo non appare sul sito vero, controlla sempre questo per primo. Mettilo a `false` quando è pronto.

**2. Il formato della data** — Deve essere esattamente così: `2026-09-01T10:00:00+02:00`
(anno-mese-giorno, poi `T`, poi ora:minuti:secondi, poi `+02:00`). Se sbagli il formato la pagina non si genera.

> **Attenzione ai due punti:** se il titolo contiene i due punti, le virgolette sono obbligatorie.
> `title: "Marte: il pianeta rosso"` va bene — senza virgolette dà errore.

---

## 6. Creare una pagina (Contatti, Servizi...)

Le pagine fisse (non articoli) vanno **direttamente in `content/`**, non dentro `posts/`.

Esempio: `content/contatti.md` diventa l'indirizzo `/contatti/`

```markdown
---
title: "Contatti"
date: 2026-09-01T10:00:00+02:00
type: page
image: images/nome-immagine.jpg
draft: false
---

Scrivi qui il contenuto della pagina.
```

### Perché `type: page` è importante

Il sito ha **due impaginazioni diverse** per le pagine, e si scelgono con quella riga:

- **con `type: page`** → impaginazione pulita da *pagina*: solo titolo e testo.
- **senza `type: page`** → impaginazione da *articolo*: aggiunge data, autore, tempo di lettura e "articoli correlati". Di solito **non** è quello che vuoi per una pagina tipo Contatti.

> La pagina **About** attuale (`content/about.md`) non ha `type: page`, quindi oggi usa l'impaginazione da articolo. Se preferisci quella pulita, aggiungi la riga `type: page`.

### Se usi `type: page`, l'immagine è obbligatoria

Con `type: page` il campo `image` **deve** esserci. Se lo ometti, la pagina mostra un'immagine rotta (un riquadro vuoto). Non è un tuo errore, è un limite del tema.

Se vuoi una pagina senza immagine, togli `type: page` — oppure fai sistemare il file `layouts/page/single.html`.

---

## 7. Aggiungere una voce al menu

**Creare la pagina non basta**: non compare nel menu automaticamente. Va aggiunta a mano.

Apri **`hugo.toml`** e aggiungi un blocco come questo:

```toml
[[menus.main]]
name = 'Contatti'
pageRef = '/contatti'
weight = 50
```

- `name` = la scritta che si vede nel menu
- `pageRef` = l'indirizzo della pagina (**senza** la barra finale)
- `weight` = l'ordine. Numero più basso = più a sinistra

Le voci attuali sono: Home (10), Posts (20), Tags (30), About (40). Per inserire una voce in mezzo usa un numero intermedio, per esempio `25`.

---

## 8. Le immagini

### Dove metterle

Metti i file **dentro `assets/images/`**.

Poi nel front matter scrivi il percorso **senza** `assets/`:

```yaml
image: images/mia-foto.jpg
```

Hugo le ridimensiona e ottimizza da solo. Non serve che tu le rimpicciolisca prima (ma evita file da 10 MB).

### Immagini dentro il testo

```markdown
![Descrizione della foto](/images/mia-foto.jpg)
```

### Nomi dei file

Usa solo **minuscole, trattini e niente spazi**.
`panorama-montagna.jpg` va bene, `Foto Vacanza 2026.JPG` no.

---

## 9. Mettere le TUE informazioni al posto di quelle del tema

Il sito contiene ancora i testi di esempio del tema, che parlano di astronomia. Ecco **tutto** quello che va cambiato.

### A) Nome del sito → `hugo.toml`

Il nome che appare **in alto a sinistra e nel piè di pagina** è già impostato su `Claudia Montanaro`. Per cambiarlo basta questa riga in `hugo.toml`:

```toml
title = 'Claudia Montanaro'
```

Modificandola cambia in tutto il sito contemporaneamente: intestazione, piè di pagina e titolo della scheda del browser. Non serve toccare nessun file HTML.

> Il tema lo scrive **tutto in maiuscolo** (è una scelta grafica del tema, non un errore): si legge CLAUDIA MONTANARO.

### A-bis) Descrizione e autore → `hugo.toml` (opzionale)

Puoi aggiungere queste righe dentro il blocco `[params]` già presente:

```toml
[params]
  description = 'La descrizione del mio sito, appare su Google.'
  [params.Author]
    name = 'Claudia Montanaro'
    bio = 'Due righe su di me.'
    avatar = 'images/mia-foto-profilo.jpg'
```

> Finché non le aggiungi, sotto ogni articolo **il nome dell'autore resta vuoto** e la descrizione del sito su Google è vuota. Il file dell'`avatar` va messo in `assets/images/`.

### B) Link dei social → `hugo.toml`

**Non serve toccare l'HTML.** Gli indirizzi delle quattro icone del piè di pagina si cambiano in `hugo.toml`, nel blocco `[params.social]`:

```toml
[params]
  [params.social]
    scholar   = 'https://scholar.google.com/citations?user=IL-TUO-ID'
    linkedin  = 'https://www.linkedin.com/in/il-tuo-profilo'
    email     = 'tua.email@esempio.it'
    instagram = 'https://www.instagram.com/il-tuo-profilo'
```

Le icone appaiono in quest'ordine da sinistra: **Google Scholar, LinkedIn, Email, Instagram**.

Regole utili:

- L'**email** va scritta come indirizzo semplice, senza `mailto:` davanti: ci pensa il sito ad aggiungerlo. Cliccando l'icona si apre il programma di posta.
- Per **nascondere un'icona**, lascia le virgolette vuote: `instagram = ''`. Sparisce da sola, senza rompere nulla.
- I valori attuali sono **segnaposto** da sostituire (contengono scritte tipo `PROFILO-DA-INSERIRE`).

### C) Testo del copyright → `layouts/partials/footer.html`

In fondo alla pagina resta la riga di copyright che rimanda a *insertapps.com*, il sito dell'autore del tema. È l'unico testo del piè di pagina ancora da sistemare, e va cambiato nel file HTML: cerca la riga che contiene `Copyright` e sostituisci il testo e il link.

> Il sottotitolo in inglese e il paragrafo di *Lorem ipsum* che c'erano prima sono già stati rimossi.

### D) Il contenuto della pagina About → `content/about.md`

È ancora la presentazione del tema, che parla di una community di astronomia. Riscrivila da capo con le tue informazioni: il testo sotto il front matter puoi cancellarlo tutto.

### E) Le favicon → `static/`

L'iconcina che appare nella scheda del browser è ancora quella del tema (un uovo fritto). I file sono in `static/`: `favicon.svg`, `favicon.ico`, `favicon.png`, `favicon-32.png`, `favicon-64.png`. Sostituiscili mantenendo **esattamente gli stessi nomi**.

---

## 10. Attenzione: cose che sembrano funzionare ma non funzionano

Il tema mostrava alcuni elementi che erano **solo grafica**, senza nulla dietro: non erano un guasto, semplicemente non sono mai stati collegati a niente.

**Due sono già stati rimossi:**

- il **banner pubblicitario** nella colonna laterale, che mostrava un'immagine inesistente (errore 404);
- la **newsletter** in fondo alla home, il cui pulsante "Subscribe" non salvava l'indirizzo da nessuna parte.

**Ne resta uno:**

| Elemento | Cosa sembra | Cosa fa davvero |
|---|---|---|
| **Barra di ricerca** (in alto a destra) | Cercare nel sito | **Niente.** Si apre e si chiude, ma non cerca: non c'è nessun motore di ricerca collegato |

Se vuoi togliere anche quella, si trova in `layouts/partials/search.html` ed è richiamata da `layouts/partials/header.html`.

> Se in futuro ti serve una newsletter vera, servirà un servizio esterno (Mailchimp, Brevo e simili) che fornisce il modulo da incollare.

---

## 11. Trappole da conoscere

### La home mostra solo la categoria "astronomy"

Nella home c'è una sezione che mostra 3 articoli di una categoria **fissa, scritta nel codice**: `astronomy`.

Se cambi le categorie dei tuoi articoli (per esempio usi `viaggi` o `cucina`), **quella sezione della home resterà vuota**.

Per cambiarla apri `layouts/_default/home.html`, cerca questa riga:

```
{{ $cat := "astronomy" }}
```

e sostituisci `astronomy` con la tua categoria, mantenendo le virgolette.

### L'articolo in evidenza si sceglie con un tag

Il riquadro grande in cima alla home mostra **il primo articolo che ha il tag `feature`**. Per metterci un tuo articolo, aggiungi nel front matter:

```yaml
tags:
  - feature
```

Se nessun articolo ha quel tag, il riquadro semplicemente non compare.

### Non "correggere" i messaggi gialli di avviso

All'avvio vedrai `WARN deprecated: ... languageCode ... Use locale instead`.

**Lascialo stare.** Il servizio che pubblica il sito (Netlify) usa una versione di Hugo più vecchia di quella installata sul tuo computer, e in quella versione `locale` non esiste: la "correzione" **bloccherebbe la pubblicazione online**. È solo un avviso, non un errore.

### `hugo new` produce un formato diverso

Il comando `hugo new` funziona, ma genera una scheda iniziale con `+++` invece di `---`. Entrambi i formati sono validi, ma per coerenza **conviene copiare un file esistente** invece di usare quel comando.

---

## 12. Pubblicare le modifiche online

Il sito è pubblicato su **Netlify**, all'indirizzo configurato in `hugo.toml` alla voce `baseURL`.

La pubblicazione è **automatica**: Netlify tiene d'occhio il progetto su GitHub e ogni volta che arrivano modifiche ricostruisce il sito da solo, in un paio di minuti.

A te basta inviare le modifiche. Dal terminale, nella cartella del progetto:

```powershell
git add .
git commit -m "Aggiunto articolo sui viaggi"
git push
```

Tradotto:

1. `git add .` → prendi tutte le modifiche fatte
2. `git commit -m "..."` → dai un nome alle modifiche, scrivendo cosa hai cambiato
3. `git push` → mandale online

Poi aspetta un paio di minuti e ricarica il sito.

### Prima di pubblicare, controlla sempre

- [ ] `draft: false` su tutto quello che deve essere visibile
- [ ] Il sito si vede correttamente su http://localhost:1313/
- [ ] Il terminale non mostra scritte **rosse** (`ERROR`)

---

## 13. Problemi comuni

**"Ho scritto un articolo ma non lo vedo"**
Nove volte su dieci è `draft: true`: mettilo a `false`.
Controlla anche che la `date` non sia nel futuro: gli articoli con data futura non vengono pubblicati.

**"Il sito non si aggiorna nel browser"**
Ricarica forzando con `Ctrl + F5`.
Se hai modificato `hugo.toml`, a volte serve fermare il server con `Ctrl+C` e rilanciare `hugo server`.

**"Il terminale dice ERROR e il sito non si carica"**
Quasi sempre è un errore nella scheda iniziale: manca un `---`, oppure c'è un titolo con i due punti senza virgolette. Il messaggio d'errore indica il file e la riga. Annulla l'ultima modifica e riprova.

**"L'immagine non si vede"**
Il file è dentro `assets/images/`?
Nel front matter hai scritto `images/foto.jpg`, senza `assets/`?
Maiuscole e minuscole devono coincidere: `Foto.JPG` non è uguale a `foto.jpg`.

**"`hugo` non è riconosciuto come comando"**
Hai riaperto il terminale dopo l'installazione? È necessario.

**"Ho fatto un disastro e voglio tornare indietro"**
Per annullare **tutte** le modifiche non ancora inviate:

```powershell
git checkout .
```

Attenzione: cancella il lavoro non ancora salvato con `git commit`. Nel dubbio, prima chiedi aiuto.

---

## Crediti

Sito costruito con [Hugo](https://gohugo.io/) e il tema [Pehtheme Hugo](https://github.com/fauzanmy/pehtheme-hugo) di fauzanmy, rilasciato con licenza MIT (vedi il file `LICENSE`).

Le foto di esempio incluse nel tema provengono da [Unsplash](https://unsplash.com/) e [Pixabay](https://pixabay.com/). L'icona del logo è [Egg Fried](https://icons.getbootstrap.com/icons/egg-fried/) di Bootstrap Icons.
