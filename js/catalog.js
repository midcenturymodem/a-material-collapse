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