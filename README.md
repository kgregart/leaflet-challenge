# leaflet-challenge

![USGS_Logo](https://github.com/kgregart/leaflet-challenge/blob/main/Images/1-Logo.png)

# Background

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. 

# Objective 

Develop a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

# Instructions

Create the Earthquake Visualization

1.  Visualize an earthquake dataset.

    - Retrieve the dataset:  The USGS provides earthquake data in a number of different formats, updated every 5 minutes.         Visit the USGS GeoJSON Feed page and choose a dataset to visualize.

2.  Import and visualize the data:

    - Using Leaflet, create a map that plots all the earthquakes from the dataset based on their longitude and latitude.

      - The data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by            color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear            darker in color.

    - Include popups that provide additional information about the earthquake when its associated marker is clicked.

    - Create a legend that will provide context for your map data.
