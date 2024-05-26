const getClientId = () => {
    let clientId = localStorage.getItem('clientId')
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    let counter = 0
    while (counter < 10) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
        counter += 1
    }
    if (!clientId) {
        clientId = `web_bdc_v2_${result}_${new Date().getTime()}`
        localStorage.setItem('clientId', clientId)
    }
    return clientId
}

export const clientId = getClientId()
