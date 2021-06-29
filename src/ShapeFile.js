import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet'
import shp from 'shpjs'

const ShapeFile = (props) => {
  const [ geoJSONData, setGeoJSONData ] = useState(null)
  const { data, ...geoJSONProps} = props
  
  useEffect(() => {
    shp(props.data).then(function(dataConverted){
      setGeoJSONData(dataConverted)
    })
  },[props.data])

 return (
  <GeoJSON key = {Math.random()} data = {geoJSONData} {...geoJSONProps}/>
  )

}

export default ShapeFile