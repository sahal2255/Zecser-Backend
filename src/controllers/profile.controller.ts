import { Request, Response } from "express";
import mongoose from "mongoose";
import { User } from "../models/profile.model";
import cloudinary from "../helpers/cloudinary";

export const addProfileDetails = async (req: Request, res: Response): Promise<void> => {
  console.log("hitting on the add profile function");

  try {
    console.log("req.body", req.body);
    const { about, experience, education, phoneNumber, github } = req.body;

    const userId = (req as any).user?.id?.toString();
    if (!userId) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    if (!req.file) {
      res.status(400).json({ message: "Profile image is required" });
      return;
    }

    const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(base64Image, {
      folder: "zecserprofileimages",
    });

    const imageUrl = result.secure_url;

    const user = await User.findOne({ userId });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    user.about = about;
    user.phoneNumber = phoneNumber;
    user.github = github;
    user.image = imageUrl;
    user.education = education;
    user.experience = experience;

    await user.save();

    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (error) {
    console.log("user profile addition error", error);
    res.status(500).json({ message: "Server error", error });
  }
};
