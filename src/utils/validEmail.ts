import isEmail from "validator/lib/isEmail";

export default function validEmail(email: string) {
  return isEmail(email);
}
