# react-leaflet-shapefile-v2 [![npm version](https://img.shields.io/badge/npm-2.0.0-blue.svg)](https://www.npmjs.com/package/react-leaflet-shapefile-v2)[![Release](https://github.com/TA-Geoforce/react-leaflet-shapefile-v2/actions/workflows/node.js.yml/badge.svg)](https://github.com/TA-Geoforce/react-leaflet-shapefile-v2/actions/workflows/node.js.yml)![npm](https://img.shields.io/npm/dw/react-leaflet-google-v2)[![Node.js CI](https://github.com/TA-Geoforce/react-leaflet-shapefile-v2/actions/workflows/npm-publish.yml/badge.svg?branch=master)](https://github.com/TA-Geoforce/react-leaflet-shapefile-v2/actions/workflows/npm-publish.yml)[![Node.js CI](https://github.com/TA-Geoforce/react-leaflet-shapefile-v2/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/TA-Geoforce/react-leaflet-shapefile-v2/actions/workflows/node.js.yml)

Most recently tested with Leaflet React-Leaflet 3.0.5.

React component build on top of [React-Leaflet](https://github.com/PaulLeCam/react-leaflet) that integrate [leaflet.shapefile](https://github.com/calvinmetcalf/leaflet.shapefile) functionality.

![example](images/example.gif)

## Install

```
npm install react-leaflet-shapefile
```

## Complete example with react-leaflet

Add some 'react-leaflet' so you can have a map.
Then add

```jsx
import React from 'react';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'
import { ShapeFile } from '../src/index.js'

const { BaseLayer, Overlay } = LayersControl;

export default class ShapefileExample extends React.Component {

  state = {
    geodata: null,
    increment: 0
  }

  handleFile(e) {
    var reader = new FileReader();
    var file = e.target.files[0];
    reader.readAsArrayBuffer(file);
    reader.onload = function(buffer) {
      this.setState({ geodata: buffer.target.result });
    }.bind(this)
  }
  
  onEachFeature(feature, layer) {
    if (feature.properties) {
      layer.bindPopup(Object.keys(feature.properties).map(function(k) {
        return k + ": " + feature.properties[k];
      }).join("<br />"), {
        maxHeight: 200
      });
    }
  }
  
  style() {
    return ({
      weight: 2,
      opacity: 1,
      color: "blue",
      dashArray: "3",
      fillOpacity: 0.7
    });
  }

  render() {
    let ShapeLayers = null;
    if (this.state.geodata !== null) {
      ShapeLayers = (
      <Overlay checked name='Feature group'>
          <ShapeFile data={this.state.geodata} style={this.style} onEachFeature={this.onEachFeature}/>
      </Overlay>);
    }
    return (
      <div>
        <div >
          <input type="file" onChange={this.handleFile.bind(this)} className="inputfile"/>
        </div>
        <MapContainer center={[42.09618442380296, -71.5045166015625]} zoom={2} zoomControl={true}>
          <LayersControl position='topright'>
            <BaseLayer checked name='OpenStreetMap.Mapnik'>
              <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
            </BaseLayer>
            {ShapeLayers}
          </LayersControl>
        </MapContainer>
      </div>
    )
  }
}
```

You can find the following example in the folder ```example```. Run the above code by executing the following scripts in package.json, with the order they are stated underneath:

1) ```build```

1) ```example```
