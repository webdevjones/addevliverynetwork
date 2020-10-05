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
    BasePassCheck = '/api/passcheck/'
}

const checkPass = async pass => {
    const response = await axios.post(`${BasePassCheck}${pass}`)
    return(response.data.accept)
}

const addAd = async (Data, type) => {
    const response = await axios.post(`${BaseAddUrl}${type}`, Data, {
        headers: {
            'Accept': 'multipart/form-data',
            'Content-Type': 'multipart/form-data',
        }
    })
    return response
}

const getAll = async () => {
    const response = await axios.get(BaseGetUrl)
    return response.status === 200 ? response.data : 0

}

const setCurr = async id => {
    const response = await axios.post(`${BaseCurrUrl}${id}`)
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