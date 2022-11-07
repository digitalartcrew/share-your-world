const express = require("express");

const router = express.Router();

const {
  createOverlay,
  updateOverlay,
  deleteOverlay,
  getOverlayById,
  getOverlays,
} = require("../controllers/overlay-ctrl");

router.post("/overlay/create", createOverlay);
router.put("/overlay/update/:id", updateOverlay);
router.delete("/overlay/delete/:id", deleteOverlay);
router.get("/overlay/:id", getOverlayById);
router.get("/overlays", getOverlays);

module.exports = router;
