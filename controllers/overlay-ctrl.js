const { Overlay } = require("../models");

const createOverlay = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a overlay small change",
    });
  }

  const overlay = new Overlay(body);

  if (!overlay) {
    return res.status(400).json({ success: false, error: err });
  }

  overlay
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: overlay._id,
        message: "Overlay created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Overlay not created!",
      });
    });
};

const updateOverlay = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Overlay.findOne({ _id: req.params.id }, (err, overlay) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Overlay not found!",
      });
    }

    Overlay.title = body.title || Overlay.title;
    Overlay.location = body.location || Overlay.location;
    Overlay.notes = body.notes || Overlay.notes;

    Overlay.save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: Overlay._id,
          message: "Overlay updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Overlay not updated!",
        });
      });
  });
};

const deleteOverlay = async (req, res) => {
  await Overlay.findOneAndDelete({ _id: req.params.id }, (err, overlay) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!overlay) {
      return res
        .status(404)
        .json({ success: false, error: `Overlay not found` });
    }

    return res.status(200).json({ success: true, data: overlay });
  }).catch((err) => console.log(err));
};

const getOverlayById = async (req, res) => {
  await Overlay.findOne({ _id: req.params.id }, (err, overlay) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    return res.status(200).json({ success: true, data: overlay });
  }).catch((err) => console.log(err));
};

const getOverlays = async (req, res) => {
  await Overlay.find({}, (err, overlays) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!overlays.length) {
      return res
        .status(404)
        .json({ success: false, error: `Overlay not found` });
    }
    return res.status(200).json({ success: true, data: overlays });
  }).catch((err) => console.log(err));
};

module.exports = {
  createOverlay,
  updateOverlay,
  deleteOverlay,
  getOverlayById,
  getOverlays,
};
