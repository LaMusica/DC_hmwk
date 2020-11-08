const express = resquire('express');
const app = express();
const pgp = require('pg-promise')()
const mustacheExpress = require('mustache-express');

const connectionString = "postgres://localhost:5432/blogDB"

const db = pgp(connectionString);

app.use(express.urlencoded());