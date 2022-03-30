const js = require('../../src/utils/json-reader')
const uc = require('../../src/controllers/user-controller')
const { assert } = require('chai')


describe("test json reader", () => {
    const user = js.getJsonObject("user-data", "id", 1000)

    it("test create user", async () => {
        const userRes = await uc.createUser(user)
        assert.equal(userRes.data.message,'1000')
        assert.equal(userRes.status, 200)

    })
    it("test get user by username", async()=>{
        const userRes = await uc.getUserByUserName(user.username);
        assert.deepEqual(userRes.data,user)
        assert.equal(userRes.status,200)
    })
})