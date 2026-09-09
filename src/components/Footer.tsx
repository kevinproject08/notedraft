import { Link } from "react-router-dom";
import notedraftLogo from "@/assets/notedraft-logo.png";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <img src={notedraftLogo} alt="NoteDraft logo" className="h-5 w-5" />
              <span className="font-semibold">NoteDraft</span>
            </div>
            <p className="prose-measure text-sm text-muted-foreground">
              Turn recordings of piano and string instruments into editable MIDI.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-semibold">Product</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/learn-more" className="hover:text-foreground">
                  How it works
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-foreground">
                  Open workspace
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-semibold">Resources</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/guide" className="hover:text-foreground">
                  Guide
                </Link>
              </li>
              <li>
                <Link to="/metrics" className="hover:text-foreground">
                  Metrics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-semibold">Connect</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-foreground">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© 2026 NoteDraft. All rights reserved.</p>
          <Link to="/terms" className="hover:text-foreground">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
