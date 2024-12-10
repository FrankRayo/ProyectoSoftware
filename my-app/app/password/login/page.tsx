import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import translations from "../../i18n";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  // Extract language from request headers
  const language = req.headers["accept-language"] || "en";
  const t = translations[language as keyof typeof translations]?.login || translations.en.login;

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: t.fieldsRequired || "Email and password are required",
    });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: t.invalidCredentials || "Invalid credentials",
    });
  }

  const isValidPassword = bcrypt.compareSync(password, user.password);
  if (!isValidPassword) {
    return res.status(400).json({
      message: t.invalidCredentials || "Invalid credentials",
    });
  }

  return res.status(200).json({
    message: t.loginSuccess || "Login successful",
  });
}
