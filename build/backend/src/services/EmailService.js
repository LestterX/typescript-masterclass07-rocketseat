"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailService {
    sendMail({ to, message }) {
        console.log(`Email enviado para: ${to.name} sobre: ${message.subject}`);
    }
}
// class EmailService{
//     sendMail(to: IMailTo, message: IMailMessage){
//         console.log(`Email enviado para: ${to.name} sobre: ${message.subject}`)
//     }
// }
exports.default = EmailService;
