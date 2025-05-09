const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql")
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();

connectDB();

// app.use(cors());
app.use(cors({
    origin: process.env.NODE_ENV === "development"
        ? "*"
        : ["https://project-mgnt.vercel.app"]
}));

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
}))

if (process.env.NODE_ENV === "development") {
    app.listen(port, () => console.log(`Server running locally on port ${port}`.yellow.bold));
} else {
    module.exports = app;
}