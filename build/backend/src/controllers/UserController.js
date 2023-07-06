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
const EmailService_1 = __importDefault(require("../services/EmailService"));
const users = [
    { name: "Lestter", email: "lgs.alves@hotmail.com" },
    { name: "Lestter", email: "lg.salves171@gmail.com" },
    { name: "Lestter", email: "lesttergamers@gmail.com" },
    { name: "Lestter", email: "lesttergabrieldasilvaalves@hotmail.com" },
    { name: "Lestter", email: "lesttergamers@outlook.com" }
];
exports.default = {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json(users);
        });
    },
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailService = new EmailService_1.default();
            emailService.sendMail({
                to: { name: "Lestter", email: "lgs.alves@hotmail.com" },
                message: { subject: "Bem-Vindo ao Sistema", body: "Seja bem-vindo(a)" }
            }
            // {name: "Lestter", email: "lgs.alves@hotmail.com"},
            // {subject: "Bem-Vindo ao Sistema", body: "Seja bem-vindo(a)"}
            );
            res.send();
        });
    }
};
