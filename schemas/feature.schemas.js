import { Schema } from "mongoose";

const featureSchema = new Schema({
    name:{type:String, required:true},
    project: { type: Schema.Types.ObjectId, ref: 'Project' }
})

export default featureSchema;