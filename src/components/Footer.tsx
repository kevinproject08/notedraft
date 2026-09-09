import { Link } from "react-router-dom";
import notedraftLogo from "@/assets/notedraft-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={notedraftLogo} alt="NoteDraft logo" className="h-6 w-6" />
              <span className="font-bold">NoteDraft</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional audio-to-MIDI conversion powered by AI
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/#how-it-works" className="hover:text-foreground">How It Works</Link></li>
              <li><Link to="/features" className="hover:text-foreground">Features</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/guide" className="hover:text-foreground">Complete Guide</Link></li>
              <li><Link to="/#testimonials" className="hover:text-foreground">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 NoteDraft. All rights reserved.</p>
          <Link to="/terms" className="hover:text-foreground">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
