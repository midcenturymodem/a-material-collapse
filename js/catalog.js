export const entries= {
    object1: {
        name: "Asprin Pills",
        img:"/assets/img/Mecca Flats Photos, R. Graff/Aspirin_pills_MeccaFlats.jpg",
        altText:"Asprin Pills",
        shortDescription: "",
        longDescription: "", 
        audio: "",
    },

    object2: {
        name:"Asprin Bottle",
        img:"/assets/img/Mecca Flats Photos, R. Graff/Aspirinbottle1_MeccaFlats.jpg",
        shortDescription: "",
        longDescription: "",
        audio:"",
    },

    object3: {
        name:"Bennington Marble",
        img:"/assets/img/Mecca Flats Photos, R. Graff/BenningtonMarble_MeccaFlats.jpg",
        shortDescription: "",
        longDescription: "",
        audio:"",
    },

    object4: {
        name:"Glass Marbles",
        img:"/assets/img/Mecca Flats Photos, R. Graff/glassmarbles_MeccaFlats.jpg",
        shortDescription: "",
        longDescription: "",
        audio:"",
    },

    object5: {
        name:"Bottle",
        img:"/assets/img/Mecca Flats Photos, R. Graff/Bottle_IIT.JPG",
        shortDescription: "",
        longDescription: "",
        audio:"",
    }, 

    object6: {
        name:"Marble, Ceramic Shard, and Pipe Stem",
        img:"/assets/img/Mecca Flats Photos, R. Graff/Pipestem_Marble_ceramic_IIT.JPG",
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