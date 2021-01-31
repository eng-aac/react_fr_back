const express = require ('express')
const app = express()
const morgan = require ('morgan')
const cors = require ('cors')
const bodyparser = require ('body-parser')
require('./database')

app.set('Port', 4000)

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors({origin:'*'}))


app.use('/lider', require('./routes/lider.routes'))
app.use('/miembros', require('./routes/miembro.routes'))

app.listen(app.get('Port'), ()=>{
     console.log('servidor escuchando por el puerto', app.get('Port'))
})


