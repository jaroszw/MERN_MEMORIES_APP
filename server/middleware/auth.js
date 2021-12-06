import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const isCustomAuth = token.length < 500;
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.SECRET);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      console.log(decodedData);
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(403).json({ status: 'failed', error: 'User unauthorized' });
  }
};

export default auth;
