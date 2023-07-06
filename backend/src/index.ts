// import * as express from 'express';
import express from 'express'
import routes from './routes'
import cors from 'cors'

const app = express()

app.use(cors(/* DEIXANDO VAZIO PERMITE TODAS AS URLS*/{
    origin: 'http://localhost:3333'
    //origin: '*' --> PERMITE TUDO
}))
app.use(routes)

app.listen(3333, () => {
    console.log('Listening...')
})
