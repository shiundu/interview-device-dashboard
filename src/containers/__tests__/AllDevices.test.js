// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import AllDevices from '../AllDevices';

// const device = {
//     name: '',
//     value: '',
//     unit: '',
//     active: true,
//     timestamp: 1010010101
// };

// const handleDeviceStatusUpdate = () => {}
const initialState = {
    deviceState: {
        loading: true,
        error: false,
        devices: []
    }
}

const mockStore = configureMockStore();
const store = mockStore({...initialState});

it('AllDevices should render correctly', () => {
    const component = renderer.create(<Provider store={store}><AllDevices  /></Provider>);
  
    expect(component.toJSON()).toMatchSnapshot();
});
