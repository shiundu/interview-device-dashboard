// @flow

import React from 'react';

type Props = {
    device : {
        name: String,
        value: String,
        unit: String,
        active: boolean,
        timestamp: number
    },
    handleDeviceStatusUpdate: (any) => void
}

export const DeviceItem = function({...props}: Props) {
    let { device, handleDeviceStatusUpdate} = props;
    return (
        <div className='device' style={{backgroundColor: device.active ? 'green' : 'red' }}>
            <p className='deviceTitle'>{device.name.toUpperCase()}</p>
            <span>value: {device.value} {device.unit}</span>
            <span>{device.active}</span>
            <p>{device.timestamp}</p>
            <button 
                className='activeButton'
                onClick={handleDeviceStatusUpdate(device)}
                style={{backgroundColor: device.active ? 'green' : 'red' }}>
                {device.active ? 'Active' : 'Inactive'}
            </button>
        </div>
    )
}
