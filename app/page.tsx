'use client'

import React, { useState } from 'react'
import type { FormEvent } from 'react'

export default function TailorTechMVP() {
  const [activeTab, setActiveTab] = useState<'home' | 'book' | 'dashboard' | 'ai'>('home')

  // Booking State
  const [service, setService] = useState('Custom Suit')
  const [date, setDate] = useState('')
  const [orderPlaced, setOrderPlaced] = useState<any>(null)

  // AI Assistant State
  const [occasion, setOccasion] = useState('Wedding')
  const [aiSuggestion, setAiSuggestion] = useState('')
  const [loadingAi, setLoadingAi] = useState(false)

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    const orderId = 'TT-' + Math.floor(100000 + Math.random() * 900000)
    setOrderPlaced({
      id: orderId,
      service,
      date: date || 'Tomorrow, 10:00 AM',
      eta: '5 Working Days',
      status: 'Measurement Scheduled'
    })
    setActiveTab('dashboard')
  }

  const generateAiOutfit = () => {
    setLoadingAi(true)
    setTimeout(() => {
      setAiSuggestion(`For a ${occasion}, our AI recommends a tailored Bandhgala in deep navy or royal charcoal silk-blend, paired with slim-fit trousers and structured minimal embroidery. Estimated fabric required: 3.2 meters.`)
      setLoadingAi(false)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* Navigation */}
      <nav className="border-b border-neutral-800 px-6 py-4 flex justify-between items-center sticky top-0 bg-neutral-950/80 backdrop-blur z-50">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black tracking-wider text-amber-400">ASAKO // TAILORTECH</span>
        </div>
        <div className="flex gap-4 text-sm font-medium">
          <button onClick={() => setActiveTab('home')} className={`hover:text-amber-400 transition ${activeTab === 'home' ? 'text-amber-400' : 'text-neutral-400'}`}>Home</button>
          <button onClick={() => setActiveTab('book')} className={`hover:text-amber-400 transition ${activeTab === 'book' ? 'text-amber-400' : 'text-neutral-400'}`}>Book Service</button>
          <button onClick={() => setActiveTab('dashboard')} className={`hover:text-amber-400 transition ${activeTab === 'dashboard' ? 'text-amber-400' : 'text-neutral-400'}`}>Dashboard {orderPlaced && '●'}</button>
          <button onClick={() => setActiveTab('ai')} className={`hover:text-amber-400 transition ${activeTab === 'ai' ? 'text-amber-400' : 'text-neutral-400'}`}>AI Style Assistant</button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto p-6">
        {/* HOME VIEW */}
        {activeTab === 'home' && (
          <div className="py-12 space-y-16">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <span className="bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-500/20">
                On-Demand Tailoring Platform MVP
              </span>
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
                Custom Tailoring, <span className="text-amber-400">Delivered to Your Doorstep.</span>
              </h1>
              <p className="text-neutral-400 text-lg">
                Experience luxury bespoke clothing without stepping out. Schedule a home measurement visit, hand over fabric, and track your garment creation in real-time.
              </p>
              <div className="flex justify-center gap-4">
                <button onClick={() => setActiveTab('book')} className="bg-amber-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-amber-400 transition">
                  Book a Visit Now
                </button>
                <button onClick={() => setActiveTab('ai')} className="border border-neutral-700 font-semibold px-6 py-3 rounded-xl hover:bg-neutral-900 transition">
                  Try AI Outfit Generator
                </button>
              </div>
            </div>

            {/* How It Works */}
            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-neutral-800">
              <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/80">
                <div className="text-amber-400 font-bold text-xl mb-2">01. Book & Schedule</div>
                <p className="text-neutral-400 text-sm">Choose your preferred garment type and select a convenient slot for our expert master tailor to visit your home.</p>
              </div>
              <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/80">
                <div className="text-amber-400 font-bold text-xl mb-2">02. Measurement & Fabric</div>
                <p className="text-neutral-400 text-sm">Our tailor records precise digital measurements and can collect your custom fabric or supply premium material catalogs.</p>
              </div>
              <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/80">
                <div className="text-amber-400 font-bold text-xl mb-2">03. Track & Deliver</div>
                <p className="text-neutral-400 text-sm">Monitor stitching progress live on your dashboard and receive your perfectly fitted garment within 5 days.</p>
              </div>
            </div>
          </div>
        )}

        {/* BOOKING VIEW */}
        {activeTab === 'book' && (
          <div className="max-w-xl mx-auto py-8">
            <h2 className="text-2xl font-bold mb-6">Schedule Your Tailoring Service</h2>
            <form onSubmit={handleBooking} className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Select Garment Type</label>
                <select value={service} onChange={(e) => setService(e.target.value)} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-white focus:border-amber-400 outline-none">
                  <option>Custom Suit / Tuxedo</option>
                  <option>Bespoke Kurta & Sherwani</option>
                  <option>Formal Blazer & Trousers</option>
                  <option>Casual Custom Shirt</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Visit Date & Time</label>
                <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-white focus:border-amber-400 outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Delivery Address (Kanpur)</label>
                <textarea placeholder="Enter house no., street, landmark..." className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-white focus:border-amber-400 outline-none" rows={3} required defaultValue="123 Civil Lines, Kanpur"></textarea>
              </div>
              <button type="submit" className="w-full bg-amber-500 text-black font-semibold py-3 rounded-xl hover:bg-amber-400 transition">
                Confirm & Generate Order ID
              </button>
            </form>
          </div>
        )}

        {/* DASHBOARD VIEW */}
        {activeTab === 'dashboard' && (
          <div className="py-8 space-y-6">
            <h2 className="text-2xl font-bold">Customer Dashboard & Order Tracking</h2>
            {orderPlaced ? (
              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl space-y-6">
                <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
                  <div>
                    <span className="text-xs text-amber-400 font-mono font-bold uppercase tracking-wider">Active Order ID</span>
                    <h3 className="text-xl font-bold">{orderPlaced.id}</h3>
                  </div>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-3 py-1 rounded-full font-medium">
                    {orderPlaced.status}
                  </span>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
                    <div className="text-neutral-400 text-xs">Service Ordered</div>
                    <div className="font-semibold mt-1">{orderPlaced.service}</div>
                  </div>
                  <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
                    <div className="text-neutral-400 text-xs">Measurement Visit</div>
                    <div className="font-semibold mt-1">{orderPlaced.date}</div>
                  </div>
                  <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
                    <div className="text-neutral-400 text-xs">Estimated Delivery (ETA)</div>
                    <div className="font-semibold mt-1 text-amber-400">{orderPlaced.eta}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 bg-neutral-900/30 rounded-2xl border border-neutral-800">
                <p className="text-neutral-400 mb-4">No active orders found.</p>
                <button onClick={() => setActiveTab('book')} className="bg-amber-500 text-black font-semibold px-6 py-2.5 rounded-xl">
                  Book Your First Service
                </button>
              </div>
            )}
          </div>
        )}

        {/* AI ASSISTANT VIEW */}
        {activeTab === 'ai' && (
          <div className="max-w-2xl mx-auto py-8 space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Occasion-Based AI Outfit Generator</h2>
              <p className="text-neutral-400 text-sm">Powered by AI to suggest bespoke tailoring designs matching your event.</p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Select Occasion</label>
                <select value={occasion} onChange={(e) => setOccasion(e.target.value)} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-white focus:border-amber-400 outline-none">
                  <option>Wedding Reception</option>
                  <option>Corporate Gala / Conference</option>
                  <option>Festive Celebration (Diwali/Eid)</option>
                  <option>Casual Cocktail Evening</option>
                </select>
              </div>
              <button onClick={generateAiOutfit} disabled={loadingAi} className="w-full bg-amber-500 text-black font-semibold py-3 rounded-xl hover:bg-amber-400 transition disabled:opacity-50">
                {loadingAi ? 'Generating Style Recommendation...' : 'Generate AI Outfit & Fabric Match'}
              </button>

              {aiSuggestion && (
                <div className="bg-neutral-950 p-5 rounded-xl border border-amber-500/30 text-amber-200/90 text-sm leading-relaxed mt-4 animate-fade-in">
                  <div className="font-bold text-amber-400 mb-1">AI Tailoring Assistant Output:</div>
                  {aiSuggestion}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}