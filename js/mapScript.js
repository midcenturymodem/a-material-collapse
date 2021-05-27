let mapActive = true;
mapboxgl.accessToken = 'pk.eyJ1IjoiZGhhbHBlcm4iLCJhIjoiY2tnemNuemp1MTJlajJybzN2aDVkMWM0cSJ9.saPhdVcafGvIGMLO6k4pnQ';

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-87.62722735829726, 41.83364353791103], // starting position
    zoom: 17.521500097254677 // starting zoom
});

const entries= {
    object1: {
        name: "Asprin Pills",
        img:"../assets/img/Aspirin_pills_MeccaFlats.jpg",
        altText:"Asprin Pills",
        shortDescription: "",
        longDescription: "", 
        audio: "",
        pitch: -14.96027049107076,
        yaw: 21.386523681128693,
    },

    object2: {
        name:"Asprin Bottle",
        img:"../assets/img/Aspirinbottle1_MeccaFlats.jpg",
        shortDescription: "",
        longDescription: "",
        audio:"",
        pitch:-10.577296384280311,
        yaw:36.147838723757154,
    },

    object3: {
        name:"Bennington Marble",
        img:"../assets/img/BenningtonMarble_MeccaFlats.jpg",
        shortDescription: "",
        longDescription: "",
        audio:"",
        pitch:-9.2291202615514,
        yaw: -28.423970429826,
    },

    object4: {
        name:"Glass Marbles",
        img:"../assets/img/glassmarbles_MeccaFlats.jpg",
        shortDescription: "",
        longDescription: "",
        audio:"",
        pitch:-10.028825898675857,
        yaw: 57.963973289861194,
    },

    object5: {
        name:"Bottle",
        img:"../assets/img/Bottle_IIT.JPG",
        shortDescription: "",
        longDescription: "",
        audio:"",
        pitch:-8.605180833528511,
        yaw: 7.391815774994502,
    }, 

    object6: {
        name:"Marble, Ceramic Shard, and Pipe Stem",
        img:"../assets/img/Pipestem_Marble_ceramic_IIT.JPG",
        shortDescription: "",
        longDescription: "",
        audio:"",
        pitch:-22.805189607627263,
        yaw:  29.48618657545598,
    }, 
    
}

function showModal(entry){
    console.log(entry)
    document.getElementById('objectModalLabel').innerHTML = entries[entry].name;
    document.getElementById('objectModalBody').innerHTML = entries[entry].longDescription;
    document.getElementById('objectModalImg').src = entries[entry].img;
    document.getElementById('objectModalImg').alt = entries[entry].altText;

    if (entries[entry].audio != undefined) {
        document.getElementById('objectModalAudio').classList.remove('hidden');
        document.getElementById('objectModalAudioSource').src = entries[entry].audio
    } else {
        document.getElementById('objectModalAudio').classList.add('hidden');
    }
    
    $('#objectModal').modal()

}

const features = [
    // start of feature
    {   // boiler plate for each feature
        'type': 'Feature',
        // properties of the marker 
        'properties': { 
            // title
            'title': 'One', 
            // full text description
            'description': `
                <strong>collapse/Construction</strong><p>
                Learn about the history of the Mecca, the people who lived there, and how it intersects with the history of IIT. 
                <p>TRANSCRIPT</p>
                <p> [a soundscape of clattering tram tracks, footsteps, crumbling tiles, and a droning hum slowly build, crescendo, and fall silent to a soft crackle]</p>
                <p>[soft passing of cars in the background] </p>
                <p>NARRATOR: You are standing in front of the former site of the Mecca Flats. Before there was Crown Hall, before there was steel and glass and the low-hanging canopies of young trees, there was the Mecca. A massive four-storey brick building, it stretched 234 feet north up State Street and 266 feet west along 34th, now just the sidewalk to your left. Each of its four floors boasted 1.5 acres of space. Built in 1891 by Edbrooke and Burnham, its U-shaped blueprint and courtyard were the epitome of urban domestic modernity; marble finishings, fountains, a fish pond, semi-private entranceways, street-facing shops on the first floor, and its east and west atria. Natural light glittered in through a pitched glass ceiling, past the balconies and stairways connecting each floor and onto the parlor below. 
                When the Mecca opened, it was exclusively to white middle-class renters. By 1900, census data tells us that the building was occupied by 365 white working-class renters. Twenty years later, the Mecca’s 510 renters were majority black and working class… </p>
                <p>SECOND VOICE (background): Carpenters, electricians…</p>
                <p>NARRATOR: The original 107 units had been redivided into 148 units. By 1938, further redivision meant that 178 units housed an unknown number of residents: some reports suggest 1,000, while others suggest 1,500. Either way, there were enough residents living in the building for the Mecca to constitute its own political precinct… </p>
                <p>SECOND VOICE (background): … a retired capitalist and a frog dealer. </p>
                <p>NARRATOR: By the time the Mecca had become a hub of black domestic life, culture, and commerce in Bronzeville, the neighboring Armour Institute was eyeing its purchase in order to demolish the building and expand its campus.      After the Armour bought the building in 1938 and merged with the Lewis Institute to become IIT, the board moved to evict the Mecca’s over 1,000 residents in September of 1941. 
                In reality, it would be another ten years before the Mecca’s residents faced eviction and the building was demolished. WWII, the resulting housing shortage, and segregation meant that for many tenants, there was nowhere to live but the Mecca. Between 1941 and 1950, tenants dug in their heals through legal battles, community petitions, several intervening municipal bodies, and preservation campaigns to keep and maintain the apartments that some had called home for over 25 years.</p>
                <p>Meanwhile, IIT let the Mecca fall into disrepair over the decade. Though accounts from residents express that the building’s decline in condition began around 1920, the Institute’s ownership of the apartments did nothing to improve conditions. Its defunct sprinkler system was never repaired, smashed tiles were filled in with swipes of concrete, and watchmen employed by the Institute patrolled the atria’s balconies. As Daniel Bluestone writes, the university’s legal argument for demolishing the Mecca depended on its perception as a health-and-safety hazard.</p>
                <p>After a decade of resident activism, in January of 1952, the Mecca was demolished. It had taken eighteen months for social workers to secure housing for the building’s residents. IIT soon broke ground for Mies van der Rohe’s Crown Hall.</p>      
                Though the Mecca had an exterior air of solidity, of immovable brick-and-mortar mass,  the telling of its history has instead resembled its atria— echoing and stratigraphic. Like peering out from the peephole of an apartment door, only certain cross-sections are ever visible at one time. The building was foreclosed on, changed hands four times, was a hotel, wasn’t a hotel, and comprised an ever-shifting amount of rooms and tenants. And what of the tenants? As white renters moved out and black renters moved in, the prevailing narrative became that the flats changed from being the exemplar of white modernity to being the very thing that obstructed its realization in the eyes of white city planners, university presidents, famed Bauhausian architects and others who wished to construct it. But what is missing from this narrative? What has been pushed to the periphery? As Gwendolyn Brooks writes, things slant. A material collapse that is Construction. </p>  
                <p>[Fade in contemplative synth, outro music] </p>
                <p>During this audio experience, we’ll be thinking through some issues of black community displacement, the fragmentary nature of archives, architecture and surveillance, and pedestrian rights to the city. At the end of our walk, there’ll be some discussion questions—take a moment, enjoy the fresh air, and reflect on the history of the place we’re in. Sites are more potent than what they hold in this moment; they’re composite, and indebted to what stood there before. When you’re ready, make your way towards the opposite corner of Crown Hall.</p> 
                <p>[Fade out soft background traffic]</p>
                
                
                </p>`,
            // audio track
            'audioFile': './assets/audio/Marker1FINAL.mp3',
            // marker image if using
            'mapMarker': './assets/markers/marker1.png',
            // 360 image
            'pano360': './assets/360/SAM_100_1137.jpg',
            // pano 360 links/text
            'hotSpots': [
                    // {
                    //     "pitch": 14.1,
                    //     "yaw": 1.5,
                    //     "type": "info",
                    //     "text": "Baltimore Museum of Art",
                    //     "URL": "https://artbma.org/",
                    // },
                    // {
                    //     "pitch": -9.4,
                    //     "yaw": 222.6,
                    //     "type": "info",
                    //     "text": "Art Museum Drive"
                    // },
                    // {
                    //     "pitch": -0.9,
                    //     "yaw": 144.4,
                    //     "type": "info",
                    //     "text": "North Charles Street"
                    // }
                ]
        },
        // the location on the map
        'geometry': { 
            'type': 'Point',
            'coordinates': [-87.626666667, 41.832777778]
        }
    }, // end of feature
   
    // start of feature
    {'type': 'Feature',
        'properties': { 
            'title': 'Two', 
            'description': `
            <strong>Archive/Archaeology</strong><p>
            How do you discuss the history of a site when what's left are tiles, poetry, and headlines?
            <p>TRANSCRIPT</p>
            <p>[A metal door opens and closes in a cavernous space. Steps are heard echoing through the space, and draw closer. Reverberating through the space, SHELBY speaks these lines from Gwendolyn Brooks’s In the Mecca] </p>
            <p>SHELBY: No, Alfred has not seen Pepita Smith.</p>
            <p>But he (who might have been an architect)</p>
            <p>can speak of Mecca: firm arms surround</p>
            <p>disorders, bruising ruses and small hells,</p>
            <p>small semiheavens: hug barbarous rhetoric</p>
            <p>built of buzz, coma and petite pell-mells.</p>
            <p>No, Alfred has not seen Pepita Smith.</p>
            <p>[Steps are heard moving away, and the large metal door opens and closes again. A pause. The ambient impression of the large hall remains in the background during the remainder of this audio marker] </p>
            <p>NARRATOR: In the decades since IIT demolished the Mecca and constructed Crown Hall, the knowledge of the Mecca’s architectural details, like its tiles, textures, and colors, had been somewhat forgotten. Then, in July 2018, construction under this corner of Crown Hall dislodged some remnants from the Mecca’s basement. Objects included a marble, a fork, an amber glass bottle, and tiles—lots of tiles. Some of the tiles pulled from the ground only survived in chipped fragments, but many of them were amazingly still intact. Under the two or three feet of sod, dirt, and stone, the vibrant blue, orange, brick-red, pink, and cream tiles were arranged in tessellated and geometric designs that decorated the basement floor of the Mecca’s western tower, right about where you find yourself now. </p>
            <p>At a roundtable event for an exhibition at IIT on these fragments from the Mecca, author and biographer Thomas Dyja described how he reflected on the recovery of these objects from beneath Crown Hall, and complicated history of the site: </p>
            <p>THOMAS DYJA: Well, I think—I, I came to it through probably Gwendolyn Brooks, I think, as a kind of convergence. This building is incomplete without recognizing Gwendolyn Brooks, and without recognizing its history… and in a certain way, reading In the Mecca is not complete without knowing what’s here now.</p>
            <p>NARRATOR: Gwendolyn Brooks’ In the Mecca was first published in 1968, nearly twenty years after IIT demolished its namesake. A long narrative poem that fictionalizes life in the Mecca Flats, the book traces the comings and goings its residents. At the center of In the Mecca, is a missing young girl named Pepita and her family frantically trying to find her. As the family searches the Mecca building for Pepita, the reader swings in and out of orbit with her neighbors and fellow residents whose lives collide in increasingly close quarters. </p>
            <p>THOMAS DYJA: And so, this finding to me… all I could think of was, they—they found Pepita.</p>
            <p>[Pause]</p>
            <p>NARRATOR: But is that really Pepita? With all that was lost and displaced, are we really content to say that Pepita, the girl whose mother, as Brooks writes, would try for roses, has been uncovered at the southwest corner of Crown Hall in… an amber glass bottle? A marble? A stream of tiles? Pepita’s gone. So is the community. Instead what we’re left with here are traces and fragments— Pepita’s rose petals, the ones Brooks wrote into the poem’s only couplet, and the only lines that Pepita ever speaks.</p>
            <p>But Dyja raised an important problem when he invoked Gwendolyn Brooks over these urban archaeological spoils: How do we tell histories whose legacies are fragments and fictions? Or, well, let’s try this: how do we tell histories whose fragments are difficult to square with one another, and which narratives are centered in our interpretation of those fragments?</p> 
            <p>In the literature that exists on the Mecca, two kinds of narratives have the biggest footprint: one, of course, is Brooks’ In the Mecca. In her youth, Brooks worked in the building, and the job gave her intimate insight into the lives of the residents to whom she made deliveries.</p> 
            <p>[soft, repetitive piano music fades in]</p>
            <p>Brooks’ version of the building is lively, textured, contradictory, and complicated, where past, present, and future bleed into one another across stanzas and apartments. Her poetic Mecca defies reduction in the big and the small of it all, though it is, ultimately, fiction.</p> 
            <p>[the piano music begins to crossfade with an echoing, rippling digital sound]</p>
            <p>The other narrative is one of urban decline, one that IIT leveraged in the 1940s and 50s to finally demolish the building. This narrative was sensationalized by journalists and newspapers of the period, perhaps most famously in John Bartlow Martin’s report on the Mecca Flats for Harper’s Magazine. In contrast to Brooks, Martin’s version of the building is stagnant and festering. Martin writes, “All day long people stand at the balconies, leaning on the wrought-iron railings… gazing out at other people facing them across the well in silence… small human figures in a vast place…” To Martin, the residents were not oppressed by racist zoning, health and safety negligence, or gentrification, but by the slow drum of urban decline that would inevitably give way to modern progress. Scholar Daniela Kukrechtova writes that the mid-century dream of an “urban utopia” hinged on policies and practices that “most often resulted in displacement, further segregation, poverty, and above all, racism.” Though promising an urban renewal, black and brown Chicagoans were systematically denied power in determining just what urban renewal meant, and for whom. </p> 
            <p>[rippling digital sound crescendos as the sound of cascading tiles fades in. The soundscape breaks.]</p>
            <p>[A report from WTTW’s Chicago Tonight fades in, featured Chief correspondent Phil Ponce and Amanda Vinicky]</p> 
            <p>PHIL PONCE:	Construction on the Illinois Institute of Technology campus recently exposed a slice of Chicago’s buried past, and our Amanda Vinicky brings it to life.</p>
            <p>AMANDA VINICKY: A literal architectural crown. Mies van der Rohe’s S.R. Crown Hall stands in its glassy	modern glory on the campus of the Illinois Institute of Technology. The S.R. Crown Hall replaced… </p>
            <p>[newscast fades out]</p>
            <p>NARRATOR: When news outlets reported on the fragments found under Crown Hall in 2018, multiple were published under headlines that said that IIT had “unearthed” artifacts from the Mecca, as if the objects found here were unexpected discoveries from an ancient and forgotten site. Like with Martin’s article, these headlines centered a white, urban renewal narrative with IIT as city steward, whose findings had, at some point during their intervening years under the dirt, regained the architectural significance that an earlier administration at the university had deemed irrelevant and unsightly. </p> 
            <p>The vibrant tiles, Brooks’ book of poetry, and newspaper reports like Martin’s bring together an unlikely snapshot of the archive of primary documents on the Mecca. Kirsten Bartholomew Ortega notes in her work on Gwendolyn Brooks that writers don’t simply reflect the city they live in, but are producers of the city.</p>
            <p>[Fade in outro music]</p>
            <p>Just as Brooks, Martins, and others have produced differently-motivated versions of the Mecca in their writing, what can we in the present responsibly produce out of the fragments that remain?</p> 
            <p>AMANDA VINICKY: The S.R. Crown Hall replaced what’s come to be viewed as another architectural masterpiece—The Mecca. </p>
            <p>IIT FACULTY MEMBER (for newscast): We stand here today to really properly remember that confluence of events and to pledge to engage our neighbors and our friends here in Bronzeville much more gracefully…</p>
            <p>NARRATOR: When you’re ready, make your way around to the back of the building. You can stay on the sidewalk at the bottom of the stairs or, go up the stairs to the back doors.</p>
            <p>[outro music ends]</p>
            </p>`,   
            'audioFile': './assets/audio/Marker2FINAL.mp3',
            'mapMarker': './assets/markers/marker2.png',
            'pano360': './assets/360/SAM_100_1157.jpg',
            'hotSpots': [
                    // {
                    //     "pitch": 14.1,
                    //     "yaw": 1.5,
                    //     "type": "info",
                    //     "text": "Baltimore Museum of Art",
                    //     "URL": "https://artbma.org/",
                    // },
                    // {
                    //     "pitch": -9.4,
                    //     "yaw": 222.6,
                    //     "type": "info",
                    //     "text": "Art Museum Drive"
                    // },
                    // {
                    //     "pitch": -0.9,
                    //     "yaw": 144.4,
                    //     "type": "info",
                    //     "text": "North Charles Street"
                    // }
                ]
        },
        'geometry': { 
            'type': 'Point',
            'coordinates': [ -87.627643, 41.83291]
        }
    },
    
    
    // start of feature
    { 'type': 'Feature',
        'properties': { 
            'title': 'Three', 
            'description': `
            <strong>Surveillance/Sousveillance</strong><p>
            Thinking through the panopticon and the panorama, we consider the architectural rhymes, assonances, and dissonances of surveillance between the Mecca and Crown Hall</p>
            <p> TRANSCRIPT </p>
            <p>[steady, propelling synth music fades in]</p>
            <p>NARRATOR: We’re now situated at the back of the building, along the hallway that used to run between the east and west atria. Take a moment to visualize it. With your back to the field, reimagine the corridor that would have stretched to your right and left, just past the corners of Crown Hall.</p> 
            <p>[as the music fades out, the sound of a crowd in a large hall fades in]</p>
	        <p>If you peer straight forward through the glass panels towards the front entrance, you’d be looking into the center courtyard that made the Mecca the renowned architectural innovation it was. </p>
            <p>You might have noticed here that the scale of Crown Hall is just shy of the Mecca’s original footprint.</p> 
            <p>[crowd fades out]</p>
            <p>Both buildings were visually divided into three sections: the Mecca with its center courtyard...</p> 
            <p>[ding]</p>
            <p>and two arms...</p> 
            <p>[ding-ding]</p>	
            <p>and Crown Hall with its middle entryway...</p> 
            <p>[ding]</p> 
            <p>and two side wings.</p> 
            <p>[ding-ding]</p>
            <p>And though van der Rohe may have intended the airy, transparent style of Crown Hall to diametrically oppose the sheer weight and mass of the Mecca’s brick façade, both buildings were, in their time, celebrated for their innovative use of one particular building material: glass. </p>
            <p>[the resonant sound of struck glass comes in and fades]</p>
            <p>Daniela Kukrechtova writes that the Mecca brought the outdoors inside by flooding the building’s four-storey atria with natural light through its vaulted glass ceiling, whose play on the marble, tiles, and wrought iron fixtures would have changed with the passing hours. You can see the impact of the Mecca’s outside-indoors in Crown Hall’s own architecture, where nearly the entire campus is visible through the floor-to-ceiling windows on the inside. From one end of Crown Hall to the other, and from one floor in the Mecca’s atria to the other, a person could quickly apprehend in one glance nearly the entirety of the space before them, and everything or everyone, in it. But in their shared social history, who was seeing and who was being seen was always shifting on an uneven field: as developers eyed property like the Mecca for purchase, demolition, and reuse, so too did the tenants of the Mecca watch as neighbors, business owners, and patrons were pushed out of the neighborhood. </p>
            <p>[A droning sound emerges. With each mention of the word “panopticon,” it is marked with an equally droning beat]</p>
            <p>To observe, to behold, or to apprehend in the built environment is almost ubiquitously associated with the idea of the Panopticon, first designed by Jeremy Bentham in the eighteenth century as an architecture of control and then famously theorized by Foucault during the mid-twentieth century. In its original design, the Panopticon empowered enforcers, such as factory foreman or prison guards, to survey the entire population inside of a structure with total clarity. The Mecca’s design shares some features with the Panopticon, namely its balconies, breezeways, and the atria. Residents could observe the comings and goings of their neighbors, as Brooks evokes in In the Mecca, but after IIT purchased the building and employed watchmen to patrol it, so too could the university watch the day-to-day activities of the tenants—a shift from observing community to community being observed. </p>
            <p>[the droning sound crossfades with a lighter, airier but equally cavernous and droning sound]</p>
            <p>Crown Hall on the other hand, even though it shares its glass and light with the Mecca, is doing something completely different. We might understand Crown Hall instead as a panorama – a 360 degree view that simulates grand, unobstructed vistas, traditionally of nature. The difference here is crucial; Professor William Urrichio describes the tension between the panopticon and the panorama as one of positionality and power: where the panopticon “entraps” viewers and viewees, and each observes the ‘very real behavior of both,’ the panorama puts you at the center of an expansive view that cannot return your gaze. From Crown Hall outward, the city, the campus, the southside are all visible, but not the reverse. Ultimately, Urrichio argues that these views, the panopticon and the panorama, are both constructed, both, in reality, ‘always-partial visions’—fragmentary. </p>
            <p>Though you can see through it, the politics of transparency effectively obscure the operations of displacement that enabled its construction. Crown Hall’s endless glass fixed a particular gaze, a particular panoramic view of campus that constructed total vision where we know for a fact it was partial—partial tiles, partial fictions, partial histories.</p>
            <p>[outro music fades in]<p>
            <p>Maybe, in this way, van der Rohe’s hyperbolic glass design gives away a kind of anxiety at the time over transparency, when its ambitions for white urban modernity painfully collided with the actual, day-to-day reality of its most marginalized neighbors.</p>
            <p>[music break]</p>
            <p>Do you see that stone bench on the left side of the field? When you’re ready, make your way over to it and during your walk, reflect on why you’re choosing the path you take to get there.</p> 
            <p>
            </p>`,
            'audioFile': './assets/audio/Marker3FINAL.mp3',
            'mapMarker': './assets/markers/marker3.png',
            'pano360': './assets/360/SAM_100_1149.jpg',
            'hotSpots': [
                    // {
                    //     "pitch": 14.1,
                    //     "yaw": 1.5,
                    //     "type": "info",
                    //     "text": "Baltimore Museum of Art",
                    //     "URL": "https://artbma.org/",
                    // },
                    // {
                    //     "pitch": -9.4,
                    //     "yaw": 222.6,
                    //     "type": "info",
                    //     "text": "Art Museum Drive"
                    // },
                    // {
                    //     "pitch": -0.9,
                    //     "yaw": 144.4,
                    //     "type": "info",
                    //     "text": "North Charles Street"
                    // }
                ]
        },
        'geometry': { 
            'type': 'Point',
            'coordinates': [-87.627292, 41.8334420]
        },
    },
    // start of feature
    { 'type': 'Feature',
        'properties': { 
            'title': 'Four', 
            'description': `
                <strong>walking/Promenading</strong>
                <p> Taking a step outside of the Mecca, we consider the right to the city as the Mecca's block began to change. Garnette Cadogan's "Walking While Black" features. <p>“So I walk caught between memory and forgetting, between memory and forgiveness.”</p>
                <p>TRANSCRIPT</p>
                <p>[birds chirping.]</p>
                <p>[the click of a recorder and the crackle of a cassette tape, and SHELBY’s muffled voice.]</p>
                <p>SHELBY:	Don Lee wants</p>
                <p>a new nation</p>
                <p>under nothing;</p>
                <p>a physical light that waxes; he does not want to</p>
                <p>be exorcised, adjoining and revered;</p>
                <p>he does not like a local garniture</p>
                <p>nor any impish onus in the vogue;</p>
                <p>is not candlelit</p>
                <p>but stands out in the auspices of fire</p>
                <p>and rock and jungle-flail</p>
                <p>wants</p>
                <p>new art and anthem; will</p>
                <p>want a new music screaming in the sun.</p>
                <p>[the click of a recorder ends the recording.]</p>
                <p>[birds.]</p>
                <p>[breeze.]</p>
                <p>NARRATOR: So, how was your path? How did you move through space to get here? However you arrived at this point, you’ve probably inadvertently made something called a “desire path,” or a route that people choose to take across an open space, that might be counter to the path designers or urban planner have set out for pedestrians. </p>
                <p>We can understand “desire paths” in light of another renegade urban tradition: the flaneur. In her analysis of In the Mecca, Kirsten Bartholomew Ortega positions Gwendolyn Brooks as a flaneuse, the feminist poetic counterpart to the masculine flaneur. Brooks as a flaneuse possesses “an ability to “read” the city, to understand nuances of crowds, and the desire to capture the essence of city life in order to make it legible” – in anonymous strolls, daily observations, and frictionless existence in the crowd.</p>
                <p>[pedestrians, the sound of jazz wafting in from the distance have slowly faded in.]</p>
                <p>The notion of the flaneuse fits seamlessly into The Mecca’s relationship with the rest of the neighborhood at the turn of the century. Its courtyard was considered an extension of The Stroll, a famous section of State Street dotted with cafes, businesses, and jazz clubs. And as the narrator of In the Mecca, Brooks carves vast networks of desire paths up and down the Flat’s hallways and apartments, perhaps quite like the way the Mecca’s actual residents moved through the space– it’s easy to imagine tenants creating their own desire paths to avoid the gaze of nosy neighbors or to enjoy as much sunshine as possible on a clear day. </p>
                <p>[pedestrians and jazz fade out. The birds and breeze continue.]</p>
                <p>But desire paths and the flaneuse are both in tension with the unobstructed view of the Panopticon and the fixed gaze of the panorama. How do you move anonymously through urban space if you’re always being observed? What do desire paths look like under surveillance, particularly when pedestrians of color walk them out under the undue suspicion, harassment, and aggression from law enforcement and other powers? As Romi Crawford writes, the desire paths that people choose not only reveal the spatial experience they actively seek out, but also their ability to exercise their right to free movement in public space. As IIT bought up the surrounding lots and the pedestrian experience changed for the Mecca’s residents, it’s likely that their desire paths changed drastically as well. It’s not just the Mecca that became less and less hospitable as its landlords neglected vital repairs, but so did the block. </p>
                <p>GARNETTE CADOGAN: (in an interview for BrookdaleTV) I think for instance of, sometimes I’m walking around and I have a—I mean, I was forced to get a smartphone partially because, in walking I’d get stopped or harassed by the police officers living in Chicago…</p>
                <p>NARRATOR: That’s scholar and essayist Garnette Cadogan in discussion on his essay, “Walking While Black.” </p>
                <p>GARNETTE CADOGAN: …and they couldn’t understand me saying, “Oh, I wanted to walk, to explore the neighborhood, its beauties…” It’s Chicago, this is Chicago… for example, Frank Lloyd Wright, it’s Chicago of such architectural beauty, you know, such fascinating streets… that was just insufficient as an answer. </p>
                <p>NARRATOR: What Cadogan in the twenty-first century and the Mecca’s pedestrians in the twentieth are both contending with here is “the right to the city:” the right to inhabit the city, the right to produce and work in the city, and the right to be unalienated from urban life. Just as these rights had been denied to Cadogan as he admired the architectural history of Chicago, these rights were manifoldly denied to the tenants of the Mecca.</p> 
                <p>From the neglect and demolition of the Mecca to the struggle for rights to the city to the construction of Crown Hall, what happened on this site reverberates out into the city through to our present. </p>
                <p>[nostalgic guitar and piano fades in]</p>
                <p>Perhaps, instead of understanding Crown Hall as resting on top of the sedimentary remains of the Mecca, we should take a note from Gwendolyn Brooks and think about this place as a kind of dual site. In holding space for what has passed and recognizing the traces that are still palpable in the present, the two buildings overlap, simultaneously occupying the same site and time. As we reimagine the Mecca in this way, its architectural and social legacies, its part in a larger urban fabric, it is critical that any narrative constructed with the fragments left behind attends to the fullest history it can represent, striving to center the black lives and communities that were most affected in the process.</p> 
                <p>[crossfade with outro music]</p>
                <p>Okay, that was the last time you’re gonna hear that outro song. We’ve covered a lot; if you’d like to take some more time to think through it all, or just to sit with the site a little longer, there are some discussion questions pinned farther afield. If you have any comments, questions, or suggestions, please submit them through the Contact tab. Any and all input is welcome—this project is absolutely a work in progress. Thank you so much for participating in A Material Collapse that is Construction.</p>
                </p>`,
            'audioFile': './assets/audio/Marker4FINAL.mp3',
            'mapMarker': './assets/markers/marker4.png',
            'pano360': './assets/360/SAM_100_1151.jpg',
            'hotSpots': [
                    // {
                    //     "pitch": 14.1,
                    //     "yaw": 1.5,
                    //     "type": "info",
                    //     "text": "Baltimore Museum of Art",
                    //     "URL": "https://artbma.org/",
                    // },
                    // {
                    //     "pitch": -9.4,
                    //     "yaw": 222.6,
                    //     "type": "info",
                    //     "text": "Art Museum Drive"
                    // },
                    // {
                    //     "pitch": -0.9,
                    //     "yaw": 144.4,
                    //     "type": "info",
                    //     "text": "North Charles Street"
                    // }
                ]
        },
        'geometry': { 
            'type': 'Point',
            'coordinates': [-87.627277, 41.833808]
        }
    },
    
    // start of feature
    {'type': 'Feature',
        'properties': {
            'type': 'discussion',
            'title': 'Five', 
            'description': `
                <strong>Let's Discuss</strong><p>
                <p>1. What other sites like the Mecca are you familiar with? What used to be there, and what is at the site now? </p> 
                <p>2. If you could design an exhibition on the objects found from the Mecca, how would you display them? What kinds of information would you include with the objects? </p>
                <p>3. How does it feel to observe and be observed in the city? When are you most aware of either? </P>
                <p>4. What other parts of the Mecca's history are still present with us today? </p>`,
            // 'audioFile': './assets/audio/sample.mp3',
            'mapMarker': './assets/markers/marker5.png',
            'pano360': './assets/360/SAM_100_1136.jpg',
            'hotSpots': [
                    // {
                    //     "pitch": 14.1,
                    //     "yaw": 1.5,
                    //     "type": "info",
                    //     "text": "Baltimore Museum of Art",
                    //     "URL": "https://artbma.org/",
                    // },
                    // {
                    //     "pitch": -9.4,
                    //     "yaw": 222.6,
                    //     "type": "info",
                    //     "text": "Art Museum Drive"
                    // },
                    // {
                    //     "pitch": -0.9,
                    //     "yaw": 144.4,
                    //     "type": "info",
                    //     "text": "North Charles Street"
                    // }
                ]
        },
        'geometry': { 
            'type': 'Point',
            'coordinates': [-87.626968, 41.834259]
        }
    },
    {'type': 'Feature',
        'properties': {
            'type': 'ojects',
            'title': 'Objects', 
            'description': `
                <strong>Mecca Objects</strong>
            `,
            'mapMarker': './assets/markers/artifact.png',
            'pano360': './assets/360/SAM_100_1146.jpg',
            'hotSpots': Object.keys(entries).map(entry => {
                return {
                    'pitch': entries[entry].pitch,
                    'yaw': entries[entry].yaw,
                    "cssClass": "custom-hotspot",
                    text:entries[entry].name + ": "+ entries[entry].shortDescription,
                    clickHandlerFunc: () => showModal(entry)
                }
            })
        },
        'geometry': { 
            'type': 'Point',
            'coordinates': [-87.6276847935638, 41.833216001080984]
        }
    }
]

const bufferedFeatures = features.map(i => turf.circle(turf.point(i.geometry.coordinates), 20, {units: 'feet'}))

function checkProximity(coords){
    if (mapActive) {
        let clickedPt = turf.point([coords[0], coords[1]]);
        for (let i=0; i<bufferedFeatures.length; ++i) {
            if (turf.booleanWithin(clickedPt, bufferedFeatures[i])){
                document.querySelector("#map-content-title").innerText = features[i].properties.title
                document.querySelector("#map-content-description").innerHTML = features[i].properties.description
                document.querySelector("#map-audio-player").src = features[i].properties.audioFile
                document.querySelector("#map-content").classList += ' active'
                if (features[i].properties.type === 'discussion') {
                    document.querySelector("#map-audio-player").style.display = 'none'
                } else {
                    document.querySelector("#map-audio-player").style.display = 'initial'
                }
                if (window.location.href.includes("click")) {
                    pannellum.viewer('photo-viewer', {
                        "type": "equirectangular",
                        "panorama": features[i].properties.pano360,
                        "autoLoad": true,
                            /*
                        * Uncomment the next line to print the coordinates of mouse clicks
                        * to the browser's developer console, which makes it much easier
                        * to figure out where to place hot spots. Always remove it when
                        * finished, though.
                        */
                        "hotSpotDebug": true,
                        "hotSpots": features[i].properties.hotSpots
                    });
                    setTimeout(() => {
                        document.querySelector("#photo-viewer").classList += ' active'
                        document.querySelector("#return-to-map").classList += ' active'
                    }, 150)
                } else {}

                mapActive = false;

                break
            }
        }
    }
}

function returnToMap(){
    mapActive = true;
    document.querySelector("#photo-viewer").classList -= ' active'
    document.querySelector("#map-content").classList -= ' active'
    document.querySelector("#return-to-map").classList -= ' active'

}

map.on("load", function(){
    document.getElementById("mainNav").classList += ' navbar-scrolled';

    features.forEach(feature => {
        map.loadImage(
            feature.properties.mapMarker,
                function (error, image) {
                    if (error) throw error;
            map.addImage(feature.properties.title, image);
                    map.addSource(feature.properties.title, {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'geometry': feature.geometry
                        }
                    });
                    map.addLayer({
                        'id': feature.properties.title,
                        'type': 'symbol',
                        'source': feature.properties.title,
                        'layout': {
                            'icon-image': feature.properties.title,
                            'icon-size': [
                                'interpolate',
                                ['exponential', 0.5],
                                ['zoom'],
                                18,
                                0.5,
                                22,
                                2
                            ]

                        }
                    });
                }
        );
    })
})

if (window.location.href.includes("click")) {
    map.on('click', function (e) {
        checkProximity([e.lngLat.lng,e.lngLat.lat])
        console.log([e.lngLat.lng,e.lngLat.lat])
    })
} else {
    // Add geolocate control to the map.
    var geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    });

    // Add the control to the map.
    map.addControl(geolocate, 'bottom-right');

    // Set an event listener that fires
    // when a geolocate event occurs.
    geolocate.on('geolocate', function(e) {
        checkProximity([e.coords.longitude,e.coords.latitude])
    });
}
