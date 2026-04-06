import exp from "express";
import { employeeModel } from "../Models/employeeModel.js";

export const employeeApp = exp.Router();


// CREATE employee
employeeApp.post("/employees", async (req, res, next) => {
  try {
    const newEmp = new employeeModel(req.body);
    const saved = await newEmp.save();

    res.status(201).json({
      message: "Employee created",
      payload: saved
    });
  } catch (err) {
    next(err);
  }
});


// READ all employees
employeeApp.get("/employees", async (req, res, next) => {
  try {
    const list = await employeeModel.find();

    res.status(200).json({
      message: "employees",
      payload: list
    });
  } catch (err) {
    next(err);
  }
});



// UPDATE employee
employeeApp.put("/employees/:id", async (req, res, next) => {
  try {
    const updated = await employeeModel.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body } },
      { returnDocument:"after", runValidators: true }
    );

    res.status(200).json({
      message: "Employee updated",
      payload: updated
    });
  } catch (err) {
    next(err);
  }
});


// DELETE employee
employeeApp.delete("/employees/:id", async (req, res, next) => {
  try {
    const deleted = await employeeModel.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee deleted",
      payload: deleted
    });
  } catch (err) {
    next(err);
  }
});