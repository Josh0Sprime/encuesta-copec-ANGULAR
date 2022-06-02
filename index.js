const express = require('express');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const cors = require('cors')
const path = require('path');

dotenv.config();

const app = express();

app.use(express.json())

app.use(cors());

app.use(express.static('./public'));

app.get('*', (req, res) => {
    res.sendFile( path.resolve(__dirname, 'public/index.html') );
} )

app.post('/send-email', (req, res) => {

    const {nombre, fiebre, tos, faltaAire, fatiga, doloresMusculares, dolorCabeza, perdidaGusto,
            dolorGarganta, congestion, nauseas, diarrea, positivoCovid, esperaResultadoCovid,
            diagnosticadoCovid, sospechaCovid} = req.body;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            user: 'correosnode@gmail.com',
            pass: 'khqonymfvdbxophb'
        }
    })

    let mailOptions = {

        form: 'Josho-copec',
        to: '40112@escopec.cl',
        subject: 'Encuesta-copec',
        text: `Nombre: ${nombre}
               \nFiebre o escalofrios: ${fiebre}
               \nTos: ${tos}
               \nFalta de aire o dificultad de respirar: ${faltaAire}
               \nFatiga: ${fatiga}
               \nDolores musculares o del cuerpo: ${doloresMusculares}
               \nDolor de cabeza: ${dolorCabeza}
               \nNueva perdida del gusto u olfato: ${perdidaGusto}
               \nDolor de garganta: ${dolorGarganta}
               \nESTATUTO TEMPORAL DE EMERGENCIA
               \nCongestion o goteo nasal: ${congestion}
               \nNauseas o vomito: ${nauseas}
               \nDiarrea: ${diarrea}
               \n¿Ha dado positivo en la prueba de COVID-19 en los ultimos 10 dias?: ${positivoCovid}
               \n¿Se encuentra actualmente en la espera de los resultados de la prueba de COVID-19?: ${esperaResultadoCovid}
               \n¿Ha sido diagnosticado con COVID-19 por un proveedor con licencia médica(Doctor, enfermera, farmacéutico, u otro) en los ultimos 10 días?: ${diagnosticadoCovid}
               \n¿Se le ha dicho que se sospecha que usted tiene COVID-19 por un proveedor con licencia médica en los ultimos 10 días?: ${sospechaCovid}`

    }
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            res.status(500).send(error.message);
        }else{
            console.log('email enviado correctamente');
            res.status(200).json(req.body)
        }
    })
})

app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en el puerto 3000`);
})