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
            className="w-full max-w-sm space-y-4 text-black"
        >
            <h1 className="text-4xl font-bold text-center">Sign In</h1>

            <div>
                <div
                    className="w-full p-3 rounded-full bg-white text-xs focus:outline-none focus:ring-1 focus:ring-green-900 focus:border-transparent"
                >
                    <div>
                        <FaGoogle /> <span>Sign in with Google</span>
                    </div>
                </div>
                <div>
                    <FaGoogle /> <span>Sign in with Google</span>
                </div>
            </div>

            <div className="mt-5 flex justify-center items-center gap-2 w-full">
                <div className="w-[30%] h-[1px] bg-gray-300"></div><p className="text-xs font-semibold"><span className="text-md font-thin">OR</span></p><div className="w-[30%] h-[1px] bg-gray-300"></div>
            </div>

            <label htmlFor="" className="text-xs m-2"> Email *</label>
            <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="w-full p-3 rounded-full bg-white text-xs focus:outline-none focus:ring-1 focus:ring-green-900 focus:border-transparent"
            />

            {errors.email && (
                <p className="text-red-500 text-xs">
                    {errors.email.message}
                </p>
            )}

            <div className="flex justify-between p-0 m-0">
                <label htmlFor="" className="text-xs m-2"> Password *</label>
                <a href="" className="text-xs text-green-900 m-2">Forgot Password?</a>
            </div>
            <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="w-full p-3 rounded-full bg-white text-xs focus:outline-none focus:ring-1 focus:ring-green-900 focus:border-transparent"
            />

            {errors.password && (
                <p className="text-red-500 text-xs">
                    {errors.password.message}
                </p>
            )}

            <button
                type="submit"
                className="w-full bg-green-900 text-white py-3 rounded-full"
            >
                Sign In
            </button>
            <div>
                <p className="text-xs text-center">Don&apos;t have an account? <span className="text-xs text-green-900">Sign Up</span></p>
            </div>
        </form>
    );
}