import  {createCar, getAllCars} from "../controllers/car.controller.js"
import Router from "express"

let router = Router()

router.post("/car", createCar)
router.get("/cars", getAllCars)

export default router