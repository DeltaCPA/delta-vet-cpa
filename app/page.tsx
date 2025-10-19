'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              For Veterinary Practice Owners: Day 15 Close + Vet Profit Scorecard + Quarterly Tax Plan
            </h1>
            <p className="text-2xl text-blue-100 mb-8 leading-relaxed font-light">
              On-time or that cycle&apos;s fee is credited. Outcome first; risk killed.
            </p>
            
            {/* Proof near CTA */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8 border border-white/20">
              <div className="space-y-3">
                <p className="text-blue-100 text-sm">&quot;$27,800 identified via comp + 179 in 14 days&quot;</p>
                <p className="text-blue-100 text-sm">&quot;No April surprise—estimates aligned to YTD&quot;</p>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Link href="/vets">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-base font-semibold">
                  Get the Vet Tax Savings Diagnostic (15 min) <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-blue-100 max-w-md">
              We&apos;ll identify 3+ legal, defensible savings moves or you keep the plan—no strings.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - 3 Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">How It Works</h2>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-900">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">60-Day Cleanup & Calibration Sprint</h3>
              <p className="text-slate-600">We audit your books, set up clean chart of accounts, and align your systems.</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-teal-700">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Close by Day 15 + Vet Profit Scorecard</h3>
              <p className="text-slate-600">Month-end close by Day 15 with your Vet Profit Scorecard (COGS %, payroll %, revenue/DVM, avg ticket).</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-900">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quarterly Tax Planning Tied to YTD</h3>
              <p className="text-slate-600">Quarterly Vet Tax Planning tied to your YTD performance (entity/comp, 179/bonus, estimates).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Block - Prominent */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-teal-400" />
          <h3 className="text-4xl font-bold mb-4">On-Time Credit Guarantee</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            On-time close + scheduled quarterly review, or that cycle&apos;s fee is credited.
          </p>
          <Link href="/vets">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 font-semibold text-lg">
              Get the Vet Tax Savings Diagnostic (15 min)
            </Button>
          </Link>
        </div>
      </section>

      {/* Capacity + Urgency */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">60-Day Sprint Cohort Dates</h2>
          <p className="text-lg text-slate-600 mb-12">Limited spots. First-come with deposit.</p>
          
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-8 border-2 border-teal-400">
              <p className="text-2xl font-bold text-slate-900 mb-2">January 8</p>
              <p className="text-teal-600 font-bold text-lg">2 spots</p>
            </div>
            <div className="bg-white rounded-lg p-8 border-2 border-teal-400">
              <p className="text-2xl font-bold text-slate-900 mb-2">February 5</p>
              <p className="text-teal-600 font-bold text-lg">2 spots</p>
            </div>
            <div className="bg-white rounded-lg p-8 border-2 border-blue-400">
              <p className="text-2xl font-bold text-slate-900 mb-2">April 22</p>
              <p className="text-blue-600 font-bold text-lg">6 spots</p>
            </div>
          </div>
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
                <li><Link href="/login" className="hover:text-white transition">Existing Clients: Login/Support</Link></li>
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
