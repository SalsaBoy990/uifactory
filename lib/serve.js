(function (port) {
  'use strict'
  const express = require('express')
  const path = require('path')
  const favicon = require('serve-favicon')
  const fs = require('fs-extra')

  if (arguments.length === 0) {
    throw new Error(`Argument missing: port number not supplied`)
  } else if (arguments.length === 1) {
    // is it an integer?
    if (!isNaN(parseInt(port, 10))) {
      port = parseInt(port, 10)
    } else {
      throw new Error(`The port number you supplied '${port}' is not a integer`)
    }
  }

  // create express server
  const app = express()

  if (process.env.PORT) {
    // Set Security Headers.
    const helmet = require('helmet')

    app.use(helmet())

    // Content Security Policy.
    const csp = require('helmet-csp')

    app.use(csp({
      directives: {
        defaultSrc: [`'none'`],
        styleSrc: [`'self'`,
          'https://fonts.googleapis.com',
          'https://www.youtube.com',
          'https://maxcdn.bootstrapcdn.com/',
          '//cdnjs.cloudflare.com'
        ],
        fontSrc: [`'self'`,
          'https://fonts.gstatic.com',
          'https://maxcdn.bootstrapcdn.com'
        ],
        scriptSrc: [`'self'`,
          'https://www.youtube.com',
          'https://www.googletagmanager.com',
          'https://www.google-analytics.com',
          'https://code.jquery.com',
          'https://maxcdn.bootstrapcdn.com',
          '//cdnjs.cloudflare.com'
        ],
        childSrc: [`'self'`, 'https://www.youtube.com'],
        imgSrc: [`'self'`,
          'www.google-analytics.com',
          'https://use.fontawesome.com',
          'https://cloud.netlifyusercontent.com'
        ],
        objectSrc: [`'none'`],
        connectSrc: [`'self'`]
      }
    }))
  }

  // Middlewares.
  // GET favicon.ico
  app.use('/', favicon(path.join('public', 'favicon.ico')))

  // to serve the static files from the /public folder
  app.use('/', express.static(path.join('public')))

  app.get('*', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile(path.join('public', '404.html'), { encoding: 'utf8' }, (err, data) => {
      if (err) throw err
      res.end(data)
    })
  })

  // start the server
  app.listen(port, () => {
    console.log(`Server is listening on localhost:${port}...`)
  })
})(process.env.PORT || 4000)
