// Add your global site properties here
module.exports = {
  site: {
    url: 'https://uifactory.design',
    title: 'Gulácsi András UI/UX design portfóliója',
    titleEncoded: encodeURI('Gulácsi András UI/UX design portfóliója'),
    defaultImage: 'https://uifactory.design/assets/images/uifactory_cover.jpg',
    author: 'Gulácsi András',
    quote: 'Üdvözöllek, junior UI/UX/web designer vagyok Szegeden.',
    description: 'Üdvözöllek, junior UI/UX/web designer vagyok Szegeden.',
    currentYear: new Date().getFullYear(),
    google_analytics: 'UA-136754581-1',
    linkedin: 'https://www.linkedin.com/in/andr%C3%A1s-gul%C3%A1csi/',
    email: 'mailto:gulandras90@gmail.com',
    cv: 'https://www.docdroid.net/YIFs1FI/gulacsi-andras-resume-2019.pdf',
    facebook: 'https://www.facebook.com/uifactoryportfolio',
    facebook_app_id: '424772158245419',
    behance: 'https://www.behance.net/guland7a4a',
    github: 'https://github.com/SalsaBoy990',
    workflow: 'https://www.dropbox.com/s/qkwffh3zkrpeodl/UX_folyamat_Gul%C3%A1csi_Andr%C3%A1s.docx?dl=0'
  },
  utils: {
    today: getCurrentDate()
  }
}

function getCurrentDate () {
  var today = new Date()
  var year = today.getFullYear()
  var month = today.getMonth()
  var day = today.getDate()
  return `${year}-${month + 1}-${day}`
}
