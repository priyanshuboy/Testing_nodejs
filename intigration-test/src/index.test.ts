import { describe ,it ,expect , vi} from "vitest";
import supertest from "supertest"; // ideal way to test express app
import {app} from "./index"; // import the express app
import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();


describe("POST /sum", () => {
   
    it("should return 201 and the sum of a and b " , async ()=>{

     
           
        const response = await supertest(app).post('/sum').send({
            a : 5 ,
            b : 10
        }).set('Accept', 'application/json');
       

        expect(response.status).toBe(201);
        expect(response.body).toEqual({ id: expect.any(Number), sum: 15, message: "Sum calculated successfully" });
        console.log(response.body);
    })

})