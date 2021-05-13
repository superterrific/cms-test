---
draft: false
tags:
- cms
- dates
title: Date field
summary: A couple of options for your date field.
date: 2021-05-06
img: ''
alt: ''
caption: ''

---
I use a date field in my front matter rather than using the [default file created date in Eleventy](https://www.11ty.dev/docs/dates/). There are a few ways to set it up in Forestry.

One is option is to use the [Date Field component](https://forestry.io/docs/settings/fields/datetime/). By default this includes the date and the time, but you can set it up to use only one or the other by leaving them blank. They are blank by default, so if you'd like to only use date, add your preferred format and leave time blank. Below is an example of my settings.

<img src="/img/date-settings.png" alt="Date field format settings showing a format supplied for date but not time." loading="lazy">

A notable downside of this date picker is that you can't type in the date, or at least I couldn't find a way to do it. This means that you have to use the mouse to interact with the picker, which makes it inaccessible for keyboard users.

<img src="/img/date-picker.png" alt="Using a mouse or pointing device to select a date rather than typing it." loading="lazy">

Another option is to use a text field and always type it in.