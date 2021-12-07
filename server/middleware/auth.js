import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = JSON.parse(req.cookies["jwt"]);
    // const token = req.headers.authorization.split(' ')[1];
    const isCustomAuth = token.length < 500;
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.SECRET);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(403).json({ status: "failed", error: "User unauthorized" });
  }
};

export default auth;
