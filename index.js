const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const colors = require("colors");
const moragan = require("morgan");
const db = require('./db/connection')

// Routes
const userRoutes = require('./routes/userRoutes')
const doctorRoutes = require('./routes/doctorRoutes')
const adminRoutes = require('./routes/adminRoutes')

const app = express();
require("dotenv").config();

app.use(cookieParser());
app.use(moragan("dev"));
app.use(express.json());
app.use(cors({
  origin: 'https://63fdbfefaa79306f2b163e5b--gleaming-pithivier-90f9a5.netlify.app/',
  credentials: true
}));

db()

app.use('/api' , userRoutes)
app.use('/api' , doctorRoutes)
app.use('/api' , adminRoutes)

const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);
