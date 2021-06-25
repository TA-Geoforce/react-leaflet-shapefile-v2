import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet'
import shp from 'shpjs'

function ShapeFile(props) {
  const [ geoJSONData, setGeoJSONData ] = useState(null)
  const [ geoJSONStateProps, setGeoJSONStateProps ] = useState({})
  const { data, uniqueId, ...geoJSONProps} = props
  
  useEffect(() => {
    shp(props.data).then(function(dataConverted){
      setGeoJSONData(dataConverted) 
    })
    geoJSONProps.key = props.uniqueId
    setGeoJSONStateProps(geoJSONProps)
  },[props.data, props.uniqueId])

 return (
  <GeoJSON data = {geoJSONData} {...geoJSONStateProps} />    
)

}
export default ShapeFile