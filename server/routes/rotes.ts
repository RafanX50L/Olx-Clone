import { Router } from "express";
import { login, signup } from "../controller/Auth";
import { AddProduct } from "../controller/AddProduct";
import upload from "../config/multer"; 
import { fetchProducts, findProduct } from "../controller/Home";

const router = Router();
router.post('/signup', signup);
router.post('/login', login);
router.get('/products', fetchProducts);
router.post('/add_product', upload.array('images', 3), AddProduct); 
router.get('/product-details/:id',findProduct)
export default router;