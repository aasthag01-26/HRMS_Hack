const express = require("express");
const session = require("express-session");
const cors = require("cors");

const connectDB = require("./config/db");
const passport = require("./config/passport");
const authRoutes = require("./routes/auth.routes");

const app = express();
connectDB();

/* MIDDLEWARE */
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // Vite
    credentials: true,
  })
);

app.use(
  session({
    secret: "hrms_secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

/* ROUTES */
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
