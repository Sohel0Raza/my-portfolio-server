import { Schema } from "mongoose";

const projectSchema = new Schema({
  name: { type: String, required: [true, "Name Is required"] },
  title: { type: String, required: [true, "Title Is required"] },
  image: { type: String, required: [true, "Image link Is required"] },
  liveLink: { type: String, required: [true, "Live link Is required"] },
  serverLink: { type: String},
  clientLink: { type: String },
  technologies: [{ type: Schema.Types.ObjectId, ref: "Technology" }],
  features: [{ type: Schema.Types.ObjectId, ref: "Feature" }],
  categoryId: { type: String, required: true },
});

export default projectSchema;



//jewelry website

// {
//   "name": "Sparkle Gems",
//   "title":"It is easy Jewelry management and exploration for all collections",
// "image": "https://i.ibb.co.com/NTZLJJ3/Screenshot-13.png",
//   "liveLink": "https://jewelry-shop-be33c.web.app",
//   "serverLink": "https://github.com/Sohel0Raza/jewelry-server-updated",
//   "clientLink": "https://github.com/Sohel0Raza/jewelry-client-updated",
// "categoryId": "66ddbfaccba47e586372bf90",
//   "technologies": [
//     {
//             "name":"React JS"
//         }, {
//             "name":"Express JS"
//         },
//         {
//           "name":"MongoDB"
//       },
//         {
//           "name":"Mongoose"
//       },
//         {
//           "name":"Tailwind CSS"
//       },
//         {
//           "name":"Firebase"
//       },
//         {
//           "name":"TanStack Query"
//       },
//       ],
//  "features": [
//          {
//             "name":"Users can sign up and log in to access personalized features, including adding, updating, and removing their own jewelry items securely."
//         },
//         {
//             "name":"Logged-in users can add new jewelry pieces with descriptions, images, and categories, allowing for easy organization and management."
//         }
// {
// "name" : "Both logged-in and non-logged-in users can view all available jewelry."}
// {
// "name" : "Logged-in users have a dedicated my jewelry page, showing only the jewelry they have added, which they can update or remove as needed."}
// {"name" : "The website uses secure login functionality, protecting user data and restricting jewelry management features to logged-in users, while allowing non-logged-in users to browse publicly available jewelry"}
// ]
// }

