'use strict'
import React from 'react';
import { LayersControl, MapContainer, GeoJSON } from 'react-leaflet'
import { ShapeFile } from '../src'
import { mount } from "enzyme"
import Enzyme from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import "babel-polyfill"
import { act } from 'react-dom/test-utils';

const shp = require("shpjs")

Enzyme.configure({ adapter: new Adapter() })

const { Overlay } = LayersControl;

jest.mock("shpjs", () => jest.fn(() => {}))

const Polygon = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -142.734375,
                -6.315298538330033
              ],
              [
                158.203125,
                -6.315298538330033
              ],
              [
                158.203125,
                67.47492238478702
              ],
              [
                -142.734375,
                67.47492238478702
              ],
              [
                -142.734375,
                -6.315298538330033
              ]
            ]
          ]
        }
      }
    ]
}

const emptyFunction = () => {}

describe("Check if shape file component renders", () => {
    it("Simple render of component", async () => {
        shp.mockImplementationOnce(() => Promise.resolve(Polygon))

        const wrapper = mount(
            <MapContainer>
                <Overlay checked name='Feature group'>
                    <ShapeFile data={new ArrayBuffer(10)} onEachFeature={emptyFunction}/>
                </Overlay>
            </MapContainer>
        )
      
    await act(async () => {
        await Promise.resolve();
        wrapper.update()
    });
    
    expect((wrapper).find(GeoJSON).prop('data')).toEqual(Polygon);
    expect((wrapper).find(GeoJSON).prop('onEachFeature')).toEqual(emptyFunction);
    })
})