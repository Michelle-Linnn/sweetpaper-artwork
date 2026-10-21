# sweetpaper lab

The experimental lab site for sweetpaper studio. Plain static HTML/CSS/JS, nothing to install.

## Open it
Double-click `index.html` to view it in a browser. You can also push the folder to GitHub and publish it with GitHub Pages.

## Structure
- `index.html`: home page (hero, lab grid with theme filter, studio intro, founder section)
- `assets/labs.js`: the list of all labs. **Edit only this file to add or change a lab card.**
- `assets/style.css`, `assets/main.js`: home page styles and logic
- `assets/lab.css`: shared styles for lab pages
- `labs/<name>/index.html`: each lab is its own page
- `labs/_template/`: starting point for a new lab

## Add a lab
1. Duplicate `labs/_template` and rename it, e.g. `labs/my-lab`
2. Update the title, number and hint in the page, then write the experiment
3. Add an entry to `assets/labs.js` with `id: "my-lab"` and a `theme` (new themes show up in the filter bar automatically)

Entries with `status: "soon"` render as "Coming soon" placeholder cards. Cards appear in the order they are listed.

## Founder link
The founder section and footer link to https://wenjielin.com. Change it in `SWEETPAPER_FOUNDER` at the bottom of `assets/labs.js`.
