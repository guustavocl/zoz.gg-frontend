export default function Footer() {
  return (
    <footer className="bottom-0 text-base relative md:fixed left-0 p-2 w-full shadow md:flex md:items-center md:justify-between md:p-4 bg-secondary">
      <span className="text-md text-gray-400 sm:text-center">
        © 2022
        <span className="px-2 hover:text-violet-600">ZOZ.GG</span>
        <span>
          Developed by
          <a
            href="gustavo"
            className="px-1 hover:underline hover:text-violet-600"
          >
            @gustavo
          </a>
        </span>
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-md text-gray-400 sm:mt-0">
        <li>
          <a
            href="/about"
            className="mr-4 hover:underline hover:text-violet-600"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/terms"
            className="mr-4 hover:underline hover:text-violet-600"
          >
            Terms of service
          </a>
        </li>
        <li>
          <a
            href="/privacy"
            className="mr-4 hover:underline hover:text-violet-600"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="mr-4 hover:underline hover:text-violet-600"
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
