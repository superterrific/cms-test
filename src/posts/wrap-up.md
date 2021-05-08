---
title: Wrap up
summary: 'I''ve sufficiently tested this CMS, here are my notes. '
date: 2021-05-07
tags:
- cms
img: ''
alt: ''

---
Now that I've gotten the site set-up and the CMS integrated I have a good idea of the pros and cons.

First I created the site locally including some content pages with tags, static pages and pagination. Then I uploaded it to GitHub and imported it. From there I played around with a variety of settings and approaches.

## Positives

* Getting up and running is easy when importing a site.
* If you're familiar with CMSs in general the configuration of setting up directories and pages is straightforward.
* There seems to be a good amount of flexibility for setting up frontmatter and creating snippets.


Here's a look at the three major activities or features.

## Set Up

It was easy to set up! Without reading any instructions I used the "import your site" flow and was up and running quickly.

* Set up
* Editing
* Features / Settings

* Easy to set up, I didn't read any instructions and used the "add your site" flow and was up and running quickly. I made a whoopsie and it took my a while to get preview working, but it would've just worked had I not flubbed dependencies in package.json
* I don't love the editing interface but not a deal breaker
  * Would like to be able to set the post listing in the admin to default to listing by date
  * Would like the publish date to display in the post listing page, even better would be to figure what fields from the post template frontmatter display on the listing page
* I set new posts to use markdown and they still default to html
* Preview is a little slow and quirky, I think if I were making a site for someone coming from WordPress they would find that annoying
* Would be nice if images added within the body of a post used lazy loading