---
title: 'Images '
summary: Using images within the post template or within the body of a post.
date: 2021-05-04
img: db-scores.png
alt: The most recent Lighthouse scores.
tags:
- cms
- images
draft: false
caption: An example of creating an image area in a template.

---
I set up the post template to conditionally display an image if there is a value in the "img" key in the post's front matter.

```html
  {% raw %}{% if img %}
    <img src="/img/{{ img }}" alt="{{ alt }}" loading="lazy" />
    {% if caption %}
    <span class="caption">{{ caption }}</span>
    {% endif %}
  {% endif %}{% endraw %}
```

In the post front matter I have "img", "alt" and "caption". Here's the front matter for this post...

```html
---
title: 'Images'
summary: Using images within the post template or within the body of a post.
date: 2021-05-04
img: db-scores.png
alt: The most recent Lighthouse scores
caption: An example of creating an image area in a template.
tags:
- cms
- images
draft: false
---
```

The "img" key uses Forestry's single [file upload component](https://forestry.io/docs/settings/fields/#file-upload) while "alt" and "caption use text fields. Using the file upload for the "img" field is a nice convenience, removing the step of navigating to the Media Library to upload and associate the image.

The image displayed at the top of the post of my ranking on the [Eleventy leaderboard](https://www.11ty.dev/speedlify/) has been added via this method.

![A sankey diagram with tooltip text that is too big.](/img/seven-times.png)

The image above showing a slightly messed up sankey diagram was added using a combination of the built in Media Library and the "insert image" flow in the WYSIYG editor.

![The WYSIWYG editor in Forestry CMS.](/img/insert-image.png)

You can also add images using markdown in the raw editor.

One downside of adding images directly in the body of the post via "insert image" is that the images don't include lazy loading. In my [Snippets post](/posts/snippets/) I created a snippet to include an image that uses loading="lazy".