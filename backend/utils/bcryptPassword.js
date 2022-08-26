import bcrypt from "bcrypt";

export const bcryptPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (userPassword, hashedPassword) => {
  try {
    const isPasswordCorrect = await bcrypt.compare(
      userPassword,
      hashedPassword
    );
    return isPasswordCorrect;
  } catch (error) {
    console.log(error);
  }
};
