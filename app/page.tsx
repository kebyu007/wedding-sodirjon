'use client'

import Image from 'next/image'
import { FormEvent, useEffect, useMemo, useState } from 'react'
import { weddingData as data } from '@/lib/wedding-data'

function Countdown() {
  const [now, setNow] = useState(0)
  useEffect(() => { setNow(Date.now()); const timer = window.setInterval(() => setNow(Date.now()), 1000); return () => window.clearInterval(timer) }, [])
  const values = useMemo(() => {
    const distance = Math.max(0, data.date.getTime() - now)
    return [Math.floor(distance / 86400000), Math.floor(distance / 3600000) % 24, Math.floor(distance / 60000) % 60, Math.floor(distance / 1000) % 60]
  }, [now])
  return <div className="countdown" aria-label="To‘yga qolgan vaqt">{values.map((value, index) => <div className="countdown-item" key={index}><strong>{String(value).padStart(2, '0')}</strong><span>{['kun', 'soat', 'daqiqa', 'soniya'][index]}</span></div>)}</div>
}

function RSVP() {
  const [sent, setSent] = useState(false)
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true) }
  if (sent) return <div className="rsvp-success"><span className="success-mark">✓</span><h3>Rahmat, tasdiqlandi.</h3><p>Sizni bayramimizda kutib qolamiz.</p></div>
  return <form className="rsvp-form" onSubmit={submit}><label>Ismingiz<input required name="name" placeholder="Ism va familiya" /></label><label>Ishtirokingiz<select name="attendance" defaultValue=""><option value="" disabled>Tanlang</option><option>Albatta kelaman</option><option>Afsuski, kela olmayman</option></select></label><button type="submit">Javob yuborish <span>→</span></button></form>
}

export default function Page() {
  return <main>
    <nav className="nav"><a className="monogram" href="#top" aria-label="Bosh sahifa">D<span>&</span>M</a><div className="nav-links"><a href="#story">Biz haqimizda</a><a href="#details">Tadbir tafsilotlari</a><a href="#rsvp">Javob berish</a></div><a className="nav-date" href="#details">{data.dateLabel}</a></nav>
    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">Taklifnoma</p><h1>Sodirbek <i>&</i><br />Umidaxon</h1><p className="hero-note">Bizning muhabbatimizga guvoh bo‘lishga<br />sizni chin dildan taklif qilamiz.</p><a className="scroll-link" href="#story"><span className="scroll-line" />Pastga aylantiring</a></div><div className="hero-image"><Image src={data.heroImage} alt="Sodirbek va Umidaxon to‘y libosida" fill priority sizes="(max-width: 768px) 100vw, 52vw" /></div><div className="hero-vertical">17 OKTYABR · 2026</div></section>
    <section className="story section" id="story"><div className="section-label">01 / Bizning hikoyamiz</div><div className="story-grid"><div><p className="display-quote">“Baxt — bir-birini topgan ikki qalbning bir yo‘lda davom etishidir.”</p><p className="body-copy">Biz bu yo‘lni birga bosib o‘tishga qaror qildik. Quvonchimizni siz bilan baham ko‘rish biz uchun katta sharaf.</p></div><div className="story-image"><Image src={data.gallery[0].src} alt={data.gallery[0].alt} fill sizes="(max-width: 768px) 90vw, 35vw" /></div></div></section>
    <section className="details section" id="details"><div className="section-label">02 / Muhim sana</div><div className="details-heading"><p className="display-title">Bir kun.<br /><em>Bir umr.</em></p><div><p className="date-large">{data.dateLabel}</p><p className="body-copy">{data.weekday}, soat {data.time}<br />{data.venue}</p></div></div><Countdown /></section>
    <section className="schedule section"><div className="section-label">03 / Kun tartibi</div><div className="schedule-list">{data.schedule.map((item) => <div className="schedule-row" key={item.time}><span className="schedule-time">{item.time}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div></section>
    <section className="location section"><div className="location-image"><Image src={data.gallery[1].src} alt={data.gallery[1].alt} fill sizes="(max-width: 768px) 100vw, 50vw" /></div><div className="location-copy"><div className="section-label">04 / Manzil</div><p className="display-title">Sizni<br /><em>kutamiz.</em></p><p className="body-copy">{data.venue}<br />{data.address}</p><a className="text-link" href={data.mapUrl} target="_blank" rel="noreferrer">Xaritada ko‘rish <span>↗</span></a></div></section>
    <section className="rsvp section" id="rsvp"><div className="section-label">05 / Javobingiz</div><div className="rsvp-grid"><div><p className="display-title">Sizning<br /><em>ishtirokingiz</em><br />biz uchun muhim.</p><p className="body-copy">Iltimos, 1-oktyabrgacha javobingizni yuboring.</p></div><RSVP /></div></section>
    <footer><div className="footer-mark">D <span>&</span> M</div><p>Sevgi bilan, Sodirbek va Umidaxon</p><a href="#top">Yuqoriga ↑</a></footer>
  </main>
}
