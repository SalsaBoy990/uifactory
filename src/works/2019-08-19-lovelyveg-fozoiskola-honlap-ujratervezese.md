---
title: A LovelyVeg főzőiskola honlapjának újratervezése
date: '2019-08-19'
thumbnail: /assets/images/design/LovelyVegMockupCrop.jpg
hexagonImage: /assets/images/design/lovelyveg_hexagon.jpg
excerpt: >-
  Az egyik barátom vállalkozásának, a LovelyVeg főzőiskolának honlapját
  terveztem újra.
type:
  - landing page
  - webapp
  - Android app
  - iOS app
category: case study
expertise: 'Design, IA, visual design'
platform: 'Responsive website, iOS, Android'
deliverables: 'UI, UX'
website: not implemented
---
## What I did

Már egy meglévő, bejáratott márka/termék honlapját terveztem újra, így brandingre nem volt szükség. Továbbá egy szakácskönyv appot is terveztem.

## Interviews, UX research

Az interjú során megtudtam, hogy Szilvi több éve kezdett el a vegán életmóddal, vegán sütéssel-főzéssel foglalkozni. Az egész küldetése egy bloggal kezdődött.

Kiderült, hogy ő most igazából a főzőiskoláját akarja felfuttatni, mert abból bevétele is származik, és idő hiányában a blogírást hanyagolja.

Kérdeztem tőle, hogy nem gondolkodik-e egy vegán szakácskönyv kiadásában, mert rengeteg recept érhető el a honlapján. Azt válaszolta, hogy ez nagyon költséges és nehezen megvalósítható lenne, és nem mellesleg rengeteg munka is, ami nem biztos, hogy kifizetődik. Innen jött az ötletem, hogy egy szakácskönyv appot tervezzek a már meglévő receptek számára.

## The problem

Design szempontjából túl zsúfolt volt az eredeti honlap, kevés negatív térrel, a vizuális hierarchián javítani kellett.
A legnagyobb problémának tartottam a honlapon a tartalom priorizálásának hiányát, a redundáns linkeket és a túl sok szöveget, ami a felhasználóra zúdul (cognitive overflow).
Persze, a jól megfogalmazott copytext nagyon fontos egy honlapnál, de egy gondosan felépített, letisztult design is elengedhetetlen. Szilvi említette, hogy a redundáns linkek kuszasága az SEO miatt van. Természetesen a keresőmotorokban való láthatóság is egy fontos szempont.


## Users & Audience

Külön büszke vagyok a receptek rendszerezésére, ahol hozzávalók szerint csoportosítottam szótár nézetben. Az ötletet [innen kölcsönöztem.](https://www.spellitout.xyz/glossary/). A kognitív pszichológiából ismeretes, hogy az ember agya mindig kategorizálja, csoportosítja az elé táruló objektumokat, entitásokat, és erre a folyamatra rá kell játszani a tervezés során. Itt érdemes lehet kutatást végezni a felhasználók körében, hogy hogyan gondolkodnak.

> Pl. olyan egy forgatókönyvet tudok elképzelni, amikor a vegán, húsmentes fűzés-sütés iránt érdeklődő „konyhatündérek” készíteni szeretnének egy vegán ételt mondjuk ebédre. Ehhez keresnek jó recepteket.

### Két hipotézisem van:

1. **A praktikusan gondolkodók és elkényelmesedettek** megnézik, hogy milyen hozzávaló van otthon, és abból akarnak ételt készíteni. Pl. van otthon cukkínijük, ezért a cukkinis recepteket akarják a leggyorsabban megtalálni.

2. A másik, **a kísérletező típus**, aki pl. a fejébe veszi, hogy márpedig ő megpróbálkozik egy vegán leves elkészítésével és a vegán levesek után kutat, függetlenül attól, hogy milyen alapanyag van otthon nála. Lelkes, ezért elmegy bevásárolni. Tehát szükség van olyan kategóriák szerinti bontásban csoportosítani az ételeket, mint levesek, főételek, desszertek, saláták stb..


### Value Proposition

*Azoknak a munkahelyen dolgozó vagy háztartásbeli nőknek (nagyobb részt nekik) és férfiaknak, akik szeretnének egészségesebben étkezni, "több tonna" zöldséget és gyümölcsöt fogyasztani, esetleg fogyókúrázni, a LovelyVeg szakácsapp bevezeti őket a vegán sütés-főzés rejtelmeibe és rengeteg egészséges és nem mellékesen finom recepthez ad hozzáférést. Kitűnő segédeszköz minden kezdő, középhaladó és haladó szintű vegán konyhatündér számára a főzőtanfolyamon felül.*


## Constrains
A legnagyobb korlát technológiai jellegű volt: a Wordpress platformfüggőség, ugyanis egy már meglévő, jól bejáratott rendszert (CMS, tartalomkezelő stb.) megbolygatni, és áttérni egy másikra nehézséget és kényelmetlenséget okozni Szilvinek. Nem is javasolnám ezt. A meglévő felhasználók számára is rossz lenne, ha például a hozzászólás rendszert le kéne cserélni. Ugyanis néhányan a honlapon át adnak értékelést, visszajelzést a főzőtanfolyamoktól.


## Design process

### Usability testing!

### Colors

A honlap színvilágán alig változtattam, sokkal inkább az oldal szerkezetén és az információs architektúrán kellett dolgoznom.

A színeknél a HSB színmodellt használom, ahol mindig egy Hue értéket használok, és csupán a telítettséget és a fényességet módosítva keverem ki az összes színt. Ezen felül szokásom még egy komplementer színt is választani, hogy kiemeljek fontos elemeket, "signifier"-eket. Szintén választok színt pl. a hiba-/sikerüzenetek számára.

* A lila szín HUE értéke: 295
* A sárga szín HUE értéke: 57

A színvilágon keveset változtattam, a LovelyVeg-nek már kialakult az imázsa, teljesen szükségtelen megbabrálni a színeket, bár a kontrasztarányokon javítani kellett. A színek egészen csajosak, mivel alapvetően nőkből áll a célcsoport.

### Typography

A betűtípusok kombinálására a „tesztelős módszert” alkalmazom, vagyis megnézek rengeteg címsor-szövegtörzs betűtípus párosítást, és kiválasztom azt a változatot, amelyik legjobban passzol. Van nekem betűtípus gyűjteményem, jó kombinációkkal, papíron leírva, majd valamikor megosztom ezeket itt, a portfólió oldalamon.

### A győztes párosítás:
* Címsor: **Wremena** (1001fonts.com)
* Szövegtörzs: **Asap** (Google Fonts)
* Az oldal címe számára pedig a **Lobster Two** bizonyult megfelelőnek (végül nem használtam, mert meghagytam az eredeti betűtípust)

A Wremena talpas betűtípus, tetszenek benne a betűk éles végei, jól passzol hozzá az Asap talpatlan betűtípus lágysága, lekerekített formái. Egyedüli hátrány, hogy a Wremena betűcsaládban lehetne vastagabb stílus is: a félkövér nem elég vastag szerintem.

Ezek a betűtípusok voltak versenyben:
* Címsor: Wremena, Playfair Display, Martel, Josefin Sans
* Szövegtörzs: Asap, Lato, Rubik, Nunito Sans, Josefin Sans (az utóbbi nagyon nem jött be)

![Néhány betűtípus-kombináció a LovelyVeg-hez](/assets/images/design/lovelyveg_font_combinations.png)

### Information architecture

Az újratervezés során ezért pontosan erre helyeztem a hangsúlyt. A szöveget lecsökkentettem, képeket és a médiaszereplés-videókat hangsúlyoztam ki. (FRISSÍTÉS: a médiamegjelenések részt teljesen kidobtam a főoldalról.) A blogbejegyzéseknek menniük kellett az oldal tetejéről, mert az oda látogató azt gondolhatja, hogy a LovelyVeg elsősorban egy vegán életmód blog receptek sokaságával, nem egy főzőiskola. (FRISSÍTÉS: a blogbejegyzések lekerültek a kezdőlapról, helyette új aloldalra kerültek.)

A receptkereső is külön aloldalra került.

### Layout


## The retrospective

A receptkereső designja is [felkerült a Béhance-ra.](https://www.behance.net/gallery/86940591/LovelyVeg-Recipe-Search-Page)

![A LovelyVeg Receptkereső aloldal design terve](
https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/db781686940591.5da88fc067600.png)


![A LovelyVeg honlap jelenlegi változata. A honlap címe: [https://lovelyveg.hu/](https://lovelyveg.hu/)](/assets/images/design/lovelyveg_eredeti.png)



A hipotéziseket persze le is kell majd tesztelni, hogy a valóság alátámasztja-e azokat. A lényeg, hogy a perszóna mentális modelljével egyezzen az oldal működése.

![LovelyVeg főzőiskola honlapja újra újratervezve!](
https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b3914b87343695.5db5912900ce5.png)

![A használt színpaletta a LovelyVeg-hez (nem használtam fel az összes színt)](/assets/images/design/lovelyveg_colors.png)
