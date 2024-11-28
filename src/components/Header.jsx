import Image from 'next/image'


const Header = () => {
    return (
        <section className="hidden md:block bg-white py-2 fixed top-0 z-50 w-full shadow-[1px_1px_3px_#dddddd]">
            <section
                className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-3 max-w-[1550px] mx-auto px-4 md:px-5 lg:px-8 sm:px-4">
                <main className="flex items-center">
                    <div className="flex"><a href="/">
                        <figure>
                            <Image
                                src=""
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </figure>
                    </a></div>
                </main>
                <main className="hidden md:block md:col-span-3 lg:col-span-1">
                    <section>
                        <main>
                            <div>
                                <div className="MuiAutocomplete-root css-16k0jd8">
                                    <div
                                        className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root !w-full css-p65e6u">
                                        <div
                                            className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedStart MuiAutocomplete-inputRoot css-2xhzvc">
                                            <div
                                                className="MuiInputAdornment-root MuiInputAdornment-positionStart MuiInputAdornment-outlined MuiInputAdornment-sizeMedium css-1a6giau">
                                                <span className="notranslate">​</span>
                                                {/* <img
                                                    src="/_next/static/media/searchlogo.b2315330.svg" alt="searchlogo"> */}

                                            </div>
                                            {/* <input aria-invalid="false" autocomplete="off" id=":R2c6:"
                                                placeholder="Search Stocks, Index, ETFs..." type="text"
                                                className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiAutocomplete-input MuiAutocomplete-inputFocused css-1ixds2g"
                                                aria-autocomplete="list" aria-expanded="false" autocapitalize="none"
                                                spellcheck="false" role="combobox" value=""> */}

                                            <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline css-igs3ac">
                                                <legend className="css-ihdtdm"><span className="notranslate">​</span></legend>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </section>
                </main>
                <main className="hidden lg:flex justify-end gap-3 xl:gap-3 items-center"><a
                    href="https://login.dhan.co/?location=DH_WEB" target="_blank" rel="noreferrer"
                    className="text-[#EF9309] hover:text-[#fff] bg-[#fff] py-1.5 hover:bg-[#EF9309] px-6 border border-[#EF9309] rounded-lg text-sm xl:text-base flex items-center font-CircularBook">Login</a><a
                        href="/open-demat-account/"
                        className="text-[#fff] hover:bg-[#fff] bg-[#EF9309] hover:text-[#EF9309] py-1.5 xl:px-6 px-4 border border-[#EF9309] rounded-lg text-sm xl:text-base flex items-center font-CircularBook">Open
                        Account</a></main>
                <main className="lg:hidden">
                    <div className="flex justify-end"><a href="https://dhan.go.link/gaXqf" target="_blank" rel="noreferrer"
                        className="text-[#EF9309] hover:text-[#fff] bg-[#fff] py-2.5 hover:bg-[#EF9309] px-3 text-center flex justify-center border w-24 border-[#EF9309] rounded-lg text-sm xl:text-base items-center font-CircularBook whitespace-nowrap">Use
                        App</a></div>
                </main>
            </section>
        </section>
    )
}

export default Header;