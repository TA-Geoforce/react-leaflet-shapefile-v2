import React, { useEffect, useState } from 'react';
import { GeoJSON } from 'react-leaflet'
import shp from 'shpjs'

const ShapeFile = (props) => {
  const [ geoJSONData, setGeoJSONData ] = useState(null)
  const { data, ...geoJSONProps} = props

  useEffect(() => {
    const parseData = async () => {
      setGeoJSONData(await shp(props.data))
    }
    parseData();
  }, [props.data])

 return (
  <GeoJSON key = {Math.random()} data = {geoJSONData} {...geoJSONProps}/>
  )

}

export default ShapeFile
