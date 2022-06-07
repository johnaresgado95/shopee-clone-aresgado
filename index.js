//IMPORTS FROM PACKGES
const express = require("express");
const mongoose = require("mongoose");

//IMPORT FROM FILE
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

//INIT
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://johnarenson:johnarenson@cluster0.cgp1g.mongodb.net/?retryWrites=true&w=majority";

//MIDDLEWARE
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

//CONNECTION
mongoose.connect(DB).then(() => {
    console.log("Connected Successfully");
}).catch((e) => {
    console.log(e);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connected at port ${PORT}`);
});