# BloBizWeb: the index

## About
description: The static website of Bloome Business Analytics, whose CNAME names bloomebusiness.com: one page, index.html, styled from css/ and scripted from js/, with its own fonts and images.
aim: To present Bloome Business's consultancy (its process, toolkit and results) and let a visitor ask for a consultation through a contact form that opens an email to the Bloome team.
numerical_result_summary: 1 page of 6 sections, 1 stylesheet, 1 script, 2 fonts, 2 images; npm's 1 dependency, puppeteer, fills node_modules/ with 2,227 tracked files.

## Contents
- `css/` — style.css, the page's one stylesheet: its fonts, colours, layout and the breakpoints at 980 and 600 pixels.
- `fonts/` — The Madefor Text typeface in regular and bold, as the woff2 files the stylesheet loads.
- `images/` — The Bloome Business logo in the page header and the smaller logo the browser tab shows.
- `js/` — main.js, the page's one script: the contact form's email draft, the header that hides on scrolling down, and the mobile menu toggle.
- `site/` — An empty folder that no file in the repository refers to.
- `package*.json` — npm's manifest and lockfile, whose one dependency, puppeteer, no file outside node_modules/ uses.
