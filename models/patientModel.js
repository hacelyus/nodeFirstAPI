import mongoose from "mongoose";
import validator from "validator";

const { Schema } = mongoose;

const patientSchema = new Schema(
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
      required: [true, "Patient name is required"],
      uppercase: true,
      validate: [validator.isAlpha, "Only Alpha characters"],
    },
    surname: {
      type: String,
      required: [true, "Patient surname is required"],
      uppercase: true,
      validate: [validator.isAlpha, "Only Alpha characters"],
    },
    mothername: {
      type: String,
      required: false,
      uppercase: true,
      validate: [validator.isAlpha, "Only Alpha characters"],
    },
    fathername: {
      type: String,
      required: false,
      uppercase: true,
      validate: [validator.isAlpha, "Only Alpha characters"],
    },
    country: {
      type: String,
      required: [true, "Patient country is required"],
      uppercase: true,
      validate: [validator.isAlpha, "Only Alpha characters"],
    },
    address: {
      type: String,
      required: [true, "Patient address is required"],
      uppercase: true,
      validate: [validator.isAlphanumeric, "Only Alphanumeric characters"],
    },
    phone: {
      type: String,
      required: [true, "Patient phone number is required"],
      uppercase: true,
      validate: [validator.isNumeric, "Only Numeric characters"],
    },
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
