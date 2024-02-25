import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="p-20 bg-primary text-white font-bold items-center">
      <div className="container flex flex-col gap-6 items-center md:items-start md:flex-row justify-between ">
        <h1 className="text-5xl">rebisa</h1>

        <div className="socials flex gap-10 items-center ">
          <Link href="#" className="social">
            <FaFacebook size={24} />
          </Link>
          <Link href="#" className="social">
            <FaInstagram size={24} />
          </Link>
          <Link href="#" className="social">
            <FaTwitter size={24} />
          </Link>
          <Link href="#" className="social">
            <FaLinkedin size={24} />
          </Link>
        </div>

        
      </div>
    </footer>
  );
}
