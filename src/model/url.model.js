import { model, Schema } from "mongoose";
import { nanoid } from "nanoid";

const urlSchema = new Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    // required?: true,
    default: () => nanoid(),
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

const urlModel = model("url", urlSchema);

export default urlModel;
