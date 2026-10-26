import Link from "next/link";

function Hero() {
    return (
        <section id="hero" className="relative">

            {/* Background grid */}
            <div className="pointer-events-none absolute inset-0 opacity-30 in-[.light]:opacity-[0.55] bg-[linear-gradient(rgb(100_116_139/0.3)_1px,transparent_1px),linear-gradient(90deg,rgb(100_116_139/0.3)_1px,transparent_1px)] bg-size-[80px_80px]" />
            <div />
            <div>
                {/* Hero content */}
                <div className="flex flex-col items-center">

                    <div className="animate-[fadeUp_0.8s_0.2s_forwards] py-14 -space-y-6 ">
                        <span className="inline-block w-1.5 h-1.5 rounded-full ml-2.5 bg-black"></span>
                        <p className="border border-gray-400 rounded-full w-60 text-center">
                            Product Engineering Studio</p>
                    </div>

                    <div className="animate-[fadeUp_0.8s_0.2s_forwards] text-6xl text-center w-200">
                        <p className="font-">Building products with purpose,<span className="font-bold ">engineered to last.</span></p>
                    </div>

                    <div className=" my-10 animate-[fadeUp_0.9s_0.65s_forwards] space-x-5">

                        <Link href="#work" className="transition-all duration-200  inline-flex! items-center! justify-center! rounded-full w-40 bg-black h-14 text-white! hover:scale-95">
                             View Our Work →
                        </Link>
                        <Link href="#service" className="transition-all duration-200 inline-flex! items-center! justify-center! rounded-full w-36 h-12 border border-gray-300 font-semibold hover:scale-105 hover:bg-gray-200">
                            Our Service
                        </Link>

                    </div>
                </div>
            </div>

            {/* Scroll indicator
            <div className="animate-[fadeUp_0.8s_1s_forwards] mt-5">
                <div className="" />
                <span className=" animate-[blink_2s_infinite]" />
                <span className="pl-20">Scroll to explore ----</span>
            </div> */}
        </section>
    );
}

export default Hero;