const userModel = require("../models/user");

const handleGetAllUsers = async (req, res) => {
  const allUsers = await userModel.find({});
  return res.json(allUsers);
};

const handleGetUserById = async (req, res) => {
  const user = await userModel.findById(req.params.id);
  return res.json(user);
};

const handleCreateUser = async (req, res) => {
  const body = req.body;
  if (!body.firstName || !body.email || !body.jobTitle) {
    res.status(400).json("400 - Bad Request");
  }

  const result = await userModel.create({
    first_name: body.firstName,
    last_name: body?.lastName ? body.lastName : "",
    email: body.email,
    job_title: body?.jobTitle,
    experience: body?.experience ? body?.experience : "",
    gender: body?.gender ? body?.gender : "",
  });
  return res.status(401).json({ message: "success", ...result });
};

const handleUpdateUser = async (req, res) => {
  const body = req.body;
  if (!body.firstName || !body.email || !body.jobTitle) {
    res.status(400).json("400 - Bad Request");
  }

  const updatedUser = {
    first_name: body.firstName,
    last_name: body?.lastName ? body.lastName : "",
    email: body.email,
    job_title: body?.jobTitle,
    experience: body?.experience ? body?.experience : "",
    gender: body?.gender ? body?.gender : "",
  };

  const user = await userModel.findById(req.params.id);
  if (!user) {
    res.status(400).json("user not found");
  }

  const updateUser = await userModel.findByIdAndUpdate(req.params.id, {
    ...updatedUser,
  });
  console.log("user updated", updateUser);
  return res.status(200).json("User updated successfully");
};

const handleDeleteUser = async (req, res) => {
  const user = await userModel.findById(req.params.id);
  if (!user) {
    res.status(400).json("user not found");
  }
  await userModel.findByIdAndDelete(req.params.id);
  return res.json("user deleted");
};

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleCreateUser,
  handleUpdateUser,
  handleDeleteUser,
};
