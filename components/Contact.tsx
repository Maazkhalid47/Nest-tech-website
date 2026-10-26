import Reveal from "@/components/Reveal";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#0a0a0a] px-12 py-30 max-[600px]:px-6 max-[600px]:py-20 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_60%_80%_at_20%_50%,rgba(16,185,129,0.05)_0%,transparent_60%)]"
        >
            <Reveal>
                <p className="mb-5 text-xs uppercase tracking-[0.18em] text-gray-400">
                    Let&apos;s Work Together
                </p>
            </Reveal>

            <Reveal delay={1}>
                <h2 className="text-[clamp(32px,4vw,56px)] font-light leading-[1.1] tracking-[-0.02em] text-white">
                    Building something
                    <br />
                    <span className="text-gray-400">
                        ambitious? We should talk.
                    </span>
                </h2>
            </Reveal>

            <div className="mt-18 grid grid-cols-2 items-center gap-30 max-[900px]:grid-cols-1 max-[900px]:gap-12">
                <Reveal delay={2} className="min-w-0">
                    <p className="mt-6 max-w-105 text-[15px] font-light leading-[1.7] text-gray-400">
                        We partner with founders and businesses who are building ambitious
                        digital products. Whether you&apos;re validating a new idea,
                        redesigning an experience, or scaling an existing platform — we&apos;re
                        interested.
                    </p>

                    <div className="mt-12 flex gap-4">
                        <Link
                            href="#work"
                            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-transparent px-6 py-3 text-[15px] font-semibold tracking-[0.01em] text-gray-300 transition-all duration-200 hover:border-gray-400 hover:text-white"
                        >
                            View Case Studies
                        </Link>
                    </div>

                    <div className="mt-14 flex flex-col gap-7">
                        <div className="flex flex-col gap-1.5">
                            <label className="font-mono text-xs uppercase tracking-[0.12em] text-gray-400">
                                Email
                            </label>
                            <a
                                href="mailto:info@nesttechnologies.io"
                                className="text-[15px] text-gray-400 transition-colors duration-200 hover:text-white"
                            >info@nesttechnologies.io</a>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="font-mono text-xs uppercase tracking-[0.12em] text-gray-400">
                                Location
                            </label>
                            <span className="text-[15px] text-gray-400">
                                Karachi, Pakistan
                            </span>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="font-mono text-xs uppercase tracking-[0.12em] text-gray-400">
                                Business Hours
                            </label>
                            <span className="text-[15px] text-gray-400">
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
