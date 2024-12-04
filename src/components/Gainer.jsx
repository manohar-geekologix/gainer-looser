'use client';
import React, { useState } from "react";
import Link from "next/link";
import DynamicTable from "./DynamicTable";

const tabs = [
    { label: "Top Gainers", href: "/" },
    { label: "Top Losers", href: "/" },
    { label: "52 Week High", href: "/" },
    { label: "52 Week Low", href: "/" },
    { label: "Most Active By Value", href: "/" },
    { label: "Most Active By Volume", href: "/" },
];

export const Gainer = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].label);

    return (
        <section>
            <div className="container mx-auto px-4 md:px-5 lg:px-0">
                {/* Page Header */}
                <div className="pt-10">
                    <div className="flex justify-between gap-2 items-center">
                        <h1 className="font-CircularMedium text-[18px] lg:text-2xl text-[#363636]">
                            {activeTab}
                        </h1>
                        {/* Mobile Live Market Button */}
                        <div className="block lg:hidden">
                            <Link href="/stock-market-live/" className="float-right relative">
                                <div className="text-xs lg:text-sm border px-3 py-1 border-[#f1f1f1] rounded-[6px] bg-white text-[#9c9c9c] whitespace-nowrap font-CircularBook">
                                    Live Market
                                </div>
                            </Link>
                        </div>
                    </div>
                    <p className="text-[#aaaaaa] font-CircularRegular text-xs pt-2 pb-4">
                        Last Updated on 04 Dec 2024 at 15:58
                    </p>
                    <p className="text-xs md:text-sm font-CircularBook text-[#817E7E] pt-1 border border-[#f1f1f1] bg-white rounded-lg md:px-3 md:py-2 p-2">
                        Here you find a list of all stocks with futures and options (FnO) that have registered the highest gains today.
                        This list is essential for traders and investors looking to identify stocks that are outperforming the market in
                        real-time. It provides insights into market sentiment and highlights sectors or companies experiencing
                        significant upward movements, which can be crucial for making timely investment decisions.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="pt-10 flex flex-nowrap justify-between items-center">
                    <nav className="flex flex-nowrap overflow-x-auto noscrollbar-x gap-3" id="scrollable-container">
                        {tabs.map((tab, index) => (
                            <Link
                                key={index}
                                href={tab.href}
                                onClick={() => setActiveTab(tab.label)}
                                aria-current={activeTab === tab.label ? "page" : undefined}
                                className={`whitespace-nowrap py-1 px-2 rounded text-xs lg:text-sm font-CircularBook cursor-pointer ${
                                    activeTab === tab.label ? "text-black" : "text-[#9c9c9c]"
                                }`}
                            >
                                {tab.label}
                            </Link>
                        ))}
                    </nav>
                    {/* Desktop Live Market Button */}
                    <div className="hidden lg:block">
                        <Link href="/stock-market-live/" className="float-right relative">
                            <div className="text-xs lg:text-sm border px-3 py-1 border-[#f1f1f1] rounded-[6px] bg-white text-[#9c9c9c] whitespace-nowrap font-CircularBook">
                                Live Market
                            </div>
                        </Link>
                    </div>
                </div>
                <DynamicTable/>
            </div>
        </section>
    );
};
