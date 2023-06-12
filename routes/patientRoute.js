import express from "express";
import * as patientController from "../controllers/patientController.js";
const router = express.Router();

router
  .route("/")
  .get(patientController.getAllPatients)
  .post(patientController.createPatient);
router
  .route("/:id")
  .get(patientController.getPatient)
  .patch(patientController.updatePatient)
  .delete(patientController.deletePatient);

export default router;
