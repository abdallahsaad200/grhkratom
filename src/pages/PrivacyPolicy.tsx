import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f1e8]">
      {/* Header */}
      <header className="bg-[#3a4a3d] py-6 px-8">
        <div className="container mx-auto flex justify-center">
          <Link to="/">
            <img
              src="https://cdn.ezsite.ai/AutoDev/20814/bd355d5e-d53b-4600-b83c-32b6a1c6a4b0.webp"
              alt="GRH Grassroots Harvest"
              className="h-16 md:h-20 w-auto cursor-pointer hover:opacity-90 transition-opacity" />

          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl bg-white">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 uppercase">
            Privacy Policy
          </h1>

          {/* Who we are */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who we are</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website address is: <a href="https://grhkratom.com" className="text-[#3a4a3d] hover:underline">https://grhkratom.com</a>.
            </p>
          </section>

          {/* Comments */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comments</h2>
            <div className="text-gray-700 space-y-3">
              <p className="leading-relaxed">
                When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection.
              </p>
              <p className="leading-relaxed">
                An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#3a4a3d] hover:underline">https://automattic.com/privacy/</a>. After approval of your comment, your profile picture is visible to the public in the context of your comment.
              </p>
            </div>
          </section>

          {/* Media */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Media</h2>
            <p className="text-gray-700 leading-relaxed">
              If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
            <div className="text-gray-700 space-y-3">
              <p className="leading-relaxed">
                If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
              </p>
              <p className="leading-relaxed">
                If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
              </p>
              <p className="leading-relaxed">
                When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
              </p>
              <p className="leading-relaxed">
                If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
              </p>
            </div>
          </section>

          {/* Embedded content from other websites */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Embedded content from other websites</h2>
            <div className="text-gray-700 space-y-3">
              <p className="leading-relaxed">
                Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
              </p>
              <p className="leading-relaxed">
                These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
              </p>
            </div>
          </section>

          {/* Who we share your data with */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who we share your data with</h2>
            <p className="text-gray-700 leading-relaxed">
              If you request a password reset, your IP address will be included in the reset email.
            </p>
          </section>

          {/* How long we retain your data */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How long we retain your data</h2>
            <div className="text-gray-700 space-y-3">
              <p className="leading-relaxed">
                If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
              </p>
              <p className="leading-relaxed">
                For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
              </p>
            </div>
          </section>

          {/* What rights you have over your data */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What rights you have over your data</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
            </p>
          </section>

          {/* Where your data is sent */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Where your data is sent</h2>
            <p className="text-gray-700 leading-relaxed">
              Visitor comments may be checked through an automated spam detection service.
            </p>
          </section>

          {/* Back to Home Button */}
          <div className="pt-8 border-t border-gray-200">
            <Link to="/">
              <Button
                size="lg"
                className="bg-[#3a4a3d] hover:bg-[#2d3a30] text-white px-8 py-6 text-base font-bold rounded-sm transition-all duration-300 hover:scale-105">

                ← Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#8bc34a] py-6 mt-12">
        <div className="container mx-auto text-center space-y-2">
          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              to="/"
              className="text-gray-900 hover:text-gray-700 font-medium transition-colors duration-200">

              Home
            </Link>
            <a
              href="https://grhkratom.com/shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 font-medium transition-colors duration-200">

              Shop
            </a>
            <Link
              to="/privacy-policy"
              className="text-gray-900 hover:text-gray-700 font-medium transition-colors duration-200">

              Privacy Policy
            </Link>
          </div>
          <p className="text-gray-800 text-sm">
            © {new Date().getFullYear()} Grassroots Harvest. All rights reserved.
          </p>
        </div>
      </footer>
    </div>);

};

export default PrivacyPolicy;