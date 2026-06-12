/* ============================================================
   ARTICLE DATA — Semilla Patrón de Aguacate Mexicano
   ES + EN completos. FR/AR/RU/ZH/KO: cabecera traducida +
   cuerpo en inglés con aviso (pendiente de traducción IA).
   ============================================================ */

const SEEDS_ES = { t:'seeds', phLabel:'Tolerancia de pH del suelo', items:[
  { n:'01', nm:'Mexicola',  ph:'Ligeramente ácido (5.0 – 6.0)',        pos:25 },
  { n:'02', nm:'Criolla',   ph:'Neutro (5.5 – 6.5)',                   pos:37.5 },
  { n:'03', nm:'San Ángel', ph:'Muy ligeramente alcalino (6.5 – 7.0)', pos:56 },
  { n:'04', nm:'Rocillo',   ph:'Ligeramente alcalino (7.0 – 7.9)',     pos:74 },
  { n:'05', nm:'Antillana', ph:'Muy ligeramente alcalino (6.6 – 7.3)', pos:61 },
  { n:'06', nm:'Zutano',    ph:'Muy ligeramente alcalino (6.0 – 7.0)', pos:50 }
]};
const SEEDS_EN = { t:'seeds', phLabel:'Soil pH tolerance', items:[
  { n:'01', nm:'Mexicola',  ph:'Slightly acidic (5.0 – 6.0)',         pos:25 },
  { n:'02', nm:'Creole',    ph:'Neutral (5.5 – 6.5)',                 pos:37.5 },
  { n:'03', nm:'San Ángel', ph:'Very slightly alkaline (6.5 – 7.0)',  pos:56 },
  { n:'04', nm:'Rocillo',   ph:'Slightly alkaline (7.0 – 7.9)',       pos:74 },
  { n:'05', nm:'Antillana', ph:'Very slightly alkaline (6.6 – 7.3)',  pos:61 },
  { n:'06', nm:'Zutano',    ph:'Very slightly alkaline (6.0 – 7.0)',  pos:50 }
]};

const UI = {
  es:{back:'← Noticias',home:'Inicio',news:'Noticias',crumb:'Semilla Patrón de Aguacate',by:'Por',waBtn:'Solicitar semilla por WhatsApp',quoteBtn:'Pedir cotización'},
  en:{back:'← News',home:'Home',news:'News',crumb:'Avocado Pattern Seed',by:'By',waBtn:'Request seed on WhatsApp',quoteBtn:'Request a quote'},
  fr:{back:'← Actualités',home:'Accueil',news:'Actualités',crumb:'Graine souche d\'avocat',by:'Par',waBtn:'Demander la graine sur WhatsApp',quoteBtn:'Demander un devis'},
  ar:{back:'الأخبار ←',home:'الرئيسية',news:'الأخبار',crumb:'بذرة أصل الأفوكادو',by:'بقلم',waBtn:'اطلب البذرة عبر واتساب',quoteBtn:'اطلب عرض أسعار'},
  ru:{back:'← Новости',home:'Главная',news:'Новости',crumb:'Семена-патрон авокадо',by:'Автор',waBtn:'Запросить семена в WhatsApp',quoteBtn:'Запросить предложение'},
  zh:{back:'← 新闻',home:'首页',news:'新闻',crumb:'牛油果母本种子',by:'作者',waBtn:'通过 WhatsApp 索取种子',quoteBtn:'索取报价'},
  ko:{back:'← 뉴스',home:'홈',news:'뉴스',crumb:'아보카도 모본 종자',by:'작성',waBtn:'WhatsApp으로 종자 요청',quoteBtn:'견적 요청'}
};

const ART = {};

/* ---------------- ESPAÑOL ---------------- */
ART.es = {
  ui: UI.es,
  cat:'Propagación · Aguacate',
  title:'Semilla Patrón de Aguacate Mexicano: el origen sano que define tu huerto',
  sub:'La mitad oculta del árbol —el portainjerto— determina la longevidad, la sanidad y la productividad de tu plantación de Hass. Y todo empieza en la semilla.',
  author:'Equipo Agrosensores',
  date:'Junio 2026',
  read:'9 min de lectura',
  heroCap:'Semilla patrón de aguacate mexicano de raza criolla nativa, seleccionada de árboles donadores.',
  notice:'',
  blocks:[
    {t:'lead',x:'En México, la distribución del género *Persea americana* en la zona central se expresa en innumerables formas genotípicas y fenotípicas. Estos aguacates nativos —los **criollos regionales**— son la base genética más pura del mundo, y su semilla es el cimiento invisible de cualquier huerto comercial de Hass.'},
    {t:'p',x:'Los genotipos locales se han seleccionado durante generaciones, principalmente para el consumo de su fruta fresca. Pero existe un uso poco estudiado y enormemente valioso: el viverismo. Cuando la semilla de ciertos árboles se destina a la propagación, debe reunir cualidades sobresalientes —**alto porcentaje de germinación, uniformidad, sanidad y vigor**— para que las plantas que nacen de ella lleguen al campo y se adapten a condiciones diversas.'},
    {t:'p',x:'A esos árboles los llamamos **"árboles donadores de semilla"**. Y aquí está el problema que muchos viveros, en México y en el mundo, pasan por alto: no todas las semillas que hoy se usan son ideales para obtener patrones de calidad. Con frecuencia se emplean semillas de origen diverso, cuya sanidad, uniformidad y vigor se desconocen.'},

    {t:'h2',n:'01',x:'La mitad oculta del árbol'},
    {t:'p',x:'El portainjerto es la mitad del árbol que se ha llamado **"la mitad oculta"**. La expresión nace de la poca importancia que históricamente se le ha dado a la raíz, a pesar de ser parte fundamental del sistema vegetal. Conocer el sistema radicular del aguacate permite aprovechar su potencial genético y seleccionar plantas capaces de hacer mejor uso del agua y los nutrientes disponibles en el suelo.'},
    {t:'p',x:'En el negocio del aguacate Hass, un buen portainjerto criollo se traduce en un **árbol longevo, de altos rendimientos y buena calidad de fruto**, con excelente adaptación al sitio. Los portainjertos mexicanos provienen de tres tipos de árboles nativos especialmente comunes en vivero: **Criolla**, **Mexicola** y **Antillana**, distribuidos en distintas zonas de propagación de México.'},
    {t:'pull',x:'El portainjerto es la mitad oculta del árbol: invisible bajo el suelo, pero decisivo sobre cada cosecha durante décadas.',by:'Agrosensores y Semillas de México'},

    {t:'h2',n:'02',x:'Las 6 semillas patrón mexicanas'},
    {t:'p',x:'El grado de acidez o alcalinidad del suelo se expresa en unidades de pH, y afecta procesos clave: disponibilidad de nutrientes, actividad de microorganismos y desarrollo radicular. Cada semilla patrón mexicana tiene una tolerancia distinta, lo que te permite elegir la más compatible con el suelo de tu región.'},
    SEEDS_ES,
    {t:'p',x:'El **pH ideal para cultivar portainjerto de aguacate está entre 5.5 y 7.0**: de ligeramente ácido a neutro, el rango donde la mayoría de los nutrientes están disponibles para la planta. Conocer el pH de tu suelo de destino es el primer dato que necesitamos para recomendarte la semilla correcta.'},

    {t:'h2',n:'03',x:'Por qué México lidera la propagación mundial'},
    {t:'p',x:'Las estadísticas y los indicadores económicos globales lo confirman: el mejor aguacate para propagación está en México. Los árboles mexicanos se consideran los ejemplares **más puros de todas las razas de aguacate** que existen. De hecho, el aguacate que Rudolph Hass desarrolló en California a mediados del siglo XIX se originó a partir de plantas mexicanas del estado de Puebla.'},
    {t:'p',x:'A esa genética superior se suman condiciones de cultivo ideales: el **suelo volcánico (Andisol)**, la altitud, el clima y la temperatura de Michoacán y Jalisco permiten hasta **cuatro floraciones al año** y una producción prácticamente continua. Es la combinación perfecta de tradición viverista y ventaja natural.'},
    {t:'stats',items:[
      {v:'152,000', l:'hectáreas de aguacate en México'},
      {v:'1.2 M', l:'toneladas de Hass al año'},
      {v:'120,000', l:'plantas injertadas / año en vivero'}
    ]},

    {t:'h2',n:'04',x:'Sanidad garantizada, desde la raíz'},
    {t:'p',x:'El origen sano de la semilla es nuestra responsabilidad. Cada lote de producción se analiza en un laboratorio acreditado por la Secretaría de Agricultura de México (SADER), y nuestros materiales fitogenéticos están **libres del viroide AVSb "Avocado Sun Blotch"**, según los análisis realizados en la Universidad Autónoma de Nuevo León y el Comité Estatal de Sanidad Vegetal (CESAVEG).'},
    {t:'callout',icon:'🌱',title:'Nuestro compromiso de sanidad',items:[
      'Semillas **NON-GMO**: libres de organismos genéticamente modificados.',
      'Material **libre del viroide AVSb** (Avocado Sun Blotch), verificado en laboratorio.',
      'Lotes analizados por laboratorio **acreditado por SADER**.',
      'Análisis fitopatológico oficial de **CESAVEG** que comprueba la nulidad de patógenos.',
      'Selección por **productividad, sanidad, germinación, vigor y compatibilidad** con la variedad.'
    ]},

    {t:'h2',n:'05',x:'Del vivero mexicano al mundo'},
    {t:'p',x:'Producimos más de 120 mil plantas injertadas de aguacate al año para abastecer el mercado local y exportar a **18 países en 5 continentes**. Cada carga sale de nuestro vivero en la zona aguacatera de Michoacán y se entrega a la aduana en el aeropuerto internacional, con empaque especializado, control fitosanitario y manejo de temperatura para envíos perecederos de alta prioridad.'},
    {t:'p',x:'Si estás iniciando o renovando un huerto de Hass —sin importar en qué parte del planeta— podemos asesorarte para elegir la semilla patrón correcta según tu suelo, tu clima y los requisitos fitosanitarios de tu país. Un origen sano es el primer paso hacia un árbol productivo.'}
  ],
  ctaH:'¿Listo para empezar con la semilla correcta?',
  ctaP:'Cuéntanos tu especie, tu suelo y tu país. Te asesoramos y cotizamos en menos de 24 horas.',
  tags:['AguacateHass','SemillaPatrón','Portainjerto','PropagaciónForestal','ExportaciónMéxico']
};

/* ---------------- ENGLISH ---------------- */
ART.en = {
  ui: UI.en,
  cat:'Propagation · Avocado',
  title:'Mexican Avocado Pattern Seeds: the healthy origin that defines your orchard',
  sub:'The hidden half of the tree —the rootstock— determines the longevity, health and productivity of your Hass orchard. And it all begins with the seed.',
  author:'Agrosensores Team',
  date:'June 2026',
  read:'9 min read',
  heroCap:'Mexican avocado pattern seed of native Creole race, selected from seed donor trees.',
  notice:'',
  blocks:[
    {t:'lead',x:'In Mexico, the distribution of the genus *Persea americana* across the central region appears in countless genotypic and phenotypic forms. These native avocados —the **regional Creoles**— are the purest genetic base in the world, and their seed is the invisible foundation of any commercial Hass orchard.'},
    {t:'p',x:'Local genotypes have been selected over generations, mainly for fresh fruit consumption. But there is a little-studied and enormously valuable use: nursery gardening. When the seed of certain trees is destined for propagation, it must have outstanding qualities —**high germination percentage, uniformity, health and vigor**— so the plants born from it reach the field and adapt to diverse conditions.'},
    {t:'p',x:'We call those trees **"seed donor trees."** And here lies the problem many nurseries, in Mexico and worldwide, overlook: not all seeds in use today are ideal for obtaining quality rootstocks. Often seeds of diverse origin are used, whose health, uniformity and vigor are unknown.'},

    {t:'h2',n:'01',x:'The hidden half of the tree'},
    {t:'p',x:'The rootstock is the half of the tree that has been called **"the hidden half."** The phrase comes from the little importance historically given to the root, despite being a fundamental part of the plant system. Understanding the avocado root system lets us harness its genetic potential and select plants able to make better use of the water and nutrients available in the soil.'},
    {t:'p',x:'In the Hass avocado business, a good Creole rootstock means a **long-lived tree, with high yields and good fruit quality**, with excellent site adaptation. Mexican rootstocks come from three especially nursery-common native tree types: **Creole**, **Mexicola** and **Antillana**, distributed across different propagation areas of Mexico.'},
    {t:'pull',x:'The rootstock is the hidden half of the tree: invisible beneath the soil, yet decisive over every harvest for decades.',by:'Agrosensores y Semillas de México'},

    {t:'h2',n:'02',x:'The 6 Mexican pattern seeds'},
    {t:'p',x:'Soil acidity or alkalinity is expressed in pH units and affects key processes: nutrient availability, microorganism activity and root development. Each Mexican pattern seed has a different tolerance, letting you choose the one most compatible with your region\'s soil.'},
    SEEDS_EN,
    {t:'p',x:'The **ideal pH for growing avocado rootstock is between 5.5 and 7.0**: from slightly acidic to neutral, the range where most nutrients are available to the plant. Knowing your destination soil\'s pH is the first piece of information we need to recommend the right seed.'},

    {t:'h2',n:'03',x:'Why Mexico leads global propagation'},
    {t:'p',x:'Statistics and global economic indicators confirm it: the best avocado for propagation is in Mexico. Mexican trees are considered the **purest specimens of all avocado races** in existence. In fact, the avocado Rudolph Hass developed in California in the mid-19th century originated from Mexican plants from the state of Puebla.'},
    {t:'p',x:'To that superior genetics add ideal growing conditions: the **volcanic soil (Andisol)**, altitude, climate and temperature of Michoacán and Jalisco allow up to **four blooms per year** and nearly continuous production. It is the perfect combination of nursery tradition and natural advantage.'},
    {t:'stats',items:[
      {v:'152,000', l:'avocado hectares in Mexico'},
      {v:'1.2 M', l:'tons of Hass per year'},
      {v:'120,000', l:'grafted plants / year in nursery'}
    ]},

    {t:'h2',n:'04',x:'Health guaranteed, from the root'},
    {t:'p',x:'A healthy seed origin is our responsibility. Every production batch is analyzed in a laboratory accredited by Mexico\'s Ministry of Agriculture (SADER), and our phytogenetic materials are **free of the AVSb "Avocado Sun Blotch" viroid**, according to analyses at the Autonomous University of Nuevo León and the State Plant Health Center (CESAVEG).'},
    {t:'callout',icon:'🌱',title:'Our health commitment',items:[
      '**NON-GMO** seeds: free from genetically modified organisms.',
      'Material **free of the AVSb viroid** (Avocado Sun Blotch), lab-verified.',
      'Batches analyzed by a **SADER-accredited** laboratory.',
      'Official **CESAVEG** phytopathological analysis proving the absence of pathogens.',
      'Selection by **productivity, health, germination, vigor and compatibility** with the variety.'
    ]},

    {t:'h2',n:'05',x:'From the Mexican nursery to the world'},
    {t:'p',x:'We grow more than 120,000 grafted avocado plants per year to supply the local market and export to **18 countries on 5 continents**. Each load leaves our nursery in the Michoacán avocado region and is delivered to customs at the international airport, with specialized packaging, phytosanitary control and temperature management for high-priority perishable shipments.'},
    {t:'p',x:'If you are starting or renewing a Hass orchard —anywhere on the planet— we can advise you on choosing the right pattern seed for your soil, climate and your country\'s phytosanitary requirements. A healthy origin is the first step toward a productive tree.'}
  ],
  ctaH:'Ready to start with the right seed?',
  ctaP:'Tell us your species, your soil and your country. We advise and quote in under 24 hours.',
  tags:['HassAvocado','PatternSeed','Rootstock','ForestPropagation','MexicoExport']
};

/* --------- FR / AR / RU / ZH / KO : header traducido, cuerpo EN + aviso --------- */
function makeFallback(lang, o){
  return {
    ui: UI[lang],
    cat:o.cat, title:o.title, sub:o.sub, author:o.author, date:o.date, read:o.read,
    heroCap: ART.en.heroCap, notice:o.notice,
    blocks: ART.en.blocks,
    ctaH:o.ctaH, ctaP:o.ctaP, tags:ART.en.tags
  };
}
ART.fr = makeFallback('fr',{
  cat:'Propagation · Avocat',
  title:'Graines souches d\'avocat mexicain : l\'origine saine qui définit votre verger',
  sub:'La moitié cachée de l\'arbre —le porte-greffe— détermine la longévité, la santé et la productivité de votre verger Hass. Et tout commence par la graine.',
  author:'Équipe Agrosensores', date:'Juin 2026', read:'9 min de lecture',
  notice:'Cet article est disponible en espagnol et en anglais. La version française complète arrivera bientôt via notre traduction assistée par IA. Texte ci-dessous en anglais.',
  ctaH:'Prêt à commencer avec la bonne graine ?',
  ctaP:'Indiquez-nous votre espèce, votre sol et votre pays. Nous vous conseillons et chiffrons en moins de 24 heures.'
});
ART.ar = makeFallback('ar',{
  cat:'الإكثار · الأفوكادو',
  title:'بذور أصل الأفوكادو المكسيكي: الأصل السليم الذي يحدد بستانك',
  sub:'النصف الخفي من الشجرة —الأصل— يحدد طول عمر بستان هاس وصحته وإنتاجيته. وكل شيء يبدأ من البذرة.',
  author:'فريق Agrosensores', date:'يونيو 2026', read:'9 دقائق للقراءة',
  notice:'هذه المقالة متوفرة بالإسبانية والإنجليزية. النسخة العربية الكاملة ستتوفر قريباً عبر الترجمة بمساعدة الذكاء الاصطناعي. النص أدناه بالإنجليزية.',
  ctaH:'هل أنت مستعد للبدء بالبذرة الصحيحة؟',
  ctaP:'أخبرنا بالنوع والتربة والبلد. نقدم لك المشورة وعرض الأسعار خلال أقل من 24 ساعة.'
});
ART.ru = makeFallback('ru',{
  cat:'Размножение · Авокадо',
  title:'Семена-патрон мексиканского авокадо: здоровое происхождение, определяющее ваш сад',
  sub:'Скрытая половина дерева —подвой— определяет долговечность, здоровье и продуктивность вашего сада Хасс. И всё начинается с семени.',
  author:'Команда Agrosensores', date:'Июнь 2026', read:'9 мин чтения',
  notice:'Эта статья доступна на испанском и английском. Полная русская версия скоро появится благодаря переводу с помощью ИИ. Текст ниже на английском.',
  ctaH:'Готовы начать с правильного семени?',
  ctaP:'Сообщите нам ваш вид, почву и страну. Консультируем и составляем предложение менее чем за 24 часа.'
});
ART.zh = makeFallback('zh',{
  cat:'繁殖 · 牛油果',
  title:'墨西哥牛油果母本种子：决定果园品质的健康源头',
  sub:'树木隐藏的另一半——砧木——决定您哈斯果园的寿命、健康与产量。而这一切都始于种子。',
  author:'Agrosensores 团队', date:'2026年6月', read:'阅读约 9 分钟',
  notice:'本文提供西班牙语和英语版本。完整中文版将很快通过我们的 AI 辅助翻译提供。以下正文为英文。',
  ctaH:'准备好从正确的种子开始了吗？',
  ctaP:'告诉我们您的物种、土壤和国家。我们将在 24 小时内为您提供咨询和报价。'
});
ART.ko = makeFallback('ko',{
  cat:'번식 · 아보카도',
  title:'멕시코 아보카도 모본 종자: 과수원을 결정하는 건강한 기원',
  sub:'나무의 숨겨진 절반인 대목은 하스 과수원의 수명, 건강, 생산성을 결정합니다. 그리고 모든 것은 종자에서 시작됩니다.',
  author:'Agrosensores 팀', date:'2026년 6월', read:'9분 읽기',
  notice:'이 기사는 스페인어와 영어로 제공됩니다. 전체 한국어 버전은 AI 보조 번역을 통해 곧 제공될 예정입니다. 아래 본문은 영어입니다.',
  ctaH:'올바른 종자로 시작할 준비가 되셨나요?',
  ctaP:'귀하의 품종, 토양, 국가를 알려주세요. 24시간 이내에 상담 및 견적을 제공합니다.'
});
