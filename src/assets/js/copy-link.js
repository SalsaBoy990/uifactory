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
