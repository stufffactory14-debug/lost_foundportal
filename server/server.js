const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const itemRoutes = require("./routes/itemRoutes");

const app = express();

app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, "../client")));

app.use("/uploads", express.static("uploads"));

console.log("items routes loaded");
app.use("/api/items", itemRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/pages/login.html"));
});


mongoose.connect("mongodb+srv://admin123:lostfound@cluster0.wes89bv.mongodb.net/lostfound?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {

    console.log("MongoDB Connected");

    app.listen(5000, () => {
        console.log("Server running on port 5000");
    });

})
.catch(err => {
    console.log("MongoDB connection error:", err);
});


