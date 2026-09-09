import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Acceptance of terms",
    body: (
      <>
        By accessing or using NoteDraft ("the Service"), you agree to be bound by these Terms of Service. If you do not
        agree to these terms, please do not use the Service.
      </>
    ),
  },
  {
    title: "2. Description of service",
    body: (
      <>
        NoteDraft converts audio, video, and MIDI files containing musical performances into MIDI output files for
        piano, violin, viola, cello, and double bass.
      </>
    ),
  },
  {
    title: "4. Intellectual property",
    body: (
      <>
        You retain all rights to the audio or video content you upload and to the MIDI files generated from it.
        NoteDraft does not claim ownership of your uploaded files or generated outputs. The Service itself, including its
        technology, branding, and interface, remains the property of NoteDraft.
      </>
    ),
  },
  {
    title: "5. Privacy and data",
    body: (
      <>
        Uploaded files are processed for the sole purpose of providing the transcription service. We do not sell or share
        your uploaded content with third parties. Files may be stored temporarily during processing and are deleted after
        a reasonable period.
      </>
    ),
  },
  {
    title: "6. Limitation of liability",
    body: (
      <>
        The Service is provided "as is" without warranties of any kind. NoteDraft is not liable for any damages arising
        from your use of the Service, including inaccuracies in transcription output, data loss, or service
        interruptions.
      </>
    ),
  },
  {
    title: "7. Service modifications",
    body: (
      <>
        NoteDraft may modify, suspend, or discontinue the Service at any time without prior notice. We may also update
        these Terms of Service, and continued use of the Service after changes constitutes acceptance of the new terms.
      </>
    ),
  },
  {
    title: "8. Termination",
    body: (
      <>
        We may terminate or suspend access to the Service for users who violate these Terms of Service or behave in ways
        harmful to other users or to the Service.
      </>
    ),
  },
];

const Terms = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader context="Terms" />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-14 sm:px-6">
        <h1 className="text-3xl font-semibold sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: January 2026</p>

        <div className="mt-10 space-y-8 border-t border-border pt-8">
          <section>
            <h2 className="text-lg font-semibold">{sections[0].title}</h2>
            <p className="prose-measure mt-2 leading-relaxed text-muted-foreground">{sections[0].body}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">{sections[1].title}</h2>
            <p className="prose-measure mt-2 leading-relaxed text-muted-foreground">{sections[1].body}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">3. User responsibilities</h2>
            <p className="prose-measure mt-2 leading-relaxed text-muted-foreground">You agree to:</p>
            <ul className="prose-measure mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground">
              <li>Only upload content that you own or have the right to use</li>
              <li>Not upload copyrighted material without proper authorization</li>
              <li>Not use the Service for any unlawful purpose</li>
              <li>Not attempt to reverse engineer or exploit the Service</li>
              <li>Not upload malicious files or content</li>
            </ul>
          </section>

          {sections.slice(2).map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <p className="prose-measure mt-2 leading-relaxed text-muted-foreground">{section.body}</p>
            </section>
          ))}

          <section>
            <h2 className="text-lg font-semibold">9. Contact</h2>
            <p className="prose-measure mt-2 leading-relaxed text-muted-foreground">
              If you have questions about these Terms of Service, please reach us through the{" "}
              <Link to="/contact" className="text-primary hover:underline">
                Contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
