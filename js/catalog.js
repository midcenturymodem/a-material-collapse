const entries= {
    object1: {
        name: "Asprin Pills",
        img:"./assets/img/Aspirin_pills_MeccaFlats.jpg",
        altText:"Asprin Pills",
        shortDescription: "",
        longDescription: "", 
        audio: "",
    },

    object2: {
        name:"Asprin Bottle",
        img:"./assets/img/Aspirinbottle1_MeccaFlats.jpg",
        shortDescription: "",
        longDescription: "<p>Hear from Dr. Rebecca Graff on some of the artifacts collected from the Mecca.</p>“All about are the cold places,</br>all about are the pushmen and jeopardy, theft— </br>all about are the stormers and scramblers but </br>what must our Season be, which starts form Fear? <br>Live and go out. </br>Define and </br>Medicate the whirlwind.” <p><i> The Second Sermon on the Warpland For Walter Bradford,</i> Gwendolyn Brooks</p>",
        audio:"",
    },

    object3: {
        name:"Bennington Marble",
        img:"./assets/img/BenningtonMarble_MeccaFlats.jpg",
        shortDescription: "",
        longDescription: "<p>Hear from Dr. Rebecca Graff on some of the artifacts collected from the Mecca.</p>“Aunt Dill </br> has bits of brass and marble, and Franciscan </br>China; has crocheted doilies; has old mahogany, </br>polished till it burns with a smothered glow; has </br>antimacassars, spreads, silk draperies, </br>her silver creamer and her iron lamp, </br>her piece of porcelain, her seventeen </br>Really Nice handkerchiefs pressed in cedar.” <p>Lines 767-775, <i>In the Mecca</i>, Gwendolyn Brooks</p>",
        audio:"",
    },

    object4: {
        name:"Glass Marbles",
        img:"./assets/img/glassmarbles_MeccaFlats.jpg",
        shortDescription: "",
        longDescription: "",
        audio:"",
    },

    object5: {
        name:"Bottle",
        img:"./assets/img/Bottle_IIT.JPG",
        shortDescription: "",
        longDescription: "",
        audio:"",
    }, 

    object6: {
        name:"Marble, Ceramic Shard, and Pipe Stem",
        img:"./assets/img/Pipestem_Marble_ceramic_IIT.JPG",
        shortDescription: "",
        longDescription: "<p>Hear from Dr. Rebecca Graff on some of the artifacts collected from the Mecca.</p>“There is no need to visit in Blue Island. </br>Prophet will give you trading stamps and kisses, </br>or a cigar. </br>One visit will convince you. </br>Lucky days </br>And Lucky Hands.” <p>Lines 589-595, <i>In the Mecca,</i> Gwendolyn Brooks",
        audio:"",
    }, 
    
}
function loadEntries(){
    const entryTemplate = document.querySelector("template"); // template is a html tag
    const entryContainer= document.querySelector(".entriescontainer"); // .entriescontainer is a css class
    
    for (const object in entries) { //js "for" loop -- there are many different types of syntax for js "for" loops, this one is specific for objects. In js, defining "objects" and "entries" as you call it, while also attaching the earlier "entries" a the top to it. 
        //within curly braces, only applies to the world within those curly braces. 
        let templateCopy = entryTemplate.content.cloneNode(true); 
        templateCopy.querySelector('h3').innerHTML = entries[object].name
        templateCopy.querySelector('img').src = entries[object].img
        templateCopy.querySelector('img').alt = entries[object].altText
        templateCopy.querySelector('p').innerHTML = entries[object].longDescription
        if (entries[object].audio !=undefined) {
            templateCopy.querySelector('source').src = entries[object].audio
        } else {
            templateCopy.querySelector('audio').remove()
        }
        entryContainer.appendChild(templateCopy)
    }
}

function loadObject(queryString){
    const urlParams = new URLSearchParams(queryString);
    const container = document.querySelector('.entriescontainer');
    let currentObj;

    if (urlParams.get('id')) {
        currentObj = urlParams.get('id')
        document.getElementById("objects").value = currentObj
    } else if (entries.hasOwnProperty(queryString)) {
        currentObj = queryString;
    } else {
        window.history.pushState('page', 'Material Collapse Objects', '/object');
        container.classList.add('hidden')
        return;
    }
    container.classList.remove("hidden");
    container.querySelector('h3').innerHTML = entries[currentObj].name
    container.querySelector('img').src = entries[currentObj].img
    container.querySelector('img').alt = entries[currentObj].altText

    window.history.pushState('page', 'Material Collapse Objects:' + entries[currentObj].name, '/object?id=' + currentObj);
    loadCommunityImages(sheetEntries, entries[currentObj].name)
}

function loadObjectList(){
    const select = document.getElementById("objects");
    
    for (const object in entries){
        let option = document.createElement("option");
        option.text = entries[object].name;
        option.value = object;
        select.appendChild(option);
    }
}

var sheetEntries = [];
var googleSheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSk717bCwVPIw_ayYzv6OS_b1Fw-6RBmhk8kpQq_2CGyy3BNJXnrr5xtBQ7fdLxv9RWimJ67_Y0Sgcq/pub?output=csv'

async function getGoogleSheet(){
    d3.csv(googleSheetURL, data => {
        sheetEntries.push(data)
    }).then(data => {
        loadCommunityImages(sheetEntries, entries[document.getElementById('objects').value].name)
    })
}

function loadCommunityImages(sheetEntries, name){
    let container = document.querySelector('.community-pinboard');
    let template = container.querySelector('template');
    
    let previousImages = container.getElementsByClassName('active-img')
    if (previousImages.length) previousImages.forEach(image => image.remove())
    
    for (let i=0; i<sheetEntries.length;i++){
        if (sheetEntries[i].Artifact == name && sheetEntries[i].LocalImage.length > 0) {
            let templateCopy = template.content.cloneNode(true); 
            templateCopy.querySelector('div').classList.add('active-img')
            templateCopy.querySelector('figcaption').innerHTML = filteredList[i].Name
            //   templateCopy.querySelector('img').src = "./assets/community-pinboard/" + filteredList[i].Image.split("id=")[1] + ".jpg"
            templateCopy.querySelector('img').src = "./assets/community-pinboard/" + filteredList[i]["Local Image"]
            container.appendChild(templateCopy)
        }
    }   
}