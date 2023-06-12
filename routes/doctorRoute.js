import express from "express";
import * as doctorController from "../controllers/doctorController.js";
const router = express.Router();

router
  .route("/")
  .get(doctorController.getAllDoctors)
  .post(doctorController.createDoctor);
router
  .route("/:id")
  .get(doctorController.getDoctor)
  .patch(doctorController.updateDoctor)
  .delete(doctorController.deleteDoctor);

export default router;
