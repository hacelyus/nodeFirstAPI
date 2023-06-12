import Doctor from "../models/doctorModel.js";

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({});
    res.status(200).json({ doctors });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById({ _id: req.params.id });
    if (!doctor) {
      return res.status(404).json({ "no result with id: ": req.params.id });
    }
    res.status(200).json({ doctor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const createDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).json({ doctor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete({ _id: req.params.id });
    if (!doctor) {
      return res.status(404).json({ "no result with id: ": req.params.id });
    }
    res.status(200).json({ doctor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!doctor) {
      return res.status(404).json({ "no result with id: ": req.params.id });
    }
    res.status(200).json({ doctor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export { getAllDoctors, getDoctor, createDoctor, deleteDoctor, updateDoctor };
