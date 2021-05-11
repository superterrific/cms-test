---
draft: false
date: 2021-05-07
tags:
- cms
- drafts
title: Drafts
summary: I have a draft post sitting in the admin area, and you'd never know it!
img: ''
alt: ''
caption: ''

---
Forestry provides [Previews](https://forestry.io/docs/previews/about-previews/) that are [relatively easy to set up](https://forestry.io/docs/previews/instant-previews/). Hugo and Jekyll have [draft capability](https://forestry.io/docs/editing/markdown-editor/#drafting-and-publishing-content) built in, but with Eleventy you'll need to roll your own. If I can do it so can you!

There are plenty of posts about how to [schedule posts](https://remysharp.com/2019/06/26/scheduled-and-draft-11ty-posts) or [hide future content](https://www.raymondcamden.com/2020/08/07/hiding-future-content-with-eleventy) in Eleventy.

I ended up using an approach that uses environment and a boolean draft field in front matter to [filter out posts with draft: "true"](https://11ta.netlify.app/2020/09/20/v110-brings-draft-posts/), but I also [tried a similar one](https://rusingh.com/2020/05/14/eleventy-exclude-draft-collection-items-programmatically/) that flips permalink to "false".

The permalink approach, which is used in Ru Singh's [Forestry Eleventy starter Smix](https://github.com/hirusi/smix-eleventy-starter), worked for me with the exception that it would publish post to the post listing page, but the permalink would be false, so clicking on the link led to the 404. I think a more seasoned JavaScript person could've figured out how to address that, but I couldn't.

This brought me to the filtering approach. First I set up a draft field in Forestry and set it to default to true. This ensures that any new posts will not inadvertently be published to production.

In eleventy.js I modified my collections to the following...

```js
  config.addCollection('posts', collection => {
    if (process.env.ELEVENTY_ENV !== 'production')
      return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
    else
      return [...collection.getFilteredByGlob('./src/posts/*.md')].filter((post) => !post.data.draft).reverse();
  });
```

And added this to my netlify.toml (which I picked up from the [Smix starter](https://github.com/hirusi/smix-eleventy-starter))...

```html
[context.production.environment]
  ELEVENTY_ENV = "production" # excludes Forestry drafts from production build
```

And so far so good 🎉

As long as the post is set to "draft" it's viewable in the Preview site but doesn't "publish" to production. I have a test post that I've updated and saved a couple of times to test it out. I also set a previously published post to draft and that worked too.

Here's my draft post that will remain drafted...

![A post in draft status.](/uploads/staying-drafted.png)