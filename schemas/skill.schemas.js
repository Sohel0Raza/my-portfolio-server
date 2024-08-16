import { Schema } from "mongoose";

export const skillSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  techTecnology: { type: String, required: true },
  skillLevel: { type: String, required: true },
});
