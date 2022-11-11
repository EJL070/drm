
if(document.head.children.length < 1)
{document.head.innerHTML += `<title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="style.css"/>
    <style id="style">
    body{
        height:fit-content;
        min-height:100vh;
        width:100vw;
        display:grid;
        grid:max-content 1fr max-content / 100%;
        margin:0;
        overflow-x:hidden;
    }
    header,main,footer{
        width:100%;
        display:grid;
    }
    a,p,h1,h2,h3,h4,h5,h6,span,menu{
        padding:0;
        margin:0;
        text-decoration:none;
        color:unset;
    }
    
    
    </style>
`;
};
if(document.body.children.length < 2){
    document.body.innerHTML = `<header></header><main class="main"></main><footer></footer>`
};

const getFonts = (...fonts) => style.textContent = `@import url('https://fonts.googleapis.com/css2?family=${fonts.map(font => font.replaceAll(" ", "+")).join("&family=")}&display=swap');` + style.textContent;
const selector = s => document.querySelector(s);
const isObject = arg => arg !== undefined ? arg.constructor === Object : false;
const setAttributes = obj => Object.keys(obj).length > 0 ? ` ${Object.keys(obj).map(key => `${key}="${obj[key]}"`).join(' ')}` : "";
const element = name => attributes => (...content) => isObject(content[0]) ? element(name)({ ...attributes, ...args[0] }) : content ? content.map(co => `<${name}${setAttributes(attributes)}>${co}</${name}>`).join('') : `<${name}${setAttributes(attributes)}></${name}>`;
const a = (link, text) => element("a")({ href: link })(text);
const div = element("div");
const menu = element("menu");
const h1 = element("h1");
const span = element("span");
const icon = span({ class: "material-symbols-outlined" });
const brand = (name, logo) => div({ class: "brand" })(div({ class: "brandLogo" })("") + div({ class: "brandName" })(name));

const menuItems = div({ class: "menuItem" });
const menuRow = (...items) => menu({ class: "menuRow" })(menuItems(...items));
const setMainElement = name => (...args) => selector(name).innerHTML = args.join('');
const setHeader = setMainElement("header");
const setMain = setMainElement("main");
const setFooter = setMainElement("footer");
const mainItems = (...items) => items.map(item => div({class:"mainItem"})(item)).join("")
setHeader(brand("DRMBL", "Koe"), menuRow(a("index.html","Home"),a("over.html?lang=nl", "Over"), a("partners.html", "Partners"), a("financiers.html", "Financiers"), a("publicaties.html", "In de Media")));
getFonts("Lexend", "Bebas Neue", "Barrio", "Akshar");

// const min = window.innerHeight - (parseInt(window.getComputedStyle(selector("header")).height) + parseInt(window.getComputedStyle(selector("footer")).height));
// if (parseInt(window.getComputedStyle(selector("main")).height) < min) {
//     selector("main").style.height = `${min}px`;
    

// };
const images = ['pexels-nerosable-7594466.jpg','drawing-1.svg','chat-dynamic-gradient.png','man.jpg','portret.jpg','mad.jpg','vrouw.jpg']
const page = {
    'index.html': () => {
        setMain("KOE")
    },
    'partners.html': () => {
        selector("main").attributes.class.value = "partners";
        setMain(
            ` <div class="partners">
        <div class="partner"><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiSlMXN4KD7AhVOKuwKHb_ICpAQFnoECAwQAQ&url=https%3A%2F%2Fnl.linkedin.com%2Fin%2Fpeterlems&usg=AOvVaw2YOR94TndXR70VIQ6o1Y3q">Peter Lems</a></div>
        <div class="partner"><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwia7eDf4KD7AhVyxgIHHYMsBqgQFnoECBUQAQ&url=https%3A%2F%2Fnl.linkedin.com%2Fin%2Fwarnyta-minnaard-592a6523&usg=AOvVaw3nAWfFhZRpZ8VUte8H5Rrg">Warnyta Minnaard</a></div>
        <div class="partner"><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiBnvyU4KD7AhWuOOwKHcRABa8QFnoECA0QAQ&url=https%3A%2F%2Fnl.linkedin.com%2Fin%2Fmalon-hamoen-giraldi-5b90553&usg=AOvVaw3FVdNHSAxcuzJ9pFb3BYDC">Malon Hamoen</a></div>
    </div>`
        )
    }, 'publicaties.html': () => {
        selector("main").attributes.class.value = "publicaties";
        setMain(`
    <div class="article"><a href="https://www.trouw.nl/opinie/te-weinig-en-te-laat-krijgt-patient-met-kanker-toegang-tot-nieuwe-medicijnen~b8862ded/">Trouw</a>
    <i>21 oktobber 2022</i></div>
    
<div class="article"><a>Presentatie Amgen</a><i>21 december 2021</i></div>
<div class="article"><a href="https://www.trouw.nl/cs-bd89d94b">Trouw</a><i>21 december 2021</i></div>
<div class="article"><a href="introductie.html">Financieele Dagblad</a> <i>8 oktober 2021</i></div>
<div class="article"> <a href="knawadvies.html">LinkediIn</a><i>5 oktober 2021</i></div>
<div class="article"><a class="ka">Financieele Dagblad</a><i>16 september 2021</i></div>
<div class="article"> <a href="https://www.ad.nl/gezond/jaren-gesteggel-over-goedkeuren-nieuw-medicijn-in-duitsland-gebeurt-dat-in-een-maand~a02965af">Algemeen Dagblad</a><i>2 september 2021</i></div>
</div>`);
        document.querySelectorAll(".article").forEach((article,i) => {
            article.style.backgroundImage = `url(${images[i]})`;
            if(['svg','png'].includes(images[i].split(".")[1])){
                article.style.backgroundSize = 'contain';
                article.style.backgroundPosition = '50% 50%';
            };
            
        });
    },
    'financiers.html':()=>{
        selector("main").attributes.class.value = "financiers";
        setMain(`<div class="financier"><p>Provinicie Zuid-Holland</p>
        <a href="https://www.zuid-holland.nl/online-regelen/subsidies/subsidies/mit-haalbaarheidsprojecten/">MIT</a>
    </div>`)
    },
    'index.html':()=>{
        
        setMain(mainItems("Over","Financiers","Publicaties","In de Media"));

        selector("main").attributes.class.value = "home";
       
        document.body.style.background = 'url(home.jpg)';
        document.body.style.backgroundSize = 'cover';
        selector("main").style.background= `linear-gradient(
            90deg,
            transparent 0,
            transparent 33.3%,
            hsla(0,100%,50%,0.5) 0,
            hsla(0,100%,50%,0.5) 66.6%,
            hsla(200,100%,50%,0.5) 0,
            hsla(200,100%,50%,0.5) 100%

        ),linear-gradient(
            transparent 0,
            transparent 33.3%,
            hsla(60,100%,50%,0.5) 0,
            hsla(60,100%,50%,0.5) 66.6%,
            hsla(300,100%,50%,0.5) 0,
            hsla(300,100%,50%,0.5) 100%
        )`;
  
      
        selector("header").style.backgroundColor = 'hsla(0,9%,9%,0.9)';
        selector("header").style.color = 'hsla(20,100%,50%,1)';
      
    }
};
const current = page[window.location.href.split("/").slice(-1)[0]];
current ? current() : "";