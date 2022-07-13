const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const logger = require('./src/looger');

// const pinoHttp = require('pino-http')({ logger })
// const LogssService = require('./src/Services/LogssService')

const router = require('./src/Routes')




const app = express();
app.use(cors());

app.use(bodyParser.json());

// app.use(pinoHttp);
// app.use(LogssService.create);


app.use('/',router);



const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
	console.log(`Ouvindo na Porta: ${PORT}`);
});