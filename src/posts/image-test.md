---
title: 'Images '
summary: Using images within the post template or within the body of a post.
date: 2021-05-04
img: db-scores.png
alt: The most recent Lighthouse scores
tags:
- cms
- images
draft: false
upload: ''
caption: An example of creating an image area in a template.

---
I set up the post template to conditionally display an image if there is a value in the "img" key in the post's front matter.

```html
  {% raw %}{% if img %}
    <img src="/uploads/{{ img }}" alt="{{ alt }}" loading="lazy" />
  {% endif %}{% endraw %}
```

In the post front matter I have an "img" and an "alt" key where I plug in the the image name and an alt tag. The "img" key uses Forestry's single file upload component and "alt" uses a text field. The image displayed at the top of the post of my ranking on the [Eleventy leaderboard](https://www.11ty.dev/speedlify/) has been added via this method. 

![A sankey diagram with tooltip text that is too big.](/uploads/seven-times.png)

The image above showing a slightly messed up sankey diagram was added using a combination of the built in Media Manager and the "insert image" flow in the WYSIYG editor.

![The WYSIWYG editor in Forestry CMS.](/uploads/insert-image.png)

You can also add images using markdown in the raw editor.

One downside of adding images directly in the body is the images don't include lazy loading. In my [Snippets post](/posts/snippets/) I created a snippet to include an image that uses loading="lazy", you could also use it add class selectors to images.