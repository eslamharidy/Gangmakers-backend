const express = require("express");
const app = express();

const JwtRouter = require("./auth/router");
const cors = require("cors");
const corsMiddleware = cors();
app.use(corsMiddleware);

const bodyParser = require("body-parser");
const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

app.use(JwtRouter);
const userRouter = require("./user/router");
app.use(userRouter);

const postRouter = require("./post/router");
app.use(postRouter);


const port = 4000
app.listen(port, console.log(`port listening on port: ${port}`))
