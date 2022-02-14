---
title: Wrap up
summary: 'I''ve sufficiently tested this CMS, here are my notes. '
date: 2021-05-12
tags:
- cms
img: ''
alt: ''
draft: false
caption: ''

---
Now that I've made this little site I have good idea of the plusses and minuses of Forestry with Eleventy. As I mentioned in the [first post](/posts/kicking-it-off), I created a simple Eleventy site locally, uploaded it to GitHub and imported it to Foresty via the "Import site" flow. From there I created a bunch of posts, tried a bunch of things and figured out what Forestry has to offer.

I wrote [several posts](/posts/) about specific features, such as [using snippets](/posts/snippets), [images](/posts/images) and [setting up drafts](/posts/drafts). I didn't try everything that Forestry has to offer, but what I did try worked well with a few notable issues.

My goal was to learn about Forestry so I can decide whether or not it'll be suitable for non-techy people who need to maintain content. For my own sites I have a nice content creation flow that starts in [Obsidian](https://obsidian.md) and then moves to my editor ([Atom](https://atom.io)), and I'm not looking to replace that.

## Likes

For the most part I think there's a lot to like, especially that's it easy to set up.

* Getting up and running is easy when importing a site.
* If you're familiar with CMSs in general the configuration of setting up directories and pages is straightforward.
* There seems to be a good amount of flexibility for setting up front matter, creating snippets, etc.

## Dislikes

There were just a few small things I didn't like or wished I could configure. I also found at least two accessibility issues, but found alternatives or workarounds.

* The front matter [Date Time field component](/posts/date-field/) cannot be used with keyboard, but a text field for manual date entry can be used as an accessible approach.
* In both the WYSIWYG and raw editor, the light green link and bullet point color is too light, only a 1.3 contrast ratio, falling far below the 4.5 ratio needed for WCAG compliance. I used the Stylus plugin available for [Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) to change that color to something accessible and easier to read and would do the same for any client I set up to use Forestry.
* I'd like to be able to customize a few things:
  * Set the default display of files in a directory (e.g., the Posts listing page) to display by date, newest first. You can change it to date but it defaults to alphabetical by title.
  * Ability to display values from front matter fields in the directory listing page, for example displaying a post's [draft status](/posts/drafts).
* It would be nice if images added to the body of a post included lazy loading. I created a [snippet](/posts/snippets) for images as a work around but that takes away from the ease of use of adding an image.
* It would be nice to be able to set the default editor to raw rather an WYSIWYG.
* It would be nice to be able to delete multiple files from directory at once rather than one at a time.

I'll use this site if I test any other CMSs. I might test an API-based one, like [Sanity](https://sanity.io). I might also test [Netlify's Git-based option](https://www.netlifycms.org/).