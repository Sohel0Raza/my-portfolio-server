import mongoose from "mongoose";
import categorySchema from "../schemas/category.schema.js";

const categoryModel = mongoose.model("categories", categorySchema);

export const getCategory = async (req, res) => {
  try {
    const result = await categoryModel.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

export const createCategory = async (req, res) => {
  try {
    const category = req.body;
    const categoryDoc = new categoryModel();

    categoryDoc.name = category.name;

    const createResponse = await categoryDoc.save();
    res.status(200).send(createResponse);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};