import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-green-950 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - Created by <Link href="https://www.linkedin.com/in/humayra1/">Bushra</Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
