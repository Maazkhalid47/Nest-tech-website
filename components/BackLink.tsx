import Link from "next/link";

export default function BackLink({ href = "/" }: { href?: string }) {
  return (
    <Link
      className="group mb-12 inline-flex cursor-pointer items-center gap-2 text-xs text-gray-500 no-underline transition-colors duration-200 hover:text-white"
      href={href}
    >
      <svg
        className="transition-transform duration-200 group-hover:-translate-x-[3px]"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M10 3L5 8L10 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      Back
    </Link>
  );
}
