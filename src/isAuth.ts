import { MiddlewareFn } from "type-graphql";
import { verify } from "jsonwebtoken";
import { MyContext } from "./MyContext";
import { LoginResponse } from "./entity/User";

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  const authorization = context.req.headers["authorization"];

  if (!authorization) {
    throw new Error("Not authenticated, must login");
  }

  try {
    const token = authorization.split(" ")[1];
    const payload = verify(token, "MySecretKey");
    console.log(payload);
    context.payload = payload as any;
  } catch (err) {
    console.log(err);
    throw new Error("Not authenticated");
  }
  return next();
  
};