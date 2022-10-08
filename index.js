const express = require("express");
const cors = require("cors");
const port = 5001;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    return res.send("OK");

});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});