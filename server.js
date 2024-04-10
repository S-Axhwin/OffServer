const express = require('express');

//importing cors for cross origin error sourse

const cors = require("cors")

const app = express();
app.use(cors());

//connection
const { connect } = require("./utils/connect")

//UserRouter importing
const UserRouter = require("./routes/UserRoutes");
const RecRouter = require("./routes/RecRoutes")
app.use(express.json());
app.use("/user", UserRouter);
app.use("/rec", RecRouter)

app.post("/api", (req, res) => {
    console.log(req.body);
    res.json({status: 'ok'});
});

connect().then( () => {
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => console.log(`listing to port ${PORT}`));
});