import { describe , it , expect } from "vitest";
import request from "supertest"; // ideal way to test express app
import {app} from "./index"; // import the express app

describe("POST /sum", () => {
    
    it("should return 201 and the sum ofa and b " , async ()=>{
        const response = await request(app).
        post('/sum').send({
            a : 5 ,
            b : 10
        }).set('Accept', 'application/json');

        expect(response.status).toBe(201);
        expect(response.body.sum).toBe(15); 
          
    })

})
