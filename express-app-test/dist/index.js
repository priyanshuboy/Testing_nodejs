"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = __importDefault(require("zod"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.post('/sum', (req, res) => {
    const SumRequestSchema = zod_1.default.object({
        a: zod_1.default.number(),
        b: zod_1.default.number()
    });
    const parseResult = SumRequestSchema.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error });
    }
    const { a, b } = parseResult.success ? parseResult.data : { a: 0, b: 0 };
    const sum = a + b;
    res.status(201).json({ sum });
});
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
