const fs = require('fs')
const path = require('path')
const { TEST_DATA_DIR } = require("../config/app-config")






const getJsonObject = (fileName, key, value) => {
    return findJsonObject(fileName, key, value)
}




const findJsonObject = (fileName, key, value) => {
    const filPath = getFilePath(fileName);
    if (filPath) {
        const jsonFilePath = path.join(TEST_DATA_DIR, filPath)
        const fileContent = fs.readFileSync(jsonFilePath)
        const jsonFileContent = JSON.parse(fileContent)

        for (let i = 0; i < jsonFileContent.length; i++) {
            if (jsonFileContent[i][key] === value) {
                return jsonFileContent[i]
            }
        }
        throw Error(`${filPath} does not have an object which ${key} matches to ${value}`)
    }
    throw Error(`${fileName}.json is not found in ${TEST_DATA_DIR}`)
}


const getFilePath = (fileName) => {
    const filePaths = fs.readdirSync(TEST_DATA_DIR);
    for (let i = 0; i < filePaths.length; i++) {
        if (`${fileName}.json` === filePaths[i]) {
            return filePaths[i]
        }
        return ''
    }
}



module.exports = { getJsonObject }