import express from "express";
import ControllerExercicio from "../controllers/controller.js";

const router = express.Router();

const controllers = new ControllerExercicio()

router.post("/api/somar", controllers.Somar);
router.post("/api/subtrair", controllers.Subtrair);
router.post("/api/dividir", controllers.Multiplicar);
router.post("/api/multiplicar", controllers.Dividir);

export default router;
