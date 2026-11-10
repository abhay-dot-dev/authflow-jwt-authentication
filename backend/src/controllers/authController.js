import User from '../models/User.js'
import { generateToken, hashPassword, verifyHashedPassword } from '../utils/authUtils.js';

export const registerUser = async (req, res) => {
    const { email, password } = req.body || {};

    if (!email) {
        return res.status(400).json({ message: "Please enter a valid email!" });
    }
    if (!password) {
        return res.status(400).json({ message: "Please enter a valid password" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists with this email! Please login" });
        }

        const hashedPassword = await hashPassword(password);
        const newUser = await User.create({
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User registered Successfully",
            user: {
                email: newUser.email,
                id: newUser._id
            }
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong!" })
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body || {};

    if (!email) {
        return res.status(400).json({ message: "Please enter a valid email!" });
    }
    if (!password) {
        return res.status(400).json({ message: "Please enter a valid password" });
    }

    try {
        const currentUser = await User.findOne({ email });
        if (!currentUser) {
            return res.status(401).json({ message: `User with emailId ${email} doesn't exists! Please signup!` });
        }

        if (await verifyHashedPassword(password, currentUser.password)) {
            const token = generateToken(currentUser._id);
            return res.status(200).json({ message: "User logged in successfully!", token: token });
        } else {
            return res.status(401).json({ message: "Incorrect password!" })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" })
    }
}