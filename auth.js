import jwt from "jsonwebtoken";

import { promisify } from "util";

export const checkAuth=async (req) => {
     try {
      if (!req.headers.authorization) {
        return null;
      } else {
        let decoded = await promisify(jwt.verify)(
          req.headers.authorization,
          process.env.SECRET,
        );
        return decoded;
      }
    } catch (error) {
      return null;
    }
}