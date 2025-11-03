import dotenv from "dotenv";
dotenv.config();

export const adminAuth = (req, res, next) => {
  const { username, password } = req.headers;

  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASS
  ) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized Admin" });
  }
};
