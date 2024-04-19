import express from "express";
import diaries from "./routes/diaries";
import corsMiddleware from "./middleware/cors/corsMiddleware";
const app = express();

const PORT = 3000;

app.use(express.json());
app.use("/api/diaries", diaries)
app.use(corsMiddleware)


app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});
