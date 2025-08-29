import express from 'express';
import z from 'zod';
export const app = express();

app.use(express.json());


app.post('/sum', (req, res) => {
   const SumRequestSchema = z.object({
    a :z.number(),
    b :z.number()   })
    const parseResult = SumRequestSchema.safeParse(req.body);
    if(!parseResult.success){
        return res.status(400).json({error : parseResult.error , message : "Invalid request body"});
    }
    const { a, b } = parseResult.success ? parseResult.data : { a: 0, b: 0 };
   
    const sum = a + b;
    res.status(201).json({ sum , message  : "Sum calculated successfully"});
})



// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
