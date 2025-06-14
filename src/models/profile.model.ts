import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    userName: { type: String },
    userId:{type:String},
    email: { type: String, required: true },
    password: { type: String, required: true },
    about: { type: String },
    experience: [
      {
        company: { type: String },
        role: { type: String },
        duration: { type: String },
        description: { type: String },
      },
    ],

    education: [
      {
        institution: { type: String },
        degree: { type: String },
        year: { type: String },
        description: { type: String },
      },
    ],
    phoneNumber: { type: String },
    github: { type: String },
    image: { type: String },
    resume: { type: String },
  },
  // { timestamps: true }
);

export const User = mongoose.model("User", profileSchema);
