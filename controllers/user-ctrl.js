const { User } = require("../models");

const updateUser = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "User not found!",
      });
    }

    user.username = body.username || user.username;
    user.email = body.email || user.email;
    user.phone = body.phone || user.phone;

    user
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: user._id,
          message: "User updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "User not updated!",
        });
      });
  });
};

const deleteUser = async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!user) {
      return res.status(404).json({ success: false, error: `User not found` });
    }

    return res.status(200).json({ success: true, data: user });
  }).catch((err) => console.log(err));
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
  }
};

const getUsers = async (req, res) => {
  await User.find({}, (err, users) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    console.log("MY USERS: ", users);

    if (!users.length) {
      return res.status(404).json({ success: false, error: `User not found` });
    }
    return res.status(200).json({ success: true, data: users });
  }).catch((err) => console.log(err));
};

module.exports = {
  updateUser,
  deleteUser,
  getUserById,
  getUsers,
};
