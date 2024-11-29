import Image from 'next/image';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="md:block bg-white py-2  w-full shadow-[1px_1px_3px_#dddddd]">
            <section className="flex items-center justify-between gap-4 max-w-[1550px] mx-auto px-4 md:px-5 ">
                <div className="flex items-center">
                    <a href="/" aria-label="Homepage">
                        <Image
                            src="./images/logo.svg"
                            width={130}
                            height={45} 
                            alt="Logo"
                            className="object-contain sm:w-[100px] sm:h-[45px] md:w-[170px] md:h-[50px]"
                        />
                    </a>
                </div>
                <div className="flex items-center lg:w-[500px] sm:w-[200px] md:hidden lg:flex border border-gray-300 rounded-md px-2 md:px-4 py-2">
                    <FaSearch className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search Stocks, Index, ETFs..."
                        className="w-full  focus:outline-none text-sm md:text-base"
                    />
                </div>

                <div className="lg:flex justify-end gap-3 items-center">
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#4399eb] hover:text-white bg-white hover:bg-[#4399eb] py-1.5 px-6 border border-[#4399eb] rounded-lg text-md font-medium"
                    >
                        Login
                    </a>
                    <a
                        href="#"
                        className="hidden md:none lg:block text-white hover:text-[#4399eb] bg-[#4399eb] hover:bg-white py-1.5 px-6 border border-[#4399eb] rounded-lg text-md font-medium"
                    >
                        Open Account
                    </a>
                </div>
            </section>
        </header>
    );
};

export default Header;
