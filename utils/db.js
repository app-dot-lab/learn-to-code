const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://appdotlab:androidstudio3@cluster0.32aci.mongodb.net/Code",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Database Connection Error"));
db.on("open", () => {
    console.log("Database Connected!");
});

module.exports = db;
