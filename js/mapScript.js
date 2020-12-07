let mapActive = true;
mapboxgl.accessToken = 'pk.eyJ1IjoiZGhhbHBlcm4iLCJhIjoiY2tnemNuemp1MTJlajJybzN2aDVkMWM0cSJ9.saPhdVcafGvIGMLO6k4pnQ';

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-87.62722735829726, 41.83364353791103], // starting position
    zoom: 17.521500097254677 // starting zoom
});

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
                Learn about the history of the Mecca, the people who lived there, and how it intersects with the history of IIT. </p>`,
            // audio track
            'audioFile': './assets/audio/Marker1History.mp3',
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
                How do you discuss the history of site when all that is left are tiles and poetry?</p>`,
            'audioFile': './assets/audio/sample.mp3',
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
                Through Simone Browne's <i>Dark Matters: on the Surveillance of Blackness,</i> we will consider the architectural rhymes, assonances, and dissonances of surveillance between the Mecca and the buildings that occupy the site today. </p>`,
            'audioFile': './assets/audio/sample.mp3',
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
        }
    },
    // start of feature
    { 'type': 'Feature',
        'properties': { 
            'title': 'Four', 
            'description': `
                <strong>walking/Promenading</strong><p>
                From what was once the back left corner of the Mecca, we consider Garnette Cadogan's "Walking While Black" along balconies and sidewalks. <p>“So I walk caught between memory and forgetting, between memory and forgiveness.”</p></p>`,
            'audioFile': './assets/audio/sample.mp3',
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
            'title': 'Five', 
            'description': `
                <strong>Let's Discuss</strong><p>
                Questions for further reflection.</p>`,
            'audioFile': './assets/audio/sample.mp3',
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
                        // "hotSpotDebug": true,
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
