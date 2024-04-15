import express from "express";
import { Router } from "express";
import { signUp, signIn  } from "../controller/userSignup.controller.js";

const router = Router();

router.route("/singup").post(signUp);
router.route("/login").get(signIn);

export default router;
