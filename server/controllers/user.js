import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import dotenv from 'dotenv';

dotenv.config();

export const signup = async (req, res) => {
  const { firstName, lastName, password, confirmPassword, email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: 'User already existis' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password doesn't match" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      name: `${firstName} ${lastName}`,
      password: hashedPassword,
      email,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.SECRET,
      {
        expiresIn: '1h',
      }
    );

    res.status(200).json({ message: 'user sing up succesfully', succes: 'ok' });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const signin = async (req, res) => {
  const { password, email } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (!oldUser) {
      return res.status(404).json({ message: "User doesn't exists" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { email: oldUser.email, id: oldUser._id, name: oldUser.name },
      process.env.SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("jwt", JSON.stringify(token), {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      email: oldUser.email,
      id: oldUser._id,
      name: oldUser.name,
    });
  } catch (error) {
    res.status(500).json({ message: "Sth went wrong" });
  }
};

const client = new OAuth2Client(process.env.GOOGLE_CLIENT);

export const googleSignIn = async (req, res) => {
  const { tokenId } = req.body;

  const response = await client.verifyIdToken({
    idToken: tokenId,
    audience: process.env.GOOGLE_CLIENT,
  });

  const { email, name, email_verified } = response.payload;
  const user = await User.findOne({ email });

  if (email_verified) {
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.SECRET,
      {
        expiresIn: '1h',
      }
    );

    console.log(token);
    const { _id, email, name, role } = user;
    return res.status(200).json({
      token,
      user: { _id, email, name, role },
    });
  }
};

export const googleSingin = async (req, res) => {
  const { tokenId } = req.body;

  const response = await client.verifyIdToken({
    idToken: tokenId,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const { email_veryfied, name, email } = await response.payload;
};
