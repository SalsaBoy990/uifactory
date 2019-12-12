---
title: A NaptárApp Android alkalmazás tervezése
date: '2019-09-02'
thumbnail: /assets/images/design/naptarapp_regisztracio.png
hexagonImage: null
excerpt: >-
  NaptárApp - Tervezd meg a hetedet és
  légy eredményes!
type: mobilapp
category: 'mini project'
expertise: null
platform: null
deliverables: null
website: null
---

[A prototípus linkje (Figma), ahol élőben is felfedezhetitek az appot.](https://www.figma.com/proto/8RDXJ68aIP7kMW8qViVfrS/2019_NaptarApp?node-id=54%3A271&viewport=-18%2C-385%2C0.48358601331710815&scaling=min-zoom) Nem működik minden gomb.

![NaptárApp kezdőképernyő és regisztráció](/assets/images/design/naptarapp/naptarapp_regisztracio.png)


Előszóként hadd említsem meg, hogy sokat tanultam a NaptárApp tervezése során: a legfontosabb tanulság volt számomra, hogy **lehetőleg azelőtt csináljam meg komponenseket, mielőtt a milliónyi képernyőt megtervezem és összekapcsolom egymással a prototípusban.** Utólag minden UI elemet lecserélni komponensre nagyon hosszadalmas és frusztráló volt. Előrelátóbbnak kellett volna lennem.

A komponensek rendkívül hasznosak, hiszen a felhasználói tesztelés után könnyebb és gyorsabb áttervezni a képernyőket, mert elég a komponenseket egy helyen kell módosítani, és minden képernyőn frissülni fognak. Tehát megéri már a legelején kialakítani őket. De most térjünk rá az alkalmazásra!

## NaptárApp - Tervezd meg a hetedet és légy eredményes!

Felhasználói interjúkat, UX kutatást nem végeztem. Az appom terve tehát felfogható egyfajta hipotézisként, amit később a valós adatokkal tudok megerősíteni vagy módosítani, ha hibás volt az elképzelés.

Tegyük fel, hogy az UX kutatók arra az eredményre jutottak, hogy egy NaptárApp mobilalkalmazásra van szükség azok számára, akik szeretik mindig megtervezni a napjaikat, a hetüket előre, beosztani az idejüket (munka, család, egyéb tekintetben), amitől kevésbé szeretnek eltérni, azt mereven követik. Ők az **előre tervezők**. Tegyük fel, hogy ez a mi perszónánk.

A regisztráció és az onboarding folyamatáról most nem ejtek szót.

A mobil kijelzőjén korlátozott hely van, ezért inkább a listanézetet találtam jobb megoldásnak. Nem lehet bepasszírozni a hét napot egymás mellé.

### Tennivalók oldal

Az app tennivalók oldalán **3 fül**et csináltam:
1. **Aktuális** (az alapértelmezett fül, a tennivalók listája ma, holnap és holnapután)
2. **Egész hét**
3. **Naptár**


![Tennivalók oldal, aktuális fül](/assets/images/design/naptarapp/aktualisTab.png){.medium-img}

Úgy gondoltam, hogy az emberek számára általában **a következő napok a legfontosabbak, így ezeket kell elsőként látniuk.** Utána időben haladunk távolabb, az egy hét felé, majd ha hosszabb távú tervekről beszélünk, akkor a naptár nézet jön be. A felosztás helyességét le kell tesztelni. Meg kell találni a megfelelő időtartamot a megjelenítéshez. Lehet, hogy nem 3, hanem 5 vagy 7 nap mutatására van szükség. Az is lehet, hogy a három közül valamelyik fül ki is esik. 

További tesztelni való, hogy **az aktuális tabon a lokális vagy a globális hozzáadás gombot használják inkább** a felhasználók. A narancssárga globális hozzáadás gomb a **FAB** (floating action button) mintázatot követi, ami jól ismert pl. a Gmail levelező app-nál. Lehetne A/B tesztelést is végezni: pl. az egyik változatban hiányzik a lokális vagy a globális hozzáadás gomb. Kérdés, hogy hiányolják-e majd valamelyiket?

![Aktuális fül: a globális hozzáadás menete](/assets/images/design/naptarapp/globalisHozzaadasAktivTab.png)

A naptár fülön belül eltávolítottam a globális hozzáadás gombot és egy rövid utasítást is kénytelen voltam elhelyezni a dátumválasztó UI elem felett az egyértelműség miatt. Vannak olyan naptáralkalmazások, ahol ki kell választani egy napot és megnyomni a hozzáadás gombot a tennivaló hozzáadásához. Ez két nyomás. Más elképzelésem volt:

1. **Jelzem, hogy mely napokon van tennivaló**. Ha ezekre nyom a felhasználó, akkor **felugrik az aznapi tennivalók listája, és egy lokális hozzáadás gomb**, ha hozzá szeretne adni egy új tennivalót. Előny: látja, hogy arra a napra mit tervezett és biztos, hogy nem tervez két tennivalót egyazon időpontra, mert látja az időpontokat.

2. **Amelyik napon még nincs tennivalója** és rányom az ujjával, automatikusan **a tennivaló hozzáadása űrlap jelenik meg.** Ezzel megspóroltunk egy felesleges nyomást.

![Tennivalók oldal, naptár fül](/assets/images/design/naptarapp/naptarTab.png)

### Beállítások és profilkezelés oldal

A beállítások oldalon ki/be lehet kapcsolni, hogy a felhasználó szeretne értesítéseket kapni események/tennivalók előtt. (Egy hasznos cikk arról, hogy [mikor kell pipás négyzetet és kapcsolót használni.](https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8)) Itt fontosak lehetnek a jó alapértelmezett értékek. Más beállítási lehetőségek egyelőre nincsenek.


![A beállítások oldal](/assets/images/design/naptarapp/beallitasok.png)

A profilkezelés oldalon lehet változtatni a profiladatokat: jelszó megváltoztatása (jut eszembe, elfelejtett jelszó opciót még kellene hozzáadnom a bejelentkező képernyőhöz) és a profil törlése. Ehhez jó offboarding-on is lehetne törni a fejet. A profil törlésénél a **hármas biztonság elve** szerint jártam el:

1. Elsőként ki kell pipálnod a négyzetet, hogy szeretnéd törölni a fiókodat.
2. Utána aktívvá válik a törlés gomb.
3. A törlés gomb megnyomása után még felugrik egy ablak, hogy biztos vagy-e a dolgodban.

![A profil oldal](/assets/images/design/naptarapp/profil.png)

Ezzel minimalizálhatjuk a véletlenül bekövetkező/figyelmetlenségből származó hibákat. A piros figyelmeztető ikon egy ún. „signifier”, ami felhívja a figyelmet a kritikus műveletre.

[A prototípus linkje (Figma), ahol élőben is felfedezhetitek az appot.](https://www.figma.com/proto/8RDXJ68aIP7kMW8qViVfrS/2019_NaptarApp?node-id=54%3A271&viewport=-18%2C-385%2C0.48358601331710815&scaling=min-zoom) Nem működik minden gomb.

Lehet, hogy érdemes volna embereket toboroznom egy usability teszteléshez, hogy lássam, hogy a való életben melyik hipotézis bizonyul helyesnek. Érdemes lenne kiadnom rá a pénzt. Az öcsémnek már megmutattam az appot, és megvitattuk az elképzeléseket. Sokat segített nekem, hisz ismert a mondás, **több szem többet lát**.

*A folytatásban az onboarding/offboarding folyamatot dolgozom ki. És keresek embereket a teszteléshez. Teszt szriptet is készíteni fogok.*

## Egy kis adalék

A **Material Design** Kit ingyenes változatát használtam, ami nagy gondossággal a Material Design Irányvonalak figyelembe vételével készült (Android 7.0 Nougat). Letöltés: [Android Nougat Free GUI](https://materialdesignkit.com/android-gui/). Nekem személy szerint jobban tetszik a Material Design az Apple Human Interface Guideline-nál. A NaptárApp iOS változatát azért el fogom készíteni a későbbiekben.

Az alapértelmezett tipográfián (Roboto) és színeken nem változtattam. Most nem ezen van a hangsúly, hanem a működésen. Nem a végleges design-t készítettem el, csupán egy prototípust.

A **Figma** szoftver segítségével készítettem mindent, beleértve a prototípust. Korábban az Axure RP-t használtam, viszont azzal lassan haladnék a billentyűkombinációk hiányában. Ezen a téren a Figmának is van fejleszteni valója, ugyanis **angol nyelvű billentyűzetre alapozták azokat, így néhány billentyűkombináció nem működik!** Igazán tekintettel lehetnének a nem angol nyelvterületen élőre is! Legegyszerűbb megoldás, ha lehetne egyedi billentyűkombinációkat beállítani az egyes műveletekhez. Azonban jelenleg ilyen opció nincsen! Szerintem ez igen fontos usability probléma.

*Frissülni fog a cikk...*
