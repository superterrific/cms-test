---
title: Snippets
summary: Adding snippets for repetitive entry.
date: 2021-05-06
tags:
- snippets
- cms
img: ''
alt: ''
draft: false
upload: ''

---
I created a couple of [snippets](https://forestry.io/docs/settings/snippets/), which are similar to [Eleventy shortcodes](https://www.11ty.dev/docs/shortcodes/). The difference is that they're only accessed in the WYSIWYG editor rather than in markdown.

## Image snippet

I created a snippet to ensure that images within the body of a post use lazy loading, but it could also be useful for applying a class selector to the image if necessary.

<img src="/uploads/diagram-airtable.png" alt="A diagram showing data coming from Airtable" loading="lazy">

## Table snippet

Tables come in handy sometimes!

| Header | Header | Header |
| --- | --- | --- |
| Cell | Cell | Cell |
| Cell | Cell | Cell |
| Cell | Cell | Cell |