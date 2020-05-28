/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"

import SEO from "../components/seo"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Container from "../components/container/container"
import Row from "../components/row/row"
import Breadcrumb from "../components/breadcrumb/breadcrumb"

export default () => {
  return (
    <>
     <SEO title={`Frontend asztal`} pathname={`/frontend-desk/`} website={true} description={"Hasznos Frontend és UI design linkek gyűjteménye. A válogatás nem teljes körű."} />
      <Header></Header>
      <div className="container-max-width bg-linear-blue-2" css={css``}>
        <Container>
          <Row>
            <div className="col-12 p0 mt1">
              <Breadcrumb>Frontend munkasztal</Breadcrumb>
              <h1
                className="h2"
                css={css`
                  padding-bottom: 51px;
                `}
              >
                Frontend munkasztal
              </h1>
            </div>
          </Row>
        </Container>
      </div>
      <div className="container-max-width">
        <Container>
          <Row>
            <div
              className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 p0"
              css={css`
                padding-top: 51px;
              `}
            >
              <h2 className="listHeader">Android, Google</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="no-list-image">
                  <a
                    href="http://iconhandbook.co.uk/reference/chart/android/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Android icon sizes
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://material.io/design/iconography/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Material App Icon Specs
                  </a>
                </li>
                <li className="lh110 no-list-image">
                  <a
                    className="lh110"
                    href="https://materialdesignkit.com/android-gui/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Material Design Kit (Android Nougat Free GUI)
                  </a>
                </li>
              </ul>

              <h2 className="listHeader">Backend</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="lh110 no-list-image">
                  <a
                    className="lh110"
                    href="https://expressjs.com/en/starter/generator.html"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Express.js
                  </a>
                </li>
              </ul>
              <h2 className="listHeader">Betűtípus listák</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="no-list-image">
                  <a
                    href="https://fonts.adobe.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Adobe Fonts
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://en.bestfonts.pro/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    BestFonts.pro
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://www.dafontfree.io/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Dafont Free
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://fontpair.co/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    FontPair
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://fontsinuse.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Fonts In Use
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="http://www.ourownthing.co.uk/fontpairing/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Font Pairing
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://fonts.google.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Google Fonts
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="http://www.identifont.com/index.html"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Identifont
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="http://www.typeconnection.com/index.php"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Type Connection (game)
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="http://typ.io/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Typ.io
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="http://www.typenetwork.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Type Network
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="http://typespiration.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    typespiration
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://www.typewolf.com/recommendations"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    TypeWolf
                  </a>
                </li>
              </ul>
              <h2 className="listHeader">CMS (Markdown, Git)</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="no-list-image">
                  <a
                    href="https://forestry.io/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Forestry.io
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://www.netlifycms.org/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Netlify CMS
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://tinacms.org/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Tina CMS
                  </a>
                </li>
              </ul>
              <h2 className="listHeader">Facebook</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="lh110 no-list-image">
                  <a
                    className="lh110"
                    href="https://developers.facebook.com/docs/plugins/page-plugin/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Facebook Page Plugin
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://developers.facebook.com/tools/debug/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Facebook sharing debugger
                  </a>
                </li>
                <li className="lh110 no-list-image">
                  <a
                    className="lh110"
                    href="https://www.piliapp.com/facebook-symbols/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Facebook szimbólumok, hangulatjelek
                  </a>
                </li>
              </ul>
              <h2 className="listHeader">Favicon készítő</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="no-list-image">
                  <a
                    href="https://realfavicongenerator.net/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Real Favicon Generator
                  </a>
                </li>
              </ul>
              <h2 className="listHeader">Frontend anyagok</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="no-list-image">
                  <a
                    href="https://angular.io/docs"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Angular
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://material.angular.io/guide/getting-started"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Angular Material
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://getbootstrap.com/docs/4.4/getting-started/introduction/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Bootstrap 4
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://bootswatch.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Bootswatch
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://www.typescriptlang.org/docs/home.html"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    TypeScript dokumentáció
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 p0"
              css={css`
                padding-top: 51px;
              `}
            >
              <h2 className="listHeader">Ikonkészletek</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="no-list-image">
                  <a
                    href="http://www.evericons.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Evericons
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://feathericons.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Feather icons
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://fontawesome.com/v4.7.0/icons/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Font Awesome 4.7
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://remixicon.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    REMIX ICON 2.0.0
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://www.scrolltotop.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Scroll-to-top buttons
                  </a>
                </li>
              </ul>

              <h2 className="listHeader">iOS</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="no-list-image lh110">
                  <a
                    href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="lh110"
                  >
                    Human Interface Guidelines App Icons
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="http://www.everyinteraction.com/resources/ios-9-app-icon-template/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    iOS 9 App Icon Template
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://ivomynttinen.com/blog/ios-design-guidelines"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    iOS Design Guidelines
                  </a>
                </li>
                <li className="lh110 no-list-image">
                  <a
                    className="lh110"
                    href="https://iosdesignkit.io/ios-12-gui/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    iOS Design Kit (iOS 12 GUI, iPhone XS, iPhone 8)
                  </a>
                </li>
              </ul>

              <h2 className="listHeader">Képeszköz, kép, illusztráció</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="no-list-image">
                  <a
                    href="https://generated.photos/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    100,000 AI-generated Faces
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://convertio.co/svg-eps/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Convertio.co (SVG-EPS)
                  </a>{" "}
                  <span className="badge badge-secondary white min-size normal">
                    új
                  </span>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://creativemarket.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Creative Market
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://imagecompressor.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Optimizilla
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://www.thispersondoesnotexist.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    This person does not exists
                  </a>
                </li>
              </ul>

              <h2 className="listHeader">Parancssor, egyéb</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="lh110 no-list-image">
                  <a
                    className="lh110"
                    href="https://regex101.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    RegEx101 - Szabályos kifejezések
                  </a>
                </li>
                <li className="lh110 no-list-image">
                  <a
                    className="lh110"
                    href="https://next.json-generator.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    JSON Generator
                  </a>
                </li>
                <li className="lh110 no-list-image">
                  <a
                    className="lh110"
                    href="https://linux.die.net/man/1/tree"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    tree - list contents of dirs in a tree-like format
                  </a>
                </li>
              </ul>

              <h2 className="listHeader">Térkép</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="no-list-image">
                  <a
                    href="https://www.embedgooglemap.net/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Embed Google Map
                  </a>
                </li>
              </ul>

              <h2 className="listHeader">Tipográfiai hierarchia</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="no-list-image">
                  <a
                    href="https://www.gridlover.net/try"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    GridLover
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://www.modularscale.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Modular Scale
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://www.pixplicity.com/dp-px-converter"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Pixplicity: DP/PX converter
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://type-scale.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    TypeScale
                  </a>
                </li>
              </ul>

              <h2 className="listHeader">SaaS, PaaS, hosting, domain</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="no-list-image">
                  <a
                    href="https://www.heroku.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Heroku
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://www.namecheap.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Namecheap.com
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://www.netlify.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Netlify.com
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://www.nethely.hu/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Nethely.hu
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 p0"
              css={css`
                padding-top: 51px;
              `}
            >
              <h2 className="listHeader">Színeszközök</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="no-list-image">
                  <a
                    href="https://color.adobe.com/create"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Adobe Color
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://www.htmlcsscolor.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    HTML CSS Color Picker
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://coolors.co/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Coolors
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://mycolor.space/gradient"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    ColorSpace CSS Color Gradient
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp/related"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    ColorZilla
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://picular.co/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Picular
                  </a>
                </li>
                <li className="lh110 no-list-image">
                  <a
                    className="lh110"
                    href="https://www.colorzilla.com/gradient-editor/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Ultimate CSS Gradient Generator
                  </a>
                </li>
              </ul>

              <h2 className="listHeader">Szövegeszközök</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="lh110 no-list-image">
                  <a
                    className="lh110"
                    href="https://www.facebook.com/ads/tools/text_overlay"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Kép szövegtartalmának ellenőrzése (Facebook)
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://www.lipsum.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Lipsum - Lorem Ipsum
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://yaytext.com"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    YayText
                  </a>
                </li>
              </ul>

              <h2 className="listHeader">Web hozzáférhetőség</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="no-list-image">
                  <a
                    href="https://colororacle.org/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Color Oracle (color-blind filter)
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://contrast-ratio.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Contrast-ratio
                  </a>
                </li>
                <li className="lh110 no-list-image">
                  <a
                    className="lh110"
                    href="https://webaim.org/resources/contrastchecker/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    WebAim – Color Contrast Checker
                  </a>
                </li>
              </ul>

              <h2 className="listHeader">Weboldal analitika</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="lh110 no-list-image">
                  <a
                    className="lh110"
                    href="https://www.seobility.net/en/seocheck/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Free SEO Checker
                  </a>
                </li>
                <li className="lh110 no-list-image">
                  <a
                    className="lh110"
                    href="https://www.browserstack.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    BrowserStack. Tesztelés különböző eszközökre
                  </a>
                </li>
                <li className="no-list-image">
                  <a
                    href="https://gtmetrix.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    GTmetrix
                  </a>
                </li>
                <li className="lh110 no-list-image">
                  <a
                    className="lh110"
                    href="https://tools.pingdom.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Pingdown Website Speed Test
                  </a>
                </li>
              </ul>

              <h2 className="listHeader">Windows</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="lh110 pt0 no-list-image">
                  <a
                    className="lh110"
                    href="https://www.allwinapps.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    AllWinApps
                  </a>
                </li>
                <li className="lh110 pt0 no-list-image">
                  <a
                    className="lh110"
                    href="https://www.microsoft.com/design/fluent/#/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Microsoft Fluent Design System (Web, Windows apps, iOS,
                    Android)
                  </a>
                </li>
                <li className="lh110 pt0 no-list-image">
                  <a
                    href="https://github.com/phonegap/phonegap/wiki/App-Icon-Sizes#windows-phone"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Windows mobil ikonméretek
                  </a>
                </li>
              </ul>

              <h2 className="listHeader">Wordpress</h2>
              <ul
                className="listContent no-bullets"
                css={css`
                  padding-right: 51px;
                `}
              >
                <li className="lh110 pt0 no-list-image">
                  <a
                    className="lh110"
                    href="https://localwp.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Local WP (dev tool)
                  </a>
                </li>
                <li className="lh110 pt0 no-list-image">
                  <a
                    className="lh110"
                    href="https://underscores.me/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Underscores.me (starter theme)
                  </a>
                </li>
                <li className="lh110 pt0 no-list-image">
                  <a
                    className="lh110"
                    href="https://winscp.net/eng/docs/lang:hu"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    WinSCP (SFTP/FTP kliens)
                  </a>
                </li>
                <li className="lh110 pt0 no-list-image">
                  <a
                    className="lh110"
                    href="https://woocommerce.com/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    WooCommerce
                  </a>
                </li>
                <li className="lh110 pt0 no-list-image">
                  <a
                    className="lh110"
                    href="https://szamlazzplugin.hu/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    WooCommerce számlázz.hu plugin
                  </a>
                </li>
                <li className="lh110 pt0 no-list-image">
                  <a
                    className="lh110"
                    href="https://codex.wordpress.org/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Wordpress.org Kódex
                  </a>
                </li>
              </ul>
            </div>
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </>
  )
}
