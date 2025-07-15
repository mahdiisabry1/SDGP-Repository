"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { login } from "@/actions/login";
import { LoginSchema } from "@/schemas";

const LoginPage = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    await login(data);
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-3xl">Login to your account</h1>
        <p>
          Don&apos;t have an account?{" "}
          <a
            href="/auth/register"
            className="text-blue-600 hover:text-blue-900"
          >
            Register
          </a>
        </p>
      </div>
      <div className="w-full max-w-md mt-4">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center"
        >
          <input
            type="text"
            placeholder="Username"
            className="mb-4 p-2 border border-gray-300  w-full"
            {...form.register("username")}
          />
          {form.formState.errors.username && (
            <p className="text-red-500 text-sm mb-1">
              {form.formState.errors.username.message}
            </p>
          )}
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-2 border border-gray-300  w-full"
            {...form.register("password")}
          />
          {form.formState.errors.password && (
            <p className="text-red-500 text-sm mb-2">
              {form.formState.errors.password.message}
            </p>
          )}
          <div className="flex w-full items-center mt-2">
            <button
              type="submit"
              className="px-4 py-2 rounded border-3 hover:bg-gray-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

