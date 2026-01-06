// ...existing code...
export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-orange-50 to-white font-sans">
      <div className="max-w-6xl mx-auto px-6">
        {/* Horizontal flex layout (keeps image/card size) */}
        <div className="flex flex-row items-start gap-14 md:gap-20 lg:gap-28 overflow-x-auto scrollbar-hide">
          {/* Left: Text / Messaging (fixed comfortable width) */}
          <div className="flex-shrink-0 w-[560px] space-y-6 text-left">
            {/* <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium w-max">
              Beta · Early access
            </div> */}
<div className="flex items-start gap-4">
             <span className="mt-1 w-1.5 h-12 rounded-full bg-orange-400 inline-block" aria-hidden />
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                  BookMyFoodWalk
                </h2>
                <div className="mt-1 text-lg md:text-xl font-semibold text-orange-600">
                  Authentic food walks, crafted locally
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-prose">
              We’re a small, focused team building a trusted platform that connects travellers with vetted local food guides across India.
              This project is in early-stage — we’re refining routes, training guides and learning from our first walkers. Join early to shape the product and get direct support and perks.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-start gap-4">
                <span className="w-9 h-9 rounded-full bg-orange-50 text-orange-600 grid place-items-center font-semibold">1</span>
                <div>
                  <div className="font-semibold text-gray-800">Vetted guides</div>
                  <div className="text-sm text-gray-600 mt-1">Background checks, local training and guide support.</div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="w-9 h-9 rounded-full bg-orange-50 text-orange-600 grid place-items-center font-semibold">2</span>
                <div>
                  <div className="font-semibold text-gray-800">Curated routes</div>
                  <div className="text-sm text-gray-600 mt-1">Authentic street-food experiences — no staged tours.</div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="w-9 h-9 rounded-full bg-orange-50 text-orange-600 grid place-items-center font-semibold">3</span>
                <div>
                  <div className="font-semibold text-gray-800">Small groups</div>
                  <div className="text-sm text-gray-600 mt-1">Safer, more personal experiences for walkers.</div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="w-9 h-9 rounded-full bg-orange-50 text-orange-600 grid place-items-center font-semibold">4</span>
                <div>
                  <div className="font-semibold text-gray-800">Support local</div>
                  <div className="text-sm text-gray-600 mt-1">Sustainable tours that benefit vendors and communities.</div>
                </div>
              </li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-3 items-center">
              <a
                href="#contact"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-full font-medium shadow"
              >
                Join waitlist
              </a>

              <a
                href="/become-guide"
                className="inline-block border border-orange-600 text-orange-600 px-4 py-3 rounded-full font-medium hover:bg-orange-50"
              >
                Become a guide
              </a>

              {/* <a
                href="mailto:hello@bookmyfoodwalk.example"
                className="inline-block text-sm text-gray-600 self-center"
              >
                Contact — feedback & partnerships →
              </a> */}
            </div>

            {/* <div className="mt-8 flex flex-wrap gap-8 items-center">
              <div className="min-w-[90px]">
                <div className="text-2xl font-extrabold text-orange-600">120+</div>
                <div className="text-xs text-gray-500">Walks (so far)</div>
              </div>
              <div className="min-w-[90px]">
                <div className="text-2xl font-extrabold text-orange-600">45</div>
                <div className="text-xs text-gray-500">Verified guides</div>
              </div>
              <div className="min-w-[90px]">
                <div className="text-2xl font-extrabold text-orange-600">4.8★</div>
                <div className="text-xs text-gray-500">Avg. rating</div>
              </div>
            </div> */}
          </div>

          {/* Right: Visual card (keep same image size) */}
          <div className="flex-shrink-0 w-[420px]">
            <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-orange-50 bg-white">
              <div className=" bg-gray-100">
                {/* <di className="h-80 md:h-96 bg-gray-100"> */}
                <img
                  src="/public/foodguide1.jpg"
                  alt="Local guide showing street food"
                  // className="w-full h-full object-cover"
                  className="w-full h-auto object-center"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  We work closely with local vendors and guides to create real, sustainable experiences. As an early project, every feedback helps us improve — early members receive direct support and special perks.
                </p>

                <div className="flex gap-3 flex-wrap mt-2">
                  <button className="px-4 py-2 rounded-full bg-orange-50 text-orange-600 border border-orange-100 text-sm">
                    Trusted payments
                  </button>
                  <button className="px-4 py-2 rounded-full bg-orange-50 text-orange-600 border border-orange-100 text-sm">
                    Local support
                  </button>
                  <button className="px-4 py-2 rounded-full bg-orange-50 text-orange-600 border border-orange-100 text-sm">
                    Small-group friendly
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// ...existing code...