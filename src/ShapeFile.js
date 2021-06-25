import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet'
import shp from 'shpjs'

function ShapeFile(props) {
  const [ geoJSONData, setGeoJSONData ] = useState(null)
  
  const { data, ...geoJSONProps} = props

  useEffect(() => {
      props.data.onload = function(buffer) {
          shp(buffer.target.result).then(function(dataConverted){
            setGeoJSONData(dataConverted) 
          }) 
      } 
  },[])

 return (
    <div>
        {geoJSONData !== null ? 
          <GeoJSON data = {geoJSONData} {...geoJSONProps} />
        :null}
    </div>
 )
}
export default ShapeFile