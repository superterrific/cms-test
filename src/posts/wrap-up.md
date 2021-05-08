---
title: Wrap up
summary: 'I''ve sufficiently tested this CMS, here are my notes. '
date: 2021-05-07
tags:
- cms
img: ''
alt: ''

---
Now that I've gotten the site set-up, the CMS integrated and played around a bit I have a good idea of the pros and cons.

First I created the site locally including some content pages with tags, static pages and pagination. Then I uploaded it to GitHub and imported it. From there I played around with a variety of settings and approaches.

## Likes

For the most part I think there's a lot to like, especially that's it easy to set up.

* Getting up and running is easy when importing a site.
* If you're familiar with CMSs in general the configuration of setting up directories and pages is straightforward.
* There seems to be a good amount of flexibility for setting up front matter and creating snippets.

## Dislikes

There were just a few small things I didn't like or wished I could configure. I think it's an OK trade-off for the simplicity and easy set-up. Ultimately I wouldn't want to author in the editing interface but I think it could be a suitable set-up when creating sites for non-techy people.

* I don't love the editing interface but it grew on me a bit after using it for awhile. One real annoyance though is the bullet point color in the raw editor is too light and hard to read. It's also only 1.3 contrast ratio, falling far below the 4.5 ratio needed for WCAG compliance.
* I'd like to be able to customize or control a few more things:
  * Set default display of files in a directory to display by date, newest first. You can change it to date but it defaults to alphabetical by title.
  * Ability to display values from front matter fields in the directory listing page, for example also displaying value in "date" field or "tags".
* It would be nice if images added to the body of a post included lazy loading. I created a snippet for images as a work around but that takes away from the ease of use of adding an image.
* Would be nice to be able to set the default editor to raw rather an WYSIWYG.
* When creating bullet lists using the WYSIWYG editor, the content within the line item is set in a p tag.

## One more test

Now I'm going to deploy to [Netlify](https://netlify.com) and see how publishing and the previews work. Now it's deployed! Going to test the preview on this post. Preview worked fine!