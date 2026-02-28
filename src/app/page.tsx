import Demo from "@/components/demo";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen font-body text-brand-charcoal pt-[80px]">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-heading font-extrabold text-2xl text-brand-magenta tracking-tight">Strategy Sprint</div>
          <div className="hidden md:flex space-x-8 font-medium text-sm">
            <a href="#demo" className="hover:text-brand-teal transition">The Prototype</a>
            <a href="#process" className="hover:text-brand-teal transition">The Process</a>
            <a href="#frameworks" className="hover:text-brand-teal transition">Frameworks</a>
            <a href="#funnel" className="hover:text-brand-teal transition">The Funnel</a>
          </div>
          <a href="#contact"
            className="bg-brand-teal hover:bg-teal-600 text-white px-6 py-2 rounded-full font-heading font-bold shadow-md transition">Let's Talk</a>
        </div>
      </nav>

      {/* Main Pitch Proposal Header */}
      <section className="bg-white pt-24 pb-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-brand-blush text-brand-magenta font-heading font-bold px-4 py-1 rounded-full mb-6 text-sm border border-brand-magenta/20 shadow-sm">
            Prepared exclusively for Dannah Gresh & True Girl Leadership
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-brand-charcoal mb-6 leading-tight">
            Accelerating the <span className="text-brand-magenta">True Girl</span> Mission with AI.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            We conducted an AI-powered strategy sprint to reverse-engineer your brand voice, codify your aesthetic, and generate a fully executable marketing funnel.
          </p>
        </div>
      </section>

      {/* Interactive Hero Prototype */}
      <section id="demo" className="hero-pattern py-16 px-4 border-y border-gray-200">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-heading font-bold text-brand-charcoal mb-2">Live Interactive Prototype</h2>
          <p className="text-gray-600">A demonstration of engaging, spatial scroll tracking using your real gallery assets.</p>
        </div>
        <div className="max-w-6xl mx-auto">
          <Demo />
        </div>
      </section>

      {/* Section 1: Transparency / The Process */}
      <section id="process" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img src="https://mytruegirl.com/wp-content/uploads/2024/11/Group-20-768x700.png"
              alt="Moms and Daughters" className="organic-image w-full object-cover h-96" />
          </div>
          <div>
            <h2 className="text-4xl text-brand-teal mb-6 font-heading font-bold">Why AI? Why Now?</h2>
            <p className="text-lg mb-6 leading-relaxed">
              Most agencies take weeks just to "onboard" and understand your mission. We took a radically
              different approach. We utilized advanced AI to crawl the True Girl website, analyze your
              messaging, and extract your exact visual guidelines.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              <strong>We aren't replacing human empathy; we are scaling it.</strong> By letting AI handle the
              heavy lifting of structure, design templates, and formatting, we freed our strategic bandwidth to focus entirely on the psychology of the Christian mom navigating the tween years.
            </p>
            <div className="bg-brand-blush border-l-4 border-brand-magenta p-6 rounded-r-xl">
              <h4 className="font-heading font-bold text-brand-magenta text-lg mb-2">Our Goal</h4>
              <p className="text-sm">To prove that as your agency partner, we can generate high-converting, deeply
                empathetic campaigns at an unprecedented speed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Frameworks */}
      <section id="frameworks" className="py-20 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-brand-charcoal mb-4">Reverse-Engineering the Magic</h2>
          <p className="text-xl text-gray-600">Before building collateral, we codified what makes True Girl work.</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Brand Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-heading font-bold text-brand-magenta mb-4">The "Modern Scrapbook" Aesthetic</h3>
            <p className="mb-6 text-gray-600">We identified your core strategy: utilizing rounded Quicksand typography, vibrant Magenta/Teal contrasts, and organic doodle overlays to feel maternal and safe.</p>
            <div className="flex space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#E6007E] shadow-sm"></div>
              <div className="w-10 h-10 rounded-full bg-[#00A99D] shadow-sm"></div>
              <div className="w-10 h-10 rounded-full bg-[#FFD100] shadow-sm"></div>
              <div className="w-10 h-10 rounded-full bg-[#B892FF] shadow-sm"></div>
            </div>
          </div>

          {/* Voice Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="text-4xl mb-4">🗣️</div>
            <h3 className="text-2xl font-heading font-bold text-brand-teal mb-4">The Messaging Matrix</h3>
            <p className="mb-4 text-gray-600">We programmed our writers to operate at the intersection of <strong>Biblical Authority</strong> and <strong>Maternal Empathy</strong>. No clinical jargon, no shaming—just mom-to-mom encouragement.</p>
            <ul className="text-sm space-y-2 text-gray-600">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Use: "Equip," "Courage," "God-given"</li>
              <li className="flex items-center"><span className="text-red-500 mr-2">✗</span> Avoid: Plattiudes, Fear-mongering</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: The Funnel */}
      <section id="funnel" className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-brand-charcoal mb-4">The Generated Funnel</h2>
          <p className="text-xl text-gray-600">We didn't just plan a funnel; we built the actual copy and wireframes.</p>
        </div>

        <div className="max-w-3xl mx-auto pb-10 space-y-8">
          <div className="bg-gray-50 border-l-4 border-brand-teal p-6 rounded-r-xl shadow-sm">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest mb-1 block">Traffic / Social</span>
            <h4 className="font-heading font-bold text-xl mb-2">Scroll-Stopping Awareness</h4>
            <p className="text-gray-600 text-sm">Quotes and event promos designed specifically to hit mom's pain points and encourage sharing in mom-groups.</p>
          </div>

          <div className="bg-gray-50 border-l-4 border-brand-yellow p-6 rounded-r-xl shadow-sm ml-8">
            <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-1 block">Lead Generation</span>
            <h4 className="font-heading font-bold text-xl mb-2">High-Value Lead Magnet</h4>
            <p className="text-gray-600 text-sm">A 6-page digital download capturing emails by offering immediate help: "5 Conversations to Have with Your Tween."</p>
          </div>

          <div className="bg-gray-50 border-l-4 border-brand-magenta p-6 rounded-r-xl shadow-sm ml-16">
            <span className="text-xs font-bold text-brand-magenta uppercase tracking-widest mb-1 block">Nurture & Conversion</span>
            <h4 className="font-heading font-bold text-xl mb-2">The Welcome Sequence</h4>
            <p className="text-gray-600 text-sm">A 4-part automated email flow building immense trust, introducing the 'Zoom, Zoom, Zero, Zip' method, and ultimately pitching the Subscription Box.</p>
          </div>
        </div>
      </section>

      {/* Section 4: Deep Dive Appendices */}
      <section id="appendices" className="py-20 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-brand-charcoal mb-4">Detailed Strategy Documents</h2>
          <p className="text-xl text-gray-600">Explore the foundational frameworks we built to power this campaign.</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <a href="/marketing-capture-plan"
            className="block bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-teal transition group">
            <h4 className="font-heading font-bold text-xl text-brand-charcoal group-hover:text-brand-teal mb-2">
              Marketing Capture Plan</h4>
            <p className="text-sm text-gray-600">The foundational analysis of the True Girl mission, audience, and
              content pillars.</p>
          </a>
          <a href="/brand-guidelines"
            className="block bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-magenta transition group">
            <h4 className="font-heading font-bold text-xl text-brand-charcoal group-hover:text-brand-magenta mb-2">Brand
              Guidelines</h4>
            <p className="text-sm text-gray-600">The exact color codes, typography, and styling rules for the "Modern
              Scrapbook" aesthetic.</p>
          </a>
          <a href="/messaging-framework"
            className="block bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-yellow transition group">
            <h4 className="font-heading font-bold text-xl text-brand-charcoal group-hover:text-brand-yellow mb-2">
              Messaging Framework</h4>
            <p className="text-sm text-gray-600">Copywriting rules to ensure the voice balances Biblical Authority with
              Maternal Empathy.</p>
          </a>
          <a href="/content-funnel"
            className="block bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-lavender transition group">
            <h4 className="font-heading font-bold text-xl text-brand-charcoal group-hover:text-brand-lavender mb-2">
              Content Funnel Blueprint</h4>
            <p className="text-sm text-gray-600">Mapping the step-by-step user journey from basic awareness to final
              purchase.</p>
          </a>
          <a href="/social-media-concepts"
            className="block bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-teal transition group">
            <h4 className="font-heading font-bold text-xl text-brand-charcoal group-hover:text-brand-teal mb-2">Social
              Media Concepts</h4>
            <p className="text-sm text-gray-600">Visual mockups and caption strategies for Instagram and Facebook.</p>
          </a>
          <a href="/welcome-sequence"
            className="block bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-magenta transition group">
            <h4 className="font-heading font-bold text-xl text-brand-charcoal group-hover:text-brand-magenta mb-2">
              Welcome Email Sequence</h4>
            <p className="text-sm text-gray-600">The 4-part automated email flow designed to build trust and pitch the
              core product.</p>
          </a>
        </div>
      </section>

      {/* Footer / CTA */}
      <section id="contact" className="bg-brand-charcoal text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-heading font-bold mb-6 text-white">Let's build the real thing.</h2>
          <p className="text-lg text-gray-300 mb-10">
            This microsite, the React prototype, and every asset inside it was generated in a single afternoon. Imagine what we can do for True Girl as your dedicated marketing partner over a whole quarter.
          </p>
          <a href="mailto:hello@example.com"
            className="bg-brand-magenta hover:bg-pink-600 text-white px-10 py-4 rounded-full font-heading font-bold text-xl shadow-lg transition inline-block">
            Schedule a Strategy Call
          </a>
        </div>
      </section>

    </div>
  );
}
