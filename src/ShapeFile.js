import React, { useEffect, useState} from 'react';
import { GeoJSON } from 'react-leaflet'
import * as shp from 'shpjs'

function ShapeFile(arrayBuffer) {

    const [ data, setData ] = useState(null)
    var buf = new ArrayBuffer(arrayBuffer.data.length*2); 
    var bufView = new Uint8Array(buf);
    useEffect(() => {
        for(var i=0, strLen=arrayBuffer.data.length; i < strLen; i++) {
            bufView[i] = arrayBuffer.data.charCodeAt(i);
        }
        shp(bufView).then(function(dataConverted){
            setData(dataConverted)
        })    
    },[])
 return (
     <div>
        {data !== null ? 
            <GeoJSON data={data}></GeoJSON>
        :null}
    </div>
 )
}
export default ShapeFile

