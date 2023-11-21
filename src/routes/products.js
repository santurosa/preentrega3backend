import { Router, application } from "express";
import { deleteProduct, getProductById, getProducts, saveProducts, upgrateProduct } from "../controllers/products.js";
import { applyPolicy } from "../middlewares/auth.js";

const router = Router();

router.get("/", getProducts);
router.get("/:pid", getProductById);
router.post("/", applyPolicy(['ADMIN']), saveProducts);
router.put("/:pid", applyPolicy(['ADMIN']), upgrateProduct);
router.delete("/:pid", applyPolicy(['ADMIN']), deleteProduct);

export default router;