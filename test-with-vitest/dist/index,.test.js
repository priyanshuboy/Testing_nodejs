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
const vitest_1 = require("vitest");
const supertest_1 = __importDefault(require("supertest")); // ideal way to test express app
const index_1 = require("./index"); // import the express app
const prisma_1 = require("./generated/prisma");
const prisma = new prisma_1.PrismaClient();
vitest_1.vi.mock('./generated/prisma', () => {
    const mPrismaClient = {
        user: {
            create: vitest_1.vi.fn()
        }
    };
    return { PrismaClient: vitest_1.vi.fn(() => mPrismaClient) };
});
(0, vitest_1.describe)("POST /sum", () => {
    (0, vitest_1.it)("should return 201 and the sum ofa and b ", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.app).
            post('/sum').send({
            a: 5,
            b: 10
        }).set('Accept', 'application/json');
        (0, vitest_1.expect)(response.status).toBe(201);
        (0, vitest_1.expect)(response.body.sum).toBe(15);
    }));
});
