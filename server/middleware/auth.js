import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
<<<<<<< HEAD
  const cookies = req.cookies['jwt'];
=======
>>>>>>> d7cd1e4435e0611bd10a62d7e37af6124a6f5300
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
<<<<<<< HEAD
    res.status(403).json({ status: 'failed', error: 'User unauthorized' });
=======
    console.log(error);
    res.status(403).json({ status: "failed", error: "User unauthorized" });
>>>>>>> d7cd1e4435e0611bd10a62d7e37af6124a6f5300
  }
};

export default auth;
