import express from "express";
import { Router } from "express";
import {  addProduct, getProduct } from "../controller/product.controller.js";

const router = Router();

router.route("/add").post(addProduct);
router.route("/all").get(getProduct);

export default router;
