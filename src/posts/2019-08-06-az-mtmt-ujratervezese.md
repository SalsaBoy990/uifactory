---
title: A Magyar Tudományos Művek Tárának újratervezése
date: '2019-08-06'
thumbnail: mtmt.jpg
excerpt: >-
  Újraterveztem a Magyar Tudományos Művek Tárának borzalmasra sikeredett felhasználói felületét, ami rengeteg frusztrációt okoz a tudósok számára.
type: dashboard
---

Mondhatnánk az MTMT felülete a felhasználói élmény antitézise: milliónyi gomb összevisszasága, végletekig bonyolított keresés, apró hangyafasznyi betűméret (látszik, hogy bele akartak zsúfolni mindent egy képernyőbe), vizuális hierarchia gyatra, a design is úgy néz ki, mintha két évtizeddel ezelőtt készült volna. Amatőr munka.

![Az MTMT2 jelenlegi felülete (80%-os nagyításban, mert a monitoromon nem férne ki)](/assets/images/design/mtmt2_eredeti.png)

Az első felhasználói élményem az oldallal kapcsolatban az volt, hogy hozzá akartam rendelni magamat egy tanulmányhoz, amelynek társszerzője vagyok. Két óra szenvedés és anyázás után jöttem rá hogyan kell csinálni.

Az MTMT alkalmazás kezdőoldalát terveztem csak újra. Mobilnézetet egyelőre nem terveztem. Ez nem tekinthető végleges design-nak, csupán egy viszonylag magas fidelitású prototípusnak.

A fölösleges gombokat kivettem, a többi gombot rendszereztem és csoportosítottam (a közelség Gestalt-elve). Ikonok használatával is barátságosabbá tettem a gombokat.

A fejlécet is jobban elkülönítettem a képernyőn, amihez az ihletet igazából a Facebook adta. Külön felső indexen jeleztem piros számokkal az új üzenetek, fórumbejegyzések számát.

A **lokalitás törvényeit** alkalmaztam, ami tömören arról szól, hogy hogy a felületen hova rakod az egyes vezérlő gombokat, funkciókat. Oda kell ezeket helyezni, ahova a felhasználók várják, hogy vannak. Itt a Gmail levelezőrendszerből merítettem ihletet. A lokalitás törvényeire [Erik D. Kennedy](http://erikdkennedy.com/) ismert UX/UI designer hívta fel a figyelmemet a csúcsszuper hírlevelében.

1. **Oda rakd a vezérlést, ahol változást fejt ki.** A listában szereplő egyes publikációk szerkesztését, módosítását szolgáló funkciók gombjait a listában szereplő tétel sorába tettem.

2. **Ha a vezérlés egy egész területre hatással van (pl. e-mailek csoportjára), akkor tedd a vezérlést az adott terület fölé. Egymásba is ágyazhatók a területek.** Ezért tettem a publikációlista fölé a különböző kijelölés, keresés, sorbarendezés és a lista-, illetve táblázatnézet közötti váltás funkciókat.

3. **Minél távolabb van a vezérlés a változás helyétől, annál inkább észrevehetőbbnek kell lennie.** Az első szabály szerint oda rakd az elem hozzáadása gombot, ahol az adott elem meg fog jelenni: a lista aljára. Viszont, ha hosszú a lista, mondjuk 40-50 publikációd van, akkor le kéne görgetned a lista végére a hozzáadás gomb megnyomásához, ezért felülre, a „Közlemények” címsor alá is helyeztem hozzáadás gombot, illetve mellé tettem az importálás opciót is (fájlból, JSON-ból, XML-ből stb. is lehet beimportálni cikket az MTMT-ben), mert logikailag odatartozik.

![Az MTMT általam újratervezett felülete: az MTMT 3.0. 1440px széles](https://dl.dropboxusercontent.com/s/15zu5n0va4qc73i/mtmt3.png)

Természetesen ez még nem végleges design, mert le is kell tesztelni felhasználókkal és a visszajelzések alapján módosítani, iteratívan.