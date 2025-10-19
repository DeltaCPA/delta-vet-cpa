'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Delta CPA Group" width={40} height={40} className="h-10 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-slate-600 hover:text-blue-900 font-medium transition text-sm">
              Existing Clients: Login/Support
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero - Router to /vets */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              For Veterinary Practice Owners: Day 15 Close + Vet Profit Scorecard + Quarterly Tax Plan
            </h1>
            <p className="text-2xl text-blue-100 mb-8 leading-relaxed font-light">
              On-time financials you can trust&mdash;guaranteed. If we miss your close or quarterly review, that cycle&apos;s fee is credited.
            </p>
            <div className="flex gap-4 mb-12">
              <Link href="/vets">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-base font-semibold">
                  See the Vet Program <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="bg-slate-50 py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-sm text-slate-600 font-semibold mb-2">MARGIN LIFT</p>
              <p className="text-3xl font-bold text-teal-700">+$180K/year</p>
              <p className="text-xs text-slate-500 mt-2">Riverside Vet Clinic identified COGS waste</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-600 font-semibold mb-2">TAX SAVINGS</p>
              <p className="text-3xl font-bold text-blue-700">$47K saved</p>
              <p className="text-xs text-slate-500 mt-2">Westside Animal Hospital via entity optimization</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-600 font-semibold mb-2">CASH RUNWAY</p>
              <p className="text-3xl font-bold text-teal-700">+6 weeks</p>
              <p className="text-xs text-slate-500 mt-2">Northside Vet via AR/AP cleanup</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">How It Works</h2>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-900">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">60-Day Cleanup & Calibration</h3>
              <p className="text-slate-600">We audit your books, set up clean chart of accounts, and align your systems.</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-teal-700">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Day 15 Close + Scorecard</h3>
              <p className="text-slate-600">Month-end close by Day 15 with your Vet Profit Scorecard (COGS %, payroll %, revenue/DVM, avg ticket).</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-900">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quarterly Tax Planning</h3>
              <p className="text-slate-600">Quarterly Vet Tax Planning tied to your YTD performance (entity/comp, 179/bonus, estimates).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Reversal */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Shield className="w-12 h-12 mx-auto mb-4 text-teal-400" />
          <h3 className="text-3xl font-bold mb-3">On-Time Credit Guarantee</h3>
          <p className="text-xl text-blue-100 mb-6">
            If we miss your Day 15 close or scheduled quarterly review, that cycle&apos;s fee is credited. No questions asked.
          </p>
          <Link href="/vets">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 font-semibold">
              See the Vet Program
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Us - Credibility */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Why Delta CPA</h2>
          <div className="bg-white rounded-lg p-12 border-2 border-blue-200 max-w-2xl mx-auto">
            <div className="space-y-4 text-left">
              <p className="text-slate-700"><span className="font-bold text-blue-900">35+ years</span> of strategy & CPA leadership</p>
              <p className="text-slate-700"><span className="font-bold text-blue-900">Vet-specific</span> tax and sales-tax SOPs</p>
              <p className="text-slate-700"><span className="font-bold text-blue-900">On-time service credit guarantee</span> &mdash; we back our promise</p>
              <p className="text-slate-700"><span className="font-bold text-blue-900">Day 15 close</span> with Vet Profit Scorecard every month</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to See Your Numbers?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Get the Vet Profit Scorecard Template + 15-Minute Review. See exactly where you stand.
          </p>
          <Link href="/vets">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 text-base font-semibold">
              See the Vet Program <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-12 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Delta CPA Group</h4>
              <p className="text-sm">Accounting & Tax Advisory for Veterinary Practices</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/vets" className="hover:text-white transition">Vet Program</Link></li>
                <li><Link href="/login" className="hover:text-white transition">Client Login</Link></li>
                <li><a href="mailto:info@deltacpagroup.com" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p className="text-sm mb-2">260-440-2747</p>
              <p className="text-sm">info@deltacpagroup.com</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; 2025 Delta CPA Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
