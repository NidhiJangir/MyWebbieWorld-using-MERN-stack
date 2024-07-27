require('dotenv').config(); //to access dotenv file
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router")
const connectdb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
    origin: "http://localhost:5173",
    method: "GET,POST,PUT,DELETe,PATCG,HEAD",
    Credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json()); //middleware to access json into the body

app.use("/api/auth", authRoute); // to mount the router or to use the router into the main express app
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use(errorMiddleware);

const PORT = 5001;

connectdb().then(()=> {
    app.listen(PORT, () => 
{
    console.log(`Server is running at port: ${PORT}`);
});
});




//run by this--- D:\Mern2024\server> nodemon server
//db password=VKeNHoXaIHKo0P7i
