const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config()


const employeeRoutes = require('./routes/EmployeeRoute')

//express app
const app = express();

//middleware
app.use(express.json());

//routes
app.use('/api/employee',employeeRoutes )


const port = process.env.PORT || 5000;


mongoose.connect(process.env.URI)
    .then(() =>
        app.listen(port, () => {
            console.log("MongoDB connected success....");
            console.log(`app is listening on port ${port}.....`);
})).catch((err) => console.error("Could not connect to MongoDB",err))