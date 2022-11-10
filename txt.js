const text = {
    eng:[
    {
        title:"Multilingual Communication",
        content:`Facilitating communication between cancer patients and/or their relatives with
    non-native speakers in Europe in their own language whereby written and oral
    text is automatically online translated into the language of the other
    participant(s). For example, a French cancer patient can communicate in his/her
    own language with a German and a Spanish patient and vice versa. By
    integrating specific terms that cancer patients use, we try to steer
    communication in the right direction as much as possible. The basis for these
    translation activities is the German DeepL, which is currently considered the best
    translation machine. Because hardly anyone speaks a dual language as their
    mother tongue and you can best communicate about your disease experiences in
    your own language, this gives many more patients access to experiences of the
    international cancer community.`
},  {
    title:"Information about cancer drugs",
    content:
    `An important topic of discussion on digital platforms for cancer patients is the
    use of medicines (availability, use, side effects, etc.). As soon as patients
    communicate with patients in other countries, the differences in the availability
    of medicines in countries, regions and hospitals in Europe also immediately come
    into focus. As soon as a patient hears something about a drug used by another
    person, the DREMBLE platform provides access to the EMA's EPAR in its own
    language. These are official texts that have been approved by the European and
    national medicines authority(s). Time and time again, research shows that postal
    code medicine is a reality. Limiting disparities in access to good medicines is one
    of the cornerstones of the policies of European, national and regional
    governments in Europe. DREMBLE can help.`
},{

    title:"Information about the national availability of cancer drugs",
    content:`Given the large amount of drugs, for different indications, and the large number
    in the pipeline, it is almost impossible for patients to get a picture of what is
    possible for their specific situation. More and more medicines are becoming
    available for advanced, metastatic and/or returned cancer In addition, cancer
    drugs go their own way per country in Europe from EMA approval to whether or
    not included in the package of collectively funded care. Through DREMBLE,
    patients are given information to decide together with their doctor about the
    availability of medicines in their country: as trial participant, compassionate use
    patient, ex gratia drug receiver from the pharmaceutical company in case of
    medicines with a market authorisation, in the basic package and prescriptible.
    By means of the DREMBLE platform we try to strengthen the position of the
    cancer patient.`
}],
    nl:[
        {
            title:"Meertalige communicatie",
            content:`
            Dremble faciliteert de communicatie tussen kankerpatiënten en/of hun familieleden met anderstaligen in Europa in hun eigen taal waarbij schriftelijke en mondelinge tekst automatisch online wordt vertaald in de taal van de andere deelnemer(s). Een Franse kankerpatiënt kan bijvoorbeeld in zijn/haar eigen taal communiceren met een Duitse en een Spaanse patiënt en vice versa. Door specifieke termen die kankerpatiënten gebruiken te integreren, proberen we de communicatie zoveel mogelijk in goede banen te leiden. De basis voor deze vertaalactiviteiten is het Duitse DeepL, dat momenteel wordt beschouwd als de beste vertaalmachine. Omdat bijna niemand een tweede taal als moedertaal spreekt en je het beste in je eigen taal over je ziekte-ervaringen kunt communiceren, geeft dit veel meer patiënten toegang tot ervaringen van de internationale kankergemeenschap.
            `
        },
        {
            title:"Informatie over kankermedicijnen",
            content:`
            Een belangrijk gespreksonderwerp op digitale platformen voor kankerpatiënten is het gebruik van medicijnen (beschikbaarheid, gebruik, bijwerkingen, etc.). Zodra patiënten communiceren met patiënten in andere landen, komen ook de verschillen in de beschikbaarheid van medicijnen in landen, regio's en ziekenhuizen in Europa direct in beeld. Zodra een patiënt iets hoort over een geneesmiddel dat door een andere persoon wordt gebruikt, biedt het DREMBLE-platform toegang tot het EPAR van het EMA in zijn eigen taal. Dit zijn officiële teksten die zijn goedgekeurd door de Europese en nationale geneesmiddelenautoriteit(en). Keer op keer blijkt uit onderzoek dat postcodegeneeskunde een realiteit is. Het beperken van verschillen in toegang tot goede geneesmiddelen is een van de hoekstenen van het beleid van Europese, nationale en regionale overheden in Europa. DREMBLE kan helpen.
            `
        },
        {
            title:'Informatie over de nationale beschikbaarheid van kankermedicijnen',
            content:`Gezien de grote hoeveelheid medicijnen, voor verschillende indicaties en het grote aantal in de pijplijn, is het voor patiënten bijna onmogelijk om een beeld te krijgen van wat er mogelijk is voor hun specifieke situatie. Er komen steeds meer medicijnen beschikbaar voor gevorderde, gemetastaseerde en/of teruggekeerde kanker Daarnaast gaan kankermedicijnen per land in Europa hun eigen weg, van EMA-goedkeuring tot al dan geen in het pakket van collectief gefinancierde zorg. Via DREMBLE krijgen patiënten informatie om samen met hun arts te beslissen over de beschikbaarheid van geneesmiddelen in hun land: als trialdeelnemer, compassionate use-patiënt, ex gratia-medicijnontvanger in het geval van geneesmiddelen met een marktvergunning, in het basispakket.

            Door middel van het DREMBLE platform proberen we de positie van de kankerpatiënt te versterken.`
        }
    ]
};

Object.values(langu.children).filter(x => x.textContent === window.location.href.split("?")[1].split(`=`)[1]).forEach(x => x.style.backgroundColor = 'yellow');
((arr)=>{
    up.addEventListener("click",()=>{
          if(up.textContent !=="home"){
           arr.forEach(x => {
            arr = arr.filter(z => z!== x);
            x.innerHTML = x.children[0].outerHTML;
            x.children[0].children[1].style.animation = `rotateBack 0.3s forwards`;
            up.textContent = "home";
           })
          
        } else {
            window.location.href = './index.html' + '?' +  window.location.href.split("?")[1];
        }
        });
    

    document.querySelectorAll(".item").forEach((x,i) => {
        x.children[0].children[0].textContent = text[window.location.href.split("?")[1].split(`=`)[1]][i].title;
        x.addEventListener("click",(e)=>{
    if(arr.includes(x)){
        x.innerHTML = x.children[0].outerHTML;
        arr = arr.filter(z => z!== x);
      
        x.children[0].children[1].style.animation = 'rotateBack 0.1s forwards';
    } else {
            x.innerHTML += `<div class="itemText">${text[window.location.href.split("?")[1].split(`=`)[1]][i].content}</div>`;
            x.children[0].children[1].style.animation = 'rotate 0.5s forwards';
            arr.push(x);
            
    };
    if(arr.length > 0){
       
        up.textContent = "arrow_upward";
    }
    else {
        up.textContent="home";
    }
})})})([]);

langu.addEventListener("click",(ev)=>{
    if(ev.target.textContent){
        window.location.href = `./over.html?lang=${ev.target.textContent}`;
        ev.target.style.backgroundColor = "yellow";
    }
   
   
})
