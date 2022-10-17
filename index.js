const express = require("express");
const mongoose =require('mongoose');
require('dotenv').config();
const employeeRoute =require('./routes/employee')
const cors = require('cors')
const app =express();
/*connecting our database with our app*/
mongoose
.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Database connection is successful")
}).catch((err) =>{
    console.log(err)

});
app.use(express.json())
app.use(cors({ origin: "*"}));
app.use("/api/employes",employeeRoute)

/**setting up server */
app.listen(5000,()=>{
    console.log("our server is up and running on port 5000");
});
