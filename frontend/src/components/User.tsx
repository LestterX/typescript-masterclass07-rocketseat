import react from 'react'

interface iUser{
    name: string
    email: string
}
interface Props{
    user: iUser
}

const user: React.FC<Props> = ({user}) => {
    return(
        <div>
            <strong>Nome: </strong> {user.name} <br />
            <strong>E-mail: </strong> {user.email} <br /><br />
        </div>
    )
}

export default user