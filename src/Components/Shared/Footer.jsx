import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/15 via-base-200 to-secondary/15 text-base-content mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Project Info */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold text-purple-600">BookCourier</h2>
          <p className="text-sm leading-relaxed max-w-md">
            BookCourier is a smart library-to-home book delivery platform that
            allows users to borrow and receive books from nearby libraries
            without visiting physically.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Fast delivery. Trusted libraries. Seamless reading experience.
          </p>
        </div>

        {/* Quick Links*/}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Access</h3>
          <div className="flex gap-4">
            <div className="flex items-center gap-5 pt-3 text-xl">
              <a
                href="#"
                title="Facebook"
                className="hover:text-primary transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                title="LinkedIn"
                className="hover:text-primary transition"
              >
                <FaLinkedinIn />
              </a>
              <a href="#" title="X" className="hover:text-primary transition">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Contact + Social */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Dhaka, Bangladesh</li>
            <li>📧 support@bookcourier.com</li>
            <li>📞 +880 1XXX-XXXXXX</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-300 py-4 text-center text-sm bg-base-200/70">
        © {new Date().getFullYear()} BookCourier — Connecting Readers with
        Libraries
      </div>
    </footer>
  );
};

export default Footer;
