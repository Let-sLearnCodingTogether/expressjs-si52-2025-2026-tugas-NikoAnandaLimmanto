import express from "express";
import * as resepController from "../Controllers/resepController.js";

const api = express.Router();

api.get("/resep", resepController.listResep);
api.post("/resep", resepController.createNewResep);
api.put("/resep/:id", resepController.updateResep);
api.delete("/resep/:id", resepController.deleteResep);

export default api;
