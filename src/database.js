const mongooseobj = require('mongoose');

const user = "victorisimoo";
const password = "mPZOTQnIAAMCfLGd";
const dbname = "appebetting";
const url = `mongodb+srv://${user}:${password}@cluster0.dkad4.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongooseobj.connect(url)
.then(() => console.log('MongoDB is connected!'))
.catch(e => console.log(e));
