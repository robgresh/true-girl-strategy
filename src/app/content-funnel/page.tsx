export default function ContentFunnel() {
    return (
        <div className="bg-brand-blush min-h-screen antialiased text-brand-charcoal pt-[80px]">
            <nav className="bg-white border-b border-gray-200 fixed top-0 w-full z-50 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <img src="/kindred-logo.png" alt="Kindred Strategy Logo" className="w-8 h-8 object-contain" />
                        <span className="font-heading font-extrabold text-xl text-brand-charcoal tracking-tight">Kindred Strategy</span>
                    </div>
                    <a href="/#appendices" className="text-brand-teal hover:text-teal-600 font-medium text-sm flex items-center transition">
                        &larr; Back to Main Proposal
                    </a>
                </div>
            </nav>

            {/* Header */}
            <header className="hero-pattern py-16 px-4 shadow-inner">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-charcoal mb-4">Content Funnel Blueprint</h1>
                    <p className="text-lg text-gray-700 font-body">Mapping the step-by-step user journey from basic awareness to final purchase.</p>
                </div>
            </header>

            {/* Content */}
            <main className="py-12 px-4 font-body">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-lg">

                    <h2 className="text-brand-teal text-3xl font-heading font-bold mt-8 mb-4 border-b-2 border-dashed border-gray-200 pb-2">Stage 1: Awareness (Top of Funnel - ToFu)</h2>
                    <p className="mb-4 text-brand-magenta font-medium"><strong>Goal:</strong> Capture attention by addressing her immediate pain points with empathy.</p>
                    <ul className="list-disc pl-6 mb-8 space-y-2">
                        <li><strong>Channels:</strong> Instagram (Reels & Carousels), Facebook (Quote Graphics), Pinterest, SEO-optimized blog posts.</li>
                        <li><strong>Content Types:</strong>
                            <ul className="list-circle pl-6 mt-2 space-y-1 text-gray-600">
                                <li>Relatable "Mom Encouragement" quotes (e.g., "Parenting in an ever-changing world is tough...").</li>
                                <li>Short, punchy video clips from the True Girl Momcast or Podcast.</li>
                                <li>"Scrapbook" style infographics on tween development stages.</li>
                            </ul>
                        </li>
                        <li><strong>Call to Action (CTA):</strong> "Listen to the full episode" or "Save this for when you need it."</li>
                    </ul>

                    <h2 className="text-brand-yellow text-3xl font-heading font-bold mt-12 mb-4 border-b-2 border-dashed border-gray-200 pb-2 drop-shadow-sm">Stage 2: Lead Generation (Middle of Funnel - MoFu)</h2>
                    <p className="mb-4 text-brand-magenta font-medium"><strong>Goal:</strong> Convert anonymous traffic into email subscribers by offering high-value, practical tools.</p>
                    <ul className="list-disc pl-6 mb-8 space-y-2">
                        <li><strong>The Lead Magnet:</strong> A highly actionable, free digital download.
                            <ul className="list-circle pl-6 mt-2 space-y-1 text-gray-600">
                                <li><em>Example:</em> "5 Conversations to Have with Your Tween This Week" (PDF Guide).</li>
                                <li><em>Example:</em> "A Mom's Guide to Navigating Mean Girl Moments" (Video Mini-Class).</li>
                            </ul>
                        </li>
                        <li><strong>Delivery Mechanism:</strong> A dedicated landing page with a simple email capture form, utilizing the high-energy Magenta/Teal color scheme.</li>
                    </ul>

                    <h2 className="text-brand-magenta text-3xl font-heading font-bold mt-12 mb-4 border-b-2 border-dashed border-gray-200 pb-2">Stage 3: Conversion & Nurture (Bottom of Funnel - BoFu)</h2>
                    <p className="mb-4 text-brand-teal font-medium"><strong>Goal:</strong> Build deep trust through an email sequence and present the core paid offerings.</p>
                    <ul className="list-disc pl-6 mb-8 space-y-4">
                        <li><strong>The Welcome Sequence (Days 1-7):</strong>
                            <div className="bg-gray-50 border-l-4 border-brand-magenta p-4 mt-2 rounded-r-lg">
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li><strong>Email 1 (Immediate):</strong> Delivery of the Lead Magnet. Welcoming, empathetic tone.</li>
                                    <li><strong>Email 2 (Day 3):</strong> "You're doing great, Mom." Sharing a founder story about struggling with raising a tween.</li>
                                    <li><strong>Email 3 (Day 5):</strong> Introduction to the "Zoom, Zoom, Zero, Zip" Bible study method.</li>
                                    <li><strong>Email 4 (Day 7):</strong> Core Pitch.</li>
                                </ul>
                            </div>
                        </li>
                        <li><strong>The Core Pitches (Depending on Seasonality):</strong>
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-600">
                                <li><strong>High Commitment/Live:</strong> The True Girl Crazy Hair Tour (Ticket Sales).</li>
                                <li><strong>Recurring Revenue:</strong> The True Girl Subscription Box (Monthly Mom+Daughter discipleship material).</li>
                            </ol>
                        </li>
                    </ul>

                    <h2 className="text-[#B892FF] text-3xl font-heading font-bold mt-12 mb-4 border-b-2 border-dashed border-gray-200 pb-2">Stage 4: Retention & Advocacy</h2>
                    <p className="mb-4 text-brand-magenta font-medium"><strong>Goal:</strong> Turn purchasers into lifelong brand advocates.</p>
                    <ul className="list-disc pl-6 mb-8 space-y-2">
                        <li><strong>Community:</strong> Access to exclusive "Parent Workshops" or a private Facebook group for moms who have purchased the subscription box.</li>
                        <li><strong>The Loop:</strong> Encouraging moms to invite their friends to live events, restarting the Awareness stage for their peers.</li>
                    </ul>

                </div>
            </main>
        </div>
    );
}
