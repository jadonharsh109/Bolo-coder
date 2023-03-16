const app = require('./App');
const dotenv = require('dotenv');


dotenv.config({path: './config.env'});
const port = process.env.PORT || 8000;

console.log(process.env)
app.listen(port, () => {
    console.log('Vagita: It is Over',port );
})