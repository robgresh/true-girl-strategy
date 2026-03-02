export default function MarketingCapturePlan() {
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
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-charcoal mb-4">Marketing Capture Plan</h1>
                    <p className="text-lg text-gray-700 font-body">A comprehensive strategy analyzing the mission, target audience, and content pillars of True Girl.</p>
                </div>
            </header>

            {/* Content */}
            <main className="py-12 px-4 font-body">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-lg">
                    <h2 className="text-brand-magenta text-3xl font-heading font-bold mt-8 mb-4 border-b-2 border-dashed border-brand-teal pb-2">1. Brand Mission & Core Essence</h2>
                    <p className="mb-4 leading-relaxed tracking-wide"><strong>Mission Statement:</strong> Bringing Moms+Daughters Closer to Each Other and Closer to Jesus.</p>
                    <p className="mb-4 leading-relaxed tracking-wide"><strong>Focus:</strong> Helping mothers navigate the challenges of raising tween daughters by providing biblically-grounded resources, fostering deep connections, and giving girls the courage to be who God created them to be in an ever-changing world.</p>

                    <h2 className="text-brand-magenta text-3xl font-heading font-bold mt-12 mb-4 border-b-2 border-dashed border-brand-teal pb-2">2. Target Audience</h2>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Primary Audience:</strong> Christian mothers (typically 30s-40s) of tween girls. They are looking for guidance, discipleship tools, and ways to connect with their daughters.</li>
                        <li><strong>Secondary Audience:</strong> Tween girls (typically ages 7-12). The brand must appeal to them as fun, relatable, and engaging, rather than feeling like a chore or "boring schoolwork."</li>
                    </ul>

                    <h2 className="text-brand-magenta text-3xl font-heading font-bold mt-12 mb-4 border-b-2 border-dashed border-brand-teal pb-2">3. Content & Product Pillars</h2>
                    <p className="mb-6 leading-relaxed">To develop scalable marketing assets, we categorized True Girl offerings into these structural pillars:</p>

                    <div className="space-y-4 my-6">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <h4 className="font-heading font-bold text-xl text-brand-teal mt-0 mb-2">Live Events & Experiences</h4>
                            <p className="text-sm mb-0">(e.g., True Girl Crazy Hair Tour) High-energy connection points that create lasting memories.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <h4 className="font-heading font-bold text-xl text-brand-teal mt-0 mb-2">At-Home Discipleship</h4>
                            <p className="text-sm mb-0">(e.g., Bible studies using the "Zoom, Zoom, Zero, Zip" method, fiction books). Equipping moms with tools for daily use.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <h4 className="font-heading font-bold text-xl text-brand-teal mt-0 mb-2">Audio Content</h4>
                            <p className="text-sm mb-0"><strong>True Girl Podcast:</strong> For tweens and moms to listen to together. <br /><strong>True Girl Momcast:</strong> Focused content specifically for mothers navigating tough parenting topics.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <h4 className="font-heading font-bold text-xl text-brand-teal mt-0 mb-2">Tangible Products</h4>
                            <p className="text-sm mb-0">(e.g., True Girl Subscription Box) Delivering excitement and physical connection tools directly to the hard-to-reach tween demographic.</p>
                        </div>
                    </div>

                    <h2 className="text-brand-magenta text-3xl font-heading font-bold mt-12 mb-4 border-b-2 border-dashed border-brand-teal pb-2">4. Strategy Execution Steps</h2>
                    <p className="mb-4 leading-relaxed tracking-wide">Based on this capture plan, our agency executed the following sprints:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Establish strict Brand Guidelines to replicate the "Modern Scrapbook" aesthetic.</li>
                        <li>Develop reusable Social Media and Email HTML templates.</li>
                        <li>Design a Conversion Funnel utilizing a free digital Lead Magnet.</li>
                        <li>Draft a Messaging Framework balancing biblical truth with maternal empathy.</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
