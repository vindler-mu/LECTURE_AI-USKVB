// Sdílená data o setkáních série. Načítá je index.html (program a hero)
// i prezencni-listina.html (hlavička tisknutelné listiny).
// Při změně termínu nebo tématu stačí upravit jen tento soubor.

const sessions = [
  {
    n: 1,
    short: "Orientace",
    title: "Orientace v&nbsp;AI krajině a&nbsp;nastavení přístupu",
    date: "2026-05-11",
    timing: "11.&nbsp;května 2026, 13:00 · 90&nbsp;minut",
    desc: "Co AI je a&nbsp;co není. Nastavení realistických očekávání: kde AI exceluje, kde selhává a&nbsp;proč na tom záleží. Jak o&nbsp;AI přemýšlet jako odborník a&nbsp;co definuje odbornost v&nbsp;době AI. Jaký mindset potřebujete pro práci s&nbsp;AI ve&nbsp;své profesi. Společná formulace toho, co od&nbsp;série potřebujete.",
    why: "Bez realistického nastavení očekávání hrozí dvě krajnosti: přehnaná důvěra v&nbsp;AI, nebo naopak neopodstatněná skepse. Cílem je najít rovnováhu a&nbsp;zároveň zmapovat, kde vnímáte největší potenciál ve své práci.",
    topics: ["Co je a&nbsp;co není AI", "Demystifikace AI", "AI mindset", "Odborná práce", "Analýza potřeb"],
    prep: "2–3 konkrétní pracovní úkoly z&nbsp;vaší praxe, kde trávíte hodně času, něco se opakuje, nebo byste rádi pracovali efektivněji. Nemusí se přímo týkat AI; jde o&nbsp;materiál, se kterým budeme společně pracovat.",
    practice: "Formulujete, kde ve svých pracovních procesech vidíte příležitosti nebo úskalí. Tento vstup formuje obsah dalších seminářů.",
    materials: [
      { label: "Tradiční program, GOFAI a&nbsp;adaptivní AI", href: "handson/1.1-paradigmata-ai.html" },
      { label: "Jak funguje strojové učení a&nbsp;neuronové sítě", href: "handson/1.2-strojove-uceni.html" },
      { label: "Jagged intelligence: kde AI exceluje a&nbsp;kde selhává", href: "handson/1.3-jagged-inteligence.html" },
      { label: "Tři vrstvy gramotnosti: informační, digitální, AI", href: "handson/1.4-gramotnosti.html" }
    ],
    toolkit: [
      { label: "Claude", href: "https://claude.ai" }
    ]
  },
  {
    n: 2,
    short: "Principy",
    title: "Jak AI funguje: principy srozumitelně",
    date: "2026-05-25",
    timing: "25.&nbsp;května 2026, 13:00 · 90&nbsp;minut",
    desc: "Šest úhlů pohledu na to, jak AI vzniká a&nbsp;co se odehrává při jejím použití: z&nbsp;čeho se skládá AI nástroj, odkud bere trénovací a&nbsp;vstupní data, jak se učí a&nbsp;v&nbsp;jaké podobě v&nbsp;něm jsou znalosti uloženy. Cílem je porozumět principu natolik, aby bylo možné odhadnout, kde AI selhává a&nbsp;proč.",
    why: "Kdo rozumí principům fungování nástroje, dokáže předvídat jeho selhání. Halucinace a&nbsp;bias nejsou poruchy; jsou logickými důsledky toho, jak AI uvnitř pracuje. V&nbsp;prostředí, kde se rozhoduje na základě přesných dat a&nbsp;odborných textů, je porozumění limitům AI podmínkou bezpečného použití.",
    topics: ["Model vs. systém | aplikace", "Trénovací a&nbsp;vstupní data", "Způsoby učení AI", "Symbolický vs. subsymbolický přístup", "Syntaxe vs. význam", "Pravděpodobnostní výstupy"],
    prep: "Vraťte se k&nbsp;úkolům ze své praxe, které jste si měli vytipovat po prvním setkání: ke konkrétním činnostem, u&nbsp;kterých by vám AI mohla pomoci. U&nbsp;každého z&nbsp;nich se zamyslete nad třemi otázkami. Jaká data do úkolu vstupují (texty, čísla, dokumenty, mluvené slovo)? Jak vysokou přesnost výstup vyžaduje a&nbsp;co se stane, když se v&nbsp;něm objeví chyba? A&nbsp;nakolik v&nbsp;úkolu stavíte na vlastní odborné zkušenosti, kterou AI nemá? K&nbsp;těmto třem otázkám se bude na setkání vztahovat i&nbsp;výklad. Jeho obsah si tak budete moci průběžně propojovat se svými úkoly.",
    practice: "Ve zbývajícím čase se společně podíváme na Hugging Face Spaces, kde si vyzkoušíme několik konkrétních modelů přímo v&nbsp;prohlížeči: rozpoznávání řeči v&nbsp;češtině (Whisper), open-source alternativu k&nbsp;ChatGPT (Mistral) a&nbsp;specializovaný model pro biomedicínský text. Cílem je ukázat, že AI svět je rozmanitější než pár chatbotů a&nbsp;že pro různé úlohy existují různé nástroje.",
    materials: [
      { label: "Anatomie AI aplikace: model vs. systém", href: "handson/2.1-anatomie-aplikace.html" },
      { label: "Život dat: od trénování po vaše prompty", href: "handson/2.2-data-zivot.html" },
      { label: "Trénink modelů: RLHF a&nbsp;rozdíly mezi typy", href: "handson/2.3-trenink-modelu.html" },
      { label: "Slova bez zkušenosti: jak AI rozumí významu", href: "handson/2.4-porozumeni.html" },
      { label: "Svět modelů: tři cesty k&nbsp;AI", href: "handson/2.5-svet-modelu.html" }
    ],
    toolkit: [
      { label: "Hugging Face", href: "https://huggingface.co/models" },
      { label: "Ollama (lokální modely)", href: "https://ollama.com" }
    ]
  },
  {
    n: 3,
    short: "Nástroje",
    title: "Efektivní práce s&nbsp;AI nástroji",
    date: "2026-06-01",
    timing: "1.&nbsp;června 2026, 13:00 · 90&nbsp;minut",
    desc: "Jak formulovat zadání, aby AI dávala užitečné výstupy. Práce s&nbsp;dokumenty, sumarizace, extrakce informací, překlady. Porovnání dostupných nástrojů a&nbsp;jejich vhodnosti pro různé typy úkolů.",
    why: "Kvalita výstupu AI závisí z&nbsp;velké části na kvalitě zadání. Rozdíl mezi vágním a&nbsp;dobře strukturovaným zadáním může být rozdíl mezi nepoužitelným a&nbsp;vysoce užitečným výstupem.",
    topics: ["Jak formulovat zadání (prompty)", "Parametr teploty a&nbsp;konzistence výstupů", "Práce s&nbsp;dokumenty a&nbsp;texty", "Porovnání nástrojů (ChatGPT, Claude, Gemini, Copilot)", "Opakované úlohy a&nbsp;šablony"],
    prep: "Přineste si 1–2 konkrétní úkoly, se kterými jste už s&nbsp;AI pracovali, nebo úkoly, u&nbsp;kterých vás zajímá, jak by si s&nbsp;nimi AI poradila. Může to být cokoliv: shrnutí, formulace textu, dotaz nad tématem, překlad, brainstorming, příprava podkladu. Důležitější než dokument je samotné zadání: co od&nbsp;AI chcete, v&nbsp;jakém kontextu a&nbsp;pro koho. Pokud máte uloženou konverzaci, která vás dříve překvapila (ať už dobrým, nebo špatným výstupem), vezměte si ji s&nbsp;sebou. Společně se podíváme, proč to dopadlo tak, jak to dopadlo.",
    practice: "Procházíme společně, jak formulovat zadání, jak iterovat v&nbsp;dialogu, jak pracovat s&nbsp;dokumenty a&nbsp;v&nbsp;čem se liší jednotlivé nástroje. U&nbsp;každého kroku si rovnou zkoušíte věci, které jste si přinesli ze své praxe — vlastní úkol, vlastní prompt, vlastní dříve uloženou konverzaci. Cílem je odejít se znatelně lepším citem pro to, jak své úkoly v&nbsp;AI nástrojích formulovat a&nbsp;kdy se vyplatí vyzkoušet jiný nástroj nebo nastavení.",
    materials: [
      { label: "Pravděpodobnostní generátor: proč není databáze", href: "handson/3.1-pravdepodobnost.html" },
      { label: "Anatomie promptu a&nbsp;práce s&nbsp;kontextem", href: "handson/3.2-anatomie-promptu.html" },
      { label: "Iterace a&nbsp;dialog: rozhovor jako pracovní metoda", href: "handson/3.3-iterace-a-dialog.html" },
      { label: "Práce s&nbsp;vlastními dokumenty: sumarizace, extrakce, porovnání", href: "handson/3.4-prace-s-dokumenty.html" },
      { label: "Nástroje a&nbsp;jejich nastavení: Claude, ChatGPT, Gemini, Copilot", href: "handson/3.5-nastroje-pruvodce.html" }
    ],
    toolkit: [
      { label: "Claude", href: "https://claude.ai" },
      { label: "ChatGPT", href: "https://chatgpt.com" },
      { label: "Gemini", href: "https://gemini.google.com" },
      { label: "Microsoft Copilot", href: "https://copilot.microsoft.com" },
      { label: "NotebookLM", href: "https://notebooklm.google.com" }
    ]
  },
  {
    n: 4,
    short: "Vyhledávání",
    title: "AI-asistované vyhledávání a&nbsp;práce s&nbsp;informacemi",
    date: "2026-06-25",
    timing: "25.&nbsp;června 2026, 13:00 · 90&nbsp;minut",
    desc: "Jak AI mění způsob vyhledávání a&nbsp;zpracování odborných informací. Přehled dostupných nástrojů, porovnání s&nbsp;klasickým vyhledáváním a&nbsp;klíčová otázka: jak ověřovat to, co AI najde.",
    why: "Významná část odborné práce zahrnuje vyhledávání, čtení a&nbsp;vyhodnocování informací. AI-asistované vyhledávání může tento proces zrychlit, ale jen pokud umíte ověřit, že nalezené informace a&nbsp;zdroje jsou skutečné a&nbsp;relevantní.",
    topics: ["Nástroje pro AI rešerše", "Vyhledávání v&nbsp;legislativě a&nbsp;odborné literatuře", "Ověřování zdrojů a&nbsp;citací", "Klasická vs. AI rešerše"],
    prep: "Bude upřesněno před setkáním.",
    practice: "Zkoušíte vyhledávací nástroje na vlastních rešeršních úkolech ze své praxe."
  },
  {
    n: 5,
    short: "Kritika",
    title: "Kritické myšlení při práci s&nbsp;AI",
    date: "2026-06-29",
    timing: "29.&nbsp;června 2026, 13:00 · 90&nbsp;minut",
    desc: "Jak systematicky hodnotit důvěryhodnost toho, co AI vygeneruje. Rozpoznávání typických chyb, zkreslení a&nbsp;slepých míst. Praktický rámec pro ověřování výstupů v&nbsp;odborném kontextu.",
    why: "AI výstupy vypadají přesvědčivě, i&nbsp;když obsahují chyby. V&nbsp;odborném prostředí, kde mají výstupy reálné důsledky, je schopnost kriticky posoudit AI odpověď stejně důležitá jako schopnost ji získat. Tento seminář buduje návyk, ne jen znalost.",
    topics: ["Halucinace a&nbsp;chyby v&nbsp;praxi", "Jak ověřovat výstupy", "Zkreslení a&nbsp;slepá místa AI", "Kdy AI (ne)důvěřovat"],
    prep: "Bude upřesněno před setkáním.",
    practice: "Dostáváte AI-generované výstupy a&nbsp;hledáte v&nbsp;nich chyby. Následně sdílíte strategie, které vám fungují ve vaší konkrétní práci."
  },
  {
    n: 6,
    short: "Praxe",
    title: "AI v&nbsp;pracovních procesech: od teorie k&nbsp;praxi",
    date: "2026-07-20",
    timing: "20.&nbsp;července 2026, 13:00 · 90&nbsp;minut",
    desc: "Přenesení všeho dosavadního do vašich konkrétních pracovních situací. Společná práce nad reálnými úkoly, sdílení zkušeností z&nbsp;mezidobí a&nbsp;hledání postupů, které fungují v&nbsp;praxi.",
    why: "Obecná AI gramotnost má smysl, jen pokud se promítne do každodenní praxe. Tento seminář je o&nbsp;tom, abyste odešli s&nbsp;alespoň jedním konkrétním postupem, který reálně použijete ve své práci.",
    topics: ["Řešení vašich reálných úkolů", "Sdílení zkušeností", "Co funguje a&nbsp;co ne", "Postupy pro opakované úlohy"],
    prep: "Bude upřesněno před setkáním.",
    practice: "Přinesete konkrétní pracovní situaci. Společně procházíme celý postup od zadání po ověření výstupu."
  },
  {
    n: 7,
    short: "Instituce",
    title: "Jak AI zakotvit v&nbsp;instituci: pravidla, nástroje, kompetence",
    date: "2026-07-27",
    timing: "27.&nbsp;července 2026, 13:00 · 90&nbsp;minut",
    desc: "Závěrečný seminář propojující dvě roviny: (1) co regulace AI (EU AI Act) znamená pro úřad a&nbsp;regulované subjekty, a&nbsp;(2) praktické kroky k&nbsp;tomu, aby AI v&nbsp;instituci fungovala odpovědně. Od výběru nástrojů přes bezpečnost dat po interní pravidla a&nbsp;budování kompetencí.",
    why: "Bez institucionálního ukotvení zůstane AI individuálním experimentem jednotlivců. Jako regulatorní úřad navíc ÚSKVBL potřebuje rozumět regulaci AI, protože ovlivní i&nbsp;regulované subjekty.",
    topics: ["Regulace AI v&nbsp;EU", "Bezpečnost dat při práci s&nbsp;AI", "Uzavřené vs. veřejné nástroje, licence", "Interní pravidla a&nbsp;odpovědnosti", "Budování kompetencí do budoucna"],
    prep: "Bude upřesněno před setkáním.",
    practice: "Návrat k&nbsp;potřebám z&nbsp;prvního semináře. Co se za dobu série změnilo? Společná formulace prvních doporučení pro další kroky instituce."
  }
];
