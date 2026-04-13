import jwt from 'jsonwebtoken'
const { verify } = jwt
import { config } from 'dotenv'
config()

export const verifyToken = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      // ✅ FIX: support both cookie + future authorization header
      const token =
        req.cookies?.token ||
        req.headers?.authorization?.split(" ")[1];

      if (!token)
        return res.status(401).json({ message: "Please Login first" });

      let decodedToken = verify(token, process.env.SECRET_KEY);

      if (!allowedRoles.includes(decodedToken.role))
        return res.status(403).json({ message: "You are not authorized" });

      req.user = decodedToken;
      next();

    } catch (err) {
      res.status(401).json({ message: "Invalid Token" });
    }
  };
};