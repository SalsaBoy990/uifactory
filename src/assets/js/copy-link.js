var clipboard = new ClipboardJS('#copy-url', {
  text: function () {
    return window.location.href
  }
})
clipboard.on('success', function (e) {
  console.log(e)
})
clipboard.on('error', function (e) {
  console.log(e)
})

(function () {
  if (typeof self === 'undefined' || !self.Prism || !self.document) {
    return
  }

  if (!Prism.plugins.toolbar) {
    console.warn('Copy to Clipboard plugin loaded before Toolbar plugin.');

    return
  }

  var ClipboardJS = window.ClipboardJS || undefined;

  if (!ClipboardJS && typeof require === 'function') {
    ClipboardJS = require('clipboard')
  }

  var callbacks = []

  if (!ClipboardJS) {
    var script = document.createElement('script')
    var head = document.querySelector('head')

    script.onload = function () {
      ClipboardJS = window.ClipboardJS

      if (ClipboardJS) {
        while (callbacks.length) {
          callbacks.pop()()
        }
      }
    }

    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js';
    head.appendChild(script)
  }

  Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (env) {
    var linkCopy = document.createElement('button')
    linkCopy.textContent = 'Copy'

    if (!ClipboardJS) {
      callbacks.push(registerClipboard)
    } else {
      registerClipboard()
    }

    return linkCopy

    function registerClipboard () {
      var clip = new ClipboardJS(linkCopy, {
        'text': function () {
          return env.code
        }
      })

      clip.on('success', function () {
        linkCopy.textContent = 'Copied!'

        resetText()
      })
      clip.on('error', function () {
        linkCopy.textContent = 'Press Ctrl+C to copy'
        resetText()
      })
    }

    function resetText () {
      setTimeout(function () {
        linkCopy.textContent = 'Copy'
      }, 5000)
    }
  })
})()

/*
var pre = document.getElementsByTagName('pre')
console.log(pre)

for (var i = 0; i < pre.length; i++) {
  var isLanguage = pre[i].children[0].className.indexOf('language-')
  if (isLanguage !== 0) {
    var button = document.createElement('button')
    button.className = 'copy-button btn-small light-gray2 bg-black no-underline small-size expanded'
    button.textContent = 'Copy'
    pre[i].appendChild(button)
  }
}
var copyCode = new ClipboardJS('.copy-button', {
  target: function(trigger) {
    return trigger.previousElementSibling
  }
})
*/