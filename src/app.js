import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import events from './routes/event.routes';
import auth from './routes/auth.routes';
import bet from './routes/bet.routes';
import {createRoles} from './libs/initialSetup';

const app = express();
createRoles();

app.set('pkg', pkg);
app.use(express.json())
app.use(morgan('dev'));
app.use('/api/events', events);
app.use('/api/auth', auth);
app.use('/api/bet', bet);

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    });
});

export default app;