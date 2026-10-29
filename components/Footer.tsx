import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-(--border) bg-(--bg2) px-6 pt-12 pb-8 min-[901px]:px-12 min-[901px]:pt-16 min-[901px]:pb-10">

      <div className="mb-10 flex flex-col sm:flex-row sm:gap-x-10 md:gap-x-20 lg:gap-x-40">
        <div>
          <p
            className="text-gray-600 font-semibold text-[16px]"
          >
            Nest Technologies
          </p>

          <p className="mt-4 sm:w-72 text-gray-500 text-[15px] ">
            A product engineering studio helping startups and businesses
            build scalable digital products.
          </p>
        </div>

        <div className="my-7 sm:my-0 text-center">
          <h4 className=" mb-3 sm:mb-5 font-mono text-sm text-gray-400 uppercase">
            Navigation
          </h4>

          <ul className="flex list-none text-gray-500 flex-col sm:gap-3">
            <li>
              <Link
                href="/#work"
                className="hover:text-black hover:font-semibold transition-colors duration-200"
              >
                Work
              </Link>
            </li>

            <li>
              <Link
                href="/#contact"
                className="hover:text-black hover:font-semibold transition-colors duration-200 "
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="my-7 sm:my-0 text-center">
          <h4 className="mb-3 sm:mb-5 font-mono text-sm text-gray-400 uppercase">
            Connect
          </h4>

          <ul className="flex list-none flex-col text-gray-500 sm:gap-3">
            <li>
              <a
                href="https://github.com/Maazkhalid47/Nest-tech-website"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black hover:font-semibold transition-colors duration-200 "
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://linkedin.com/in/marskhalid"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black hover:font-semibold transition-colors duration-200 "
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="my-7 sm:my-0 text-center">
          <h4 className="mb-3 sm:mb-5 font-mono text-sm text-gray-400 uppercase">
            Legal
          </h4>

          <ul className="flex list-none flex-col text-gray-500 sm:gap-3">
            <li>
              <Link href="/privacy" className="transition-colors hover:text-black hover:font-semibold duration-200">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-black hover:font-semibold duration-200 ">
                Terms
              </Link>
            </li>
          </ul>

        </div>

      </div>

      <div className="flex flex-col items-center gap-4 border-t pt-8 text-center min-[901px]:flex-row min-[901px]:justify-between min-[901px]:text-left">
        <p className="text-gray-500">
          © 2026 Nest Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;



