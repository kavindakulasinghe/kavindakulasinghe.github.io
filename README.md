# Kavinda Kulasinghe — Personal Portfolio

Personal academic portfolio for [Kavinda Kulasinghe](https://kavindakulasinghe.github.io), PhD Researcher in Information Systems at the University of Oulu, Finland.

## Live Site

[kavindakulasinghe.github.io](https://kavindakulasinghe.github.io)

## Pages

| Page | Description |
|---|---|
| `index.html` | Home — hero, about, research interests, education & work timeline, affiliations |
| `publications.html` | Peer-reviewed publications with metrics |
| `awards.html` | Awards and recognition |
| `contact.html` | Contact links and social profiles |

## Tech Stack

- **Plain HTML/CSS/JS** — no frameworks, no build tools
- **Google Fonts** — Syne, DM Sans, Epilogue, Barlow Condensed, Outfit, Fraunces
- **Canvas API** — animated floating React-icon background on page banners
- **Deployed via GitHub Pages**

## Project Structure

```
kavindakulasinghe.github.io/
├── index.html
├── publications.html
├── awards.html
├── contact.html
├── style.css          # Shared styles (tokens, nav, banner, footer)
├── main.js            # Shared JS (nav scroll, mobile menu, canvas animation)
└── images/
    ├── hero-bg.jpg
    ├── profile.jpg
    ├── oulu.png
    ├── acm-logo.png
    └── ...
```

## Development

No build step required. Open any `.html` file directly in a browser, or use a local server:

```bash
npx serve .
# or
python -m http.server 8080
```

## Deployment

Pushes to `main` automatically deploy via GitHub Pages. The live site updates within ~1 minute of a push.

## Research Areas

Persuasive Technologies · AI in Healthcare · Behaviour Change · Digital Health Interventions · Human–AI Interaction
