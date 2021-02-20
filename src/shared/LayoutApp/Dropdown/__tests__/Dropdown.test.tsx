/**
 * @jest-environment jsdom
 */

import React from "react";
import {Dropdown} from "../Dropdown";
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe("Dropdown", () => {
    test("should render", () => {
        const wrapper = shallow(<Dropdown button={<button/>} children={<div/>}/>)
        expect(wrapper).toBeDefined()
        console.log(window)
        expect(wrapper.find("div.container").isEmptyRender()).toBeFalsy()
    })

    test("should render (snapshot", () => {
        const wrapper = shallow(<Dropdown button={<button/>} children={<div/>}/>)

        expect(wrapper).toMatchSnapshot()
    })
})