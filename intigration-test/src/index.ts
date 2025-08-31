
import express from 'express';
import z from 'zod';
import { PrismaClient } from "../generated/prisma";
export const app = express();

const prisma = new PrismaClient();
app.use(express.json());
const SumResponseSchema = z.object({
    a :z.number(),
    b :z.number()
})

app.post('/sum' , async (req ,res)=>{
     const SumRequestSchema = z.object({
        a :z.number(),
        b :z.number()   })
     const parseResult = SumRequestSchema.safeParse(req.body);
        if(!parseResult.success){
            return res.status(400).json({error : parseResult.error , message : "Invalid request body"});
        }
        const { a, b } = parseResult.success ? parseResult.data : { a: 0, b: 0 };
   
         
       const result = await prisma.user.create({
            data  :{ 
                a : a,
                b :b ,
                type : "add"

            }      
          })
        const sum = a + b;
        res.status(201).json({ id : result.id ,sum , message  : "Sum calculated successfully"});    
});
