import Patient from "../models/patientModel.js";

const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find({});
    res.status(200).json({ patients });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById({ _id: req.params.id });
    if (!patient) {
      return res.status(404).json({ "no result with id: ": req.params.id });
    }
    res.status(200).json({ patient });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json({ patient });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete({ _id: req.params.id });
    if (!patient) {
      return res.status(404).json({ "no result with id: ": req.params.id });
    }
    res.status(200).json({ patient });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!patient) {
      return res.status(404).json({ "no result with id: ": req.params.id });
    }
    res.status(200).json({ patient });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export {
  getAllPatients,
  getPatient,
  createPatient,
  deletePatient,
  updatePatient,
};
