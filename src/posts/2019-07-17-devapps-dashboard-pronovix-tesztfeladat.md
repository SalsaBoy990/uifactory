---
title: DevApps Dashboard (Pronovix tesztfeladat)
date: '2019-07-17'
thumbnail: DevAppsLight.jpg
excerpt: >-
  Ez egy tesztfeladat volt egy UX designer álláshoz még 2018-ban. Most
  újracsináltam a mostani tudásom szerint a vezérlőpultot.
type: dashboard
---
Elsőnek a feladat angol nyelvű leírását adom meg, utána bemutatom a design tervemet.

## UX Designer test task for applicants

### Task description:
We’d like to replan the layout of the Developer Apps table.

![Developer Apps table](/assets/images/design/developer_apps_table.png)

This is one page of a complex web based portal.

* On this page we have a header and a footer. You don’t need to bother with that now
just highlight their places without content.
* Users can create as many developer apps as they want.
* App has
  - a name
  - a status.: Statuses helps us identify if we can use the application or not. An app can have 3 statuses:
    - Approved: the app is usable.
    - Revoked: it can’t be used.
    - Pending: the app is under evaluation.
  - actions 
     - View: leads to the detail page of the app 
     - Edit: leads to the edit the app 
     - Analytics: leads to the app related analytics
     - Delete: it deletes the application

* extra information is possible: Behind show and hide details.

You can add new features what you feel logical.
To demonstrate your plan we’d like to ask you to create a wireframe.


## A megoldás

Mindig papíron kezdek el tervezni filctollal. 8 perces brainstorming session-nel kezdek, de nem szoktam az időt olyan szigorúan betartani, néha dupla annyi ideig gondolkodok. Szoktam ötleteket venni más designerek munkáiból, melyek fent vannak a Dribbble és hasonló oldalakon.

Készítettem egy világos és egy sötét designtervet is. A megfelelő kontrasztarányokra mindenhol ügyeltem.

* Elsőként fogtam gombot és levittem a lista aljára, hogy ott lehessen hozzáadni app-ot. Ugyanúgy 70px magas, mint a listában szereplő sorok.

* úgy gondoltam, hogy külön állapot oszlop fölösleges, inkább az app neve után felső indexben adtam meg az állapotukat.

* A figyelmeztető szimbólumot inkább a sor elé tettem, mert engem zavart középen. A „részletek megmutatása/elrejtése” opció elhagyható, már alapból meg kellene jeleníteni a bővebb információkat. Egy kattintást megspórolunk a felhasználónak.

* A műveletek gombokat sem kell leugró választó gombbal elrejteni. Mind a négy művelet ikonja kifér egymás mellett. Még egy kattintás megspórolva.

* A módosítás dátuma információt még fontosnak tartottam megadni, hogy lássuk melyik app-hoz mikor nyúltak hozzá.

* A felhasználó nevét is kivettem a fő címsorból, és feltettem a header-be, ahogyan a közösségi app-oknál szokott lenni.

Még több dolgon is gondolkodni kell: pl. milyen sorrendben jelenjenek meg az app-ok a listában? Lehet az utolsó módosítás szerint sorbarendezni, valamint az állapot szerint.

Elsőként mindenképpen állapot szerint rendeznék sorba: legfelül a „revoked”, utána a „pending”, és végül az „approved” állapot. Másodlagos rendezésként pedig a módosítás dátuma szerint raknám sorba az app-okat, hogy mindig a legaktuálisabb legyen felül.

![DevAppsLight designterv](https://dl.dropboxusercontent.com/s/9a6rx413e4p57gl/DevAppsLight.png)

![DevAppsDark designterv](https://dl.dropboxusercontent.com/s/n96o3vjtbf7t7ez/DevAppsDark.png)

