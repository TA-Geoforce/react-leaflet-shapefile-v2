import React, {useEffect}  from 'react';
import Shapefile from './leaflet.shpfile';
import { GeoJSON } from 'react-leaflet'


function ShapeFileExampleTest(data) {

 return (
     <GeoJSON data={data.data}></GeoJSON>
 )

}
export default ShapeFileExampleTest

