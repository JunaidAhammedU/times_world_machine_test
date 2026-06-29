import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex">
\      <div className="w-full lg:w-1/2 flex items-center justify-center p-10">
        <LoginForm />
      </div>

      <div className="hidden lg:flex w-1/2 items-center justify-center bg-gray-50">
        <img
          src="/image.png"
          alt="Illustration"
          className="w-80"
        />
      </div>
    </main>
  );
}