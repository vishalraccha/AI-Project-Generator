import userModel from "../models/user.model.js";

export const createUser = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("email and password are required");
  }
  const hashedpassword = await userModel.hashPassword(password);
  const user = await userModel.create({
    email,
    password: hashedpassword,
  });
  return user;
};
