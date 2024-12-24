const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./config/database");
const reviewRoutes = require("./routes/reviewRoutes");


const app = express();

// Middleware

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// Routes
app.use("/reviews", reviewRoutes);

// Sync database and start server
sequelize
    .sync()
    .then(() => {
        console.log("Database connected successfully");
        app.listen(3000, () =>
            console.log("Server running on http://localhost:3000")
        );
    })
    .catch((err) => console.error("Error syncing database:", err));
