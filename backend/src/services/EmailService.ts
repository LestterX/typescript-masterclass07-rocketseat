interface IMailTo {
    name: string
    email: string
}
interface IMailMessage {
    subject: string
    body: string
    attachment?: string[] //O ? indica que pode ou não ter - O [] indica que é um Array, pode ser Array<string>
}
interface IMessageDTO {
    to: IMailTo
    message: IMailMessage
}
interface IEmailService{
    sendMail(request: IMessageDTO): void
}

class EmailService implements IEmailService{
    sendMail({to, message}: IMessageDTO){
        console.log(`Email enviado para: ${to.name} sobre: ${message.subject}`)
    }
}
// class EmailService{
//     sendMail(to: IMailTo, message: IMailMessage){
//         console.log(`Email enviado para: ${to.name} sobre: ${message.subject}`)
//     }
// }

export default EmailService