// // import User from "../models/User";

// const { verify } = require("jsonwebtoken");

// const { UnauthenticatedError } = require("../errors");

// const auth = async (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     throw new UnauthenticatedError("Authentication error");
//   }
//   const token = authHeader.split(" ")[1];
//   try {
//     const payload = verify(token, process.env.JWT_SECERT);
//     req.user = { userId: payload.userId, name: payload.username };
//     next();
//   } catch (error) {
//     throw new UnauthenticatedError("Authentication error");
//   }
// };

// export default auth;
