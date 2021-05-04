---
title: Using Eleventy data files for frequently used links
summary: Have a set of frequently referenced links? A global data file can come in
  handy.
tags:
- Eleventy
- Data
date: 2021-03-16T19:47:07Z

---
[This useful post on maintaining utility class components](https://chriskirknielsen.com/blog/building-and-maintaining-components-from-utility-classes-in-eleventy/) recently made its way into my timeline, inspiring me to write up a similar approach I used to make maintaining this site a little easier.

One of the fun things about creating this site was playing with different approaches, especially with regard to data. In [Learn Eleventy from Scratch](https://piccalil.li/course/learn-eleventy-from-scratch/) there are several useful examples of how to push the envelope with front matter, data files and remote data. This helped me keep those ideas in mind as I played around with how to build this site.

As I was writing up the [Projects](/projects/) section it didn't take long to realize that I was going to be referencing my go-to tools like [Airtable]({{tools.airtable}}) frequently, so using [Eleventy's handy global data](https://www.11ty.dev/docs/data-global/) feature I created a tools.json file in the {% raw %}_data{% endraw %} directory.

And here's a sample paragraph in the markdown file from the [Horse Racing Datasets]({{ projectPages.hrds }}) project page:


This was an excellent time and annoyance saver! I also created a json file for links to my various accounts, as well as one to manage projects on landing pages, more on that one later.

In the meantime if there's anything you reference with regularity, storing it in a json file in your {% raw %}_data{% endraw %} directory can make things a little easier!