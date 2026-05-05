import { model, Schema } from "mongoose";

// Schema definition for Employee collection
const employeeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,      // Ensures no duplicate emails
      lowercase: true,   // Stores email in lowercase
      trim: true         // Removes extra spaces
    },
    mobile: {
      type: String,
      required: [true, "Mobile is required"]
    },
    designation: {
      type: String,
      required: [true, "Designation is required"]
    },
    companyName: {
      type: String,
      required: [true, "Company name is required"]
    }
  },
  {
    versionKey: false,   // Removes __v field
    timestamps: true     // Adds createdAt and updatedAt
  }
);

// Creating Employee model (maps to 'employees' collection)
export const employeeModel = model("employee", employeeSchema);