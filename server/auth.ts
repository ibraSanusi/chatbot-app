import users from "./data/users.json";
import jwt from "jsonwebtoken";

type User = {
  id: string;
  email: string;
  password: string;
  name: string;
};

export function findUserByEmail(email: string): User | undefined {
  return users.find((u) => u.email === email);
}

export function validateCredentials(
  email: string,
  password: string
): User | null {
  const user = findUserByEmail(email);
  if (!user) return null;
  if (user.password !== password) return null;
  return user;
}

export function generateToken(user: User): string {
  const payload = {
    id: user.id,
    email: user.email,
    name: user.name,
  };

  return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "1h" });
}

export function verifyToken(token: string): User | null {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as User;
    return decoded;
  } catch (err) {
    console.error("Token verification failed:", err);
    return null;
  }
}
