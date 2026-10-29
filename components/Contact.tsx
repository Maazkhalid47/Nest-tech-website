import Reveal from "@/components/Reveal";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#fdfdfd] px-12 py-30 max-[600px]:px-6 max-[600px]:py-20">
            {/* <Reveal>
                <p className="mb-5 text-xs uppercase text-gray-400">
                    Let&apos;s Work Together
                </p>
            </Reveal> */}

            <Reveal delay={1}>
                <h2 className="text-3xl sm:text-5xl md:text-6xl text-black">
                    Building something ambitious? 
                    <br />
                    <span className="font-semibold">
                    We should talk.
                    </span>
                </h2>
            </Reveal>

            <div className="grid grid-cols-2 items-center gap-30 max-[900px]:grid-cols-1 max-[900px]:gap-12">
                <Reveal delay={2} className="min-w-0">
                    <p className="mt-6 max-w-105 text-lg sm:text-xl text-gray-400">
                        We partner with founders and businesses who are building ambitious
                        digital products. Whether you&apos;re validating a new idea,
                        redesigning an experience, or scaling an existing platform — we&apos;re
                        interested.
                    </p>

                    <div className="mt-6 flex gap-4">
                        <Link
                            href="#work"
                            className="inline-flex items-center justify-center gap-2 p-2 rounded-xl border text-md font-semibold "
                        >
                            View Case Studies
                        </Link>
                    </div>

                    <div className="mt-14 flex flex-col gap-7 text-gray-500">
                        <div className="flex flex-col">
                            <label className="">
                                Email
                            </label>
                            <a
                                href="mailto:info@nesttechnologies.io"
                                className="text-gray-600 hover:font-semibold hover:text-black"
                            >info@nesttechnologies.io</a>
                        </div>

                        <div className="flex flex-col">
                            <label className="">
                                Location
                            </label>
                            <span className="text-gray-600">
                                Karachi, Pakistan
                            </span>
                        </div>

                        <div className="flex flex-col">
                            <label className="">
                                Business Hours
                            </label>
                            <span className="text-gray-600">
                                Monday–Friday, 9:00 AM – 6:00 PM PKT
                            </span>
                        </div>

                    </div>
                </Reveal>

                <Reveal delay={3} className="flex min-w-0 flex-col gap-8">
                    <ContactForm />
                </Reveal>
            </div>
        </section>
    );
}

export default Contact;
