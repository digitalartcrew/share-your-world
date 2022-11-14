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

// get a single overlay from a user
router.get("/overlays/:userId/:id", (req, res) => {});

// get all overlay received from other users
router.get("/overlays/:userId/received", (req, res) => {});

// get all overlays shared by a specific user
router.get("/overlays/:userId/received/:senderId", (req, res) => {});

// get a single overlay shared by a specific user
router.get("/overlays/:userId/received/:senderId/:id", (req, res) => {});

module.exports = router;
