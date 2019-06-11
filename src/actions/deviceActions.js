// @flow
/*eslint no-undef: "error"*/
import axiosInstance from '../utils/axiosInstance';
import * as actionTypes from './types';

type Device = {
    name: String,
    active: boolean
}
export const fetchDevices = () => ({
    type: actionTypes.FETCH_DEVICES,
    payload: axiosInstance('/devices')
            .then(res => res.status === 200 && res.data)
            .catch(error =>  error)
});


export const updateDeviceStatus = (device: Device) => ({
    type: actionTypes.DEVICE_STATUS,
    payload: axiosInstance.patch(`/devices/${device.name.toLowerCase()}?active=${String(!device.active)}`)
            .then(res => res.status === 200 && res.data)
            .then(res => {
                return {
                    ok: res,
                    device
                }
            })
            .catch(res => res)
});
