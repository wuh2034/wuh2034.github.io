# wuh2034.github.io

Personal site — [wuh2034.github.io](https://wuh2034.github.io)

Plain static HTML/CSS/JS, no build step. GitHub Pages serves it straight from `main`.

## Structure

```
index.html                 home — hero, about, featured projects, education, experience
projects.html              all projects (cards are copied from index.html)
projects/*.html            one page per project
assets/css/style.css       all styling; colours are CSS variables at the top
assets/js/boot.js          applies the saved theme before first paint
assets/js/main.js          dark-mode toggle
assets/img/                images and videos
.nojekyll                  serve files as-is, no Jekyll processing
```

## Editing

- **Colours / spacing** — the `:root` and `:root[data-theme="dark"]` blocks at the top of `style.css`.
- **Adding a project** — copy an `<article class="card project">` block into `index.html` *and* `projects.html`
  (the two lists are separate copies), then duplicate any file in `projects/` for the detail page.
- **Images** — put them in `assets/img/`. Prefer MP4 over GIF for anything animated; a 8 MB GIF becomes
  a ~200 KB MP4:
  ```bash
  ffmpeg -i in.gif -movflags faststart -pix_fmt yuv420p -crf 26 out.mp4
  ```

## Local preview

```bash
python3 -m http.server 4321
```
