const request = require("supertest")("https://reqres.in")
const expect = require("chai").expect;

describe("POST user reqres", function(){
    it("Success post data", async function(){
        const response = await request
        .post("/api/users")
        .send({
            name : "Aldi",
            job:"QA"
        });

        expect(response.body.name).to.equal("Aldi")
        expect(response.body.job).to.equal("QA")
    })
})

describe("GET user reqres", function(){
    it("Success get data", async function(){
        const response = await request
        .post("/api/users?Pages=2")

        expect(response.statusCode).to.equal(201)
    })
})

describe("PUT user reqres", function(){
    it("success update data", async function(){
        const response = await request
        .put("/api/users/3")
        .send({
            name : "Aldirisqiriadi",
            job : "Senior QA"
        });

        expect(response.body.name).to.equal("Aldirisqiriadi")
        expect(response.body.job).to.equal("Senior QA")
    })
})

describe("DELETE user reqres", function(){
    it("Success delete user", async function(){
        const response = await request
        .delete("/api/users/3")

        expect(response.statusCode).to.equal(204)
    })
})
