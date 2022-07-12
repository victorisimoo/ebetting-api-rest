import app from './app';
import './database';

app.listen(process.env.PORT || 4075);
console.log('Server listen on port: ', 4075)