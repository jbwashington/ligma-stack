'use server'

import { signIn } from "@/auth"
import { userAuthSchema } from "@/lib/validations/auth";
import * as z from "zod";

export const signInGithub = async () => {
    const session = await signIn('github', {
    })
    return session
}

export const signInEmail = async ({
  email,
  callbackUrl,
}: {
  email: string;
  callbackUrl: string;
}) => {
  const signInResult = await signIn("email", {
    email: email,
    redirect: false,
    callbackUrl: callbackUrl,
  });
  return signInResult;
};