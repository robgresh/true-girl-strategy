export default function MessagingFramework() {
    return (
        <div className="bg-brand-blush min-h-screen antialiased text-brand-charcoal pt-[80px]">
            {/* Navigation */}
            <nav className="bg-white border-b border-gray-200 fixed top-0 w-full z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="font-heading font-extrabold text-xl text-brand-magenta">Strategy Sprint Appendix</div>
                    <a href="/" className="text-brand-teal hover:text-teal-600 font-medium text-sm flex items-center">
                        &larr; Back to Main Proposal
                    </a>
                </div>
            </nav>

            {/* Header */}
            <header className="hero-pattern py-16 px-4 shadow-inner">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-charcoal mb-4">Messaging Framework</h1>
                    <p className="text-lg text-gray-700 font-body">This framework dictates the voice, tone, and specific vocabulary required to write effective copy for the brand.</p>
                </div>
            </header>

            {/* Content */}
            <main className="py-12 px-4 font-body">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-lg">

                    <h2 className="text-brand-magenta text-3xl font-heading font-bold mt-8 mb-4 border-b-2 border-dashed border-brand-teal pb-2">1. Core Brand Voice</h2>
                    <p className="mb-6 leading-relaxed tracking-wide">Our voice is the intersection of <strong>Biblical Authority</strong> and <strong>Maternal Empathy</strong>. We are not a clinical psychologist, nor are we a distant theologian. We are a wise, experienced friend sitting across the table with a cup of coffee, saying, <em>"I know this is incredibly hard, but let's look at what God says, and let's do this together."</em></p>

                    <ul className="list-disc pl-6 mb-8 space-y-2">
                        <li><strong>Tone:</strong> Urgent but calming, energetic but safe, purposeful but playful.</li>
                        <li><strong>Perspective:</strong> Mom-to-mom ("We", "Us", "Together").</li>
                    </ul>

                    <h2 className="text-brand-magenta text-3xl font-heading font-bold mt-12 mb-4 border-b-2 border-dashed border-brand-teal pb-2">2. Vocabulary Guidelines</h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                            <h4 className="font-heading font-bold text-xl text-green-700 mb-4 flex items-center">
                                <span className="text-2xl mr-2">✅</span> Do Use
                            </h4>
                            <ul className="space-y-3 text-sm text-green-900">
                                <li><strong>Connection / Closer:</strong> Emphasize the relationship between mother and daughter.</li>
                                <li><strong>Tween:</strong> Specific demographic identifier (ages 7-12).</li>
                                <li><strong>Biblical Truth & Courage:</strong> The core deliverables.</li>
                                <li><strong>Navigate / Equip:</strong> Verbs that imply we are giving moms tools, not doing the work for them.</li>
                                <li><strong>God-given:</strong> Affirming the girl's uniqueness.</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                            <h4 className="font-heading font-bold text-xl text-red-700 mb-4 flex items-center">
                                <span className="text-2xl mr-2">🚫</span> Don't Use
                            </h4>
                            <ul className="space-y-3 text-sm text-red-900">
                                <li><strong>Teens / Teenagers:</strong> Too old for the primary demographic; brings different anxieties.</li>
                                <li><strong>Preachy Jargon:</strong> Keep it accessible. Instead of "exegesis," use "Zoom, Zoom, Zero, Zip method."</li>
                                <li><strong>Fear-Mongering:</strong> Avoid making moms feel like they are already failing. No shame-tactics.</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="text-brand-magenta text-3xl font-heading font-bold mt-12 mb-4 border-b-2 border-dashed border-brand-teal pb-2">3. Copywriting Examples (Before & After)</h2>

                    <div className="space-y-8 mt-6">
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden">
                            <div className="bg-gray-200 px-6 py-3 font-heading font-bold text-brand-charcoal">Scenario 1: Promoting a Bible Study</div>
                            <div className="p-6">
                                <p className="text-sm text-gray-500 mb-1 flex items-center"><span className="text-red-500 font-bold mr-2 text-lg">✗</span> Bad (Shaming/Dry):</p>
                                <p className="italic text-gray-700 mb-4 pl-6">"If you don't teach your daughter the Bible, the world will teach her its values. Buy our study today to ensure she doesn't stray."</p>

                                <p className="text-sm font-bold text-brand-magenta mb-1 flex items-center"><span className="text-green-500 font-bold mr-2 text-lg">✓</span> The True Girl Way (Empathetic):</p>
                                <p className="text-brand-charcoal font-medium pl-6">"Important conversations aren't always easy. But you don't have to figure them out alone. Our mother-daughter studies give you the exact tools to prepare for those talks while directing her to biblical Truth. Let's dig into God's Word together!"</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden">
                            <div className="bg-gray-200 px-6 py-3 font-heading font-bold text-brand-charcoal">Scenario 2: Event Ticket Sales</div>
                            <div className="p-6">
                                <p className="text-sm text-gray-500 mb-1 flex items-center"><span className="text-red-500 font-bold mr-2 text-lg">✗</span> Bad (Generic):</p>
                                <p className="italic text-gray-700 mb-4 pl-6">"Come to our live event for music and fun. Tickets on sale now."</p>

                                <p className="text-sm font-bold text-brand-magenta mb-1 flex items-center"><span className="text-green-500 font-bold mr-2 text-lg">✓</span> The True Girl Way (Value-Driven):</p>
                                <p className="text-brand-charcoal font-medium pl-6">"When the world tells her who to be, give her a night that shows her who God says she is! The Crazy Hair Tour is an unforgettable night of connection for you and your daughter. Undistracted time, dynamic worship, and undeniable courage. Grab your tickets before they sell out!"</p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
