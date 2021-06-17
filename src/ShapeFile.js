import React from 'react';
import { GeoJSON } from 'react-leaflet'

function ShapeFile(data) {

 return (
     <GeoJSON data={data.data}></GeoJSON>
 )

}
export default ShapeFile

