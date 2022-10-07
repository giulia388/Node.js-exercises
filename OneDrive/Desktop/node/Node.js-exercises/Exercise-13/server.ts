import express from "express";
import "express-async-errors";


const app = express();

app.get("/", (request, response) => {
    response.send("Server avviato")
});

const port = 3030;

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})