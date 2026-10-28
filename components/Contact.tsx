import Reveal from "@/components/Reveal";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg- px-12 py-30 max-[600px]:px-6 max-[600px]:py-20">
            <Reveal>
                <p className="mb-5 uppercase text-gray-400">
                    Let&apos;s Work Together
                </p>
            </Reveal>

            <Reveal delay={1}>
                <h2 className="text-6xl text-black">
                    Building something ambitious?
                    <br />
                    <span className="font-bold">
                        We should talk.
                    </span>
                </h2>
            </Reveal>

            <div className="grid grid-cols-2 items-center gap-30 max-[900px]:grid-cols-1 max-[900px]:gap-12">
                <Reveal delay={2} className="min-w-0">
                    <p className="mt- max-w-105 text-xl text-gray-400">
                        We partner with founders and businesses who are building ambitious
                        digital products. Whether you&apos;re validating a new idea,
                        redesigning an experience, or scaling an existing platform — we&apos;re
                        interested.
                    </p>

                    <div className="mt-6">
                        <Link
                            href="#work"
                            // radius
                            className="inline-flex items-center justify-center py-4 px-6 rounded border border-gray-300 text-md font-semibold text-gray-700!"
                        >
                            View Case Studies
                        </Link>
                    </div>

                    <div className="mt-14 gap-7">

                        <div className="pb-7 text-gray-600">
                            <label className="">
                                Email
                            </label>
                            <p className="pt-1">
                                <a href="mailto:info@nesttechnologies.io"
                                    className="hover:text-black hover:font-semibold">
                                    info@nesttechnologies.io</a>
                            </p>

                        </div>

                        <div className="pb-7 text-gray-600">
                            <label>
                                Location
                            </label>
                            <p className="pt-1">
                                Karachi, Pakistan
                            </span>
                        </div>

                        <div className="text-gray-600">
                            <label>
                                Business Hours
                            </label>
                            <p className="pt-1">
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
