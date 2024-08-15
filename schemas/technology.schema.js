import { Schema } from "mongoose";

export const technologySchema = new Schema({
  name: { type: String, required: true },
  project: [{ type: Schema.Types.ObjectId, ref: "Project" }],
});
