import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles, Store, Banknote, Bot, Zap, ShieldCheck, ArrowRight,
  CheckCircle2, Terminal, MousePointerClick, HandCoins
} from 'lucide-react'

const REF_IMG = 'https://www.designarena.ai/u/f6bc977f-69c0-4f74-b7bc-c604ed1e0a1c'

const paths = [
  {
    id: 'tips', icon: Sparkles, title: 'Tips & Events',
    desc: 'Spray walls — winks rain onto a live event screen. Fans pay @handle in one primitive.',
    meta: '/wink/<handle> · /wall/<slug>'
  },
  {
    id: 'merchant', icon: Store, title: 'Merchant Checkout',
    desc: 'Printable QR pay codes and invoices that reconcile by reference. 0% platform fee.',
    meta: '/pay/<code> · INV-042'
  },
  {
    id: 'payouts', icon: Banknote, title: 'Payouts & Payroll',
    desc: 'Pay requests and batch payroll to remote workers\u2019 @handles. One batch, all remote.',
    meta: '/request/<handle> · /payroll'
  },
  {
    id: 'agents', icon: Bot, title: 'Machine Payments',
    desc: 'MPP — AI agents pay @handles over HTTP 402. Stripe-grade machine compliance.',
    meta: '/api/mpp/* · 402'
  },
]

const ops = [
  { icon: ShieldCheck, title: 'Verify on-chain before confirm', desc: 'Every path re-checks the receipt independently. The chain is the source of truth for money; the ledger is the source of truth for meaning.' },
  { icon: MousePointerClick, title: 'Non-custodial by design', desc: 'Keys live in the browser. Transfers are signed by the payer\u2019s wallet — we never touch funds.' },
  { icon: Terminal, title: 'IETF-draft MPP protocol', desc: 'WWW-Authenticate: Payment on 402, Payment credential on retry, receipt on 200.' },
  { icon: HandCoins, title: 'Full amount, always', desc: 'Recipients receive the entire amount. Senders pay only ~$0.008 pathUSD network fee. Zero ETH gas.' },
]

function Nav() {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-red-600 shadow-[0_0_24px_rgba(239,68,68,0.8)] animate-pulse" />
        <span className="text-xl font-extrabold tracking-tight text-white">wink</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-red-200/80">
        <a href="#paths" className="hover:text-white transition-colors">Paths</a>
        <a href="#verify" className="hover:text-white transition-colors">Verification</a>
        <a href="#mpp" className="hover:text-white transition-colors">MPP</a>
        <a href="#join" className="rounded-full border border-red-500/50 px-4 py-2 text-red-100 hover:bg-red-600/20 transition-colors">Launch app</a>
      </nav>
    </header>
  )
}

function Hero() {
  const [amount, setAmount] = useState('3')
  const [handle, setHandle] = useState('@adaeze')
  const [sent, setSent] = useState(false)

  const wink = () => {
    setSent(true)
    setTimeout(() => setSent(false), 1800)
  }

  return (
    <section className="relative z-10 px-6 md:px-12 pt-10 md:pt-20 pb-16">
      <div className="max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-300">
            <Zap className="h-3.5 w-3.5" /> Payments on Tempo · pathUSD stablecoin
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-3xl text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.02]"
        >
          Anyone, anywhere, paid with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-rose-400 drop-shadow-[0_0_30px_rgba(239,68,68,0.45)]">wink</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-base md:text-lg text-red-200/70 leading-relaxed"
        >
          Wink is the name layer for payments. One primitive — pay a @username — carried across tips,
          checkout, payroll, and AI agents. All settling as pathUSD on Tempo.
        </motion.p>

        {/* Interactive wink form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 max-w-xl rounded-2xl border border-red-500/30 bg-black/60 backdrop-blur-xl p-5 shadow-[0_0_60px_rgba(190,18,60,0.25)]"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-red-300/80">Recipient</span>
              <input
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-red-500/30 bg-red-950/40 px-4 py-3 font-mono text-sm text-white outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/30"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-red-300/80">Amount (pathUSD)</span>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))}
                className="mt-1.5 w-full rounded-xl border border-red-500/30 bg-red-950/40 px-4 py-3 font-mono text-sm text-white outline-none focus:border-red-400 focus:ring-2 focus:ring-red-500/30"
              />
            </label>
          </div>
          <button
            onClick={wink}
            className="group relative mt-4 w-full overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-6 py-3.5 font-bold text-white shadow-[0_10px_40px_rgba(220,38,38,0.45)] transition-transform hover:scale-[1.01] active:scale-[0.99]"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.span key="ok" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-5 w-5" /> Winked {handle || '@handle'} 😉
                </motion.span>
              ) : (
                <motion.span key="go" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="flex items-center justify-center gap-2">
                  Send a wink <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <p className="mt-3 text-center text-xs text-red-300/50">
            Demo settle · memo reconciled on-chain · ~1s confirm
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm">
          {[
            ['$', 'pathUSD stablecoin on Tempo Moderato'],
            ['0%', 'platform fee — recipients get the full amount'],
            ['~8bps', 'network fee paid by sender only'],
          ].map(([v, l]) => (
            <div key={l} className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white">{v}</span>
              <span className="max-w-[160px] text-xs leading-snug text-red-200/60">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Paths() {
  return (
    <section id="paths" className="relative z-10 px-6 md:px-12 pb-16">
      <div className="max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          One primitive, <span className="text-red-400">four money paths</span>
        </h2>
        <p className="mt-3 max-w-2xl text-red-200/60">
          The rails are free. The names are the business. Every path settles as pathUSD on Tempo with a 32-byte reconciliation memo.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {paths.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-red-500/25 bg-gradient-to-b from-red-950/50 to-black/60 p-6 backdrop-blur-md transition-colors hover:border-red-400/60 hover:from-red-950/80"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600/20 text-red-400 ring-1 ring-red-500/30 transition-all group-hover:bg-red-600/40 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]">
                <p.icon className="h-5.5 w-5.5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-red-200/60">{p.desc}</p>
              <p className="mt-4 font-mono text-[11px] text-red-400/70">{p.meta}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Verify() {
  return (
    <section id="verify" className="relative z-10 px-6 md:px-12 pb-16">
      <div className="max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Verification <span className="text-red-400">oaths</span>
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {ops.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex gap-4 rounded-2xl border border-red-500/25 bg-black/50 p-6 backdrop-blur-md"
            >
              <o.icon className="mt-0.5 h-6 w-6 shrink-0 text-red-400" />
              <div>
                <h3 className="font-bold text-white">{o.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-red-200/60">{o.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Ledger kinds */}
        <div className="mt-8 rounded-2xl border border-red-500/25 bg-gradient-to-r from-red-950/60 via-black/60 to-red-950/60 p-6 backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <span className="text-sm font-bold uppercase tracking-widest text-red-300">Ledger kinds</span>
            {['wink · tips', 'sale · pay codes', 'wage · payroll', 'agent · MPP'].map((k) => (
              <span key={k} className="rounded-full border border-red-500/30 bg-red-950/50 px-4 py-1.5 font-mono text-xs text-red-200">{k}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Mpp() {
  return (
    <section id="mpp" className="relative z-10 px-6 md:px-12 pb-16">
      <div className="max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Machine payments over <span className="text-red-400">HTTP 402</span>
          </h2>
          <p className="mt-3 text-red-200/60 leading-relaxed">
            Tempo × Stripe MPP (IETF draft). An agent requests a resource, gets a 402 with
            <code className="mx-1 rounded bg-red-950/70 px-1.5 py-0.5 font-mono text-red-300">WWW-Authenticate: Payment</code>,
            pays, and receives a receipt. No dashboards, no humans — agents pay @handles.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm text-red-200/70">
            {[
              '402 + WWW-Authenticate: Payment on unauthenticated requests',
              'Authorization: Payment <txHash> as the credential',
              'Payment-Receipt header on success (200)',
            ].map((s) => (
              <li key={s} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                <span className="font-mono text-[13px]">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-red-500/30 bg-black/70 p-6 font-mono text-[13px] leading-7 text-red-200/90 shadow-[0_0_60px_rgba(190,18,60,0.25)] backdrop-blur-md overflow-x-auto">
          <p><span className="text-red-500">GET</span> /api/mpp/analytics/@adaeze</p>
          <p className="text-red-600">→ 402 Payment Required</p>
          <p><span className="text-slate-400">WWW-Authenticate:</span> Payment</p>
          <p><span className="text-red-500">GET</span> /api/mpp/analytics/@adaeze</p>
          <p><span className="text-slate-400">Authorization:</span> Payment 0x052c…21021</p>
          <p className="text-red-600">→ 200 OK</p>
          <p><span className="text-slate-400">Payment-Receipt:</span> tr_wk_9f3, $0.25</p>
          <p className="text-red-600">— agent paid $0.25 over HTTP 402 —</p>
        </div>
      </div>
    </section>
  )
}

function Join() {
  return (
    <section id="join" className="relative z-10 px-6 md:px-12 pb-28">
      <div className="max-w-6xl rounded-3xl border border-red-500/40 bg-gradient-to-br from-red-950/80 via-black/70 to-red-950/80 p-10 md:p-16 text-center backdrop-blur-md shadow-[0_0_100px_rgba(190,18,60,0.3)]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-[0_0_40px_rgba(239,68,68,0.7)]">
          <Sparkles className="h-7 w-7 text-white" />
        </div>
        <h2 className="mt-6 text-3xl md:text-5xl font-black tracking-tight text-white">
          The rails are free.<br />The names are the business.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-red-200/60">
          Built for the Colosseum Crypto World\u2019s Fair — Tempo track. Settled on-chain on Tempo Moderato (testnet, chain 42431).
        </p>
        <a
          href="#top"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-3.5 font-bold text-white shadow-[0_10px_40px_rgba(220,38,38,0.5)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Launch the demo <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-red-950/60 px-6 md:px-12 py-8">
      <div className="max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-red-200/40">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-red-600" />
          <span className="font-bold text-red-200/60">wink</span>
          <span>— anyone, anywhere, paid with a wink</span>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/Arinzaay007/wink" className="hover:text-red-200/80 transition-colors">github</a>
          <a href="https://explore.testnet.tempo.xyz" className="hover:text-red-200/80 transition-colors">explorer</a>
          <a href="https://tempo.xyz" className="hover:text-red-200/80 transition-colors">tempo</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden themed font-sans">
      {/* Hugely embedded background logo (actual reference asset) */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <img
          src={REF_IMG}
          alt=""
          className="absolute left-1/2 top-1/2 h-[150vmin] w-auto min-w-[150vmin] -translate-x-1/2 -translate-y-1/2 opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_75%)]" />
      </div>

      <div className="relative min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">
          <Hero />
          <Paths />
          <Verify />
          <Mpp />
          <Join />
        </main>
        <Footer />
      </div>
    </div>
  )
}
