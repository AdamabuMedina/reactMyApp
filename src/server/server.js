import express from "express"
import ReactDOMServer from "react-dom/server"
import { indexTemplate } from "./indexTemplate.js"
import { App } from "../App";
import axios from "axios";

const app = express()

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDOMServer.renderToString(App())),
    );
});

app.get('/auth', (req, res) => {
    axios.post(
        'https://www.reddit.com/api/v1/access_token',
        `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
        {
            auth: { username: process.env.CLIENT_ID, password: 'wQGhqx-O3P-QYdEZRI14oN5rRMgZGQ' },
            headers: { 'Content-type': 'application/x-www-form-urlencoded' }
        }
    )

        .then(({ data }) => {
            res.send(
                indexTemplate(ReactDOMServer.renderToString(App()), data['access_token']),
            );
        })
        .catch(console.log)
});

app.listen(3000, () => {
    console.log('Server just have started on http://localhost:3000 ');
});

// window.__token__ "663396516807-Z_kX1EqpTLs7ikDC9dE0Qs1c2SsytA"