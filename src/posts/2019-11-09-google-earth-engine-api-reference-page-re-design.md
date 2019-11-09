---
title: Google Earth Engine API reference page re-design
date: '2019-11-09'
thumbnail: /assets/images/design/google_earth_engine.jpg
excerpt: >-
  I conducted an usability review of the Google Earth Engine API docs site which
  I use a lot when doing research at the university. After that I re-designed an
  important page on the website to be more developer-friendly.
type: devportal
---
Overall, I can say that Google did a good job with the docs site, but there are a small number of issues with high severity which could be mitigated with low effort.

The Google Earth Engine documentation site has a 2-column layout:
- side navigation: 25% width
- main content: 75% width

## Side navigation

The side navigation has content that is correctly grouped into sections. Easy to navigate. The User Guide part is well done!

## Main content

### Pros

* Social media (Youtube, Twitter) and useful links (Stackoverflow, Github, Medium) at the bottom of each page which provide additional help for the users

* Breadcumbs are present to inform the user where is he or she on the website.

* Dark / light mode switch present for syntax highlighing.

* Copiable code snippets, easy to paste it into Google Earth Engine Code Editor.

* Back-to-top arrows at all of the headings to make navigation faster.

* Copy link button at every section heading (#anchor links) makes easier to share an imporant section with another developer who might need a help related to that section.

* Highlighted warning messages present to have people pay attention to common coding mistake, or misconceptions about how some things work.

* Also, there are highly important notes.

* Info messages provide additional information and remarks.

* The site provides debugging guide which is decent enough.

* In additions, at some pages, there is also video content, like presentations, teachings, tutorials etc., available.

* Changelog is present at The API Reference page. Maybe add highlighting when there is a new change in the API.

* Transition guide is present. Some features are deprecated and replaced with different features. It provides help for transitioning to the new syntax.

### Cons

There are two high severity usability issues and none of them have to do anything with visual design.

#### Issue No. 1.
The API reference page loads very slowly. Content is dynamically generated. Load times are between 20-30 secs, very bad  developer experience! There is loading animation, but it does not reduce the frustration of having to wait all the time when I want to search for a method to use in my scripts.

#### Issue No. 2.
All of the available objects, methods, functionalities are listed on one single page in alphabetical order. With no grouping at all And 1.569 terms are in the API! There is no search field for the API terms. The searchbar at the header is a global one, so it applies to the whole docs website, and it does not give back the link to the specific API term I am searching for. Rather it gives search results from the Guide pages.

### The solution was easy

**Grouping.** That is it. The 1.569 API items can be grouped into 3 sections:
1. Server-side objects and their methods (30 subitems)
2. Client side objects, functions (5 subitems)
3. User interface elements (15 subitems)

User can see the whole picture this way; what kind of functionality the could use for the underlying data.

**Add separate searchbar** for the API reference to easily navigate to the right section the developer is looking for.







