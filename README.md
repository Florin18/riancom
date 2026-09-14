# Riancom '92

Website static de prezentare pentru RIANCOM SRL, pregătit pentru GitHub și Vercel.

## Dezvoltare locală

Proiectul nu are dependențe și nu necesită build.

```powershell
node server.mjs
```

Site-ul va fi disponibil la `http://127.0.0.1:4173`.

## Fișiere publicate

- `index.html`
- `styles.css`
- `script.js`
- `favicon.svg`
- `assets/fonts/`
- `assets/images/`
- `vercel.json`

Fotografiile originale din `poze/`, capturile de audit și documentația internă sunt excluse din deployment. Imaginile selectate și optimizate sunt în `assets/images/`.

## Publicare în repository-ul GitHub

1. Creează repository-ul gol `riancom` în contul `Florin18`.
2. Nu adăuga din GitHub README, `.gitignore` sau licență; proiectul le conține deja.
3. Din rădăcina proiectului rulează:

```powershell
git remote add origin https://github.com/Florin18/riancom.git
git push -u origin main
```

## Import în Vercel

În Vercel, folosește **Add New → Project**, apoi importă `Florin18/riancom`.

Setări:

- Framework Preset: `Other`
- Root Directory: `.`
- Build Command: necompletat
- Output Directory: necompletat
- Environment Variables: niciuna

Fiecare push pe `main` va crea un deployment de producție, iar branch-urile și pull request-urile vor primi preview deployments.

## După primul deployment

După stabilirea domeniului final trebuie actualizate în `index.html`:

- URL-ul canonical;
- `og:url`;
- URL-ul absolut pentru `og:image`.

