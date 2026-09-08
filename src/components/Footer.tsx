import { Link } from "react-router-dom";
import notedraftLogo from "@/assets/notedraft-logo.png";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border bg-secondary/35 py-12">
      <div className="container px-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <img src={notedraftLogo} alt="NoteDraft logo" className="h-6 w-6" />
              <span className="font-heading font-semibold">NoteDraft</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Audio-to-MIDI transcription made for musicians.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/#how-it-works" className="hover:text-foreground">How It Works</Link></li>
              <li><Link to="/features" className="hover:text-foreground">Features</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/guide" className="hover:text-foreground">Complete Guide</Link></li>
              <li><Link to="/#testimonials" className="hover:text-foreground">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold mb-4">Connect</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 NoteDraft. All rights reserved.</p>
          <Link to="/terms" className="hover:text-foreground">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
