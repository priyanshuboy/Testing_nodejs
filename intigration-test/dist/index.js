"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = __importDefault(require("zod"));
const prisma_1 = require("../generated/prisma");
exports.app = (0, express_1.default)();
const prisma = new prisma_1.PrismaClient();
exports.app.use(express_1.default.json());
const SumResponseSchema = zod_1.default.object({
    a: zod_1.default.number(),
    b: zod_1.default.number()
});
exports.app.post('/sum', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const SumRequestSchema = zod_1.default.object({
        a: zod_1.default.number(),
        b: zod_1.default.number()
    });
    const parseResult = SumRequestSchema.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error, message: "Invalid request body" });
    }
    const { a, b } = parseResult.success ? parseResult.data : { a: 0, b: 0 };
    yield prisma.user.create({
        data: {
            a: a,
            b: b,
            type: "add"
        }
    });
    const sum = a + b;
    res.status(201).json({ sum, message: "Sum calculated successfully" });
}));
