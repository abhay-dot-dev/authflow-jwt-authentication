import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function hashPassword(password) {
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

export async function verifyHashedPassword(password, currentUserPassword) {
    const result = await bcrypt.compare(password, currentUserPassword);
    return result;
}

export function generateToken(userId) {
    const token = jwt.sign(
        { userId },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
    return token;
}