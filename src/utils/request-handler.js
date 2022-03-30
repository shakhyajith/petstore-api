const axios = require('axios').default


const httpGET = async (url,headers)=>{

    const res = await axios.get(url,headers)
    return map(res)
}

const httpPOST = async (url, payload, headers) => {
    const res = await axios.post(url, payload, headers)

    return map(res)
}

const httpUPDATE = async (url,payload,headers)=>{}

const httpDELETE = async (url,headers)=>{}

const map = (response) => {
    const { data, status } = response

    return {
        data,
        status
    }
}



module.exports = {
    httpGET,
    httpPOST,
    httpUPDATE,
    httpDELETE
}