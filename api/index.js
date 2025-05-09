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
// app.use(cors({
//     origin: process.env.NODE_ENV === "development"
//         ? "*"
//         : ["https://project-mgnt.vercel.app"]
// }));
// app.use(cors({ origin: "*" })); // Remove after testing!
const allowedOrigins = [
    "https://project-mgnt.vercel.app", // Production frontend
    "http://localhost:5173",           // Local Vite dev server
    "http://localhost:3000",           // Optional: For Create React App
];

app.use(
    cors({
        origin: function (origin, callback) {
            // Allow requests with no origin (e.g., curl, Postman)
            if (!origin) return callback(null, true);

            if (allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error(`Origin '${origin}' not allowed by CORS`));
            }
        },
        methods: ["GET", "POST", "OPTIONS"], // Explicitly allow preflight
        credentials: true,                    // Required for cookies/auth
    })
);

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
}))

if (process.env.NODE_ENV === "development") {
    app.listen(port, () => console.log(`Server running locally on port ${port}`.yellow.bold));
} else {
    module.exports = app;
}