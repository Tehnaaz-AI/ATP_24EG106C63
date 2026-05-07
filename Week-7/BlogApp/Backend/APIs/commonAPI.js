import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { hash, compare } from "bcryptjs";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middleware/verifyToken.js";
const { sign } = jwt;
export const commonApp = exp.Router();
import { upload } from "../config/multer.js";
import { uploadToCloudinary } from "../config/cloudinaryUpload.js";
import cloudinary from "../config/cloudinary.js";
config();

//Route for register
commonApp.post("/users", upload.single("profileImageUrl"), async (req, res, next) => {
  let cloudinaryResult;
  try {
    let allowedRoles = ["USER", "AUTHOR", "ADMIN"];
    //get user from req
    const newUser = req.body;
    console.log(newUser);
    console.log(req.file);

    //check role
    if (!allowedRoles.includes(newUser.role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    //Upload image to cloudinary from memoryStorage
    if (req.file) {
      cloudinaryResult = await uploadToCloudinary(req.file.buffer);
    }

    // console.log("cloudinaryResult", cloudinaryResult);
    //add CDN link(secure_url) of image to newUserObj
    if (req.file) {
      newUser.profileImageUrl = cloudinaryResult.secure_url;
    }

    //run validators manually
    //hash password and replace plain with hashed one
    newUser.password = await hash(newUser.password, 12);

    //create New user document
    const newUserDoc = new UserModel(newUser);

    //save document
    await newUserDoc.save();
    //send res
    res.status(201).json({ message: "User created" });
  } catch (err) {
    console.log("err is ", err);
    //delete image from cloudinary
    if (cloudinaryResult?.public_id) {
      await cloudinary.uploader.destroy(cloudinaryResult.public_id);
    }
    next(err);
  }
});

//Route for Login(USER, AUTHOR and ADMIN)
commonApp.post("/login", async (req, res, next) => {
  try {
    console.log("LOGIN BODY:", req.body);

    const { email, password } = req.body;

    // check if user exists
    const user = await UserModel.findOne({ email });
    console.log("USER FOUND:", user);

    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    // compare password
    const isMatched = await compare(password, user.password);
    console.log("PASSWORD MATCH:", isMatched);

    if (!isMatched) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // create JWT
    const signedToken = sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        profileImageUrl: user.profileImageUrl,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );


    res.cookie("token", signedToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    // remove password
    let userObj = user.toObject();
    delete userObj.password;

    res.status(200).json({
      message: "login success",
      payload: userObj,
    });

  } catch (err) {
    console.log("LOGIN ERROR:", err);
    next(err);
  }
});

//Route for Logout
commonApp.get("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });

  res.status(200).json({ message: "Logout success" });
});
//Page refresh
commonApp.get("/check-auth", verifyToken("USER", "AUTHOR", "ADMIN"), (req, res) => {
  res.status(200).json({
    message: "authenticated",
    payload: req.user,
  });
});

//Change password
commonApp.put(
  "/password",
  verifyToken("USER", "AUTHOR", "ADMIN"),
  async (req, res, next) => {
    try {

      const { currentPassword, newPassword } = req.body;

      // get logged in user id from token
      const userId = req.user.id;

      // find user
      const user = await UserModel.findById(userId);

      // user not found
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      // compare current password
      const isMatched = await compare(currentPassword, user.password);

      if (!isMatched) {
        return res.status(400).json({
          message: "Current password is incorrect",
        });
      }

      // check old and new password are same
      const isSamePassword = await compare(newPassword, user.password);

      if (isSamePassword) {
        return res.status(400).json({
          message: "New password cannot be same as current password",
        });
      }

      // hash new password
      const hashedPassword = await hash(newPassword, 12);

      // update password
      user.password = hashedPassword;

      // save user
      await user.save();

      // send response
      res.status(200).json({
        message: "Password updated successfully",
      });

    } catch (err) {
      console.log("PASSWORD CHANGE ERROR:", err);
      next(err);
    }
  }
);