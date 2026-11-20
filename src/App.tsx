import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import { motion } from "framer-motion";

import {
  ArrowRight,
  BookOpen,
  Feather,
  Mic,
  Users,
  ShieldCheck,
  Menu,
  X,
  LayoutDashboard,
  FileText,
  ShoppingBag,
  Wallet,
  Bell,
  Settings,
  CalendarDays,
  ClipboardList,
  Clock,
  LogOut,
  Search,
  Globe2,
  Sparkles,
  Mail,
  Phone,
  Instagram,
  MessageCircle,
  BookMarked,
} from "lucide-react";

import "./App.css";

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Books", "#books"],
  ["Authors", "#authors"],
  ["Our Team", "#team"],
  ["Events", "#events"],
  ["Services", "#services"],
  ["Packages", "#publishing-packages"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-symbol">T</span>
        <span className="brand-name">
          TWIN INK
          <small>PUBLICATIONS</small>
        </span>
      </Link>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {navigation.map(([name, href]) => (
          <a
            key={name}
            href={href}
            onClick={() => setMenuOpen(false)}
          >
            {name}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <Link to="/author/login" className="nav-login">
          Author Login
        </Link>

        <Link to="/team/login" className="nav-login">
          Team Login
        </Link>

        <Link to="/author/register" className="nav-register">
          Join Us <ArrowRight size={14} />
        </Link>
      </div>

      <button
        className="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function BookMockup() {
  return (
    <div className="book-stage">
      <div className="book-glow" />

      <div className="book-3d">
        <div className="book-cover">
          <span className="cover-top">TWIN INK PUBLICATIONS</span>

          <div className="cover-art">
            <div className="cover-circle" />
            <Feather size={56} strokeWidth={0.7} />
          </div>

          <div className="cover-title">
            STORIES
            <br />
            THAT
            <br />
            <em>REMAIN.</em>
          </div>

          <span className="cover-bottom">A WORLD OF WORDS</span>
        </div>

        <div className="book-pages" />
        <div className="book-spine" />
      </div>

      <div className="floating-note note-one">
        <BookOpen size={16} />
        <span>Stories worth sharing</span>
      </div>

      <div className="floating-note note-two">
        <Sparkles size={16} />
        <span>Ideas into books</span>
      </div>
    </div>
  );
}

function SectionLabel({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="section-label">
      <span>
        {number} / {label}
      </span>
      <span className="label-line" />
    </div>
  );
}


const publishingPackages = [
  { name: "STARTER", price: "₹199", tagline: "Start your publishing journey at just ₹199.", features: ["Basic Book Publishing", "ISBN", "Website + Amazon + KDP, Google Play Books", "E-Book + Paperback Publishing", "Up to 50 Page", "75% Royalty", "Amazon/Online Distribution Support", "Digital Publishing Certificate"], note: "Not Included: Cover Design, Formatting, Proofreading, Editing & Marketing" },
  { name: "BASIC", price: "₹999", tagline: "Affordable publishing with a more complete professional setup.", features: ["Up to 100 Pages", "1 Author Copies", "ISBN", "Paperback Publishing", "100% Royalty", "Book Description", "Online Distribution", "Audiobook Eligibility", "Publishing Certificate"] },
  { name: "BASIC PLUS", price: "₹1,199", tagline: "More manuscript space with enhanced publication support.", features: ["2 Author Copies", "Up to 150 Pages", "Book Presentation Content", "1 Promotional Creative", "ISBN", "Paperback Publication", "100% Royalty", "Enhanced Metadata", "Author Bio/Profile", "Online Distribution", "Audiobook Eligibility", "Publishing Certificate", "Publishing Consultation"] },
  { name: "STANDARD", price: "₹2,499", tagline: "A professional publishing foundation for independent authors.", features: ["Author Visibility", "3 Author Copies", "Up to 200 Pages", "Social Media Book Post", "2 Promotional Creatives", "ISBN", "Paperback Publishing", "100% Royalty", "Metadata", "Author Profile", "Online Distribution", "Publishing Consultation", "Certificate & Letter"] },
  { name: "STANDARD PLUS", price: "₹2,999", tagline: "Enhanced publishing presentation before entering professional packages.", features: ["Introductory Book Promotion", "4 Promotional Creatives", "Social Media Promotion", "Up to 250 Pages", "3 Author Copies", "ISBN", "Paperback Publication", "100% Royalty", "Metadata", "Book Positioning Support", "Online Distribution", "Author Consultation", "Publishing Certificate & Letter"] },
  { name: "PREMIUM", price: "₹5,000", tagline: "Complete professional book production at an accessible price.", features: ["Media & Visibility", "1 News Feature", "5 Promotional Creatives", "Up to 300 Pages", "4 Author Copies", "ISBN", "Professional Book Cover", "Paperback Publication", "100% Royalty", "Metadata", "Online Distribution", "Author Profile", "Audiobook Support", "Publishing Certificate", "Priority Support"] },
  { name: "AUTHOR LAUNCH", price: "₹10,000", tagline: "Your book gets a proper launch—not just publication.", features: ["Everything in ₹5,000, plus:", "Complete Publishing + ISBN", "5 Author Copies", "No Page Limit", "1 News Feature", "Author Interview", "100% Author Royalty", "Promotional Creatives", "Author Branding Starter Kit", "Author Introduction Creative", "Book Launch Poster", "Book Teaser Concept", "Launch Announcement", "Basic Social Media Launch Strategy", "Audiobook Support", "Priority Coordination"] },
  { name: "AUTHOR PRO", price: "₹15,000", tagline: "Build your identity as an author alongside your book.", features: ["Everything in ₹10,000, plus:", "7 Author Copies", "Complete Author Branding", "100% Author Royalty", "Professional Author Introduction", "Book Branding", "Multiple Promotional Creatives", "Social Media Content Plan", "Author Profile Optimization", "Book Promotion Strategy", "Extended Launch Support", "Audiobook Support"] },
  { name: "AUTHOR GROWTH & MARKETING EXECUTIVE LAUNCH", price: "₹20,000", tagline: "The first complete package combining editing, publishing and author growth.", features: ["Professional Publishing + Editing + Author Growth", "Complete Publishing", "Professional Cover", "Formatting 50 page", "Proofreading 50 page", "Professional Editing 50 page", "ISBN", "Paperback Publication", "Metadata Optimization", "Author Profile", "100% Author Royalty", "Audiobook Support", "Pre-Launch Campaign", "Launch Campaign", "Post-Launch Promotion", "Promotional Creatives", "Author Introduction Campaign", "Dedicated Coordination", "10 Author Copies"] },
  { name: "PLATINUM AUTHOR", price: "₹30,000", tagline: "Your book gets a complete digital marketing strategy—not just publication.", features: ["Everything in Executive Author, plus:", "Complete Digital Marketing Strategy", "Pre-Launch Campaign", "Major Launch Campaign", "Post-Launch Campaign", "Book Teaser Concept", "Reel/Video Concepts", "Promotional Content", "Social Media Campaign Planning", "Audience Positioning Strategy", "Extended Book Promotion", "15 Author Copies", "100% Author Royalty", "100 page, Formatting, Proofreading, Professional Editing"] },
  { name: "ROYAL AUTHOR", price: "₹40,000", tagline: "Designed to build you as an author brand, not just promote one book.", features: ["Everything in Royal Author, plus:", "Personal Author Brand Strategy", "Professional Author Positioning", "Premium Author Bio", "Author Media Kit", "Author Branding Creatives", "Complete Book Branding", "Author Introduction Campaign", "Author Visibility Strategy", "Long-Term Author Growth Roadmap", "Extended Promotional Campaign", "20 Author Copies", "100% Author Royalty", "150 page, Formatting, Proofreading, Professional Editing"] },
  { name: "SIGNATURE AUTHOR", price: "₹50,000", tagline: "A complete professional publishing and author-brand experience.", features: ["Everything in Royal Author, plus:", "Audiobook Support", "Complete Author Branding", "Premium Book Branding", "Major Launch Strategy", "Digital Marketing", "Social Media Promotion", "Publicity Strategy", "Author Media Kit", "Extended Post-Launch Promotion", "Dedicated Project Coordination", "25 Author Copies", "100% Author Royalty", "200 page, Formatting, Proofreading, Professional Editing"] },
  { name: "INTERNATIONAL AUTHOR", price: "₹60,000", tagline: "Your first step from professional publishing to an international author presence.", features: ["International Publishing Series", "Everything in Signature Author, plus:", "International Publishing Support", "International Distribution Support", "Global Marketplace Listing Support", "International Metadata Optimization", "International Keywords & Categories", "Global Book Positioning", "International Audience Strategy", "Global Author Profile", "30 Author Copies", "100% Author Royalty", "250 page, Formatting, Proofreading, Professional Editing"] },
  { name: "GLOBAL AUTHOR", price: "₹70,000", tagline: "International publishing combined with a dedicated global marketing strategy.", features: ["Everything in International Author, plus:", "International Book Marketing Campaign", "Global Pre-Launch Promotion", "Global Launch Campaign", "International Post-Launch Promotion", "Global Social Media Strategy", "International Promotional Creatives", "Global Author Branding", "International Audience Engagement Strategy", "35 Author Copies", "100% Author Royalty", "300 page, Formatting, Proofreading, Professional Editing"] },
  { name: "GLOBAL LITERARY", price: "₹80,000", tagline: "For authors who want to build an international author identity.", features: ["Everything in Global Literary, plus:", "Premium Author Brand Strategy", "International Literary Positioning", "Professional Author Media Kit", "Author Feature Content", "Book Feature Content", "Global Visibility Campaign", "Advanced Book Marketing Strategy", "Long-Term Visibility Plan", "Premium Promotional Assets", "45 Author Copies", "100% Author Royalty", "350 page Professional Formatting, Proofreading, Professional Editing"] },
  { name: "WORLD AUTHOR", price: "₹90,000", tagline: "Adds a dedicated international publicity and visibility layer.", features: ["Everything in Global Literary, plus:", "International PR Strategy", "Author Publicity Profile", "Book Publicity Content", "Digital Media Outreach Support", "Major Launch Publicity", "Advanced Author Positioning", "Extended International Campaign", "Extended Post-Launch Visibility", "Priority Project Management", "55 Author Copies", "100% Author Royalty"] },
  { name: "SIGNATURE GLOBAL LEGACY", price: "₹1,00,000", tagline: "From manuscript to internationally positioned author brand.", features: ["Everything in previous signature/global tiers", "Complete Publishing", "International Publishing", "ISBN", "Premium Cover Design", "Professional Formatting", "Professional Editing", "Proofreading", "Paperback Publishing", "International Distribution Support", "Global Marketplace Listing Support", "Metadata Optimization", "Audiobook Support", "Complete Author Branding", "Complete Marketing", "Long-Term Author Growth Roadmap", "Dedicated Coordination", "65 Author Copies", "100% Author Royalty"] },
  { name: "GLOBAL LEGACY PLUS", price: "₹1,10,000", tagline: "Adds a professional podcast and media presence to your international author journey.", features: ["Everything in Signature Global Legacy, plus:", "Professional Author Digital Podcast", "Author Journey Interview", "Book-Focused Discussion", "Podcast Recording & Production Support", "Promotional Podcast Clips", "Social Media Podcast Promotion", "Additional Media Creatives", "75 Author Copies", "100% Author Royalty"] },
  { name: "INTERNATIONAL AUTHOR SPOTLIGHT", price: "₹1,20,000", tagline: "A complete international publishing + podcast + author media experience.", features: ["Everything in Global Legacy Plus, plus:", "Dedicated Digital Podcast Episode", "Professional Author Interview", "Detailed Book Discussion", "Multiple Short-Form Clips", "Author Feature Content", "Extended Digital Publicity", "Premium Author Positioning", "Extended Social Campaign", "85 Author Copies", "100% Author Royalty"] },
  { name: "GLOBAL LITERARY ICON", price: "₹1,50,000", tagline: "Adds physical bookstore visibility support to your digital and international presence.", features: ["Everything in International Author Spotlight, plus:", "Bookstore Visibility / Placement Support", "Literary Store Outreach Support", "Premium Book Presentation", "Enhanced PR Campaign", "International Literary Visibility Strategy", "95 Author Copies", "100% Author Royalty"], note: "Bookstore placement remains subject to bookstore policies, selection and availability." },
  { name: "GLOBAL LITERARY ICON PLUS", price: "₹1,60,000", tagline: "A complete international literary, media and bookstore visibility package.", features: ["Everything in Global Literary Icon, plus:", "Enhanced Bookstore Visibility Support", "Professional Podcast", "Multiple Podcast Promotional Clips", "Extended PR Campaign", "Premium Author Branding", "Advanced Book Marketing", "Extended Post-Launch Campaign", "Long-Term Visibility Strategy", "100 Author Copies", "100% Author Royalty"] },
  { name: "INTERNATIONAL AUTHOR LEGACY", price: "₹1,70,000", tagline: "From Manuscript to International Author Legacy.", features: ["International Publishing", "ISBN", "Premium Cover Design", "Professional Interior Formatting", "Professional Editing", "Proofreading", "Paperback Publishing", "International Distribution Support", "Global Marketplace Listing Support", "Metadata & Keyword Optimization", "Audiobook Support", "Complete Author Brand Strategy", "Premium Author Profile & Bio", "Personal Brand Positioning", "Professional Author Media Kit", "Complete Book Branding", "Author Introduction Campaign", "Pre-Launch Campaign", "Major Launch Campaign", "Post-Launch Campaign", "International Digital Marketing", "Social Media Campaign", "Book Teaser", "Reel/Video Concepts", "Premium Promotional Creatives", "International PR Strategy", "Dedicated Professional Author Podcast", "Author Journey Interview", "Book Discussion", "Multiple Short-Form Clips", "Podcast Promotion", "Bookstore Visibility Support", "Bookstore Submission Assistance", "Literary Store Outreach Support", "Premium Book Presentation", "International Audience Strategy", "Global Author Positioning", "Long-Term Author Growth Roadmap", "Dedicated Project Coordination", "120 Author Copies", "100% Author Royalty"] },
];

const mentorshipPackages = [
  { name: "WRITER STARTER", price: "₹499", tagline: "Start Writing Without Confusion", features: ["30-Day Writing Curriculum", "30 Guided Writing Topics", "Daily Writing Prompts", "Daily Writing Tasks", "Basic Writing Resources", "Writing Challenge Community", "Progress Tracking", "Completion Certificate"], bestFor: "Writers who need structure, motivation and a clear starting point." },
  { name: "GUIDED WRITER", price: "₹999", tagline: "You Write. We Guide You.", features: ["Everything in Writer Starter, PLUS:", "Guided Writing Classes", "Book Idea Development", "Genre Selection Guidance", "Target Audience Guidance", "Book Title Guidance", "Core Message Development", "Chapter Planning", "Writing Exercises", "Weekly Progress Review", "Writer's Block Guidance"], bestFor: "Writers who want guidance while developing their book." },
  { name: "AUTHOR CLASS", price: "₹1,499", tagline: "From Idea to Structured Manuscript", features: ["Everything in Guided Writer, PLUS:", "Complete Book Blueprint", "Chapter-Wise Planning", "Story / Non-Fiction Structure", "Character Development Guidance", "World & Setting Guidance", "Writing Flow Guidance", "Dialogue Development", "Descriptive Writing Techniques", "Writing Style Development", "First-Chapter Guidance", "First-Draft Improvement Guidance", "Manuscript Development Support", "Introduction to the Publishing Process"], bestFor: "Writers who already have an idea and want to seriously develop it into a structured book." },
  { name: "AUTHOR PRO", price: "₹1,999", tagline: "From Your First Idea to Your Publishing Roadmap", features: ["Everything from the previous levels, PLUS:", "Personalised Book Blueprint", "Personalised Writing Roadmap", "Individual Mentor Guidance", "Chapter-Wise Feedback", "Manuscript Progress Review", "First-Draft Review", "Structure & Continuity Review", "Writing Improvement Guidance", "Final Manuscript Guidance", "Publishing Roadmap", "Author Branding Basics", "Book Launch Guidance", "Final Author Consultation", "Completion Certificate"], bestFor: "Writers who want personalised guidance from their initial idea toward a publication-ready manuscript." },
];

const additionalServices = [
  "Audiobook — Author's Own Voice: FREE",
  "Professional Voice Artist: ₹20/page",
  "Pocket FM & Spotify: Audiobook preparation/submission support",
  "Editing — Basic: ₹8/page",
  "Editing — Moderate: ₹10/page",
  "Editing — Professional: ₹12/page",
  "Formatting: ₹30/page",
  "Cover Design: ₹350 onwards",
  "Bookstore & Distribution: Additional charges",
  "Additional Promotion: Creatives, reels, campaigns and media services available separately",
];

function PackageCard({ item, index }: { item: typeof publishingPackages[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="package-card">
      <div className="package-card-top">
        <span className="package-index">PACKAGE {String(index + 1).padStart(2, "0")}</span>
        <h3>{item.name}</h3>
        <strong className="package-price">{item.price}</strong>
        <p>{item.tagline}</p>
      </div>
      <button className="package-toggle" type="button" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
        {expanded ? "Hide package details" : "View package details"} <span>{expanded ? "−" : "+"}</span>
      </button>
      {expanded && (
        <div className="package-details">
          <ul>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          {item.note && <p className="package-note">{item.note}</p>}
        </div>
      )}
      <a className="package-enquire" href={`mailto:twininkpublication@gmail.com?subject=${encodeURIComponent(item.name + " Package Enquiry")}`}>
        Enquire About This Package <ArrowRight size={15} />
      </a>
    </article>
  );
}

function PackagesSection() {
  return (
    <section className="packages-section section-padding" id="publishing-packages">
      <SectionLabel number="07" label="PUBLISHING PACKAGES" />
      <div className="section-heading">
        <div><span className="small-heading">CHOOSE YOUR PUBLISHING JOURNEY</span><h2>Find the right <em>package.</em></h2></div>
        <p className="section-description">Explore package inclusions and connect with our team for details.</p>
      </div>
      <div className="packages-grid">
        {publishingPackages.map((item, index) => <PackageCard key={item.name} item={item} index={index} />)}
      </div>
      <div className="mentorship-heading"><span className="small-heading">AUTHOR DEVELOPMENT</span><h2>Author Mentorship <em>Programme.</em></h2><p>Navigate your writing journey with a structured 30-day curriculum, designed to guide you from initial idea to publishing readiness.</p></div>
      <div className="packages-grid mentorship-grid">
        {mentorshipPackages.map((item, index) => <PackageCard key={item.name} item={item} index={index} />)}
      </div>
      <div className="addons-panel">
        <span className="small-heading">ADDITIONAL SERVICES & ADD-ONS</span>
        <h2>Support, when you <em>need it.</em></h2>
        <ul>{additionalServices.map((service) => <li key={service}>{service}</li>)}</ul>
        <p>Contact Twin Ink Publications for additional service charges and project-specific details.</p>
        <a href="mailto:twininkpublication@gmail.com?subject=Additional%20Services%20Enquiry">Enquire About Add-ons <ArrowRight size={15} /></a>
      </div>
    </section>
  );
}


function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO SECTION */}

        <section className="hero section-padding" id="home">
          <div className="hero-content">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow-line" />
              THE ART OF PUBLISHING
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Every story
              <br />
              deserves a
              <br />
              <em>beautiful</em> beginning.
            </motion.h1>

            <p className="hero-description">
              We bring authors, ideas and stories together.
              From the first manuscript to the hands of readers,
              we help every story find its place in the world.
            </p>

            <div className="hero-buttons">
              <a href="#books" className="button-primary">
                Explore Our Books <ArrowRight size={16} />
              </a>

              <Link to="/author/register" className="button-text">
                Become an Author <ArrowRight size={16} />
              </Link>
            </div>

            <div className="hero-footnote">
              <span>INDEPENDENT THINKING.</span>
              <span>MEANINGFUL PUBLISHING.</span>
            </div>
          </div>

          <div className="hero-visual">
            <BookMockup />
          </div>
        </section>

        {/* ABOUT SECTION */}

        <section className="intro-section section-padding" id="about">
          <SectionLabel number="01" label="ABOUT TWIN INK" />

          <div className="intro-grid">
            <div>
              <span className="small-heading">
                A HOME FOR EVERY STORY
              </span>

              <h2>
                Publishing is not just about books.
                <br />
                It is about <em>voices.</em>
              </h2>
            </div>

            <div className="intro-copy">
              <p>
                Twin Ink Publications is an independent publishing
                initiative built around authors, readers and the
                power of storytelling.
              </p>

              <p>
                We aim to create opportunities for writers through
                publishing support, literary events, creative
                collaborations and a growing community.
              </p>

              <a href="#team" className="underlined-link">
                Discover Our Story <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* BOOKS SECTION */}

        <section className="books-section section-padding" id="books">
          <SectionLabel number="02" label="OUR COLLECTION" />

          <div className="section-heading">
            <div>
              <span className="small-heading">THE BOOKSHELF</span>
              <h2>
                Stories to <em>remember.</em>
              </h2>
            </div>

            <a href="#contact" className="underlined-link">
              View All Books <ArrowRight size={15} />
            </a>
          </div>

          <div className="books-grid">
            <BookCard
              title="Bihar: Echoes of the Past"
              category="HISTORY & CULTURE"
              color="book-green"
              number="01"
              description="A journey through heritage, history and the dreams of tomorrow."
            />

            <BookCard
              title="Her Silence Was Never Consent"
              category="FICTION"
              color="book-brown"
              number="02"
              description="A story exploring voice, identity and the courage to speak."
            />

            <BookCard
              title="Mandarachal Gatha"
              category="MYTHOLOGY"
              color="book-blue"
              number="03"
              description="An imaginative journey into mythology and ancient mysteries."
            />
          </div>
        </section>

        {/* SERVICES SECTION */}

        <section
          className="services-section section-padding"
          id="services"
        >
          <SectionLabel number="03" label="WHAT WE DO" />

          <div className="section-heading">
            <div>
              <span className="small-heading">
                FROM MANUSCRIPT TO MARKET
              </span>

              <h2>
                Everything a story <em>needs.</em>
              </h2>
            </div>

            <p className="section-description">
              Thoughtful publishing support at every stage
              of an author's journey.
            </p>
          </div>

          <div className="services-list">
            <ServiceItem
              number="01"
              icon={<BookOpen />}
              title="Book Publishing"
              text="Paperback, hardcover and digital publishing support."
            />

            <ServiceItem
              number="02"
              icon={<Feather />}
              title="Editing & Proofreading"
              text="Editorial guidance to help every manuscript reach its potential."
            />

            <ServiceItem
              number="03"
              icon={<Sparkles />}
              title="Cover & Book Design"
              text="Visual identities and professional book layouts."
            />

            <ServiceItem
              number="04"
              icon={<Globe2 />}
              title="Distribution Support"
              text="Online distribution and reader discovery opportunities."
            />
          </div>

          <div className="service-category-grid">
            <article className="service-category-card">
              <span className="service-category-kicker">PUBLISHING SERVICES</span>
              <h3>Book Publishing Packages</h3>
              <p>Explore all publishing packages, inclusions and pricing.</p>
              <a href="#publishing-packages">View Publishing Packages <ArrowRight size={15} /></a>
            </article>
            <article className="service-category-card">
              <span className="service-category-kicker">AUTHOR DEVELOPMENT</span>
              <h3>Author Mentorship Packages</h3>
              <p>Structured 30-day writing and author mentorship programmes.</p>
              <a href="#publishing-packages">View Mentorship Packages <ArrowRight size={15} /></a>
            </article>
            <article className="service-category-card">
              <span className="service-category-kicker">FLEXIBLE SUPPORT</span>
              <h3>Additional Services & Add-ons</h3>
              <p>Editing, formatting, cover design, audiobook and promotion support.</p>
              <a href="#publishing-packages">View Additional Services <ArrowRight size={15} /></a>
            </article>
            <article className="service-category-card service-category-featured">
              <span className="service-category-kicker">AUDIO PRODUCTION</span>
              <h3>Audiobook Publishing</h3>
              <p>Ask us about audiobook preparation and submission support.</p>
              <a href="mailto:twininkpublication@gmail.com?subject=Audiobook%20Publishing%20Enquiry">Connect With Us <ArrowRight size={15} /></a>
            </article>
            <article className="service-category-card service-category-featured">
              <span className="service-category-kicker">AUTHOR CONVERSATIONS</span>
              <h3>Podcast Services</h3>
              <p>For author interviews, literary conversations and podcast collaborations.</p>
              <a href="mailto:twininkpublication@gmail.com?subject=Podcast%20Services%20Enquiry">Connect With Us <ArrowRight size={15} /></a>
            </article>
          </div>
        </section>

        <PackagesSection />

        {/* AUTHORS SECTION */}

        <section className="authors-section section-padding" id="authors">
          <div className="authors-content">
            <span className="small-heading">
              THE PEOPLE BEHIND THE PAGES
            </span>

            <h2>
              Every author has
              <br />
              a story worth <em>hearing.</em>
            </h2>

            <p>
              We believe in creating a platform where writers
              can develop their voice, publish their work and
              connect with readers.
            </p>

            <Link to="/author/register" className="button-light">
              Join Our Author Community <ArrowRight size={16} />
            </Link>
          </div>

          <div className="authors-art">
            <Feather size={130} strokeWidth={0.5} />
            <span>THE AUTHOR'S JOURNEY</span>
          </div>
        </section>

        {/* TEAM SECTION */}

        <section className="team-section section-padding" id="team">
          <SectionLabel number="04" label="OUR PEOPLE" />

          <div className="section-heading">
            <div>
              <span className="small-heading">
                BEHIND EVERY GREAT STORY
              </span>

              <h2>
                Meet the <em>team.</em>
              </h2>
            </div>

            <p className="section-description">
              A collaborative team working across publishing,
              creativity and literary experiences.
            </p>
          </div>

          <div className="team-placeholder">
            <Users size={42} strokeWidth={1} />

            <h3>People who bring ideas to life.</h3>

            <p>
              Our team directory will introduce the people
              behind Twin Ink Publications.
            </p>

            <span>
              TEAM PROFILES WILL BE MANAGED THROUGH ADMIN CMS
            </span>
          </div>
        </section>

        {/* EVENTS SECTION */}

        <section className="events-section section-padding" id="events">
          <SectionLabel number="05" label="EVENTS & EXPERIENCES" />

          <div className="section-heading">
            <div>
              <span className="small-heading">BEYOND THE PAGES</span>

              <h2>
                Where stories come <em>alive.</em>
              </h2>
            </div>

            <p className="section-description">
              Celebrating books, authors and ideas through
              meaningful literary experiences.
            </p>
          </div>

          <div className="events-grid">
            <EventCard
              icon={<BookOpen size={60} />}
              number="01"
              title="Book Launch Ceremonies"
              heading="Every book deserves its moment."
              text="Celebrate new books with authors, guests, readers and the literary community."
              className="event-launch"
            />

            <EventCard
              icon={<Feather size={60} />}
              number="02"
              title="Author Meet & Book Signing"
              heading="Meet the mind behind the words."
              text="Personal interactions, reader conversations and memorable book signings."
              className="event-signing"
            />

            <EventCard
              icon={<Mic size={60} />}
              number="03"
              title="Podcasts & Literary Talks"
              heading="Beyond writing, into conversations."
              text="Author interviews, creative discussions and storytelling sessions."
              className="event-podcast"
            />
          </div>
        </section>

        {/* QUOTE SECTION */}

        <section className="quote-section">
          <span className="quote-mark">“</span>

          <h2>
            A book is more than pages.
            <br />
            It is a world waiting to be discovered.
          </h2>

          <span className="quote-caption">
            THE TWIN INK PHILOSOPHY
          </span>
        </section>

        {/* CONTACT SECTION */}

        <section
          className="contact-section section-padding"
          id="contact"
        >
          <SectionLabel number="06" label="GET IN TOUCH" />

          <div className="contact-grid">
            <div>
              <span className="small-heading">
                LET'S CREATE SOMETHING MEANINGFUL
              </span>

              <h2>
                Have a story to <em>tell?</em>
              </h2>

              <p>
                Connect with Twin Ink Publications for publishing
                enquiries, collaborations and literary initiatives.
              </p>
            </div>

            <div className="contact-card">
              <Mail size={22} />

              <span>GENERAL ENQUIRIES</span>

              <a href="mailto:twininkpublication@gmail.com">
                twininkpublication@gmail.com
              </a>

              <a href="tel:+919142411192">
                <Phone size={16} /> +91 9142411192
              </a>

              <a href="https://wa.me/919142411192" target="_blank" rel="noreferrer">
                <MessageCircle size={16} /> WhatsApp Us
              </a>

              <a href="https://www.instagram.com/twininkpublication29/" target="_blank" rel="noreferrer">
                <Instagram size={16} /> @twininkpublication29
              </a>

              <Link to="/author/register">
                Start Your Author Journey <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function BookCard({
  title,
  category,
  color,
  number,
  description,
}: {
  title: string;
  category: string;
  color: string;
  number: string;
  description: string;
}) {
  return (
    <article className="book-card">
      <div className={`book-card-art ${color}`}>
        <span className="book-card-number">{number}</span>

        <BookOpen size={48} strokeWidth={0.8} />

        <span className="book-card-brand">
          TWIN INK PUBLICATIONS
        </span>
      </div>

      <div className="book-card-info">
        <span>{category}</span>

        <h3>{title}</h3>

        <p>{description}</p>

        <a href="#contact">
          Discover Book <ArrowRight size={14} />
        </a>
      </div>
    </article>
  );
}

function ServiceItem({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="service-item">
      <span className="service-number">{number}</span>

      <span className="service-icon">{icon}</span>

      <h3>{title}</h3>

      <p>{text}</p>

      <ArrowRight className="service-arrow" />
    </div>
  );
}

function EventCard({
  icon,
  number,
  title,
  heading,
  text,
  className,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  heading: string;
  text: string;
  className: string;
}) {
  return (
    <article className="event-card">
      <div className={`event-visual ${className}`}>
        <span className="event-index">{number}</span>

        {icon}

        <span className="event-visual-caption">{title}</span>
      </div>

      <div className="event-details">
        <span className="event-type">{title}</span>

        <h3>{heading}</h3>

        <p>{text}</p>

        <a href="#contact">
          Explore Events <ArrowRight size={15} />
        </a>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-symbol">T</span>

            <span className="brand-name">
              TWIN INK
              <small>PUBLICATIONS</small>
            </span>
          </Link>

          <p>
            Creating opportunities for stories,
            voices and meaningful publishing.
          </p>
        </div>

        <div className="footer-links">
          <span>EXPLORE</span>
          <a href="#about">About Us</a>
          <a href="#books">Our Books</a>
          <a href="#authors">Authors</a>
          <a href="#events">Events</a>
        </div>

        <div className="footer-links">
          <span>PORTALS</span>
          <Link to="/author/login">Author Portal</Link>
          <Link to="/team/login">Team Portal</Link>
        </div>

        <div className="footer-links">
          <span>CONTACT</span>
          <a href="tel:+919142411192">Call Us</a>
          <a href="https://wa.me/919142411192" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="mailto:twininkpublication@gmail.com">Email Us</a>
          <a href="https://www.instagram.com/twininkpublication29/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="#contact">Enquiries</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © 2026 TWIN INK PUBLICATIONS. ALL RIGHTS RESERVED.
        </span>

        <span>BUILT AROUND THE POWER OF STORIES.</span>
      </div>
    </footer>
  );
}

/* AUTHOR / ADMIN / TEAM LOGIN */

function PortalLogin({
  portal,
  subtitle,
}: {
  portal: string;
  subtitle: string;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleDemoLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(`/${portal}/dashboard`);
  }

  return (
    <div className="portal-login-page">
      <Link to="/" className="portal-back">
        ← Back to Website
      </Link>

      <div className="portal-login-card">
        <div className="portal-logo">T</div>

        <span className="small-heading">
          TWIN INK PUBLICATIONS
        </span>

        <h1>
          {portal === "admin"
            ? "Administration"
            : portal === "author"
              ? "Author Portal"
              : "Team Portal"}
        </h1>

        <p>{subtitle}</p>

        <form onSubmit={handleDemoLogin}>
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <button
            type="submit"
            className="button-primary portal-submit"
          >
            Continue <ArrowRight size={16} />
          </button>
        </form>

        {portal === "author" && (
          <p className="portal-register">
            New author?{" "}
            <Link to="/author/register">Create an account</Link>
          </p>
        )}

        <span className="portal-security">
          <ShieldCheck size={15} />
          Secure account access will be enabled with backend authentication.
        </span>
      </div>
    </div>
  );
}

/* AUTHOR REGISTRATION */

function AuthorRegister() {
  return (
    <div className="portal-login-page">
      <Link to="/" className="portal-back">
        ← Back to Website
      </Link>

      <div className="portal-login-card register-card">
        <div className="portal-logo">T</div>

        <span className="small-heading">JOIN OUR COMMUNITY</span>

        <h1>Become an Author</h1>

        <p>
          Start your publishing journey with Twin Ink Publications.
        </p>

        <form onSubmit={(event) => event.preventDefault()}>
          <label>Full Name</label>
          <input placeholder="Your full name" required />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Your email address"
            required
          />

          <label>Mobile Number</label>
          <input
            type="tel"
            placeholder="Your mobile number"
            required
          />

          <label>Preferred Password</label>
          <input
            type="password"
            placeholder="Create a password"
            required
          />

          <button
            className="button-primary portal-submit"
            type="submit"
          >
            Submit Registration <ArrowRight size={16} />
          </button>
        </form>

        <span className="portal-security">
          Registration will be connected to the secure author account system.
        </span>
      </div>
    </div>
  );
}

/* PORTAL SIDEBAR */

function PortalSidebar({
  title,
  links,
}: {
  title: string;
  links: { label: string; icon: React.ReactNode }[];
}) {
  return (
    <aside className="portal-sidebar">
      <Link to="/" className="portal-sidebar-brand">
        <span className="brand-symbol">T</span>

        <span>
          TWIN INK
          <small>{title}</small>
        </span>
      </Link>

      <span className="sidebar-caption">WORKSPACE</span>

      {links.map((item) => (
        <a href="#" key={item.label} className="sidebar-link">
          {item.icon}
          {item.label}
        </a>
      ))}

      <Link to="/" className="sidebar-logout">
        <LogOut size={17} />
        Back to Website
      </Link>
    </aside>
  );
}

/* DASHBOARD STAT CARD */

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>

      <span>{label}</span>

      <strong>{value}</strong>
    </div>
  );
}

/* PORTAL DASHBOARDS */

function PortalDashboard({
  type,
}: {
  type: "admin" | "author" | "team";
}) {
  const isAdmin = type === "admin";
  const isAuthor = type === "author";

  const title = isAdmin
    ? "Admin Dashboard"
    : isAuthor
      ? "Author Dashboard"
      : "Team Dashboard";

  const links = isAdmin
    ? [
        { label: "Overview", icon: <LayoutDashboard /> },
        { label: "Authors", icon: <Users /> },
        { label: "Books & Manuscripts", icon: <BookOpen /> },
        { label: "Orders", icon: <ShoppingBag /> },
        { label: "Events", icon: <CalendarDays /> },
        { label: "Finance", icon: <Wallet /> },
        { label: "Settings", icon: <Settings /> },
      ]
    : isAuthor
      ? [
          { label: "Overview", icon: <LayoutDashboard /> },
          { label: "My Books", icon: <BookOpen /> },
          { label: "Manuscripts", icon: <FileText /> },
          { label: "Bookstore", icon: <ShoppingBag /> },
          { label: "Royalties", icon: <Wallet /> },
          { label: "Notifications", icon: <Bell /> },
        ]
      : [
          { label: "Overview", icon: <LayoutDashboard /> },
          { label: "My Tasks", icon: <ClipboardList /> },
          { label: "Attendance", icon: <Clock /> },
          { label: "Salary", icon: <Wallet /> },
          { label: "Notifications", icon: <Bell /> },
        ];

  return (
    <div className="portal-layout">
      <PortalSidebar
        title={
          isAdmin
            ? "ADMINISTRATION"
            : isAuthor
              ? "AUTHOR PORTAL"
              : "TEAM PORTAL"
        }
        links={links}
      />

      <main className="portal-main">
        <header className="portal-topbar">
          <div>
            <span>WORKSPACE / {type.toUpperCase()}</span>
            <h1>{title}</h1>
          </div>

          <div className="portal-user">
            <Bell size={19} />

            <div className="user-avatar">
              {isAdmin ? "A" : isAuthor ? "W" : "T"}
            </div>

            <span>
              {isAdmin
                ? "Administrator"
                : isAuthor
                  ? "Author"
                  : "Team Member"}
            </span>
          </div>
        </header>

        <section className="dashboard-welcome">
          <div>
            <span className="small-heading">
              TWIN INK PUBLICATIONS
            </span>

            <h2>Welcome to your workspace.</h2>

            <p>
              {isAdmin
                ? "Manage publishing operations, authors, books and your organization."
                : isAuthor
                  ? "Your publishing journey, books and royalty information in one place."
                  : "Your assigned responsibilities, work progress and salary information."}
            </p>
          </div>

          <div className="welcome-decoration">
            <Sparkles size={45} />
          </div>
        </section>

        <div className="dashboard-stats">
          {isAdmin ? (
            <>
              <StatCard
                label="Registered Authors"
                value="—"
                icon={<Users />}
              />

              <StatCard
                label="Total Books"
                value="—"
                icon={<BookOpen />}
              />

              <StatCard
                label="Pending Submissions"
                value="—"
                icon={<FileText />}
              />

              <StatCard
                label="Active Orders"
                value="—"
                icon={<ShoppingBag />}
              />
            </>
          ) : isAuthor ? (
            <>
              <StatCard
                label="My Books"
                value="—"
                icon={<BookOpen />}
              />

              <StatCard
                label="Submissions"
                value="—"
                icon={<FileText />}
              />

              <StatCard
                label="Pending Royalties"
                value="—"
                icon={<Wallet />}
              />

              <StatCard
                label="My Orders"
                value="—"
                icon={<ShoppingBag />}
              />
            </>
          ) : (
            <>
              <StatCard
                label="Assigned Tasks"
                value="—"
                icon={<ClipboardList />}
              />

              <StatCard
                label="Completed Tasks"
                value="—"
                icon={<ShieldCheck />}
              />

              <StatCard
                label="Pending Tasks"
                value="—"
                icon={<Clock />}
              />

              <StatCard
                label="Salary Status"
                value="—"
                icon={<Wallet />}
              />
            </>
          )}
        </div>

        <section className="dashboard-panel">
          <div className="panel-heading">
            <div>
              <span className="small-heading">
                WORKSPACE ACTIVITY
              </span>

              <h2>
                {isAdmin
                  ? "Recent Activity"
                  : isAuthor
                    ? "My Publishing Activity"
                    : "My Recent Tasks"}
              </h2>
            </div>

            <button className="outline-button">
              <Search size={15} />
              View Details
            </button>
          </div>

          <div className="empty-state">
            <div className="empty-icon">
              {isAdmin ? (
                <LayoutDashboard />
              ) : isAuthor ? (
                <BookMarked />
              ) : (
                <ClipboardList />
              )}
            </div>

            <h3>Your workspace is ready.</h3>

            <p>
              Live information will appear here after the database
              and account systems are connected.
            </p>
          </div>
        </section>

        <div className="dashboard-notice">
          <ShieldCheck size={18} />

          This is currently a frontend preview. Live account data
          and permissions will be enabled during backend development.
        </div>
      </main>
    </div>
  );
}

/* ROUTES */

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/admin/login"
        element={
          <PortalLogin
            portal="admin"
            subtitle="Secure administrative access."
          />
        }
      />

      <Route
        path="/admin/dashboard"
        element={<PortalDashboard type="admin" />}
      />

      <Route
        path="/author/login"
        element={
          <PortalLogin
            portal="author"
            subtitle="Access your books and publishing journey."
          />
        }
      />

      <Route
        path="/author/register"
        element={<AuthorRegister />}
      />

      <Route
        path="/author/dashboard"
        element={<PortalDashboard type="author" />}
      />

      <Route
        path="/team/login"
        element={
          <PortalLogin
            portal="team"
            subtitle="Access your team workspace."
          />
        }
      />

      <Route
        path="/team/dashboard"
        element={<PortalDashboard type="team" />}
      />

      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}