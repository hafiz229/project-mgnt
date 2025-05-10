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

app.use(cors());

app.use(cors({
    origin: 'https://project-mgnt-frontend.vercel.app'
}));

// app.use(cors({
//     origin: [
//         "http://localhost:5173",
//         "http://localhost:4173",
//         "https://project-mgnt.vercel.app",
//     ],
//     credentials: true
// }));

app.get("/", (req, res) => res.send("Express on Vercel"));

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
}))

module.exports = app;

if (process.env.NODE_ENV === "development") {
    app.listen(port, () => console.log(`Server running locally on port ${port}`.yellow.bold));
}