const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

mongoose.connect('mongodb+srv://gaetanhamel:Ryo3JADfV7KMAlqn@cluster0-nrfrt.mongodb.net/gql-ninja?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
  console.log('connected to database');
});


app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});

