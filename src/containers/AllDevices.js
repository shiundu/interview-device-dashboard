// @flow 

import * as React  from 'react';
import { connect } from 'react-redux';
import { fetchDevices, updateDeviceStatus } from '../actions/deviceActions';
import { DeviceItem } from '../components/DeviceItem';
import { searchText } from '../utils/searchUtil';

type Props = {
    deviceState: {
        loading: boolean,
        error: boolean,
        devices: []
    },
    fetchDevices: () => void, 
    updateDeviceStatus: (any) => void
}

type State = {
    deviceState: {
        loading: boolean,
        error: boolean,
        devices: []
    }
}

class AllDevices extends React.Component<Props, State> {
    constructor() {
        super();
        this.state = {
            deviceState: {
                loading: true,
                error: false,
                devices: []
            }
        }
    }

    componentDidMount() {
        this.props.fetchDevices();
    }

    UNSAFE_componentWillReceiveProps(nextProps, prevProps) {
        this.setState({deviceState: nextProps.deviceState});
    }   

    handleDeviceStatusUpdate(device: any, e: any) {
        e.persist();
        this.props.updateDeviceStatus(device)
    }

    handleSearch(e) {
        e.persist();
        const devices = this.props.deviceState.devices || [];
        const value = e.target.value;

        this.setState({deviceState: {
            ...this.state.deviceState,
            devices: searchText(devices, value)
            }
        })
    }

    render() {
        const { deviceState } = this.state;
        if(deviceState && deviceState.loading) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <div>
                <input 
                    className='searchInput' 
                    placeholder='Search device'
                    name='search'
                    onChange={(e) => this.handleSearch(e)}
                />
                {deviceState && deviceState.error && <div className='errorClass'>Error: Try again!</div>}
                {
                    deviceState.devices && deviceState.devices.map((device, index) => <DeviceItem 
                    key={index} 
                    device={device}
                    handleDeviceStatusUpdate={(d) => this.handleDeviceStatusUpdate.bind(this, d)}
                    />)
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        deviceState: state.devicesReducer
    }
}

export default connect(mapStateToProps, {fetchDevices, updateDeviceStatus})(AllDevices);
