import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageSquare, MapPin, Clock, Mail, Check, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroTent from "@/assets/hero-tent.jpg";
import catTents from "@/assets/cat-tents.jpg";
import catTables from "@/assets/cat-tables.jpg";
import catLinens from "@/assets/cat-linens.jpg";
import catDancefloor from "@/assets/cat-dancefloor.jpg";
import catLighting from "@/assets/cat-lighting.jpg";
import catTableware from "@/assets/cat-tableware.jpg";
import restroomLuxury from "@/assets/restroom-luxury.jpg";
import restroomStandard from "@/assets/restroom-standard.jpg";

const PHONE_DISPLAY = "+1 (903) 701-7419";
const PHONE_TEL = "+19037017419";
const SMS_BODY = "Hi Abbey Party Rents — I'd like a quote.";
const ADDRESS = "732 S 6th St, Las Vegas, NV 89101";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abbey Party Rents — Las Vegas Event & Porta Potty Rentals" },
      {
        name: "description",
        content:
          "Tents, tables, chairs, linens, lighting and portable restrooms for weddings, festivals, and job sites across the Las Vegas Valley. Call or text for a same-day quote.",
      },
      { property: "og:title", content: "Abbey Party Rents — Las Vegas Event & Porta Potty Rentals" },
      {
        property: "og:description",
        content:
          "Party rentals and portable restrooms across Las Vegas. Tents, tables, chairs, lighting, restroom trailers and porta potties — delivered and set up.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Abbey Party Rents",
          telephone: PHONE_TEL,
          address: {
            "@type": "PostalAddress",
            streetAddress: "732 S 6th St",
            addressLocality: "Las Vegas",
            addressRegion: "NV",
            postalCode: "89101",
            addressCountry: "US",
          },
          areaServed: ["Las Vegas", "Henderson", "Summerlin", "Paradise", "Spring Valley", "North Las Vegas"],
          url: "/",
        }),
      },
    ],
  }),
  component: Index,
});

type BtnVariant = "primary" | "ghost" | "gold" | "ghost-light";

function btnClasses(variant: BtnVariant) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5";
  const styles: Record<BtnVariant, string> = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-soft)]",
    gold: "bg-[var(--champagne)] text-primary hover:brightness-105 shadow-[var(--shadow-soft)]",
    ghost: "border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground",
    "ghost-light": "border border-white/40 text-[var(--cream)] hover:bg-white hover:text-primary",
  };
  return `${base} ${styles[variant]}`;
}

function CallBtn({ variant = "primary", className = "" }: { variant?: BtnVariant; className?: string }) {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      className={`${btnClasses(variant)} ${className}`}
      aria-label={`Call ${PHONE_DISPLAY}`}
    >
      <Phone className="h-4 w-4" />
      Call {PHONE_DISPLAY}
    </a>
  );
}

function TextBtn({ variant = "ghost", className = "" }: { variant?: BtnVariant; className?: string }) {
  const href = `sms:${PHONE_TEL}?&body=${encodeURIComponent(SMS_BODY)}`;
  return (
    <a href={href} className={`${btnClasses(variant)} ${className}`} aria-label={`Text ${PHONE_DISPLAY}`}>
      <MessageSquare className="h-4 w-4" />
      Text us
    </a>
  );
}

const rentals = [
  { img: catTents, title: "Tents & Canopies", desc: "Pole, frame, and sailcloth tents from intimate to grand-scale." },
  { img: catTables, title: "Tables & Chairs", desc: "Chiavari, farmhouse, banquet, cocktail — seating for every layout." },
  { img: catLinens, title: "Linens & Drapery", desc: "Champagne, ivory, black, and custom hues with full pipe-and-drape." },
  { img: catDancefloor, title: "Dance Floors & Staging", desc: "Black-and-white, oak, and LED floors with modular stage decks." },
  { img: catLighting, title: "Lighting & Decor", desc: "Bistro strings, uplighting, chandeliers, and ceremony arches." },
  { img: catTableware, title: "Tableware & Catering Gear", desc: "Gold-rim china, glassware, flatware, chafers, and bar equipment." },
];

const restrooms = [
  "Standard porta potties — clean, ADA-compliant servicing",
  "Deluxe flushing units with sinks",
  "Wheelchair-accessible (ADA) units",
  "Luxury restroom trailers (2 / 4 / 8 stall)",
  "Hand-wash and hand-sanitizer stations",
];

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "Two to four weeks is ideal for weddings and large events. We regularly turn around smaller orders and porta potties same-week — call or text and we'll tell you straight up what's available.",
  },
  {
    q: "Do you deliver and set up?",
    a: "Yes. Our crew delivers, sets up, and breaks down everything. Delivery fees depend on distance from our 732 S 6th St yard and the size of the order.",
  },
  {
    q: "What's required to reserve?",
    a: "A signed agreement and a deposit hold your date. The balance is due before delivery.",
  },
  {
    q: "How often are porta potties serviced?",
    a: "Standard service is weekly for long-term placements. Event units are serviced before and after your event. High-traffic festivals get scheduled mid-event service.",
  },
  {
    q: "Do you handle permits?",
    a: "We'll guide you. Most backyard events don't need one; large tents and street placements often do. We'll tell you exactly what your city requires.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b border-border">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-xl font-semibold tracking-tight">Abbey</span>
            <span className="font-display text-xl text-[var(--champagne)]">Party Rents</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#rentals" className="text-sm text-muted-foreground hover:text-foreground">Rentals</a>
            <a href="#restrooms" className="text-sm text-muted-foreground hover:text-foreground">Restrooms</a>
            <a href="#area" className="text-sm text-muted-foreground hover:text-foreground">Service Area</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <TextBtn variant="ghost" className="hidden sm:inline-flex" />
            <CallBtn variant="primary" />
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate overflow-hidden">
        <img
          src={heroTent}
          alt="Elegant tented wedding reception at dusk in Las Vegas"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.18_0.03_265/0.55)_0%,oklch(0.18_0.03_265/0.9)_100%)]" />
        <div className="mx-auto max-w-7xl px-4 pb-28 pt-24 sm:px-6 sm:pb-36 sm:pt-32 lg:pt-48">
          <div className="max-w-3xl text-[var(--cream)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--champagne)]/40 bg-[var(--champagne)]/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--champagne)]">
              Serving the Las Vegas Valley
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Las Vegas party &amp; event rentals,
              <span className="italic text-[var(--champagne)]"> done right.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Tents, tables, chairs, linens, lighting, and clean portable restrooms — delivered, set up,
              and broken down by a crew that actually shows up on time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallBtn variant="gold" />
              <TextBtn variant="ghost-light" />
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/75">
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[var(--champagne)]" /> Licensed &amp; insured</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[var(--champagne)]" /> Same-week availability</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[var(--champagne)]" /> Full-service delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
          {[
            ["3,500+", "events delivered"],
            ["48 hr", "typical turnaround"],
            ["5★", "average review"],
            ["100%", "owner-operated crew"],
          ].map(([big, small]) => (
            <div key={small} className="text-center md:text-left">
              <div className="font-display text-3xl text-primary">{big}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{small}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Rentals */}
      <section id="rentals" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--champagne)]">The catalog</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Every piece your event needs, under one roof.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <CallBtn variant="primary" />
            <TextBtn variant="ghost" />
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rentals.map((r) => (
            <article key={r.title} className="group overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)] ring-1 ring-border">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={r.img}
                  alt={r.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-[var(--champagne)]"
                >
                  Quote this <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Restrooms */}
      <section id="restrooms" className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--champagne)]">Porta potty rentals</span>
            <h2 className="font-display text-4xl sm:text-5xl">Clean, on time, and never the eyesore at your event.</h2>
            <p className="text-white/80">
              From a single standard unit for a backyard birthday to luxury restroom trailers for a 400-guest
              wedding — and weekly-serviced units for job sites across the Valley.
            </p>
            <ul className="space-y-3">
              {restrooms.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-white/90">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--champagne)]" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <CallBtn variant="gold" />
              <TextBtn variant="ghost-light" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={restroomLuxury}
              alt="Luxury portable restroom trailer at an outdoor wedding"
              loading="lazy"
              width={1024}
              height={1024}
              className="col-span-2 h-72 w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
            />
            <img
              src={restroomStandard}
              alt="Standard portable restrooms lined up for an outdoor event"
              loading="lazy"
              width={1200}
              height={900}
              className="col-span-2 h-56 w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--champagne)]">How it works</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Three steps. No surprises.</h2>
        </div>
        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            ["01", "Call or text", "Tell us the date, guest count, and venue. We'll send a clear, itemized quote — usually same day."],
            ["02", "Lock the date", "Signed agreement + deposit holds your gear. We coordinate delivery windows with your venue."],
            ["03", "We handle the rest", "Our crew sets up, services, and breaks down. You enjoy the event."],
          ].map(([n, t, d]) => (
            <li key={n} className="relative rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <div className="font-display text-5xl text-[var(--champagne)]">{n}</div>
              <h3 className="mt-4 font-display text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Service area + map */}
      <section id="area" className="bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--champagne)]">Service area</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Built for the Las Vegas Valley.</h2>
            <p className="mt-5 text-muted-foreground">
              Based at <strong className="text-foreground">{ADDRESS}</strong>, we deliver across Las Vegas,
              Henderson, Summerlin, Paradise, Spring Valley, North Las Vegas, and the surrounding desert
              communities. Out-of-area? Call — we travel for the right event.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
              {["Las Vegas", "Henderson", "Summerlin", "Paradise", "Spring Valley", "North Las Vegas"].map((c) => (
                <div key={c} className="flex items-center gap-2 text-foreground">
                  <MapPin className="h-4 w-4 text-[var(--champagne)]" /> {c}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallBtn variant="primary" />
              <TextBtn variant="ghost" />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
            <iframe
              title="Abbey Party Rents location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4773.125663851318!2d-115.14495819999999!3d36.1609409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c3b6efe6e037%3A0xe477d8b02cec85e2!2sAbbey%20Party%20Rents!5e1!3m2!1sen!2sus!4v1780577896761!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--champagne)]">What clients say</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Crews trust us. Brides recommend us.</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            ["Showed up early, set up faster than promised, and the tent held through a desert wind night. Worth every dollar.", "— Mara K., wedding planner"],
            ["We use Abbey on every job site in Clark County. Units are always clean and the servicing is on schedule.", "— Diego R., GC"],
            ["The luxury restroom trailer made our outdoor reception feel like a real venue. Guests kept commenting on it.", "— Jenna & Tom"],
          ].map(([quote, name]) => (
            <figure key={name} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <blockquote className="font-display text-lg leading-relaxed text-foreground">&ldquo;{quote}&rdquo;</blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">{name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--champagne)]">FAQ</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Good questions, straight answers.</h2>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact band */}
      <section id="contact" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--champagne)]">Get a quote</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                Tap to call. Tap to text. We&apos;ll handle the rest.
              </h2>
              <p className="mt-5 max-w-xl text-white/80">
                Tell us the date and headcount. You&apos;ll have an itemized quote — usually within the hour.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CallBtn variant="gold" />
                <TextBtn variant="ghost-light" />
              </div>
            </div>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-[var(--champagne)]" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60">Phone &amp; text</div>
                  <a href={`tel:${PHONE_TEL}`} className="text-lg font-semibold hover:text-[var(--champagne)]">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-[var(--champagne)]" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60">Yard</div>
                  <div>{ADDRESS}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-[var(--champagne)]" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60">Hours</div>
                  <div>Mon–Sat · 7am–6pm</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-[var(--champagne)]" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60">Fastest way</div>
                  <a
                    href={`sms:${PHONE_TEL}?&body=${encodeURIComponent(SMS_BODY)}`}
                    className="hover:text-[var(--champagne)]"
                  >
                    Text us — usually replied within minutes
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center">
          <div>
            <div className="font-display text-lg">
              Abbey <span className="text-[var(--champagne)]">Party Rents</span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{ADDRESS} · {PHONE_DISPLAY}</div>
          </div>
          <div className="flex flex-wrap gap-3">
            <CallBtn variant="primary" />
            <TextBtn variant="ghost" />
          </div>
        </div>
        <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Abbey Party Rents. All rights reserved.
        </div>
      </footer>

      {/* Mobile sticky call/text bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.25)] backdrop-blur md:hidden">
        <a
          href={`tel:${PHONE_TEL}`}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <a
          href={`sms:${PHONE_TEL}?&body=${encodeURIComponent(SMS_BODY)}`}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--champagne)] px-4 py-3 text-sm font-semibold text-primary"
        >
          <MessageSquare className="h-4 w-4" /> Text
        </a>
      </div>
      <div className="h-20 md:hidden" />
    </div>
  );
}
