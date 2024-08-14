import mongoose from "mongoose";
import projectSchema from "../schemas/project.schema.js";
import featureSchema from "../schemas/feature.schemas.js";

const projectModel = mongoose.model("Project", projectSchema);

const featureModel = mongoose.model("Feature", featureSchema);

export const getProject = async (req, res) => {
  try {
    //const projects = await projectModel.find()
    //const projects  =  await featureModel.find().populate({ path: 'features', select: 'name' });

    const projects = await projectModel
      .findOne({ _id: "66bcefb469540531ba202496" })
      .populate({ path: "features", select: "name" });

    res.status(200).send(projects);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const createProject = async (req, res) => {
  try {
    const newProject = req.body;
    const projectDoc = new projectModel({
      name: newProject.name,
      description: newProject.description,
      liveLink: newProject.liveLink,
      serverLink: newProject.serverLink,
      clientLink: newProject.clientLink,
      technologies: newProject.technologies,
    });
    const project = await projectDoc.save();
    res.status(200).send(project);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
