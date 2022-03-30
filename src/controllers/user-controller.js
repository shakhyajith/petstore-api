const rh = require("../utils/request-handler")
const { BASE_URL } = require("../config/app-config")


const createUser = async (payload, headers) => {
    const url = `${BASE_URL}/user`
    return await rh.httpPOST(url, payload, headers)
}


const getUserByUserName = async (username, headers) => {
    const url = `${BASE_URL}/user/${username}`
    return await rh.httpGET(url, headers);
}




module.exports = {
    createUser,
    getUserByUserName
}