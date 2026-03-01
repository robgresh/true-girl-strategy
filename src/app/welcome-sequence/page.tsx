export default function WelcomeSequence() {
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
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-charcoal mb-4">Welcome Email Sequence</h1>
                    <p className="text-lg text-gray-700 font-body">A 4-part automated flow designed to build trust and eventually pitch True Girl products.</p>
                </div>
            </header>

            {/* Content */}
            <main className="py-12 px-4 font-body">
                <div className="max-w-4xl mx-auto space-y-8">

                    {/* Intro Block */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 prose prose-lg">
                        <p className="leading-relaxed">This sequence triggers immediately after a mom opts in to download the Lead Magnet. The goal is to deliver value, build immense trust through empathy, and introduce the Subscription Box or a Live Event.</p>
                    </div>

                    {/* Email 1 */}
                    <div className="bg-white rounded-3xl shadow-sm border-2 border-brand-teal overflow-hidden">
                        <div className="bg-gray-50 border-b border-gray-100 p-6 flex items-start justify-between">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-3 py-1 rounded-full mb-3 inline-block">Trigger: Immediate</span>
                                <h3 className="font-heading font-bold text-2xl text-brand-charcoal mb-1">Email 1: The Delivery</h3>
                                <p className="text-sm text-gray-500 font-medium"><strong>Subject:</strong> Your guide is here! (+ a little encouragement)<br /><strong>Preview:</strong> Open this when you need a quick win with your daughter...</p>
                            </div>
                        </div>
                        <div className="p-8 prose prose-lg max-w-none text-gray-700">
                            <p>Hey [Name],</p>
                            <p>Parenting a tween girl right now is no joke. Between the sudden mood swings, the screen-time battles, and trying to navigate the complex world of friendships, it&apos;s easy to feel like you&apos;re losing your little girl.</p>
                            <p className="font-bold text-brand-magenta text-xl">We see you, Mom. And we want you to know you&apos;re doing a great job.</p>
                            <p>You signed up for <strong>&quot;5 Conversations to Have with Your Tween This Week,&quot;</strong> and your digital copy is ready for you right here:</p>
                            <div className="my-6">
                                <a href="/lead_magnet.pdf" download className="inline-block bg-brand-magenta text-white font-bold py-3 px-6 rounded-full shadow hover:bg-pink-600 transition">Download Your Copy Now</a>
                            </div>
                            <p><strong>How to use this guide:</strong><br />Don&apos;t try to force all five conversations tonight! Pick just one for the drive to practice tomorrow, or try one over breakfast. The goal isn&apos;t a deep, two-hour theological discussion. The goal is <em>connection</em>.</p>
                            <p>When you ask these questions, your only job is to listen.</p>
                            <p>Over the next few days, I&apos;m going to drop into your inbox with a few more resources and stories to help you connect with your daughter&apos;s heart and give her the courage to be exactly who God created her to be.</p>
                            <p>Until then, take a deep breath. God chose <em>you</em> to be her mom for a reason.</p>
                            <p>Cheering you on,<br /><strong>The True Girl Team</strong></p>
                        </div>
                    </div>

                    {/* Email 2 */}
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden mt-8">
                        <div className="bg-gray-50 border-b border-gray-100 p-6 flex items-start justify-between">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-200 px-3 py-1 rounded-full mb-3 inline-block">Trigger: Day 3</span>
                                <h3 className="font-heading font-bold text-2xl text-brand-charcoal mb-1">Email 2: The Empathy Pivot</h3>
                                <p className="text-sm text-gray-500 font-medium"><strong>Subject:</strong> 🙋‍♀️ Raise your hand if you&apos;ve ever felt like a &quot;bad mom&quot;...<br /><strong>Preview:</strong> We&apos;ve all been there. Here is why you need to give yourself some grace today.</p>
                            </div>
                        </div>
                        <div className="p-8 prose prose-lg max-w-none text-gray-700">
                            <p>Hey [Name],</p>
                            <p>Did you get a chance to try out the &quot;Rose and Thorn&quot; conversation starter from the guide we sent earlier this week?</p>
                            <div className="bg-brand-blush border-l-4 border-brand-magenta p-6 my-6 italic text-lg text-brand-charcoal font-medium">
                                "We wanted to pop into your inbox today just to say one thing: You don't have to be a perfect mom to point your daughter to a perfect Savior."
                            </div>
                            <p>True Girl was founded by best-selling author Dannah Gresh <em>while</em> she was in the thick of raising her own tween daughter. Dannah will be the first to tell you that she didn&apos;t get it all right. There were moments of frustration, confusing hormone changes, and days where she felt totally unequipped.</p>
                            <p>But here is the secret we&apos;ve learned after working with thousands of moms: <strong>Your daughter doesn&apos;t need you to be perfect. She just needs you to be present.</strong></p>
                            <p>If you&apos;re feeling overwhelmed by the culture your daughter is growing up in, we want to invite you to listen to <strong>The True Girl Momcast</strong>.</p>
                            <div className="my-6">
                                <a href="#" className="inline-block bg-brand-teal text-white font-bold py-3 px-6 rounded-full shadow hover:bg-teal-600 transition">Listen to the Latest Episode</a>
                            </div>
                            <p>You&apos;ve got this, Mom.</p>
                        </div>
                    </div>

                    {/* Email 3 */}
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden mt-8">
                        <div className="bg-gray-50 border-b border-gray-100 p-6 flex items-start justify-between">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-200 px-3 py-1 rounded-full mb-3 inline-block">Trigger: Day 5</span>
                                <h3 className="font-heading font-bold text-2xl text-brand-charcoal mb-1">Email 3: The Method Introduction</h3>
                                <p className="text-sm text-gray-500 font-medium"><strong>Subject:</strong> How to get her to actually *like* reading her Bible 📖<br /><strong>Preview:</strong> It&apos;s easier than you think (and way more fun).</p>
                            </div>
                        </div>
                        <div className="p-8 prose prose-lg max-w-none text-gray-700">
                            <p>Hey [Name],</p>
                            <p>We hear this from moms all the time: <em>&quot;I know I need to be discipling my daughter, but I don&apos;t know where to start, and honestly... she gets bored when we read the Bible together.&quot;</em></p>
                            <p>If that sounds familiar, you aren&apos;t alone. It&apos;s hard to compete with TikTok and YouTube!</p>
                            <p>That&apos;s why at True Girl, we don&apos;t just teach girls Bible stories; <strong>we teach them <em>how</em> to study the Bible.</strong></p>
                            <p>We use a super simple (and incredibly fun) method called <strong>Zoom, Zoom, Zero, Zip</strong>.</p>
                            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl my-6">
                                <ul className="space-y-3 m-0 list-none pl-0">
                                    <li><strong>1. Zoom Out:</strong> What&apos;s the big picture of the story?</li>
                                    <li><strong>2. Zoom In:</strong> Let&apos;s look at the specific details.</li>
                                    <li><strong>3. Zero In:</strong> What does this verse <em>actually</em> mean?</li>
                                    <li><strong>4. Zip It Up:</strong> How does God want us to act on this today?</li>
                                </ul>
                            </div>
                            <p>Tomorrow, I&apos;m going to show you the easiest way to bring this exact method into your living room—without having to plan a single lesson yourself.</p>
                        </div>
                    </div>

                    {/* Email 4 */}
                    <div className="bg-white rounded-3xl shadow-lg border-2 border-brand-magenta overflow-hidden mt-8">
                        <div className="bg-pink-50 border-b border-pink-100 p-6 flex items-start justify-between">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-white bg-brand-magenta px-3 py-1 rounded-full mb-3 inline-block">Trigger: Day 7</span>
                                <h3 className="font-heading font-bold text-2xl text-brand-charcoal mb-1">Email 4: The Core Pitch</h3>
                                <p className="text-sm text-gray-600 font-medium"><strong>Subject:</strong> Your monthly Mom+Daughter Date night in a box 📦 ✨<br /><strong>Preview:</strong> Let us do the planning for you.</p>
                            </div>
                        </div>
                        <div className="p-8 prose prose-lg max-w-none text-gray-700">
                            <p>Hey [Name],</p>
                            <p>Over the last week, we&apos;ve talked about practical conversation starters, giving yourself grace as a mom, and how to make Bible study actually <em>fun</em> for a tween girl.</p>
                            <p>But we know that between carpools, making dinner, and managing your own life, finding the time to prep a discipleship lesson or plan a purposeful mom-daughter date is exhausting.</p>
                            <p className="text-xl font-heading font-bold text-brand-magenta text-center my-8">So, let us do the planning for you.</p>
                            <p>Meet the <strong>True Girl Subscription Box</strong>.</p>
                            <p>It&apos;s the most fun you&apos;ll ever have digging into God&apos;s Word together at home. Intentionally packed with your tween girl in mind, every single box delivers:</p>
                            <ul className="mb-8">
                                <li>📖 <strong>A Daily Devotional:</strong> Using our signature method so she learns to study the Bible daily.</li>
                                <li>👯‍♀️ <strong>A Mom+Daughter Date Plan:</strong> We provide the instructions, the conversation guides, and all the activities you need for a distraction-free connection night.</li>
                                <li>🎉 <strong>Fun Extras:</strong> Exclusive True Girl merch, stickers, and tools to make her feel seen and celebrated.</li>
                            </ul>
                            <div className="text-center my-10">
                                <a href="#" className="inline-block bg-brand-magenta text-white font-heading text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:bg-pink-600 hover:shadow-xl transform hover:-translate-y-1 transition">Start Your Subscription Today</a>
                            </div>
                            <p className="text-center text-sm text-gray-500">We can&apos;t wait to welcome you to the True Girl family!</p>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
