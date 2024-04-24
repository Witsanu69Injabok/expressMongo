const express = require("express");
const { readdirSync } = require("fs");
const morgan = require("morgan");
const cors = require("cors");
const bodyParse = require("body-parser");
const connectDB = require("./Config/db");

const app = express();
connectDB();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParse.json({ limit: "10mb" }));

// const productRouter = require('./Routes/product');
// const authRouter = require('./Routes/auth');
// Route 1

// app.get('/products', (req, res) => {
//     res.send('Hello Product');
// });

// Route 2
// app.use('/api',productRouter);
// app.use('/api', authRouter);

// Route 3
readdirSync("./Routes").map((r) => app.use("/api", require("./Routes/" + r)));

app.listen(5000, () => console.log("Server is listening on port 5000"));
