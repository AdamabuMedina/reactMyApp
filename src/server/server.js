import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App';
import { indexTemplate } from './indexTemplate';
import axios from "axios";

const PORT = process.env.PORT

const app = express();

app.use('/static', express.static('./dist/client'))

app.get('/auth/', (req, res) => {
    axios.post(
        'https://www.reddit.com/api/v1/access_token',
        `grant_type=authorization_code&code=${req.query.code}&redirect_uri=https://react-skillbox-app.herokuapp.com/auth`,
        {
            auth: { username: "bqQ77LWgH3dUzw", password: 'M5624wpC-kg7nJW5tfJpDJrFS288Iw' },
            headers: { 'Content-type': 'application/x-www-form-urlencoded' }
        }
    )
        .then(({ data }) => {
            console.log(data)
            res.send(
                indexTemplate(ReactDOM.renderToString(App()), data['access_token'] || ''),
            );
        })
        .catch(console.log('error'))
});

app.get('*', (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(App()), ''),
    );
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})