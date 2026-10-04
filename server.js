import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "*" }));
app.use(express.json({ limit: "2mb" }));

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    service: "BahayMarket PH",
    message: "API is running"
  });
});

app.get("/api/listings", (req, res) => {
  res.json([]);
});

app.listen(port, () => {
  console.log(`BahayMarket PH running on port ${port}`);
});