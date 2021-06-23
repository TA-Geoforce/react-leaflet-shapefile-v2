import React from 'react';
import { LayersControl, FeatureGroup, MapContainer } from 'react-leaflet'
import { ShapeFile } from '../src'
import { mount } from "enzyme"
import Enzyme from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

Enzyme.configure({ adapter: new Adapter() })

const { Overlay } = LayersControl;

const emptyTestFunction = () => {
}
describe("Check if shape file component renders", () => {
    it("Simple render of component", () => {
        const wrapper = mount(
            <MapContainer>
                <Overlay checked name='Feature group'>
                    <FeatureGroup color='purple'>
                        <ShapeFile data={
                             emptyTestFunction
                        } onEachFeature={emptyTestFunction}/>
                    </FeatureGroup>
                </Overlay>
            </MapContainer>
        )
        expect((wrapper).find(ShapeFile).prop('data')).toEqual(emptyTestFunction);
        expect((wrapper).find(ShapeFile).prop('onEachFeature')).toEqual(emptyTestFunction);
    })
})