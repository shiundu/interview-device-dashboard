// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import {DeviceItem} from '../DeviceItem';

const device = {
    name: '',
    value: '',
    unit: '',
    active: true,
    timestamp: 1010010101
};

const handleDeviceStatusUpdate = () => {}

it('DeviceItem should render correctly', () => {
    const component = renderer.create(<DeviceItem device={device} handleDeviceStatusUpdate={handleDeviceStatusUpdate} />);
  
    expect(component.toJSON()).toMatchSnapshot();
});
