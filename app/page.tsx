'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, CheckCircle2, BarChart3, Clock, Shield, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-slate-900 bg-clip-text text-transparent">Delta CPA</div>
          <div className="flex items-center gap-8">
            <Link href="#services" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition">Services</Link>
            <Link href="#about" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition">About</Link>
            <Link href="#contact" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition">Contact</Link>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-lg hover:shadow-xl transition-all">Book a Diagnostic</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm font-semibold border border-teal-500/30">For Veterinary Practices</div>
              <h1 className="text-7xl font-bold text-white mb-6 leading-tight">
                Accounting &amp; Tax Advisory Built for Vets
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed font-light">
                Close by Day 15. Vet Profit Scorecard. Quarterly Tax Planning. <span className="font-semibold text-white">On-time or credited.</span>
              </p>
              <div className="flex gap-4">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                  Schedule Your Diagnostic <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="px-8 py-6 text-base font-semibold border-2 border-slate-400 text-white hover:bg-slate-800">
                  Learn More
                </Button>
              </div>
              <div className="mt-12 flex gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" />
                  <span className="text-slate-300">No long-term contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" />
                  <span className="text-slate-300">Transparent pricing</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl transform -rotate-6 opacity-20"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 h-96 flex flex-col items-center justify-center border border-teal-500/30 shadow-2xl">
                <div className="mb-6 p-4 bg-slate-700 rounded-2xl shadow-lg">
                  <BarChart3 className="w-16 h-16 text-teal-500" />
                </div>
                <p className="text-white font-bold text-lg mb-2">Vet Profit Scorecard</p>
                <p className="text-slate-400 text-sm text-center">COGS • Payroll % • Revenue/DVM • Cash Forecast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">What You Get</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Everything you need to run a profitable practice with clarity and confidence</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <Card className="p-8 border-slate-200 hover:shadow-xl hover:border-teal-400 transition-all duration-300 group">
              <div className="mb-6 p-3 bg-slate-100 rounded-xl w-fit group-hover:bg-teal-600 transition-colors">
                <Clock className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Month-End Close by Day 15</h3>
              <p className="text-slate-600 leading-relaxed">Clean, accurate books delivered on schedule. Every single month. No excuses.</p>
            </Card>
            <Card className="p-8 border-slate-200 hover:shadow-xl hover:border-teal-400 transition-all duration-300 group">
              <div className="mb-6 p-3 bg-slate-100 rounded-xl w-fit group-hover:bg-teal-600 transition-colors">
                <TrendingUp className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Vet Profit Scorecard</h3>
              <p className="text-slate-600 leading-relaxed">COGS %, payroll %, revenue per DVM, average ticket, visits, and cash forecast.</p>
            </Card>
            <Card className="p-8 border-slate-200 hover:shadow-xl hover:border-teal-400 transition-all duration-300 group">
              <div className="mb-6 p-3 bg-slate-100 rounded-xl w-fit group-hover:bg-teal-600 transition-colors">
                <Zap className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Quarterly Tax Planning</h3>
              <p className="text-slate-600 leading-relaxed">Entity optimization, retirement planning, 179/bonus, and estimate alignment.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Comprehensive accounting and tax solutions designed specifically for veterinary practices</p>
          </div>
          <div className="space-y-6">
            <div className="border-2 border-slate-200 rounded-2xl p-10 bg-white hover:border-teal-400 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-slate-100 rounded-xl">
                  <BarChart3 className="w-6 h-6 text-slate-900" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Bookkeeping &amp; Compliance</h3>
              </div>
              <ul className="space-y-3 text-slate-600 ml-16">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Monthly bookkeeping with close by Day 15</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Payroll processing and management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Sales tax and inventory discipline for pharmacy/retail</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Annual business and personal tax returns</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-slate-200 rounded-2xl p-10 bg-white hover:border-teal-400 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-slate-100 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-slate-900" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Tax Planning &amp; Advisory</h3>
              </div>
              <ul className="space-y-3 text-slate-600 ml-16">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Quarterly tax planning reviews tied to actual results</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Entity and owner compensation optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Retirement plan selection and funding timing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Section 179 and bonus depreciation strategies</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-slate-200 rounded-2xl p-10 bg-white hover:border-teal-400 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-slate-100 rounded-xl">
                  <Shield className="w-6 h-6 text-slate-900" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">CFO Advisory</h3>
              </div>
              <ul className="space-y-3 text-slate-600 ml-16">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Monthly KPI reviews and financial analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Budget and cash flow forecasting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Practice expansion and growth modeling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Debt and refinancing analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="relative py-24 bg-gradient-to-br from-teal-600 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6 inline-block p-3 bg-white/20 rounded-xl">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold mb-6">Our Guarantee</h2>
          <p className="text-2xl mb-8 font-light leading-relaxed">
            On-time close by Day 15 and scheduled quarterly reviews, or that cycle&apos;s fee is credited.
          </p>
          <p className="text-lg text-teal-100">
            We stake our reputation on delivering what we promise. If we miss, you don&apos;t pay.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-slate-900 mb-12">Why Delta CPA</h2>
          <div className="grid grid-cols-2 gap-16">
            <div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed font-light">
                We specialize <span className="font-semibold text-slate-900">exclusively in veterinary practices</span>. We understand your unique challenges: managing multiple revenue streams, controlling pharmacy inventory and COGS, optimizing associate compensation, and planning for growth.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Our standardized approach means predictable delivery, transparent pricing, and a clear path to profitability. We don&apos;t do custom chaos—we do disciplined systems that scale.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors border border-slate-200">
                <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Vet-Specific Expertise</h4>
                  <p className="text-slate-600 text-sm">We know your business model inside and out.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors border border-slate-200">
                <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">On-Time Delivery</h4>
                  <p className="text-slate-600 text-sm">Close by Day 15, every month. Guaranteed.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors border border-slate-200">
                <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Proactive Tax Planning</h4>
                  <p className="text-slate-600 text-sm">Quarterly reviews tied to your actual results.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors border border-slate-200">
                <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Clear Pricing</h4>
                  <p className="text-slate-600 text-sm">No surprises. Transparent, standardized fees.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Increase Your Practice Profit?</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
            Schedule a 15-minute Vet Tax Savings Diagnostic. We&apos;ll identify 3+ legal tax opportunities and send you a one-page plan.
          </p>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-7 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all">
            Schedule Your Diagnostic <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="font-bold text-white mb-4 text-lg">Delta CPA Group</h4>
              <p className="text-sm leading-relaxed">Accounting &amp; Tax Advisory for Veterinary Practices</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-lg">Contact</h4>
              <p className="text-sm mb-2">info@deltacpagroup.com</p>
              <p className="text-sm">260-440-2747</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-lg">Location</h4>
              <p className="text-sm">Fort Wayne, IN</p>
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
