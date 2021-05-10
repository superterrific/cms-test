---
draft: true
tags:
- cms
- dates
title: Date field
summary: A variety of options for your date field.
date: 
img: ''
alt: ''
caption: ''

---
I use a date field in my front matter rather than using the [default file created date in Eleventy](https://www.11ty.dev/docs/dates/). There are a few ways to set it up in Forestry.

One is option is to use the [Date Field component](https://forestry.io/docs/settings/fields/datetime/). By default this includes the date and the time, but you can set it up to use only one or the other by leaving them blank. They are blank by default, so if you'd like to only use date, add your preferred format and leave time blank. Below is an example of my settings.

![Date field format settings showing a format supplied for date but not time.](/uploads/date-settings.png)

One downside of this date picker is that you can't easily type in the date in the date, you have to use the picker. This makes keyboard entry hard because I couldn't find a way to select the date using the keyboard, 