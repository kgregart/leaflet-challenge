// Perform an API call to the Geo JSON Summary to fetch earthquake information generated every seven days
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(createMarkers);
   
// Function to create Earthquake Map
function createMap(earthquakes) {

    // Create the tile layer that will be the background of the map
    let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
  
    // Create a baseMaps object to hold the streetmap layer
    let baseMaps = {
      "Street Map": streetmap
    };
  
    // Create an overlayMaps object to hold the earthquakeMarkers layer
    let overlayMaps = {
      "Earthquakes": earthquakes
    };
  
    // Create the map object 
    let map = L.map("map", {
      center: [38.803, -94.955],
      zoom: 4,
      layers: [streetmap, earthquakes]
    });
  
    // Create and add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(map);

    // Add legend
    let legend = L.control({position: "bottomright"
    });

    legend.onAdd = function(){
        let div = L.DomUtil.create("div", "legend");
        var grades = [-10, 10, 30, 50, 70, 90];
        var colors = [
            '#1a9850',
            '#91cf60',
            '#d9ef8b',
            '#fee08b',
            '#fc8d59',
            '#d73027'
            ];
        var labels = [];

        // Loop and create colored squares 
        grades.forEach(function(grade, index){
            labels.push("<div class = 'row'><li style=\"background-color: " + colors[index]  + "\">"+grade+"</li></div>");
        })
          
        div.innerHTML += "<ul>" + labels.join("") +"</ul>";
    
        return div;
    }
    
    legend.addTo(map);
  }


// Functions to create markers for the earthquakes

function markerColor(magnitude){
    if(magnitude < 10) 
    return "#1a9850"
    else if(magnitude < 30) 
    return "#91cf60"
    else if (magnitude < 50) 
    return "#d9ef8b"
    else if (magnitude < 70) 
    return "#fee08b"
    else if(magnitude < 90) 
    return "#fc8d59"
    else 
    return "#d73027";
    
}

function createMarkers(response){
    console.log("response: ", response.features)

    // pull the features data
    let features = response.features;

    // Initialize array for earthquake markers
    let earthquakes = [];

    // Loop through the features array
    for(let i=0; i < features.length; i++) {

        let feature = features[i];

        let color = markerColor(feature.properties.mag);

        // Create a marker and add a bind popup for each earthquake

        let marker = L.circle([feature.geometry.coordinates[1], feature.geometry.coordinates[0]],{
            color: color,
            fillColor: color,
            fillOpacity: 0.75,
            radius: 1000*feature.geometry.coordinates[2]
        })
            .bindPopup("place: "+ feature.properties.place+"<br>Magnitude: "+feature.properties.mag+"<br>Depth: "+feature.geometry.coordinates[3]);

        // Add the marker to the earthquakes array
        earthquakes.push(marker);

    }

  // Create a layer group that's made from the earthquake markers array, and pass it to the createMap function
  createMap(L.layerGroup(earthquakes));

}


