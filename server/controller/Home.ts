import { Request, Response } from "express";
import Product from "../model/products";

export const fetchProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.status(200).json({ products: products, message: "Done transaction" });
    } catch (error: unknown) {
        
        if (error instanceof Error) {
            res.status(500).json({ message: "Failed to fetch products", error: error.message });
        } else {

            res.status(500).json({ message: "Failed to fetch products", error: "Unknown error" });
        }
    }
};
