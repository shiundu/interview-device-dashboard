// @flow

import * as actionTypes from '../actions/types';

type Action = {
    type: string,
    payload: any,
    error: boolean
}

type initialStateType = {
    devices: [],
    loading: boolean,
    error: false
}

export const initialState: initialStateType = {
  devices: [],
  loading: false,
  error: false
};

export default (state: initialStateType = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.FETCH_DEVICES_PENDING:
      return { 
          ...state,
          loading: true,
          error: false,
        };

    case actionTypes.FETCH_DEVICES_FULFILLED:
        return { 
            ...state, 
            devices: action.payload.data,
            loading: false,
            error: false
        }; 

    case actionTypes.FETCH_DEVICES_REJECTED:
        return { 
            ...state, 
            devices: action.payload.data,
            loading: false,
            error: action.error
        };  
    case actionTypes.DEVICE_STATUS_PENDING:
      return { 
          ...state, 
          loading: true,
          error: false,
        };

    case actionTypes.DEVICE_STATUS_FULFILLED:
        if(action.payload.ok === 'OK') {
            state.devices.map(device => {
                if (device.name == action.payload.device.name) {
                    device.active = !action.payload.device.active;
                    return device
                }
                return device;
            })
        }

        return { 
            ...state,
            loading: false,
            error: !action.payload.ok
        }; 

    case actionTypes.DEVICE_STATUS_REJECTED:
        return { 
            ...state,
            loading: false,
            error: action.error
        };            
    default:
      return state;
  }
};
