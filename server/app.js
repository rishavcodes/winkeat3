const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Cookie parser
app.use(cookieParser());

// Load env vars
dotenv.config({ path: "./config.env" });


// user routes
app.use("/api/user", require("./routes/userAuth"));


// vendor routes
app.use("/api/vendor", require("./routes/vendorAuth"));

// error handler middleware
app.use(errorHandler);

// server port
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`); //import port from config.env
});
