import axios from 'axios'
let BaseAddUrl = 'http://localhost:3001/api/ads/add/'
let BaseGetUrl = 'http://localhost:3001/api/ads/'
let BaseCurrUrl = 'http://localhost:3001/api/ads/current/'
let BaseDeleteUrl = 'http://localhost:3001/api/ads/delete/'
let BasePassCheck = 'http://localhost:3001/api/passcheck/'

if (process.env.NODE_ENV === 'production') {
    BaseAddUrl = '/api/ads/add/'
    BaseGetUrl = '/api/ads/'
    BaseCurrUrl = '/api/ads/current/'
    BaseDeleteUrl = '/api/ads/delete/'
    BasePassCheck = 'http://localhost:3001/api/passcheck/'
}

const checkPass = async pass => {
    const response = await axios.post(`${BasePassCheck}${pass}`)
    console.log(response.data)
    return(response.data.accept)
}

const addAd = async (Data, type) => {
    console.log("Posting data: ", Data)
    const response = await axios.post(`${BaseAddUrl}${type}`, Data, {
        headers: {
            'Accept': 'multipart/form-data',
            'Content-Type': 'multipart/form-data',
        }
    })
    console.log("Success")
    return response
}

const getAll = async () => {
    const response = await axios.get(BaseGetUrl)
    console.log(response)
    return response.status === 200 ? response.data : 0

}

const setCurr = async id => {
    const response = await axios.post(`${BaseCurrUrl}${id}`)
    console.log('setcurr', response)
    return response.status === 200 ? response : 0
}

const deleteAdOnServer = async id => {
    const response = await axios.delete(`${BaseDeleteUrl}${id}`)
    return response.status === 204 ? response : 0
}
export {
    addAd,
    getAll,
    deleteAdOnServer,
    setCurr,
    checkPass
}