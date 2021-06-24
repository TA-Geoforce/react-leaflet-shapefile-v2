import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet'
import shp from 'shpjs'

function ShapeFile(props) {
  const [ data, setData ] = useState(null)

  useEffect(() => {
      props.data.onload = function(buffer) {
          shp(buffer.target.result).then(function(dataConverted){
              setData(dataConverted) 
          }) 
      } 
  },[])

 return (
    <div>
        {data !== null ? 
          <div>
            <GeoJSON data = {data} style = {props.style} onEachFeature = {props.onEachFeature} />
          </div>
        :null}
    </div>
 )
}
export default ShapeFile