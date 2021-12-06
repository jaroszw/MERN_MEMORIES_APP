import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signin = async (req, res) => {
  console.log('SIGNING IN');
  const { password, email } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (!oldUser) {
      return res.status(404).json({ message: "User doesn't exists" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { email: oldUser.email, id: oldUser._id },
      process.env.SECRET,
      {
        expiresIn: '1h',
      }
    );

    res.status(200).json({ result: oldUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Sth went wrong' });
  }
};

export const signup = async (req, res) => {
  const { firstName, lastName, password, confirmPassword, email } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
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

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json(error);
  }
};
