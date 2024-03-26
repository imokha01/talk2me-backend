import express from "express";
import cors from "cors";
import connectDB from "./db/server.js";
import colors from "colors";
import userRoutes from "./routes/userRoutes.js"
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";


connectDB()
const app = express();

app.use(express.json());    //! to accept json

app.use(cors());

const PORT = 4040 ;

app.get("/", (req, res) => {
    res.send("The App is sending an api response")
})

app.use('/api/user', userRoutes)

app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`.yellow.bold)
);