import { Link } from "react-router";

export default function Login() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* ✅ Login Section */}
            <div className="flex flex-1 w-full">
                {/* Left Side Image */}
                <div className="w-1/2 hidden md:block">
                    <img
                        className="h-full w-full object-cover"
                        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png"
                        alt="login-banner"
                    />
                </div>

                {/* Right Side Login Form */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6">
                    <form className="md:w-96 w-80 flex flex-col items-center justify-center">
                        <h2 className="text-4xl text-gray-900 font-semibold">Sign in</h2>
                        <p className="text-sm text-gray-500 mt-3">
                            Welcome back! Please sign in to continue
                        </p>

                        {/* Google Button */}
                        <button
                            type="button"
                            className="w-full mt-8 bg-gray-100 flex items-center justify-center h-12 rounded-full hover:bg-gray-200 transition"
                        >
                            <img
                                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
                                alt="googleLogo"
                            />
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-4 w-full my-5">
                            <div className="w-full h-px bg-gray-300"></div>
                            <p className="text-sm text-gray-500">or sign in with email</p>
                            <div className="w-full h-px bg-gray-300"></div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center w-full border border-gray-300 h-12 rounded-full pl-6 gap-2">
                            <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                                    fill="#6B7280"
                                />
                            </svg>
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm w-full h-full"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="flex items-center mt-6 w-full border border-gray-300 h-12 rounded-full pl-6 gap-2">
                            <svg width="13" height="17" viewBox="0 0 13 17" fill="none">
                                <path
                                    d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                                    fill="#6B7280"
                                />
                            </svg>
                            <input
                                type="password"
                                placeholder="Password"
                                className="bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm w-full h-full"
                                required
                            />
                        </div>

                        {/* Options */}
                        <div className="w-full flex items-center justify-between mt-8 text-gray-600">
                            <div className="flex items-center gap-2">
                                <input className="h-4 w-4" type="checkbox" id="remember" />
                                <label className="text-sm" htmlFor="remember">Remember me</label>
                            </div>
                            <a className="text-sm underline hover:text-indigo-500" href="#">
                                Forgot password?
                            </a>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:bg-indigo-600 transition"
                        >
                            Login
                        </button>

                        {/* Sign Up Link */}
                        <p className="text-gray-500 text-sm mt-4">
                            Don’t have an account?{" "}
                            <Link to="/signup" className="text-indigo-500 hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
