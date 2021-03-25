import express from "express";
import ReactDOMServer from "react-dom/server";
import { App } from "../App";
import { indexTemplate } from "./indexTemplate";
import axios from "axios";

const app = express();


app.use("/static", express.static("./dist/client"));

app.get("/auth", (req, res) => {
  axios.post(
    "https://www.reddit.com/api/v1/access_token",
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=https://react-skillbox-app.herokuapp.com/auth`,
    {
      auth: { username: process.env.CLIENT_ID, password: "M5624wpC-kg7nJW5tfJpDJrFS288Iw" },
      headers: { "Content-type": "application/x-www-form-urlencoded" }
    }
  )

    .then(({ data }) => {
      res.send(
        indexTemplate(ReactDOMServer.renderToString(App()), data["access_token"]),
      );
    })
    .catch(console.log)
});

app.get("*", (req, res) => {
  res.send(
    indexTemplate(ReactDOMServer.renderToString(App())),
  );
});

app.listen(3000, () => {
  console.log(`Server just have started on http://localhost:3000 `);
});