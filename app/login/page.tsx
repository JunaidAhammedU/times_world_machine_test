import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex relative">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-10 bg-[#efefe3]">
        <LoginForm />
      </div>

      <div className="hidden lg:flex w-1/2 items-center justify-center bg-[#fffff6]">
        <div className="w-full h-full flex flex-col items-center justify-center gap-5">
          <div className="w-full h-full"></div>
          <div className="w-full h-full">
            {/* <img src="/image.png" className="absolute object-cover right-10 w-2xl" alt="" /> */}
          </div>
        </div>
      </div>
    </main>
  );
}