import express from "express";

const app= express();

//midelwares
app.use(express.json())


export default app;