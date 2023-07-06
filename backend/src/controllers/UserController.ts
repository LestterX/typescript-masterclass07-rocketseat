//Importando a definição de tipos do REQ e do RES
import {Request, Response} from 'express' 
import EmailService from '../services/EmailService'

const users = [
    {name: "Lestter", email: "lgs.alves@hotmail.com"},
    {name: "Lestter", email: "lg.salves171@gmail.com"},
    {name: "Lestter", email: "lesttergamers@gmail.com"},
    {name: "Lestter", email: "lesttergabrieldasilvaalves@hotmail.com"},
    {name: "Lestter", email: "lesttergamers@outlook.com"}
]

export default {
    async index(req: Request, res: Response){
        return res.json(users)
    },
    async create(req:Request, res: Response){
        const emailService = new EmailService()
        emailService.sendMail(
         {
            to: {name: "Lestter", email: "lgs.alves@hotmail.com"},
            message: {subject: "Bem-Vindo ao Sistema", body: "Seja bem-vindo(a)"}
        }
            // {name: "Lestter", email: "lgs.alves@hotmail.com"},
            // {subject: "Bem-Vindo ao Sistema", body: "Seja bem-vindo(a)"}
        )
        res.send()
    }
}