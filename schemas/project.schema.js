import { Schema } from "mongoose";

const projectSchema = new Schema({
  name: { type: String, required: [true, "Name Is required"] },
  featuresId: { type: String, required: [true, "Description Is required"] },
  liveLink: { type: String, required: [true, "Live link Is required"] },
  serverLink: { type: String, required: [true, "Server link Is required"] },
  clientLink: { type: String, required: [true, "Client link Is required"] },
  technologies:[{type:Schema.Types.ObjectId, ref:"Technology"}],
  features: [{ type: Schema.Types.ObjectId, ref: "Feature" }],
});

export default projectSchema;
