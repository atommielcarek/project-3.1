const express = require('express');
const mongoose = require('mongoose');

const api1 = require('./routes/builderRoutes');
const api2 = require('./routes/homeRoutes');

const PORT = process.env.PORT || 3001;

const { graphql, buildSchema } = require('graphql');
const schema = resumeSchema(`
    type Query {
    }`);
graphql(schema).then((response) => {
    console.log(reponse);
});

mongoose.set('debug', true);
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/ResumeBuilder',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(api1);
app.use(api2);

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});