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

---
I set up the post template to conditionally display an image if there is a value in the "img" key in the post's front matter.

```html
  {% raw %}{% if img %}
    <img src="/uploads/{{ img }}" alt="{{ alt }}" loading="lazy" />
  {% endif %}{% endraw %}
```

In the post front matter I have an "img" and an "alt" key where I plug in the the image name and an alt tag, pictured below.

![Screenshot of the img and alt fields in the post template](/uploads/screen-shot-2021-05-09-at-19-52-55.png)

The image displayed at the top of the post of my ranking on the [Eleventy leaderboard](https://www.11ty.dev/speedlify/) has been added via this method. The image above showing the "img" and "alt" fields within the Forestry editing interface was added using the Media library. I uploaded the image to the Media Library and added it to the post using "insert image" method in the WYSIWYG editor.

![The WYSIWYG editor in Forestry CMS.](/uploads/insert-image.png)

You can also add images using markdown in the raw editor.

One downside of adding images directly in the body is the images don't include lazy loading. In my [Snippets post](/posts/snippets/) I created a snippet to include an image that uses loading="lazy", you could also use it add class selectors to images.