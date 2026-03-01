export default function BrandGuidelines() {
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
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-charcoal mb-4">Brand Guidelines</h1>
                    <p className="text-lg text-gray-700 font-body">The absolute core visual identity required to replicate the youthful, energetic, and maternal True Girl aesthetic.</p>
                </div>
            </header>

            {/* Content */}
            <main className="py-12 px-4 font-body">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-lg">

                    <h2 className="text-brand-magenta text-3xl font-heading font-bold mt-8 mb-4 border-b-2 border-dashed border-brand-teal pb-2">1. Color Palette</h2>
                    <p className="mb-6 leading-relaxed text-gray-600 tracking-wide">The color system relies on high contrast, energetic primary colors grounded by soft, welcoming pastels and plenty of white space.</p>

                    <h3 className="text-brand-teal text-2xl font-heading font-bold mt-8 mb-4">Primary Colors (High Energy & Actions)</h3>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-[#E6007E] shadow-sm mr-4"></div>
                            <div><strong>True Magenta: `#E6007E`</strong><br /><span className="text-sm text-gray-500">Used for primary buttons like "Donate" or "Get Tickets", core brand highlights.</span></div>
                        </li>
                        <li className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-[#00A99D] shadow-sm mr-4"></div>
                            <div><strong>Vibrant Teal: `#00A99D`</strong><br /><span className="text-sm text-gray-500">Used for secondary buttons, navigation accents, and statistical call-outs.</span></div>
                        </li>
                    </ul>

                    <h3 className="text-brand-teal text-2xl font-heading font-bold mt-8 mb-4">Secondary Colors (Support & Accents)</h3>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-[#FFD100] shadow-sm mr-4"></div>
                            <div><strong>Sunshine Yellow: `#FFD100`</strong><br /><span className="text-sm text-gray-500">Used for highlighting text, doodle accents, and energetic bursts.</span></div>
                        </li>
                        <li className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-[#B892FF] shadow-sm mr-4"></div>
                            <div><strong>Soft Lavender: `#B892FF`</strong><br /><span className="text-sm text-gray-500">Used for background shapes, secondary icons, and soft text backgrounds.</span></div>
                        </li>
                    </ul>

                    <h2 className="text-brand-magenta text-3xl font-heading font-bold mt-12 mb-4 border-b-2 border-dashed border-brand-teal pb-2">2. Typography</h2>
                    <p className="mb-6 leading-relaxed text-gray-600 tracking-wide">Typography should feel friendly, highly legible, and slightly rounded to avoid "corporate" harshness.</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <h4 className="font-heading font-bold text-xl text-brand-charcoal mb-2">Quicksand</h4>
                            <p className="text-sm text-gray-500 mb-4">Used for Primary Headings (h1, h2, h3)</p>
                            <p className="font-heading font-bold text-3xl">Bringing Moms Closer to Jesus</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <h4 className="font-body font-bold text-xl text-brand-charcoal mb-2">Inter</h4>
                            <p className="text-sm text-gray-500 mb-4">Used for Body Copy (p, li)</p>
                            <p className="font-body text-base leading-relaxed">Helping mothers navigate the challenges of raising tween daughters by providing biblically-grounded resources.</p>
                        </div>
                    </div>

                    <h2 className="text-brand-magenta text-3xl font-heading font-bold mt-12 mb-4 border-b-2 border-dashed border-brand-teal pb-2">3. The "Modern Scrapbook" UI Elements</h2>
                    <ul className="list-disc pl-6 mb-4 space-y-4">
                        <li><strong>Buttons & Inputs:</strong> Fully rounded pill shapes. A subtle, soft drop shadow (`box-shadow: 0 4px 14px rgba(230, 0, 126, 0.2)`) on primary buttons to make them pop. No sharp, flat rectangular buttons should be used.</li>
                        <li><strong>Imagery & Framing:</strong> Images should rarely be perfect rectangles. Apply soft rounded corners (`border-radius: 16px`) or use organic "blob" masks.</li>
                        <li><strong>Graphic Accents ("Doodles"):</strong> Layer vector doodles around the edges of sections or behind images to replicate the scrapbook feel. Sparkles, yellow dashed lines, and teal arrows.</li>
                    </ul>

                </div>
            </main>
        </div>
    );
}
