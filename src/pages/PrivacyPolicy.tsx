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
              className="h-16 md:h-20 w-auto cursor-pointer hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          {/* Introduction */}
          <section className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              At Grassroots Harvest ("GRH," "we," "us," or "our"), we are committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website and purchase our products.
            </p>
          </section>

          {/* Information Collection */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
                <p className="leading-relaxed">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Make a purchase or place an order</li>
                  <li>Create an account</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact customer service</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="mt-2">
                  This may include: name, email address, mailing address, phone number, payment information, 
                  and date of birth (for age verification).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Automatically Collected Information</h3>
                <p className="leading-relaxed">
                  When you visit our website, we automatically collect certain information about your device, 
                  including IP address, browser type, operating system, referring URLs, and browsing behavior.
                </p>
              </div>
            </div>
          </section>

          {/* Data Usage */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <div className="text-gray-700">
              <p className="leading-relaxed mb-2">We use the information we collect to:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and account</li>
                <li>Verify your age (as required by law for kratom products)</li>
                <li>Send promotional materials and marketing communications (with your consent)</li>
                <li>Improve our website and customer experience</li>
                <li>Detect and prevent fraud or abuse</li>
                <li>Comply with legal obligations</li>
                <li>Analyze website usage and trends</li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cookies and Tracking Technologies</h2>
            <div className="text-gray-700 space-y-3">
              <p className="leading-relaxed">
                We use cookies, web beacons, and similar tracking technologies to collect information about your 
                browsing activities. Cookies are small data files stored on your device.
              </p>
              <div>
                <h3 className="font-semibold mb-1">Types of Cookies We Use:</h3>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
              </div>
              <p className="leading-relaxed">
                You can control cookies through your browser settings, but disabling cookies may affect 
                website functionality.
              </p>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
            <div className="text-gray-700 space-y-3">
              <p className="leading-relaxed">
                We may share your information with trusted third-party service providers who assist us in 
                operating our website and conducting our business, including:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Payment processors (to process transactions securely)</li>
                <li>Shipping and fulfillment partners</li>
                <li>Email service providers</li>
                <li>Analytics providers (e.g., Google Analytics)</li>
                <li>Marketing and advertising platforms</li>
                <li>Customer service platforms</li>
              </ul>
              <p className="leading-relaxed mt-3">
                These third parties are contractually obligated to protect your information and use it only 
                for the specific purposes we authorize. We do not sell your personal information to third parties.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <div className="text-gray-700 space-y-3">
              <p className="leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>SSL encryption for data transmission</li>
                <li>Secure payment processing systems</li>
                <li>Regular security audits and monitoring</li>
                <li>Access controls and authentication protocols</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="leading-relaxed mt-3">
                However, no method of transmission over the internet or electronic storage is 100% secure. 
                While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* User Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
            <div className="text-gray-700 space-y-3">
              <p className="leading-relaxed">You have the following rights regarding your personal information:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Object:</strong> Object to certain processing of your information</li>
              </ul>
              <p className="leading-relaxed mt-3">
                To exercise these rights, please contact us using the information provided below. We will respond 
                to your request within a reasonable timeframe and as required by applicable law.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in 
              this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. 
              When information is no longer needed, we will securely delete or anonymize it.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our products and services are intended for adults aged 18 and older. We do not knowingly collect 
              personal information from individuals under 18. If we become aware that we have collected information 
              from someone under 18, we will promptly delete such information.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal 
              requirements. We will notify you of any material changes by posting the updated policy on our website 
              with a new "Last Updated" date. Your continued use of our website after changes are posted constitutes 
              acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
            <div className="text-gray-700 space-y-2">
              <p className="leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-semibold mb-2">Grassroots Harvest</p>
                <p>Email: <a href="mailto:privacy@grhkratom.com" className="text-[#3a4a3d] hover:underline">privacy@grhkratom.com</a></p>
                <p>Website: <a href="https://grhkratom.com" target="_blank" rel="noopener noreferrer" className="text-[#3a4a3d] hover:underline">grhkratom.com</a></p>
              </div>
            </div>
          </section>

          {/* State-Specific Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. State-Specific Privacy Rights</h2>
            <div className="text-gray-700 space-y-3">
              <div>
                <h3 className="font-semibold mb-2">California Residents (CCPA/CPRA)</h3>
                <p className="leading-relaxed">
                  California residents have additional rights under the California Consumer Privacy Act, including 
                  the right to know what personal information is collected, to delete personal information, and to 
                  opt-out of the sale of personal information (we do not sell personal information).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Other States</h3>
                <p className="leading-relaxed">
                  Residents of other states with comprehensive privacy laws (including Virginia, Colorado, Connecticut, 
                  and Utah) may have similar rights. Please contact us to exercise your rights under applicable state laws.
                </p>
              </div>
            </div>
          </section>

          {/* Back to Home Button */}
          <div className="pt-8 border-t border-gray-200">
            <Link to="/">
              <Button
                size="lg"
                className="bg-[#3a4a3d] hover:bg-[#2d3a30] text-white px-8 py-6 text-base font-bold rounded-sm transition-all duration-300 hover:scale-105"
              >
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
              className="text-gray-900 hover:text-gray-700 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <a
              href="https://grhkratom.com/shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 font-medium transition-colors duration-200"
            >
              Shop
            </a>
            <Link
              to="/privacy-policy"
              className="text-gray-900 hover:text-gray-700 font-medium transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-gray-800 text-sm">
            © {new Date().getFullYear()} Grassroots Harvest. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;