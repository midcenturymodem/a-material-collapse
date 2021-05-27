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
        longDescription: "",
        audio:"",
    },

    object3: {
        name:"Bennington Marble",
        img:"./assets/img/BenningtonMarble_MeccaFlats.jpg",
        shortDescription: "",
        longDescription: "",
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
        longDescription: "",
        audio:"",
    }, 
    
}
function loadEntries(){
    let templateCopy;

    const entryTemplate = document.querySelector("template");
    const entryContainer= document.querySelector(".entriescontainer");

    for (const entry in entries) {
        templateCopy = entryTemplate.content.cloneNode(true); 
        templateCopy.querySelector('h3').innerHTML = entries[entry].name
        templateCopy.querySelector('img').src = entries[entry].img
        templateCopy.querySelector('img').alt = entries[entry].altText
        templateCopy.querySelector('p').innerHTML = entries[entry].longDescription
        if (entries[entry].audio !=undefined) {
            templateCopy.querySelector('source').src = entries[entry].audio
        } else {
            templateCopy.querySelector('audio').remove()
        }
        entryContainer.appendChild(templateCopy)
    }
}