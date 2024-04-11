import User from "../../models/User";
import { AuthAccount } from "../../schema/auth";
import { hashPassword } from "../../utils/auth";

const existEmail = async (email:string) => {
  const user = await User.findOne({email});
  console.log(user)
  if(user) throw new Error(`The email is already used`)
}
export const createAccount = async (data:AuthAccount) => {
  if(data.password !== data.repeatPassword) throw new Error(`The passwords don't match`);
  await existEmail(data.email);

  const newAccount = new User(data);
  newAccount.password = await hashPassword(data.password);
  await newAccount.save();

  return {
    message:'Check your email to confirm your account',
    newAccount
  }
}