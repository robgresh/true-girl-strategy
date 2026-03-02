export default function SocialMediaConcepts() {
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
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-charcoal mb-4">Social Media Concepts</h1>
                    <p className="text-lg text-gray-700 font-body">Applying the &quot;Modern Scrapbook&quot; design and empathetic voice to Instagram and Facebook.</p>
                </div>
            </header>

            {/* Content */}
            <main className="py-12 px-4 font-body">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-lg">

                    {/* Concept 1 */}
                    <div className="mb-16">
                        <h2 className="text-brand-magenta text-3xl font-heading font-bold mb-4 border-b-2 border-dashed border-gray-200 pb-2">Concept 1: The &quot;Mom Encouragement&quot; Quote Graphic</h2>
                        <div className="grid md:grid-cols-2 gap-8 items-start mt-6">
                            <div>
                                <p className="mb-4 text-brand-teal font-medium"><strong>Goal:</strong> High shareability. Moms love sharing quotes that validate their struggles.</p>
                                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                                    <li><strong>Background:</strong> Soft Lavender or Off-White Blush.</li>
                                    <li><strong>Typography:</strong> Large, bold Quicksand font.</li>
                                    <li><strong>Accents:</strong> Hand-drawn SVG stars ✨ and a teal squiggly underline.</li>
                                </ul>
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                                    <h5 className="font-bold text-sm text-gray-700 mb-1">Caption Strategy:</h5>
                                    <p className="text-sm italic text-gray-600 m-0">Acknowledge the exhaustion of modern parenting, validate the mom, and offer a small, practical tip. End with a soft call-to-action (e.g., &quot;Tag a mom friend who needs to hear this today! 💕&quot;).</p>
                                </div>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-xl flex items-center justify-center">
                                {/* Placeholder for actual mockup image from artifacts */}
                                <div className="aspect-square w-full bg-[#FFF5F8] rounded-lg shadow flex flex-col items-center justify-center p-8 text-center relative overflow-hidden border border-gray-200">
                                    <div className="absolute top-4 left-4 text-brand-yellow text-4xl opacity-50">✨</div>
                                    <h3 className="font-heading font-bold text-2xl text-brand-charcoal leading-snug">Parenting in an ever-changing world is tough.</h3>
                                    <p className="mt-4 font-heading font-bold text-brand-magenta border-b-4 border-brand-teal pb-1">You are doing a great job.</p>
                                    <div className="absolute bottom-4 right-4 text-brand-yellow text-4xl opacity-50">✨</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Concept 2 */}
                    <div className="mb-16">
                        <h2 className="text-brand-teal text-3xl font-heading font-bold mb-4 border-b-2 border-dashed border-gray-200 pb-2">Concept 2: The &quot;Interactive Doodle&quot; Poll (Stories)</h2>
                        <p className="mb-4 text-brand-magenta font-medium tracking-wide"><strong>Goal:</strong> Engagement and audience insight.</p>
                        <p className="mb-4 text-gray-700 leading-relaxed"><strong>Visuals:</strong> A candid, brightly lit photo of a mom laughing with her ~10-year-old daughter. The photo is cropped with an organic blob shape, not a strict rectangle. &quot;Sticker&quot; graphics layered on top.</p>

                        <div className="bg-gray-800 text-white p-6 rounded-2xl max-w-sm mx-auto shadow-lg relative my-8">
                            <div className="absolute top-2 right-4 text-gray-500 text-xs">Instagram Story</div>
                            <h4 className="font-heading font-bold text-xl mb-6 text-center mt-4 text-white">What&apos;s the hardest topic to navigate right now?</h4>
                            <div className="space-y-3">
                                <button className="w-full bg-white/20 hover:bg-white/30 text-white rounded-full py-3 px-4 text-left font-medium transition backdrop-blur-sm">Option 1: Screen time 📱</button>
                                <button className="w-full bg-white/20 hover:bg-white/30 text-white rounded-full py-3 px-4 text-left font-medium transition backdrop-blur-sm">Option 2: Friend drama 👭</button>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 bg-gray-50 border-l-4 border-brand-teal p-4 rounded-r-lg"><strong>Caption Strategy:</strong> Use the data from this poll to drive the next week&apos;s email newsletter content (linking to the True Girl Momcast).</p>
                    </div>

                    {/* Concept 3 */}
                    <div className="mb-8">
                        <h2 className="text-brand-magenta text-3xl font-heading font-bold mb-4 border-b-2 border-dashed border-gray-200 pb-2">Concept 3: Event Hype &quot;Scrapbook&quot; Carousel</h2>
                        <div className="grid md:grid-cols-2 gap-8 items-start mt-6">
                            <div>
                                <p className="mb-4 text-brand-teal font-medium tracking-wide"><strong>Goal:</strong> Drive ticket sales for live events (like the Crazy Hair Tour).</p>
                                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                                    <li><strong>Slide 1:</strong> Vibrant Magenta background. Large white text: &quot;3 Reasons your daughter needs a night out with YOU.&quot; Add energetic confetti.</li>
                                    <li><strong>Slide 2:</strong> Photo of a concert moment, framed by dashed teal borders. Text: &quot;1. Undistracted connection time.&quot;</li>
                                    <li><strong>Slide 3:</strong> Photo of moms and daughters worshipping. Text: &quot;2. Surrounding her with biblical truth.&quot;</li>
                                    <li><strong>Slide 4:</strong> True Magenta pill-button graphic: &quot;Get Your Tickets at the link in bio!&quot;</li>
                                </ul>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-xl flex items-center justify-center h-full">
                                <div className="aspect-square w-full bg-brand-magenta rounded-lg shadow-lg flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                                    <h3 className="font-heading font-extrabold text-3xl text-white leading-tight">3 Reasons your daughter needs a night out with YOU.</h3>
                                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
                            <h5 className="font-bold text-sm text-gray-700 mb-1">Caption Strategy:</h5>
                            <p className="text-sm italic text-gray-600 m-0">&quot;When the world tells her who to be, give her a night that shows her who God says she is. The True Girl Crazy Hair Tour is coming to [City]. We can&apos;t wait to see you there! 👇 link in bio.&quot;</p>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
