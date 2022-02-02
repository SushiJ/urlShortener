import { connect } from "mongoose";
import log from "./logger";

export async function connectToDb(dbUri) {
  try {
    await connect(dbUri);
    log.info("Connected to DB");
  } catch (e) {
    process.exit(1);
  }
}
