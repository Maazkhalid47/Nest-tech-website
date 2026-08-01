import Link from "next/link";

export default function BackLink({ href = "/" }: { href?: string }) {
  return (
    <Link className="page-back" href={href}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
