const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getCars);
router.post("/", controller.addCar);
router.get("/:id", controller.getCarById);
router.delete("/:id", controller.deleteCar);
router.put("/:id", controller.updateCar);

module.exports = router;
