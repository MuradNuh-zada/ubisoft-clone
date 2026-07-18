import {
  FaFacebookF,
  FaPlaystation,
  FaXbox,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex justify-center items-center py-10">
      <div className="w-full max-w-md bg-white shadow-sm">
        <div className="bg-[#2B3340] h-32 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold tracking-wide">
            UBISOFT
          </h1>
        </div>

        <div className="p-8">
          <div className="flex justify-between mb-10">
            <button className="text-4 font-bold uppercase border-b-2 border-transparent hover:border-black pb-1">
              Login
            </button>

            <button className="text-4 uppercase text-gray-900">
              Create an Account
            </button>
          </div>

          <div className="relative mb-8">
            <FaEnvelope className="absolute left-0 top-1 text-gray-500 text-sm" />

            <input
              type="email"
              placeholder="Email address"
              className="w-full border-b border-gray-500 pl-7 pb-3 outline-none placeholder:text-gray-700"
            />
          </div>
          <div className="relative mb-8">
            <FaLock className="absolute left-0 top-1 text-gray-500 text-sm" />

            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-gray-500 pl-7 pb-3 outline-none placeholder:text-gray-700"
            />
          </div>
          <label className="flex items-center gap-3 mb-10 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 accent-blue-600"
            />
            <span className="text-lg">Keep me logged</span>
          </label>

          <button className="w-full bg-[#0A74DA] hover:bg-[#0868c5] text-white font-bold py-4 uppercase transition">
            Log In
          </button>
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gray-400" />

            <span className="text-gray-700 whitespace-nowrap">
              Or log in with:
            </span>

            <div className="flex-1 h-px bg-gray-400" />
          </div>

          <div className="flex justify-center gap-10 mb-10">
            <button className="w-14 h-14 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-3xl">
              <FaFacebookF />
            </button>

            <button className="w-14 h-14 rounded-full bg-[#00439C] text-white flex items-center justify-center text-3xl">
              <FaPlaystation />
            </button>

            <button className="w-14 h-14 rounded-full bg-[#107C10] text-white flex items-center justify-center text-3xl">
              <FaXbox />
            </button>
          </div>

          <div className="text-center space-y-8">
            <button className="text-[#0066CC] font-bold uppercase hover:underline">
              Can't Log In?
            </button>

            <button className="block mx-auto text-[#0066CC] font-semibold hover:underline">
              Access Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
