import reducer, { initialState } from './../devicesReducer';
import * as ActionTypes from '../../actions/types'


describe('FETCH_DEVICES reducer', () => {
    it('FETCH_DEVICES_PENDING', () => {
      const expected = { 
          type: ActionTypes.FETCH_DEVICES_PENDING,
        }
      const results = {
        ...initialState,
        loading: true
      }
      expect(reducer(initialState, expected)).toEqual(results);
    });

    it('FETCH_DEVICES_FULFILLED', () => {
        const expected = { 
            type: ActionTypes.FETCH_DEVICES_FULFILLED,
            payload: {
                data: []
            }
          }
        const results = {
          ...initialState,
          loading: false,
          devices: []
        }
        expect(reducer(initialState, expected)).toEqual(results);
    });

    it('DEVICE_STATUS_PENDING', () => {
        const expected = { 
            type: ActionTypes.DEVICE_STATUS_PENDING,
        }
        const results = {
          ...initialState,
          loading: true
        }
        expect(reducer(initialState, expected)).toEqual(results);
      });
  
      it('DEVICE_STATUS_FULFILLED', () => {
        const device = {
            name: 'ACC',
            active: true
        }

        const state = {
            devices: [device],
            error: true,
            loading: false,
        }
        const expected = { 
            type: ActionTypes.DEVICE_STATUS_FULFILLED,
            payload: {
                ok: 'OK',
                device: {
                    name: 'ACC',
                    active: false
                }
            }
        }
        const results = {
            ...initialState,
            error: false,
            loading: false,
            devices: [device]
        }
        expect(reducer(state, expected)).toEqual(results);
      });
});  