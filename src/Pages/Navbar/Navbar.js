import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import { signOut } from "firebase/auth";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [user] = useAuthState(auth);
    return (
        <div>
            <nav className="shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-5 flex justify-between md:block">
                        <div className="flex justify-between items-center">
                            <div className="flex-shrink-0">
                                <Link to="/">
                                    <h1 className="text-4xl font-semibold"><span className="text-secondary">D</span>octor <span className="text-secondary">P</span>ortal</h1>
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        to="home"
                                        className="text-black hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        to="about"
                                        className="text-black hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                                    >
                                        About
                                    </Link>

                                    <Link
                                        to="appointment"
                                        className="text-black hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                                    >
                                        Appointment
                                    </Link>

                                    {
                                        user ? <button onClick={() => signOut(auth)} className="text-black hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-lg font-medium">Sign out</button>
                                            :
                                            <div>
                                                <Link
                                                    to="login"
                                                    className="text-black hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                                                >
                                                    Login
                                                </Link>

                                                <Link
                                                    to="signup"
                                                    className="text-black hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                                                >
                                                    Signup
                                                </Link>
                                            </div>
                                    }


                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-secondary inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link
                                    to="home"
                                    className="text-black hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </Link>

                                <Link
                                    to="about"
                                    className="text-black hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    About
                                </Link>

                                <Link
                                    to="appointment"
                                    className="text-black hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Appointment
                                </Link>

                                <Link
                                    to="login"
                                    className="text-black hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="signup"
                                    className="text-black hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Signup
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>

        </div>
    );
}

export default Navbar;
