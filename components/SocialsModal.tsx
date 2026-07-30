"use client";
import { useState, useEffect } from "react";
import { INSTAGRAM_LINK, FACEBOOK_LINK, WECHAT_INFO_LINK } from "@/lib/socials";
import { FaFacebookF, FaInstagram, FaWeixin } from "react-icons/fa";

export default function SocialsModal() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      // small delay so transition classes apply
      const t = setTimeout(() => setVisible(true), 10);
      return () => clearTimeout(t);
    } else {
      setVisible(false);
    }
  }, [open]);

  function closeWithAnimation() {
    setVisible(false);
    setTimeout(() => setOpen(false), 300); // match duration
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full text-left p-7 md:p-8 bg-white/90 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 transform"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <h4 className="font-semibold mb-2 text-lg text-green-800">Check our socials</h4>
        <p className="text-base text-gray-700">Follow us for updates and photos.</p>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto">
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
            onClick={closeWithAnimation}
          />

          <div
            role="dialog"
            aria-modal="true"
            className={`relative z-10 w-[90%] max-w-md bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 ${visible ? "translate-y-0 opacity-100 scale-100" : "-translate-y-4 opacity-0 scale-95"}`}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">Find us on</h3>
              <button
                onClick={closeWithAnimation}
                aria-label="Close"
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded hover:bg-gray-100"
              >
                <FaFacebookF className="text-2xl text-blue-600" aria-hidden />
                <span>Facebook</span>
              </a>

              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded hover:bg-gray-100"
              >
                <FaInstagram className="text-2xl text-pink-500" aria-hidden />
                <span>Instagram</span>
              </a>

              <div className="block p-3 rounded bg-gray-50">
                <div className="flex items-center gap-3">
                  <FaWeixin className="text-2xl text-green-600" aria-hidden />
                  <div className="font-medium">WeChat</div>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  WeChat typically uses QR codes rather than direct profile links. Open WeChat and scan our club QR to follow.
                </div>
                <a
                  href={WECHAT_INFO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm text-green-600"
                >
                  WeChat website
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
