var util = require('util');

var szkaluje = [
  "%s rozpierdolił pasiekę",
	"%s przechodzi na czerwonym przez ulicę",
	"%s nie spuszcza wody w toaletach publicznych",
	"%s po sikaniu nie myje rąk po czym wita się ze wszystkimi współpracownikami",
	"%s pisał sam sobie zwolnienia z wuefu",
	"%s nie je śniadania",
	"%s mimo obietnic złożonych matce, zaraz po wyjściu z domu zdejmował czapkę i chował do tornistra",
	"%s nie nosi kaleson",
	"%s podczas grillowania w parku oddawał mocz w krzakach",
	"%s przeklina",
	"%s gdy miał 13 lat upił tacie pianę z piwa gdy nie patrzył",
	"%s trzaska drzwiami",
	"%s będąc niepełnoletnim kupił w kiosku 3 sztuki papierosów po czym przestraszył się i spuścił je w klozecie",
	"%s nie podmywa się po sraniu.",
	"%s będąc w szkole podstawowej zjadał gile z nosa. Na prośby nauczycielek by przestał to robić odpowiadał, że to jak narkotyk.",
	"%s nie odmawia pacierza przed snem",
	"%s jest niegodny zaufania",
	"%s walił konia w łóżku swoich starych",
	"%s ciągnął koleżanki za warkoczyki w przedszkolu",
	"%s kradnie prąd z klatki schodowej",
	"%s obraził PolishAdama28 niewybrednymi słowami",
	"%s kiedyś dostał za dużo reszty w sklepie spożywczym i nie powiedział ekspedientce",
	"%s podkrada spinacze sąsiadom",
	"%s zrobił aferę w poznańskim radiu",
	"%s specjalnie wpisuje błędna kapczę",
	"%s kradnie sprzęty biurowe",
	"%s nie myje po sobie naczyn",
	"%s przejeżdża na pomarańczowym",
	"%s nie ustępuje starszym w trawajach",
	"%s chodzi nago po domu.",
	"%s zajebał mi szlugi",
	"%s umyślnie podawał kolegom na sprawdzianach złe rozwiązania",
	"%s dzwonił pod wszystkie numery domofonem po czym uciekał gdzie pieprz rośnie",
	"%s nie czyta książek",
	"%s od czasu do czasu nie myje zębów przed pójściem spać",
	"%s sika na siedząco",
	"%s podgląda jaki PIN wstukują ludzie w bankomacie",
	"%s bawi się analnie",
	"%s uwięził i zamordował rodzinę carską",
	"%s często chodzi cały dzień bardzo spocony.",
	"%s będą u kogoś gościem kradnie zastawę stołową",
	"%s puszcza ciche bąki jeżdżąc komunikacją miejską",
	"%s zostawia warzywa na talerzu",
	"%s zostawia surówkę niezjedzoną.",
	"%s nie seeduje torrentów",
	"%s minusuje konstruktywne komentarze",
	"%s przykleja kozy z nosa pod blat biurka",
	"%s mlaska przy jedzeniu",
	"%s pogardliwe patrzy na starsze i schorowane osoby",
	"%s sra i nie spłukuje",
	"%s nie ustępuje miejsca starszym i schorowanym osobom w autobusie.",
	"%s nie odpowiada Dzień Dobry na ulicy",
	"%s nie mówi \"dziękuje\" po obiedzie",
	"%s spuszcza wodę tylko po kupie",
	"%s nie odkręca nakrętki przed wyrzuceniem plastikowej butelki",
	"%s dzieli przez zero",
	"%s je mięso w post",
	"%s używa licowanych bezpieczników",
	"%s zjadł święconkę przed Wielką Sobotą",
	"%s otworzył prezent przed gwiazdką",
	"%s nie wyciera butów",
	"%s wyjada wszystkie czekoladki z kalendarza adwentowego pierwszego grudnia",
	"%s nie chodzi do kościoła",
	"%s rysuje pożyczone płyty",
	"%s obraża papieża",
	"%s podbija własne tematy",
	"%s trzyma ręce w kieszeniach podczas rozmowy",
	"%s mlaska przy obiedzie",
	"%s nie przewija kaset przed oddaniem",
	"%s rozmawia w kościele",
	"%s wyciera szyjke jak pije po kimś",
	"%s sra do bidetu",
	"%s suszy papierowe ręczniki na kaloryferze",
	"%s śmieje się z cudzego nieszczęścia",
	"%s gwałci małe dzieci",
	"%s nie pomaga staruszkom przejść przez pasy",
	"%s przejeżdża na pomarańczowym",
	"%s nie wyciera dupy po sraniu",
	"%s nie zrobił laurki na dzień babci",
	"%s powiedział niewidomemu na przystanku, że jedzie dziewiętnastka, podczas gdy była to była siódemka",
	"%s kupuje dziewczęce majteczki na Allegro",
	"%s przykleja monety do asfaltu",
	"%s kopie działkę w Szabat.",
	"%s wyrzuca szklane butelki do pojemnika na plastik",
	"%s nie przestrzega przepisów BHP",
	"%s zostawia włosy na mydle",
	"%s nie spłukuje łanowców po kąpieli",
	"%s hałasuje podczas ciszy nocnej",
	"%s gra dalej na komputerze, mimo że powiedział mamie \"Już kończę!\" 2 godziny temu",
	"%s minusuje losowe wykopy",
	"%s obserwuje ten temat i poda was wszystkich do sądu za obrazę majestatu",
	"%s nie odłącza bezpiecznie urządzenia",
	"%s spojleruje chińskie bajki",
	"%s pluje do wody święconej",
	"%s kradnie mamie lajony",
	"%s to moderator /g/",
	"%s nie dzieli się drugim śniadaniem",
	"%s prosi kolegę o jednego czipsa i bierze pół paczki",
	"%s szkaluje papieża",
	"%s nie myje zębów",
	"%s wciąż używa Windows 7",
	"%s banuje losowych użytkowników Wykopu w stanie upojenia alkoholowego",
	"%s zapisuje miniaturki",
	"%s kradnie żarówki z klatki schodowej",
	"%s podkablował Ljuboję",
	"%s nie myje dupy przed analem",
	"%s plądruje piwnice sąsiadów",
	"%s popiera PiS",
	"%s dobiega do judasza w 2 sekundy",
	"%s maca bułki w sklepie",
	"%s ogląda kucyki",
	"%s nigdy się nie zgadza żeby kasjerka oddała grosika kiedy indziej",
	"%s nosi pantofle do dresów",
	"%s nie wie jak wyłączyć biblię",
	"%s pisze po ławkach",
	"%s nie zmienia obuwia w szkole",
	"%s wpadł w /fz/ i nie wie jak wyjść",
	"%s pije wode po pierogach",
	"%s śmiał się na Kac Wawa",
	"%s nosi buty na rzepy",
	"%s wyprzedza na podwójnej ciągłej",
	"%s przegrał z Najmanem",
	"%s prasuje spodnie dresowe w kanty",
	"%s nosi rurki na budowie",
	"%s jeździ na wakacje do Zgierza",
	"%s objada się pampuchami a potem wygląda tak jak wygląda",
	"%s twoja stara",
	"%s nie płakał po papieżu",
	"%s postuje na weszlo",
	"%s oddycha manualnie",
	"%s wita się przez próg",
	"%s uszkodził towar w sklepie po czym pospiesznie wyszedł",
	"%s trzyma widelec w prawej dłoni",
	"%s rozjebał paśnik",
	"%s rozlał kałamarz",
	"%s nie przyjął księdza po kolędzie",
	"%s mieszając herbatę dzwoni łyżeczką",
	"%s wycierał nos w rękaw",
	"%s zostawia buty w przejściu zamiast schować je do szafki",
	"%s nie gasi za sobą światła w ubikacji",
	"%s odstawia do lodówki pusty karton po mleku",
	"%s depcze partnerce po palcach podczas tańca",
	"%s nie odstawia w sklepie wózka na miejsce",
	"%s oblizuje talerz po bułce",
	"%s żuje gumę przy nauczycielce",
	"%s ma wielkiego pryszcza z białym czubkiem na brodzie i go nie wyciska",
	"%s pluje na chodnik",
	"%s sika do basenu",
	"%s zamyka ludziom drzwi przed nosem",
	"%s wchodzi do ZOO bez biletu",
	"%s nie opuszcza deski",
	"%s używa układu klawiatury 214",
	"%s mówi na grysik \"kasza manna\"",
	"%s skopiował swój lolifolder na VHS",
	"%s zesrał się w czasie swojego pogrzebu",
	"%s mówi \"na pole\"",
	"%s szkaluje Ducha Świętego",
	"%s korzysta z ofertu Zrembu zawsze na czasie",
	"%s nie wie co się w okół niego dzieje",
	"%s nie umie wejść na nocną",
	"%s nie szanuje swojej siostry",
	"%s nie sprząta odchodów po psie",
	"%s odpadł w 1/6 Ligi Mistrzów",
	"%s nie jest homoseksualny",
	"%s grymasi przy obiedzie",
	"%s zaspokoił Elfika32 w cewkę moczową",
	"%s pisze recenzje na Tanuki",
	"%s zabił Olafa Palme",
	"%s sra cegłami",
	"%s popiera ZUS",
	"%s jest cisgenderowy",
	"%s oblicza cotangensy Ojcu Rydzykowi",
	"%s nie wie że Yuri ma wielką dupe",
	"%s przeskakuje przez bramki w metrze",
	"%s śmieje się z Puchałke",
	"%s nie mówi cześć koleżankom",
	"%s jeździ amerykańskim autem",
	"%s rozmawia ze świadkami Jehowy",
	"%s pije wodę po ogórkach",
	"%s rozdaje Księgę Mormona",
	"%s używa Linuxa",
	"%s nie zmienia wody w akwarium",
	"%s gryzie rękę która go karmi",
	"%s gra w LoLa",
	"%s ogląda twardą pornografię",
	"%s robi zakupy w niedziele",
	"%s ogląda Big Bang Theory",
	"%s połyka rybie ości bez gryzienia",
	"%s zajada się majonezem prosto ze słoika",
	"%s proszony o polecenie chińskiej bajki rekomenduje Boku no Pico",
	"%s chodzi na manify",
	"%s pluje bezdomnym do zupy",
	"%s robi bonbe dupom",
	"%s pije herbatę z łyżeczką w środku",
	"%s nie chodził na religię w szkole",
	"%s inicjuje gównoburze",
	"%s popiera Korwina",
	"%s jeździ pociągiem na wstecznym",
	"%s nie daje napiwków",
	"%s ma szklanki w koszyczkach",
	"%s pisał \"chuj\" i \"cipa\" na szkolnych ławkach",
	"%s narkotyzuje się acodinem",
	"%s nie zapina pasów",
	"%s ma dywan na ścianie",
	"%s wyrzuca butelki zwrotne",
	"%s samowolnie oddalał się z lekcji biologii",
	"%s parkuje na kopertach",
	"%s saguje przypięte posty",
	"%s zagina rogi w książkach",
	"%s puszcza głośne wiatry i mówi że to w trawie coś piszczy",
	"%s nie daje na tacę",
	"%s zepsuł swojej mamie kwietnik, a winę zwalił na psa",
	"%s niszczy runo leśne",
	"%s nie zna się na zegarku",
	"%s rozwiesza ulotki z cenzopapą",
	"%s dał na tacę 10 zł i zażądał 9 reszty",
	"%s nie nauczył się na pamięć inwokacji z Pana Tadeusza",
	"%s nie chce jechać do babci",
	"%s wyjada ser z chizborgirów",
	"%s podbiera pieniądze z portmonetki babci",
	"%s napastuje kobiety w lesie",
	"%s nie chce jeść zupy",
	"%s nie pisał listów do świętego Mikołaja",
	"%s lubi zupę mleczną",
	"%s kupił mecz i przegrał",
	"%s złapał je wszystkie",
	"%s tasuje pod doujiny z Apple Bloom",
	"%s przeszkadza innym dzieciom w leżakowaniu",
	"%s zabrał babci dowód",
	"%s gnębił spierdoliny w szkole",
	"%s używa stylu Night",
	"%s brzydko się wyraża",
	"%s USUNĄŁ TO",
	"%s nie chce, żeby mama całowała go na dobranoc",
	"%s ma tajny folder na dyskietce",
	"%s nie widział nagich zdjęć elfika32",
	"%s przykleja gumę pod ławką",
	"%s podszywa się pod bł. Jana Pawła Drugiego i gwałci dzieci",
	"%s głosi kazania z ambony myśliwskiej",
	"%s czyta mangi od przodu",
	"%s szkaluje błogoslawionego Jana Pawła 2",
	"%s nosi Prządło na barana",
	"%s saguje ten temat",
	"%s wyjada mamie rodzyny z ciasta",
	"%s wszedł do internetu i nie umie wyjść",
	"%s wyrzucił Magika przez okno",
	"%s donosi do Kidprotect",
	"%s wywrócił globus na lewą stronę",
	"%s ukradł księdzu stułę i udaje kibica Fiorentiny",
	"%s w Wigilię mówi ludzkim głosem",
	"%s przedłużył kontrakt z Levy'm",
	"%s kradnie wanny z działek",
	"%s siorbie jedząc zupę",
	"%s kopie grzyby w lesie",
	"%s chodzi do kościoła w dresie",
	"%s pierze w rzece",
	"%s założył słabą stronę w internecie",
	"%s kradnie z pracy papier toaletowy",
	"%s trząsł stołem w czasie gry w bierki",
	"%s się garbi",
	"%s jeździ na gapę trolejbusem",
	"%s wyjada dziury w serze",
	"%s strzela z łuku do kur",
	"%s nie nosi majtek",
	"%s maluje jajka w Wigilię",
	"%s nie wie, że Jon umiera zadźgany przez braci z Marshem na czele",
	"%s kupuje chleb krojony",
	"%s śmieci na MS AGH i zwala na studentów",
	"%s kupuje bitcoiny w szczycie",
	"%s wozi drewno do lasu",
	"%s zabierał dzieciom samochody z gum Turbo i śmiał się przy tym jak zbir",
	"%s sprzedaje śnieg Eskimosom",
	"%s opowiada sprośnie dowcipy w obecności Elfika32",
	"%s pożycza w Providencie",
	"%s zjada 20 kg cebuli rocznie",
	"%s wyłącza biblię emotkami",
	"%s używa zasilacza Codegen",
	"%s wyłącza komputer zanim wyświetla się komunikat o możliwości bezpiecznego wyłączenia",
	"%s rucha wał z kołdry",
	"%s masturbuje się analnie przy rodzinnym obiedzie",
	"%s ściąga spodnie z torrentów",
	"%s nie wyłącza komórki na lekcjach",
	"%s nie wykupuje biletu w strefie płatnego parkowania",
	"%s ściągał na maturze",
	"%s nie klęka w kościele",
	"%s wpycha się w kolejki",
	"%s inkasuje opłatę za darmowe miejsca parkingowe",
	"%s wyrzuca śmieci w lesie",
	"%s sika do basenu",
	"%s błaźni się w tańcu",
	"%s nie zna hymnu",
	"%s nie umie w trójsiłę",
	"%s nie zatrzymuje się przed przejazdem kolejowym",
	"%s kradnie znicze z nagrobków",
	"%s parkuje na dwójce",
	"%s nie umie wyłączyć śledzika",
	"%s nie słucha RMF FM",
	"%s kobiety za życia nie ocenia",
	"%s nie wyłącza trybu stand-by w radiu kuchennym",
	"%s wozi psa w hundayu atosie 1.0 1993",
	"%s słucha tylko mamy i radia Z",
	"%s nie głosuje w wyborach parlamentarnych",
	"%s wie gdzie się podziały tamte prywatki",
	"%s wciąga rogale marcińskie nosem",
	"%s powiedział kasjerce, że w siatce jest pięć bułek. Było sześć",
	"%s kłamie",
	"%s kopie koty",
	"%s nie przepuszcza kobiet w drzwiach",
	"%s nasrał własnej matce pod drzwiami",
	"%s ogląda \"Pamiętniki z wakacji\"",
	"%s nakręcił i zamieścił w internecie psa bitego łopatą",
	"%s kibicuje Arce Gdyni",
	"%s zajebał mi ronaldo",
	"%s urolog nie polecam",
	"%s nie bierze ulotek",
	"%s chodzi do wegetariańskich restauracji i prosi o schabowe",
	"%s przyklepuje groszek ziemniakami",
	"%s składając zamówienie podszczypuje kelnerki",
	"%s kupuje koncentrat zamiast keszupu mikado",
	"%s zajmuje toalety dla niepełnosprawnych",
	"%s ma dwie skrzynki na bezpieczniki",
	"%s kłóci się o grosik reszty",
	"%s uprawia seks bez zabezpieczeń",
	"%s obnaża się w miejscach publicznych. Zapytany, dlaczego to robi, wznosi wzrok ku niebu, wzrusza ramionami i z charakterystycznym dla niego, niewzruszonym optymizmem mówi \"wielkie mi mecyje\"",
	"%s gra sam ze sobą w szachy i przegrywa",
	"%s postawił serwer. Na dywanie",
	"%s wpłacił dotację na kurahena",
	"%s wyrzucał przygotowane przez mamę kanapki i kupował batoniki w szkolnym sklepiku",
	"%s odkurza w sobotę o 8 rano",
	"%s głosował na Huberta Humphreya i zabił Jezusa",
	"%s zgłosił się do kwestowania podczas Wielkiej Orkiestry Świątecznej Pomocy, po czym przywłaszczył sobie zawartość puszki",
	"%s ma zacięty caps lock",
	"%s bił koleżanki skakanką",
	"%s wypychał kieszenie ołówkami w IKEA i zabierał je do domu",
	"%s nie kliknął brzuszka pajacyka",
	"%s kradnie pączki Patrycji",
	"%s jeździ gimbusem na gapę",
	"%s strzela dla dziewczyn ze staników",
	"%s nie wykupował obiadów w szkolnej stołówce, a potem przy okienku twierdził, że zgubił karteczkę",
	"%s jest synem swojego brata",
	"%s nie segreguje śmieci",
	"%s chodzi ścieżką rowerową",
	"%s nie zjada skórek od chleba",
	"%s zrobił wszystkie popmki",
	"%s zgrał internet na dyskietke",
	"%s podglądał kuzynkę w wannie",
	"%s poszedł do ZOO i go małpy wyśmiały",
	"%s dokarmia zwierzęta w ZOO kiedy pracownicy nie patrzą",
	"%s pozwala spadać dobrym tematom",
	"%s pisze \"puhar\" przez samo \"h\"",
	"%s łapał w podstawówce koleżanki za siusię",
	"%s krzywi się do małych dzieci",
	"%s smaruje klamki kupą",
	"%s wrzuca sąsiadom kamienie do skrzynek na listy",
	"%s obsikuje deskę i spuszcza wodę przy otwartej klapie",
	"%s sam zrajdował 370chan.lt/b/",
	"%s szkaluje papieża na youtube i zwala wine za to na fora katolickie",
	"%s nie przestrzega netykiety",
	"%s podbija z czternastej",
	"%s wymacywał Tazosy w paczkach Lays",
	"%s wsypywał sól czanów do cukierniczki",
	"%s lurkuje /4/",
	"%s podrabiał podpis rodziców pod uwagami w dzienniczku",
	"%s mocno zmasakrował młodego lewaka",
	"%s mówi keczap zamiast keczup",
	"%s waży śmietanę w zupie",
	"%s rozwalił słonecznik pod ławką",
	"%s postuje o 21:37",
	"%s bije w szczepionkę",
	"%s nakremował klamki w tłusty czwartek",
	"%s trzyma ręce w kieszeniach jak rozmawia z ludźmi",
	"%s niszczy w lesie niejadalne grzyby",
	"%s nie chciał karnego po trzech rożnych",
	"%s rzuca w pomnik",
	"%s naśmiewa się z ludzi którzy mają gorzej",
	"%s kupuje papierosy od ruskich",
	"%s parkuje na miejscu dla niepełnosprawnych",
	"%s sika do zlewu",
	"%s nie umie wejść na ruski",
	"%s liczy ile pierogów kto zjadł a później wypomina!",
	"%s wzywa straż pożarną bez powodu",
	"%s maca chipsy w poszukiwaniu tazos",
	"%s nie wyłącza sprzętów elektronicznych podczas burzy",
	"%s wszedł podczas deszczu do niezabezpieczonej stacji transformatorowej",
	"%s czyta streszczenia zamiast lektur",
	"%s ksuje na spotach",
	"%s wpierdala grochową przed szkołą",
	"%s jebał w dupę bez prezerwatywy",
	"%s pali włosy na nogach w szatni od wfu",
	"%s słucha Firmy przy rodzicach",
	"%s pokazał środkowy palec na koncercie Tibii",
	"%s chodzi na wagary",
	"%s wandalizuje wikipedie",
	"%s przykleja włosy do mydła",
	"%s zostawia puste rolki po papierze toaletowym",
	"%s nie płakał po papieżu",
	"%s bagatelizuje ostrzeżenia epidemiologiczne",
	"%s podgląda sąsiadkę przez okno i wali o tym konia",
	"%s oszukał tramwaj-kupił bilet i poszedł pieszo",
	"%s podbiera jajka z kurnika",
	"%s pisał dokumenty w comic sans",
	"%s wyciągał taśmy z kaset VHS",
	"%s przeszkadza kasjerkom liczyć pieniądze",
	"%s nie daje suchego chleba dla konia",
	"%s nie segreguje śmieci",
	"%s postuje cenzo na wykopie",
	"%s odpowiada na trolla",
	"%s bierze kredyt w SKOKu",
	"%s zgwałcił pasiekę",
	"%s nie zmienił czasu na letni",
	"%s zjada swój kał",
	"%s to twoja stara",
	"%s pluł na moherowe babcie pod krzyżem",
	"%s zamiata śmieci pod dywan",
	"%s wierzy w zamach w Smoleńsku",
	"%s kibicuje Legii",
	"%s wierzy w mistrzostwo Legii",
	"%s kibicuje Lechowi",
	"%s wierzy w mistrzostwo Lecha",
	"%s kibicuje Wiśle",
	"%s wierzy, że Wisła się utrzyma",
	"%s nie wierzy w boga",
	"%s postuje w wątkach o muzyce myśląc że to kogoś obchodzi",
	"%s wierzy w boga",
	"%s jak był mały spadł z dywanu na podłogę i złamał żebra",
	"%s czyta cały ten temat",
	"%s jest cały w kale",
	"%s nie odprowadza składek na ZUS",
	"%s kompiluje jądra. Ojca",
	"%s kradnie węgiel Ślązakom",
	"%s grabi zagrabione",
	"%s gwałci się sam",
	"%s ogląda Czarodziejkę z Księżyca",
	"%s tańczy parapara z własnym kotem",
	"%s rozmawial glosno na lekcji",
	"%s nie jadł drugiego śniadania",
	"%s odpisywał prace domowe na przerwie",
	"%s nie pisze postów w epickim",
	"%s wysyła emacsem przez sendmail",
	"%s strzelał z czuba",
	"%s napluł na korytarzu",
	"%s umazał gównem portrety naszych przywódców",
	"%s pociął ostrzem od temperówki 20 kurtek w szatni i mu się to upiekło",
	"%s wali konia codziennie o 21:37",
	"%s wciąż nie wie czy grzyby to bardziej rośliny czy zwierzęta",
	"%s podchodzi do losowych przechodniów, kopie w kostkę, po czym spierdala z szyderczym śmiechem",
	"%s wraz z kolegą przyniósł na lekcję ślimaki i puszczał je po szafie",
	"%s nie wyłącza jednostki centralnej podczas burzy",
	"%s obraża Zalgo",
	"%s zapomina hasła do usuwania postów",
	"%s nie odkłada butów na półkę",
	"%s je pitcę z sokiem mailnowym super odlotowym",
	"%s pruka w autobusie i patrzy z wyrzutem na współpasażera",
	"%s wrzuca obspermione majtki matce prosto w pralkę",
	"%s obraża papieża na wykopie",
	"%s nie ustępuje pierwszeństwa pieszym na pasach",
	"%s dostaje bana na karachanie :(",
	"%s lekceważy regulamin karachan.org :(",
	"%s wyrzuca kanapki do szkoły a mamie mówi że zjadł",
	"%s rzadko zmienia skartpetki i bielizne",
	"%s odgryza czarną końcówkę od banana",
	"%s siada przy sikaniu",
	"%s pierdzi przy laniu",
	"%s zaopatruje Stana L. w fioletową ambrozję. Pijackie eldorado zdaje się nie mieć końca",
	"%s postuje chociaż nie ma pomysła na treść posta",
	"%s podczas masturbacji udaje orgazmy",
	"%s nie odrobił zadania domowego tłumacząc się, że opłakiwał śmierć papieża",
	"%s dał 5 zł",
	"%s ociera się o kobiety w autobusie",
	"%s to Peja z Poważnej",
	"%s podkablował Ljuboję",
	"%s wyjada karme dla kota",
	"%s nie dał pasty termoprzewodzącej przy montażu nowego procesora",
	"%s nie zakręca wody w kranie podczas mycia zębów",
	"%s wchodzi bez pukania",
	"%s na 3 maja chodzi po mieście i kradnie flagi",
	"%s nie świętuje urodzin Sunny",
	"%s nie wysypuje chipsów na talerz",
	"%s wylizuje miske psu",
	"%s myje ojcu plecy",
	"%s ogląda shoneny",
	"%s wali gruchę w pokoju rodziców",
	"%s ogląda How I Met Your Mother",
	"%s rucha psa jak sra",
	"%s je guwno",
	"%s na lekcji religii z szyderczym uśmiechem powiedział do katechetki: \"papież tak bardzo martwy\" po czym wyskoczył z okna",
	"%s nie opuszcza deski sedesowej bo załatwieniu potrzeby fizjologicznej",
	"%s wrzuca oc na kwejka",
	"%s nasrał koleżance do buta",
	"%s nie umył rąk po masturbacji",
	"%s pod przymusem odmówienia modlitwy od babci, ukląkł i w myślach powtarzał \"huj huj huj\" zamiast słów modlitwy",
	"%s głupio podśmiechiwał w muzeum holocaustu",
	"%s spóźnił się na zajęcia i było można wyczuć od niego zapach palonych zapałek",
	"Na sesjach rpg %s dopisywał swojej postaci fikcyjne umiejętności",
	"%s nie myje po sobie talerzy",
	"%s chodzi w bluzach \"JP\", a babci mówi, że to jest skrót od Jan Paweł, żeby mu dawała pieniądze na tace, które przeznacza na gazowane napoje i Top Chipsy",
	"%s pije piwo pod sklepem, mimo iż widnieje tam napis zakazujący owej czynności",
	"%s rozgazowuje Colę w sklepie",
	"%s nie mówi \"na zdrowie\" gdy ktoś kichnie",
	"%s chodził na wagary w podstawówce",
	"%s nie dostał licencji na grę w pucharach",
	"%s popiera dzielenie punktów po sezonie zasadniczym",
	"%s kopiuje %s z pierwszego postu bo nie chce mu sie pisac samemu",
	"%s uratował dziecko z pożaru. A potem się obudził",
	"%s nie pomaga osobom na wózku inwalidzkim w wejściu po schodach",
	"%s gotuje parówki nie zdejmując folii",
	"%s sra ludziom na wycieraczki",
	"%s puszcza cichacze i zgania na osoby obok niego",
	"%s założył własną firmę ale go z niej zwolniono",
	"%s używa kodów grając w sapera",
	"%s nie pomaga użytkownikom forum w problemach",
	"%s dojebał Napoleonowi",
	"%s wyrywa muchom skrzydełka",
	"%s jeźdźi środkowym pasem",
	"%s skarży pani",
	"%s przyjmuje ciało Chrystusa nie podchodząc uprzednio do spowiedzi",
	"%s pojmał nowocioty",
	"%s nie mówi wszystkich grzechów przy spowiedzi",
	"%s wykupił Polonię Warszawa",
	"%s biega boso po domu, mimo że mama prosi aby założył kapcie",
	"%s rozpisuje diety na forach",
	"%s wyrzuca kubki od jogurtów nie wyskrobując do końca",
	"%s wykopuje informacje nieprawdziwe",
	"%s wyjada sarnom z paśnika",
	"%s sprawdza czy hajs się zgadza",
	"%s kurwi się czanmową",
	"%s głosował na Stana Tymińskiego",
	"%s pali w miejscach publicznych",
	"%s wrzuca do galerii nie odwrócone zdjęcia",
	"%s nie rozumie dowcipu a babie i frezarce",
	"%s zbiera wungiel przy torach",
	"%s nie przeprasza rywala po faulu",
	"%s sprzedaje obwarzanki na targu nie mając stosownego zezwolenia",
	"%s myśli że Sosnowiec jest na Śląsku",
	"%s klepie koleżanki po tyłku, zapytany dlaczego odpowiada że jest samcem alfa i mu wolno",
	"%s bierze na poczcie numerki do kilku okienek naraz",
	"%s grzebie sobie w dupie w miejscach publicznych",
	"%s psuje swój licznik neodymem",
	"%s dokonał ludobójstwa na Wołyniu",
	"%s dosyła skany za 10 tysięcy",
	"%s kładzie kamienie na szynach",
	"%s kupuje pliki na chomikuju.",
	"%s pali w piecu oponami",
	"%s raiduje krochana",
	"%s rzadko się goli i wygląda niechlujnie",
	"%s składuje azbest z starych fabryk w piwnicy dziadka",
	"%s obgryza paznokcie u nóg",
	"%s puszcza głośno muzykę z telefonu",
	"%s pije herbatę z łyżką w szklance",
	"%s rozdeptuje ślimaki po deszczu",
	"%s nie potrafi się cieszyć z małych rzeczy",
	"%s wchodzi mi do wanny [cool]",
	"%s fapie do chińskich bajek",
	"%s nie przyznaje się do bycia polakiem",
	"%s nie myje zębów na noc",
	"%s mówi psy na policję",
	"%s nie lubi Dragon Balla",
	"%s nosi dwie różne skarpetki",
	"%s wstaje po południu",
	"%s odgrzewa w mikrofalówce",
	"%s nie śpiewał hymnu",
	"%s chodzi nieuczesany",
	"%s nie miał stroju na wf",
	"%s nie przekazał 1% na chore dzieci",
	"%s obraża się kiedy przegrywa",
	"%s dokucza dziewczynom",
	"%s nie kupuje polskich produktów",
	"%s ciągnie koleżanki za włosy",
	"%s nie odwzajemnia uśmiechu",
	"%s rozpierdolił dwie pasieki",
	"%s zajada się smalcem",
	"%s kradnie czereśnie",
	"%s grzebie sobie w dupie",
	"%s nie umie przepraszać",
	"%s nigdy nie podaje piłki",
	"%s woli wyrzucić niż oddać koledze",
	"%s chodzi po trawnikach",
	"%s ma pirackiego Windowsa",
	"%s zadziera nosa",
	"%s ma zrośnięte brwi",
	"%s ma brudny kołnierz",
	"%s pije piwo z sokiem",
	"%s ma wysoki cholesterol",
	"%s przejechał kota sąsiada",
	"%s zaczepia młode dziewczyny",
	"%s przeszedł Mario Bros w lewo",
	"%s utopił swoje Simy",
	"%s mieszka u mamy",
	"%s ma włosy na plecach",
	"%s robi grilla na balkonie",
	"%s głosuje na PO",
	"%s nie wymienia szczoteczki do zębów",
	"%s śmiał się na wychowaniu do życia w rodzinie",
	"%s grał w karty na religii",
	"%s palił papierosy w szkolnej toalecie",
	"%s nie oszczędza prądu",
	"%s wymusza pierszeństwo",
	"%s przechodzi przez ulicę w miejscach niedozwolonych",
	"%s dzwoni na policję i robi głupie żarty",
	"%s nie zostawia napiwków",
	"%s słucha Radia Maryja",
	"%s uchylał się od służby wojskowej",
	"%s ukrywa swoje dochody",
	"%s nie chodzi na wywiadówki",
	"%s zapomniał nakarmić kota",
	"%s nie pamięta czy wyłączył żelazko",
	"%s nie lubi zwierząt",
	"%s sika do zlewu",
	"%s je kanapki z serem i szynką",
	"%s nie notował na lekcji",
	"%s wykorzystał wszystkie nieprzygotowania w pierwszym tygodniu",
	"%s rzuca papierki na ulicę",
	"%s nie sprząta po swoim psie",
	"%s przełącza dzieciom bajki",
	"%s ma trudny charakter",
	"%s nie kosi trawnika",
	"%s PISZE WIELKIMI LITERAMI",
	"%s nie wie kto to Mickiewicz",
	"%s pluje z okna na ludzi",
	"%s nie szanuje homoseksualistów",
	"%s wciąga rogale, oficjalnie do środka",
	"%s z tyłu zobaczył nasz ratusz",
	"%s ma platynowe konto na kurahenie",
	"%s wchodzi na komixxy i uważa je za zabawne",
	"%s jeździ Solarisem",
	"%s podpala Solarisy",
	"%s zakopuje znaleziska o spalających się Solarisach",
	"%s ma multikonta na wykopie",
	"%s pisze \"Cię\" w internecie",
	"%s strzelał do polaków",
	"%s streamuje chińskie bajki",
	"%s wącha przestrzenie między palcami stóp",
	"%s ściąga na dysk chińskie bajki",
	"%s obrzygał ojca podczas rodzinnego objadu",
	"%s sięgał ręką gdy Testo podawał pomarańczę",
	"%s rzucał czereśniami w przejeżdżające samochody",
	"%s uważa się za lepszego od Jana Pawła II",
	"%s siada na miejscu dla ciężarnej kobiety i odwraca głowę",
	"%s pije redbulla i udaje Magika",
	"%s z całym wózkiem zakupów ustawia się przy kasie \"do dziesięciu produktów\"",
	"%s odpowiada na maile z Nigerii",
	"%s oblał mamie białą bluzkę sokiem z czarnej porzeczki",
	"%s wrzuca plastikowe butelki do pojemnika na papier",
	"%s nie wie na czym polega spalony",
	"%s wyjada porzeczki sąsiadom, a zapytany kto to zrobił odpowiada, że Duch Święty",
	"%s wyrzuca butelki do pojemnika z papierem",
	"%s przed masturbacją nie wyłancza kamerkę internetową",
	"%s zakopuje swoje znaleziska",
	"%s przewraca żółwie na grzbiet",
	"%s zjada świeczki z tortu",
	"%s wkłada szpilki do dziurek od klucza",
	"%s podgląda nagą młodszą siostrę, zapytany co robi odpowiada że kontempluje naturę",
	"%s podpala mrówki szkłem powiększającym",
	"%s zamawia za pobraniem po czym nie odbiera przesyłki",
	"%s dzwoni na koszt rozmówcy",
	"%s zatykał pyrą rurę wydechową w polonezie ojca",
	"%s przywiązuje kotom puszki do ogonów",
	"%s zajebał mi szlugi",
	"%s wsiada do pociągu byle jakiego",
	"%s przegrał w Jumanji",
	"%s nie wie gdzie jest Wally",
	"%s to %s tamto xD",
	"%s używa margaryny zamiast masła",
	"%s podjada między posiłkami",
	"%s zjada kozy z nosa",
	"%s mierzy rezystancję metodą techniczną omomierzem",
	"%s pełen agresji rzucał śnieżkami w sąsiedzkie okna",
	"%s uważa, że \"dzień świra\" to komedia",
	"%s wyrywa lachony na trabanta",
	"%s nie umie obliczać modułu liczb urojonych",
	"%s używa myszki kulkowej",
	"%s przeniósł się w czasie i ukrzyżował Jezusa Chrystusa",
	"%s był za ACTA",
	"%s chciał zjeść ślimaka ale mu uciekł",
	"%s zakłada thready \"prawaki vs lewaki\" zaśmiewając się przy tym do monitora",
	"%s odpala strony porno w wystawowych komputerach w MediaMarkt po czym oddala się w popłochu",
	"%s wychodzi z restauracji bez płacenia",
	"%s wyjada w Biedronce nadzienie z Oreo",
	"%s wystrzeliwał w sufit z rurki od długopisu namoczone kawałki czerwonej krepy",
	"%s podczas zabawy na świetlicy plastikowym samolotem, dźwiękiem pękającego plastiku zwrócił uwagę opiekunki i na pytanie co się stało, odpowiedział, że to tak już było",
	"%s strzela z wiatrówki do psa sąsiada",
	"%s je chipsy podczas grania na playstation",
	"%s zmienia tapety w telefonie matki bez pozwolenia",
	"%s je chipsy zimą",
	"%s nie szanuje zieleni",
	"%s nie wytrzepał butów po wyjściu z piaskownicy",
	"%s odkamienia czajnik octem",
	"%s pluje sobie w brodę",
	"%s puszcza muzykę z komórki jadąc autobusem",
	"%s kroi jedzenie widelcem",
	"%s dosypywał trutki do karmnika",
	"%s przebija opony sąsiadom",
	"%s udaje, że coś mu upadło, schyla się po to, a tak na prawdę chodzi mu o to żeby zajrzeć koleżance pod spódnice",
	"%s płaci za bułki banknotami 100-złotowymi",
	"%s podłożył koledze pierdzącą poduszke na krzesło i później się wszyscy z niego nabijali że puścił bąka",
	"%s nie zwalnia pamięci po dynamicznym jej przydzieleniu",
	"%s głośno chrupie podczas seansu filmowego",
	"%s trzyma hasła użytkowników wykop.pl w postaci jawnej",
	"%s na klasówce z matematyki odwraca kartkę na drugą stronę żeby nikt nie ściągnął",
	"%s ostentacyjnie spożywa mięsne pokarmy w piątki",
	"%s nosi słuchawki na odwrót",
	"%s nie nosi krawatu",
	"%s śmiał się na pogrzebie papieża",
	"%s depcze trawniki",
	"%s nie sprząta po psie",
	"%s nie segreguje odpadów",
	"%s zjada kozy z nosa",
	"%s wali pod cycki Aralki",
	"%s obraża papieża i wmawia wszystkim że to karachan.gov",
	"%s nie bierze prysznica przed wejściem na basen",
	"%s w kościele w momencie kiedy ksiądz podchodzi z tacą mówi: nie, dziękuję",
	"%s wyjada siano spod wigilijnego obrusa",
	"%s popiera Gimpera",
	"%s zgłosił filmik Gimperra",
	"%s pisze pozytywne komentarze pod filmikami Gimbera",
	"%s lurkuje Karachan.gov na stylu Night",
	"%s wybijał szyby vlogerom",
	"%s sam sobie wysyła zlewy i zwala winę na forum obrazkowe o kupie",
	"%s zaznacza do usunięcia epickie nitki",
	"%s zapisał tę nitkę do .mht",
	"%s nie umie zapisywać nitek",
	"%s nie umie zablokować zakodowanego tła",
	"%s sprawdza limity bumpowania sagując"
];

var regexp = /^\.szkaluj\s(.+?)$/i;

module.exports.on_message = function (popebot, from, to, text, message) {
  if (regexp.test(text)) {
    var response = szkaluje[Math.floor(Math.random()*szkaluje.length)];

    var matches = text.match(regexp);

    if (matches[1].trim() === "popebot") {
      popebot.client.say(to, from + ": Bądźmy łagodni.");
    } else {
      popebot.client.say(to, util.format(response, matches[1].trim()));
    }

    return true;
  }
  return false;
};
