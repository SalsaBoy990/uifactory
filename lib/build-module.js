module.exports = function () {
  'use strict'
  const log = require('./utils/logger')

  // store start time
  const startTime = process.hrtime()

  // logger funtion on command line with styling
  log.info('Building site...')

  // load utility functions
  const ssg = require('./utils/utils')

  // file system module with extended functionality
  const fse = require('fs-extra')
  const path = require('path')

  // search for matching files, returns array of filenames
  const glob = require('glob')

  // site configuration properties
  const config = require('../site.config')

  // source directory
  const srcPath = './src'
  // destination folder to where the static site will be generated
  const distPath = './public'

  // renders ejs layouts to html
  const ejsRender = require('ejs').render

  // render markdown to HTML
  const md = require('markdown-it')({
    html: true
  })
  const implicitFigures = require('markdown-it-implicit-figures')
  const markdownItTable = require('markdown-it-multimd-table')
  const markdownItSup = require('markdown-it-sup')
  const markdownItSub = require('markdown-it-sub')
  const markdownItAttrs = require('markdown-it-attrs')
  const markdownItHighlightjs = require('markdown-it-highlightjs')
  const markdownItVideo = require('markdown-it-video')
  const markdownItPodcast = require('markdown-it-podcast')

  md.use(markdownItTable)
  md.use(markdownItSup)
  md.use(markdownItSub)
  md.use(markdownItAttrs)
  md.use(implicitFigures, {
    dataType: false, // <figure data-type="image">, default: false
    figcaption: true, // <figcaption>alternative text</figcaption>, default: false
    tabindex: false, // <figure tabindex="1+n">..., default: false
    link: false // <a href="img.png"><img src="img.png"></a>, default: false
  })
  md.use(markdownItHighlightjs)
  md.use(markdownItVideo, {
    youtube: { width: 560, height: 315 }
  })
  md.use(markdownItPodcast, {
    url: '',
    height: 240,
    auto_play: false,
    hide_related: true,
    show_comments: true,
    show_user: true,
    show_reposts: false,
    visual: true
  })

  // clear destination folder first, it needs to be synchronous
  fse.emptyDirSync(distPath)

  // copy assets folder (contains images, scripts and css) and favicon folder to destination
  ssg.copyAssetsFaviconFolders(srcPath, distPath)

  // copy _headers file to the root of /public folder
  ssg.copyRootFile('_headers', srcPath, distPath)

  // copy _redirects file to the root of /public folder
  ssg.copyRootFile('_redirects', srcPath, distPath)

  // copy robots.txt file to the root of /public folder
  ssg.copyRootFile('robots.txt', srcPath, distPath)

  // copy sitemap.xml file to the root of /public folder
  ssg.copyRootFile('sitemap.xml', srcPath, distPath)

  // copy google516a68c0c3ff5302.html file to the root of /public folder
  ssg.copyRootFile('google516a68c0c3ff5302.html', srcPath, distPath)

  // copy admin folder to the root of /public folder
  ssg.copyAdminFolder(srcPath, distPath)

  // Store the paths to the works for the links in the index page
  const worksDataForIndexPage = []

  // Build the works
  // cwd: current working directory
  const workFiles = glob.sync('**/*.@(ejs|md)', {
    cwd: `${srcPath}/works`
  })

  try {
    workFiles.forEach((file) => {
      const fileData = path.parse(file)

      // generate canonical url for the post
      const canonicalUrl = ssg.generateCanonicalURL(fileData, config)

      // generate postid for the post (needed for disqus)
      const postId = ssg.generatePostId(fileData)

      // make output directories for the works
      const destPath = path.join(distPath, fileData.dir)
      fse.mkdirsSync(destPath)

      // file path
      const pathToFile = `${srcPath}/works/${file}`

      // read data from file and then render post
      const postData = ssg.getPostDataFromMarkdown(pathToFile)

      const lang = 'hun'
      let months
      if (lang === 'eng') {
        months = [
          'Jan', 'Feb', 'Mar',
          'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep',
          'Oct', 'Nov', 'Dec'
        ]
      } else {
        months = [
          'január', 'február', 'március',
          'április', 'május', 'június',
          'július', 'augusztus', 'szeptember',
          'október', 'november', 'december'
        ]
      }

      // change date format
      const dateFormatted = ssg.convertDateFormat(postData, pathToFile, months, lang)

      // convert md to HTML
      const postContents = md.render(postData.body)

      let postExcerptShortened = postData.attributes.excerpt
      postExcerptShortened = postExcerptShortened.toString()
      postExcerptShortened = postExcerptShortened.substring(0, 251) + '...'
      // console.log(encodeURI(postExcerptShortened))

      const templateConfig = Object.assign({}, config, {
        title: postData.attributes.title,
        date: dateFormatted,
        thumbnail: postData.attributes.thumbnail,
        hexagonImage: postData.attributes.hexagonImage,
        excerpt: postData.attributes.excerpt,
        excerptShortenedEncoded: encodeURI(postExcerptShortened),
        type: postData.attributes.type,
        category: postData.attributes.category,
        expertise: postData.attributes.expertise,
        platform: postData.attributes.platform,
        deliverables: postData.attributes.deliverables,
        website: postData.attributes.website,
        body: postContents,
        canonicalUrl: canonicalUrl,
        canonicalUrlEncoded: encodeURI(canonicalUrl),
        postId: postId,
        postTitleMeta: postData.attributes.title + ' | ' + config.site.title,
        postTitleMetaEncoded: encodeURI(postData.attributes.title + ' | ' + config.site.title),
        linkedin: config.site.linkedin,
        email: config.site.email,
        facebook: config.site.facebook,
        cv: config.site.cv
      })

      // save postdata for the index page
      ssg.savePostDataForIndexPage(fileData, dateFormatted, postData, worksDataForIndexPage, 'works')

      // read layout data from file and then render layout with post contents
      const layoutContent = ejsRender(fse.readFileSync(`${srcPath}/layouts/design-item.ejs`, 'utf-8'),
        templateConfig, { filename: `${srcPath}/layouts/design-item.ejs` })

      // save the rendered blogposts to destination folder
      ssg.saveBlogpostsHTML(fileData, destPath, layoutContent)
    })
    console.log('Works OK...')
  } catch (err) {
    console.error(err)
    console.error('Build works failed...')
  }

  let workArchive = []

  // get the postsData for the archive on the index page grouped by year
  ssg.getDataForArchive(worksDataForIndexPage, config, workArchive)

  // Store the paths to the blogposts for the links in the index page
  let postsDataForIndexPage = []
  let newsDataForNewsPage = []

  // Build the blogposts
  // cwd: current working directory
  const blogpostFiles = glob.sync('**/*.@(ejs|md)', {
    cwd: `${srcPath}/posts`
  })

  try {
    blogpostFiles.forEach((file) => {
      const fileData = path.parse(file)

      // generate canonical url for the post
      const canonicalUrl = ssg.generateCanonicalURL(fileData, config)

      // generate postid for the post (needed for disqus)
      const postId = ssg.generatePostId(fileData)

      // make output directories for the posts
      const destPath = path.join(distPath, fileData.dir)
      fse.mkdirsSync(destPath)

      // file path
      const pathToFile = `${srcPath}/posts/${file}`

      // read data from file and then render post
      const postData = ssg.getPostDataFromMarkdown(pathToFile)

      const lang = 'hun'
      let months
      if (lang === 'eng') {
        months = [
          'Jan', 'Feb', 'Mar',
          'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep',
          'Oct', 'Nov', 'Dec'
        ]
      } else {
        months = [
          'január', 'február', 'március',
          'április', 'május', 'június',
          'július', 'augusztus', 'szeptember',
          'október', 'november', 'december'
        ]
      }

      // change date format
      const dateFormatted = ssg.convertDateFormat(postData, pathToFile, months, lang)

      // convert md to HTML
      const postContents = md.render(postData.body)

      let postExcerptShortened = postData.attributes.excerpt
      postExcerptShortened = postExcerptShortened.toString()
      postExcerptShortened = postExcerptShortened.substring(0, 251) + '...'
      // console.log(encodeURI(postExcerptShortened))

      const templateConfig = Object.assign({}, config, {
        title: postData.attributes.title,
        date: dateFormatted,
        thumbnail: postData.attributes.thumbnail,
        excerpt: postData.attributes.excerpt,
        excerptShortenedEncoded: encodeURI(postExcerptShortened),
        category: postData.attributes.category,
        body: postContents,
        canonicalUrl: canonicalUrl,
        canonicalUrlEncoded: encodeURI(canonicalUrl),
        postId: postId,
        postTitleMeta: postData.attributes.title + ' | ' + config.site.title,
        postTitleMetaEncoded: encodeURI(postData.attributes.title + ' | ' + config.site.title),
        linkedin: config.site.linkedin,
        email: config.site.email,
        facebook: config.site.facebook,
        cv: config.site.cv
      })

      // save postdata for the index page
      ssg.savePostDataForIndexPage(fileData, dateFormatted, postData, postsDataForIndexPage, 'posts')

      // read layout data from file and then render layout with post contents
      const layoutContent = ejsRender(fse.readFileSync(`${srcPath}/layouts/blog-item.ejs`, 'utf-8'),
        templateConfig, { filename: `${srcPath}/layouts/blog-item.ejs` })

      // save the rendered blogposts to destination folder
      ssg.saveBlogpostsHTML(fileData, destPath, layoutContent)
    })
    console.log('Blogposts OK...')
  } catch (err) {
    console.error(err)
    console.error('Build blogposts failed...')
  }

  let blogArchive = []

  // get the postsData for the archive on the index page grouped by year
  ssg.getDataForArchive(postsDataForIndexPage, config, blogArchive)
  // console.log(blogArchive)

  // Build the news
  // cwd: current working directory
  const newsFiles = glob.sync('**/*.@(ejs|md)', {
    cwd: `${srcPath}/news`
  })

  try {
    newsFiles.forEach((file) => {
      // file path
      const pathToFile = `${srcPath}/news/${file}`

      // read data from file and then render post
      const postData = ssg.getPostDataFromMarkdown(pathToFile)

      const lang = 'hun'
      let months
      if (lang === 'eng') {
        months = [
          'Jan', 'Feb', 'Mar',
          'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep',
          'Oct', 'Nov', 'Dec'
        ]
      } else {
        months = [
          'január', 'február', 'március',
          'április', 'május', 'június',
          'július', 'augusztus', 'szeptember',
          'október', 'november', 'december'
        ]
      }

      // change date format
      const dateFormatted = ssg.convertDateFormat(postData, pathToFile, months, lang)

      // convert md to HTML
      const postContents = md.render(postData.body)
      // console.log(postContents)

      // save postdata for the index page
      ssg.saveNewsDataForIndexPage(dateFormatted, postData, postContents, newsDataForNewsPage, 'news')
    })
    console.log('Store news data OK...')
  } catch (err) {
    console.error(err)
    console.error('Store news data failed...')
  }

  // Build pages (in our example the index, about, book pages)
  // cwd: current working directory
  const pages = glob.sync('**/*.ejs', {
    cwd: `${srcPath}/pages`
  })

  try {
    pages.forEach((file) => {
      const fileData = path.parse(file)
      const destPath = path.join(distPath, fileData.dir)

      // make directory
      fse.mkdirsSync(destPath)

      // read data from file and then render page
      const pageContents = ejsRender(fse.readFileSync(`${srcPath}/pages/${file}`, 'utf-8'), Object.assign({}, config, {
        postsDataForIndexPage: postsDataForIndexPage,
        worksDataForIndexPage: worksDataForIndexPage,
        newsDataForNewsPage: newsDataForNewsPage,
        blogArchive: blogArchive
      }))

      const name = fileData.base
      let layoutContent

      // read layout data from file and then render layout with page contents
      switch (name) {
        case 'index.ejs':
          layoutContent = ejsRender(fse.readFileSync(`${srcPath}/layouts/home.ejs`, 'utf-8'), Object.assign({}, config, postsDataForIndexPage, {
            title: config.site.title,
            body: pageContents,
            canonicalUrl: config.site.url,
            description: config.site.quote,
            linkedin: config.site.linkedin,
            email: config.site.email,
            facebook: config.site.facebook,
            cv: config.site.cv
          }), { filename: `${srcPath}/layouts/home.ejs` })
          break

        case 'rolam.ejs':
          layoutContent = ejsRender(fse.readFileSync(`${srcPath}/layouts/default.ejs`, 'utf-8'), Object.assign({}, config, postsDataForIndexPage, {
            title: 'Rólam | ' + config.site.title,
            body: pageContents,
            canonicalUrl: config.site.url,
            description: config.site.quote,
            linkedin: config.site.linkedin,
            email: config.site.email,
            facebook: config.site.facebook,
            cv: config.site.cv
          }), { filename: `${srcPath}/layouts/default.ejs` })
          break

        case 'kapcsolat.ejs':
          layoutContent = ejsRender(fse.readFileSync(`${srcPath}/layouts/default.ejs`, 'utf-8'), Object.assign({}, config, postsDataForIndexPage, {
            title: 'Kapcsolat | ' + config.site.title,
            body: pageContents,
            canonicalUrl: config.site.url,
            description: config.site.quote,
            linkedin: config.site.linkedin,
            email: config.site.email,
            facebook: config.site.facebook,
            cv: config.site.cv
          }), { filename: `${srcPath}/layouts/default.ejs` })
          break

        case 'Üzenet elküldve.ejs':
          layoutContent = ejsRender(fse.readFileSync(`${srcPath}/layouts/default.ejs`, 'utf-8'), Object.assign({}, config, postsDataForIndexPage, {
            title: 'Sikeresen elküldve | ' + config.site.title,
            body: pageContents,
            canonicalUrl: config.site.url + '/uzenet-elkuldve.html',
            description: config.site.quote,
            linkedin: config.site.linkedin,
            email: config.site.email,
            facebook: config.site.facebook,
            cv: config.site.cv
          }), { filename: `${srcPath}/layouts/default.ejs` })
          break

        case 'hasznos-linkek.ejs':
          layoutContent = ejsRender(fse.readFileSync(`${srcPath}/layouts/default.ejs`, 'utf-8'), Object.assign({}, config, {
            title: 'Hasznos linkek | ' + config.site.title,
            body: pageContents,
            canonicalUrl: config.site.url + '/hasznos-linkek.html',
            description: config.site.quote,
            linkedin: config.site.linkedin,
            email: config.site.email,
            facebook: config.site.facebook,
            cv: config.site.cv
          }), { filename: `${srcPath}/layouts/default.ejs` })
          break

        case 'design-cikkek-a-vilagbol.ejs':
          layoutContent = ejsRender(fse.readFileSync(`${srcPath}/layouts/default.ejs`, 'utf-8'), Object.assign({}, config, newsDataForNewsPage, {
            title: 'Design cikkek a világból | ' + config.site.title,
            body: pageContents,
            canonicalUrl: config.site.url + '/design-cikkek-a-vilagbol.html',
            description: config.site.quote,
            linkedin: config.site.linkedin,
            email: config.site.email,
            facebook: config.site.facebook,
            cv: config.site.cv
          }), { filename: `${srcPath}/layouts/default.ejs` })
          break
        /*
        case 'modszerem.ejs':
          layoutContent = ejsRender(fse.readFileSync(`${srcPath}/layouts/default.ejs`, 'utf-8'), Object.assign({}, config, {
            title: config.site.title + '| A módszerem',
            body: pageContents,
            canonicalUrl: config.site.url + '/hasznos-linkek.html',
            description: config.site.quote,
            linkedin: config.site.linkedin,
            email: config.site.email,
            facebook: config.site.facebook,
            cv: config.site.cv
          }), { filename: `${srcPath}/layouts/default.ejs` })
          break
        */
        default:
          layoutContent = ejsRender(fse.readFileSync(`${srcPath}/layouts/default.ejs`, 'utf-8'), Object.assign({}, config, {
            title: '404: Az oldal nem található | ' + config.site.title,
            body: pageContents,
            canonicalUrl: config.site.url + '/' + fileData.name,
            description: config.site.quote,
            linkedin: config.site.linkedin,
            email: config.site.email,
            facebook: config.site.facebook,
            cv: config.site.cv
          }), { filename: `${srcPath}/layouts/default.ejs` })
          break
      }
      // save the html file
      fse.writeFileSync(`${destPath}/${fileData.name}.html`, layoutContent)
    })
    console.log('Pages OK...')
  } catch (err) {
    console.error(err)
    console.error('Build pages failed...')
  }

  // display build time
  const timeDiff = process.hrtime(startTime)
  const duration = timeDiff[0] * 1000 + timeDiff[1] / 1e6
  log.success(`Site built successfully in ${duration}ms`)
}
