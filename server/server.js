const app = require('./App');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({path: './config.env'});
const port = process.env.PORT;

const DB = process.env.DATABASE.replace(
    '<DATABASE_PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {
}).then(() => console.log("DB Connected🎉..."));

console.log(process.env)
app.listen(port, () => {
    console.log('Vagita: It is Over',port );
})