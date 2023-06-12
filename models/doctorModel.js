import mongoose from "mongoose";
import validator from "validator";

const { Schema } = mongoose;

const doctorSchema = new Schema(
  {
    idNumber: {
      type: String,
      required: [true, "ID Number is required"],
      minlength: [11, "ID Number must be 11 characters"],
      maxlength: [11, "ID Number must be 11 characters"],
      validate: [validator.isNumeric, "Only numeric characters"],
    },
    name: {
      type: String,
      required: [true, "Doctor name is required"],
      uppercase: true,
      validate: [validator.isAlpha, "Only Alpha characters"],
    },
    surname: {
      type: String,
      required: [true, "Doctor surname is required"],
      uppercase: true,
      validate: [validator.isAlpha, "Only Alpha characters"],
    },
    speciality: {
      type: String,
      required: [true, "Doctor speciality is required"],
      uppercase: true,
      validate: [validator.isAlpha, "Only Alpha characters"],
    },
    accessLevel: {
      type: Number,
      minvalue: 0,
      maxvalue: 4,
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
