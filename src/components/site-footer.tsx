import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 bg-forest-deep text-primary-foreground">
      <div className="container-x grid gap-12 py-20 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-display text-2xl tracking-wide">AYINDE HOMES</div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            Premier real estate solutions bridging the gap between the Nigerian diaspora and their
            property aspirations back home. Excellence in every foundation.
          </p>
          <div className="mt-6 text-[11px] uppercase tracking-[0.3em] text-gold">
            Lagos · London · New York
          </div>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
            Office Locations
          </div>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
            {/* <li>Lekki Phase 1, Admiralty Way, Lagos</li>
            <li>Bodija Estate, Ibadan</li>
            <li>25 Canada Square, Canary Wharf, London</li> */}
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
            Quick Links
          </div>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
            <li><Link to="/services" className="hover:text-gold">Legal & Title Services</Link></li>
            <li><Link to="/projects" className="hover:text-gold">Developments</Link></li>
            <li><Link to="/build-for-me" className="hover:text-gold">Build-For-Me</Link></li>
            <li><Link to="/resources" className="hover:text-gold">Resources</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
            Diaspora Support
          </div>
          <div className="mt-5 space-y-3 text-sm text-primary-foreground/75">
            <p>Dedicated line</p>
            <p className="font-display text-xl text-primary-foreground">+234 (0) 812 345 6789</p>
            <p>support@ayindehomes.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-primary-foreground/55 sm:flex-row sm:items-center">
          <span>© 2024 Ayinde Homes. All rights reserved. Heritage · Excellence · Trust.</span>
          <span className="flex gap-6">
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Cookies</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
