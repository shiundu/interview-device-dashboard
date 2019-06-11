
export const searchText = (devices, text) => {
    return devices.filter(device => device.name.includes(text.trim().toLowerCase()))
}
