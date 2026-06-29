"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { LoginFormValues, loginSchema } from "@/lib/validation";
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { login } from "@/store/slices/authSlice";

export default function LoginForm() {
    const router = useRouter();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginFormValues) => {
        dispatch(
            login({
                email: data.email,
                password: data.password,
            })
        );

        router.push("/home");
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-sm space-y-4"
        >
            <h1 className="text-4xl font-bold">Sign In</h1>
            <p>New user? <span className="text-blue-500 cursor-pointer">Create an account</span></p>
            <input
                type="email"
                placeholder="Username or email"
                {...register("email")}
                className="w-full border p-3"
            />

            {errors.email && (
                <p className="text-red-500 text-sm">
                    {errors.email.message}
                </p>
            )}

            <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="w-full border p-3"
            />

            {errors.password && (
                <p className="text-red-500 text-sm">
                    {errors.password.message}
                </p>
            )}

            <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label>Keep me signed in</label>
            </div>

            <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3"
            >
                Sign In
            </button>

            <div className="mt-5 flex justify-center items-center gap-2 w-full">
                <div className="w-[30%] h-1 bg-gray-300"></div><p className="text-xs font-semibold">Or Sign In With</p><div className="w-[30%] h-1 bg-gray-300"></div>
            </div>
            <div className="flex justify-center items-center gap-3">
                <div className="rounded-full border-2 border-gray-300 p-2">
                    <FaGoogle />
                </div>

                <div className="rounded-full border-2 border-gray-300 p-2">
                    <FaFacebook />
                </div>
                <div className="rounded-full border-2 border-gray-300 p-2">
                    <FaLinkedin />
                </div>
                <div className="rounded-full border-2 border-gray-300 p-2">
                    <FaTwitter />
                </div>
            </div>
        </form>
    );
}