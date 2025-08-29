import { describe ,it , test ,expect  } from "@jest/globals";
import supertest from "supertest"; // ideal way to test express app
import {app} from "./index"; // import the express app
import z from "zod";

const SumResponseSchema = z.object({
    a :z.number(),
    b :z.number()
})


describe("POST /sum", () => {

    it("should return 201 and the sum of a and b", async () => {
        const response = await supertest(app)
            .post("/sum")
            .send({ a: 5, b: 10 })
            .set('Accept', 'application/json');
        
        expect(response.status).toBe(201);
        expect(response.body.sum).toBe(15);
    });

       
    it("should return 201 and the sum of a and b", async () => {
        const response = await supertest(app)
            .post("/sum")
            .send({ a: "wedadawd", b: "wdawdwd" })
            .set('Accept', 'application/json');
        
        expect(response.status).toBe(201);
        expect(response.body.sum).toBe(15);
    });


    it("should handle negative numbers", async () => {
        const response = await supertest(app).post("/sum").send({
            a : -5 ,
            b : -10
        }).set('Accept', 'application/json');
       
        expect(response.status).toBe(201);
        expect(response.body.sum).toBe(-15);
    }); 

})


 


