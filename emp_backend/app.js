const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();
require("./db/connection");

app.use(morgan("dev"));
app.use(
  cors({
    origin: ['https://employ-deploy-client.vercel.app'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
// app.use(cors());



app.use(express.json());

// Routes
const empRoutes = require("./routes/empRoutes");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/emp", empRoutes);
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running in Port ${PORT}`);
});
