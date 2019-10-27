---
title: Implement search for my static documentation website with Algolia / DocSearch
date: '2019-10-27'
thumbnail: /assets/images/design/tiger_cover_min.jpg
excerpt: >-
  If you are a JAMStack enthusiast having a static website set up for
  documentation, you certainly have thought about adding search functionality to
  it. With Algolia / DocSearch you can easily accomplish this task for free.
  Case study.
type: blog
---
I am trying to sum up my UI design workflow, e.g. the set of principles, tricks I use, guideline I follow etc. In order to speed up and make my design proccess more effective. So, I am working on a **design language system** of a kind called CAT.

**CAT** is based on three pillars:
- Common sense (hold on to conventions, keep good practices worked in the past)
- Adaptibility (to the newest trends, open to new ideas, concepts, and innovations)
- Timelessness design (combine common sense with adaptibility to be always up-to-date)

[The CAT website](https://cat-design-system.netlify.com/) is completely a static one and is made with my static site generator called [“static-site-express”](https://static-site-express.netlify.com/).

The search functionality and a customizable UI theme for it is kindly provided by [Algolia / DocSearch](https://community.algolia.com/docsearch/). DocSearch is free to use and for open source projects only, mainly for API or other documentation. Thank you guys and gals @Algolia and @DocSearch! Great Developer Experience.

Let's take a look at [how easy it is to “install” DocSearch for your website](https://community.algolia.com/docsearch/how-does-it-work.html#you-apply):

1. You need to apply for DocSearch by [filling out the form on this page](https://community.algolia.com/docsearch/apply.html). They will double check that you qualify.

2. The people at DocSearch will create a configuration json file for your website ([they will push this file to a GitHub repository](https://github.com/algolia/docsearch-configs/blob/master/configs/cat-design-system.json)). DocSearch will crawl your website content and sents it to Algolia for indexing.

3. Lastly, add two JavaScript snippets to your website and bind your search input field to display results from your Algolia index. See the examples:

````html
<!-- at the end of the HEAD -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css" />
````

````html
<input id="docsearch" class="form-control mr-sm-2" type="search" placeholder="Search for..." aria-label="Search for">
````

````html
<!-- at the end of the BODY -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"></script>
<script type="text/javascript"> docsearch({
apiKey: '80f5f598e83f70ff70762ae1b54836e6',
indexName: 'cat-design-system',
inputSelector: '### REPLACE ME ####',
debug: false // Set debug to true if you want to inspect the dropdown
});
</script>
````
This script invokes the `docsearch()` function with an object literal containing properties as an argument.

This project will be updated continously. Check out [the project's website](https://cat-design-system.netlify.com) if you are interested.

In the future, I am planning to learn more about serverless functions like [AWS Lambda functions inside Netlify cloud platform](https://www.netlify.com/products/functions/). Netlify allows you to use them without an AWS account. You can extend the functionality of a static site with functionalities dynamic websites have, e.g. search, authentication, login, payment options etc.
