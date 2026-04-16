import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Names of Allah",
  description: "Privacy policy for the Names of Allah app and website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1117] to-black text-white/90">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-serif font-bold mb-2">Privacy Policy</h1>
        <p className="text-white/50 text-sm mb-10">Last updated: April 15, 2026</p>

        <div className="space-y-8 text-[15px] leading-relaxed text-white/80">
          <section>
            <h2 className="text-xl font-serif font-semibold text-white mb-3">Overview</h2>
            <p>
              Names of Allah (&ldquo;the App&rdquo;) is an educational application designed to help users learn and
              reflect upon the 99 Beautiful Names of Allah. We are committed to protecting your privacy and being
              transparent about how the App works.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold text-white mb-3">Data We Collect</h2>
            <p className="font-semibold text-white mb-2">We do not collect any personal data.</p>
            <p>The App does not:</p>
            <ul className="list-disc list-inside mt-2 space-y-1.5 text-white/70">
              <li>Require account creation or login</li>
              <li>Collect names, email addresses, or contact information</li>
              <li>Track your location</li>
              <li>Use analytics or tracking services</li>
              <li>Share any data with third parties</li>
              <li>Use cookies for tracking purposes</li>
              <li>Contain advertisements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold text-white mb-3">Data Stored on Your Device</h2>
            <p>The App stores the following data locally on your device only:</p>
            <ul className="list-disc list-inside mt-2 space-y-1.5 text-white/70">
              <li>
                <strong className="text-white/90">Reflection notes:</strong> Personal reflections you write are saved
                on your device using local storage. They are never transmitted anywhere.
              </li>
              <li>
                <strong className="text-white/90">App preferences:</strong> Your theme, font size, notification
                settings, and onboarding status are stored locally.
              </li>
              <li>
                <strong className="text-white/90">Quiz progress:</strong> Your quiz scores and progress are saved
                locally on your device.
              </li>
            </ul>
            <p className="mt-3">
              This data remains entirely on your device and is never uploaded, synced, or shared. Uninstalling the
              App will remove all locally stored data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold text-white mb-3">Notifications</h2>
            <p>
              The App may request permission to send local notifications for daily name reminders. These notifications
              are generated entirely on your device — no data is sent to any server. You can enable or disable
              notifications at any time in the App&apos;s settings or your device settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold text-white mb-3">Third-Party Services</h2>
            <p>
              The App does not integrate with any third-party analytics, advertising, or tracking services. The App
              does not make network requests to collect user data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold text-white mb-3">Children&apos;s Privacy</h2>
            <p>
              The App is suitable for users of all ages. We do not knowingly collect any personal information from
              anyone, including children under 13. Since the App collects no personal data, it is compliant with
              COPPA (Children&apos;s Online Privacy Protection Act) and similar regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold text-white mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page with
              an updated &ldquo;Last updated&rdquo; date. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold text-white mb-3">Contact</h2>
            <p>
              If you have any questions about this Privacy Policy or the App, please contact us at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:mdasadhashmi.dev@gmail.com"
                className="text-[#C8A951] hover:underline"
              >
                mdasadhashmi.dev@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/30 text-xs">
          Names of Allah &mdash; An educational app for learning the Beautiful Names of Allah
        </div>
      </div>
    </div>
  );
}
