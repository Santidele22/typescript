import { Router } from "express";

const diaries = Router()

diaries.get("/", (_req,res) => {})
diaries.get("/:id", (_req,res) => {})
diaries.post("/", (_req,res) => {})
diaries.patch("/:id", (_req,res) => {})
diaries.delete("/:id", (_req,res) => {})


export default diaries