import dotenv from "dotenv";
import express from "express";
import log from "./utils/logger";
import { connectToDb } from "./utils/connect";
import path from "path";
import {
  createUrlHandler,
  getAllUrlHandler,
  getUrlByIdHandler,
} from "./controller/url.controller";
import { getUrlById } from "./service/url.service";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const dbUri = process.env.MONGODB_URI || "mongodb://localhost:27017/url";
app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.post("/new", createUrlHandler);

app.get("/", getAllUrlHandler);

app.get("/:sUrl", getUrlByIdHandler);

app.listen(port, () => {
  log.info(`Server's up on http://localhost:${port}`);
  connectToDb(dbUri);
});

// TODO: Add user auth and google auth, templating
