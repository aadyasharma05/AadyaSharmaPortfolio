import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowDown, Download, MapPin, Menu, X, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import sculpture from '@/assets/sculpture.jpg';
import sneaker from '@/assets/soleocean.jpg';
import drone from '@/assets/forest-drone.jpg';
import resume from '@/assets/resume.asset.json';

export const Route = createFileRoute('/')({
 head: () => ({ meta: [
  { title: 'Aadya Sharma — Ideas, products & people.' },
  { name: 'description', content: 'Aadya Sharma is a Computer Science student in Indore exploring brand building, product development, technology and community leadership. Explore her projects and experience.' },
  { property: 'og:title', content: 'Aadya Sharma — Ideas, products & people.' },
  { property: 'og:description', content: 'A portfolio of brand concepts, technology ideas, community work and SIH hackathon leadership by Aadya Sharma.' },
  { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
 ] }), component: Portfolio,
});

const projects = [
 { title: 'SoleOcean', subtitle: 'An ocean-inspired sneaker brand, from the ground up.', image: sneaker, tags: ['Brand strategy', 'Product concept', 'Visual storytelling'], year: '2026', description: 'A lifestyle sneaker brand concept built from scratch, bringing together a name, tagline, product positioning and a clear differentiator. I used Google Gemini to shape the concept and Nano Banana to develop a cohesive, premium-inspired visual campaign.', detail: 'My focus: translating an early-stage idea into a distinct brand identity and a clear product story. This is a concept project, not a launched sneaker brand.' },
 { title: 'Reimagining reforestation', subtitle: 'An AI-powered drone concept for a greener tomorrow.', image: drone, tags: ['AI for impact', 'Research', 'Concept development'], year: '2026', description: 'An AI-powered drone concept designed to identify deforested areas and distribute seeds. I explored how an environmental challenge could become a focused product idea and a compelling solution narrative.', detail: 'Using Google Gemini for ideation and Nano Banana for visuals, I practised concise storytelling and pitching the idea to an audience. This is an exploratory concept, not a deployed drone system.' },
 { title: "Exploring India’s education system", subtitle: 'Research & presentation · The Free Press Journal', tags: ['Research', 'Public speaking'], year: 'Research & presentation', description: 'I researched challenges in India’s education system, government policies and reforms, and presented the findings to an audience at The Free Press Journal’s Power of Words event.', detail: 'Received a Certificate of Appreciation and a medal for the presentation.' },
];
const experience = [
 { date: 'JUL 2026 — PRESENT', title: 'Student Ambassador, AI Community & Content', org: 'Google Student Ambassador', description: 'Making generative AI approachable through student-facing content, practical Gemini demos and campus learning sessions. Recognised at Bronze level for monthly contributions.' },
 { date: 'SEP 2025 — PRESENT', title: 'Social Media Team Member', org: 'GDG on Campus · PIEMR', description: 'Creating content around community initiatives, event milestones and contributor stories, while coordinating consistent messaging and visuals.' },
 { date: 'MAY 2026', title: 'Event Organizing Team', org: 'HackXcelerate 2K26 · GDG on Campus PIEMR', description: 'Supported on-ground coordination, event execution and media coverage for a hackathon bringing together 100+ participants across 36 teams.' },
 { date: 'CAMPUS OUTREACH', title: 'Campus Ambassador', org: 'TEDxIITIndore', description: 'Promoted events through campus and digital outreach, helping connect the community with ideas and experiences worth sharing.' },
];

function Portfolio() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [selected, setSelected] = useState<number | null>(null);
 const closeRef = useRef<HTMLButtonElement>(null);
 const triggerRef = useRef<HTMLElement | null>(null);
 const project = selected === null ? null : projects[selected];
 useEffect(() => {
  if (selected === null) return;
  triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  const old = document.body.style.overflow;
  document.body.style.overflow = 'hidden'; closeRef.current?.focus();
  const handle = (event: KeyboardEvent) => {
   if (event.key === 'Escape') setSelected(null);
   if (event.key === 'Tab') { event.preventDefault(); closeRef.current?.focus(); }
  };
  document.addEventListener('keydown', handle);
  return () => { document.body.style.overflow = old; document.removeEventListener('keydown', handle); triggerRef.current?.focus(); };
 }, [selected]);
 return <>
  <header className="site-nav wrap">
   <a className="wordmark" href="#home" aria-label="Aadya Sharma home">aadya<span className="text-foreground">.</span></a>
   <nav aria-label="Main navigation" className={`nav-links ${menuOpen ? 'open' : ''}`}>
    {['Work', 'About', 'Experience'].map(label => <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
    <a href="#contact" className="nav-contact" onClick={() => setMenuOpen(false)}>Let’s connect <ArrowUpRight size={14}/></a>
   </nav>
   <Button className="menu-toggle" variant="ghost" size="icon" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button>
  </header>
  <main>
   <section className="hero" id="home">
    <img className="hero-art" src={sculpture} width={1024} height={1024} alt="Burgundy glass and silver ribbon sculpture" fetchPriority="high"/>
    <div className="wrap hero-content">
     <div className="eyebrow"><span className="status-dot"/> Curious mind. Creative energy.</div>
     <h1>Aadya<br/><span>Sharma.</span></h1>
     <p className="hero-description">At the intersection of <strong>technology,<br/> brands & people.</strong> Turning ideas into<br className="hidden sm:block"/> concepts, conversations and communities.</p>
     <div className="hero-actions"><Button asChild size="lg"><a href="#work">Explore my work <ArrowUpRight/></a></Button><Button asChild variant="outline" size="lg"><a href={resume.url} target="_blank" rel="noopener noreferrer">Résumé <Download/></a></Button></div>
     <div className="hero-bottom"><MapPin size={13}/> Indore, India <span> / </span> CS student, PIEMR</div>
    </div>
    <span className="hero-caption">A LITTLE STRUCTURE. A LOT OF POSSIBILITY.</span>
   </section>
   <div className="affiliations wrap"><span className="label">COMMUNITIES<br/>I’M A PART OF</span><div className="affiliation google-word">Google<small>STUDENT AMBASSADOR</small></div><div className="affiliation">&lt; &gt; GDG<small>ON CAMPUS · PIEMR</small></div><div className="affiliation"><span className="text-primary">TEDx</span>IITIndore<small>CAMPUS AMBASSADOR</small></div><div className="affiliation">Smart India Hackathon<small>INTERNAL · PIEMR</small></div></div>
   <section className="section wrap" id="work">
    <div className="section-heading"><div><div className="section-label">01 / Selected work</div><h2>Ideas made tangible.</h2></div><p className="section-note">A few explorations in brand, product<br/>and meaningful problem-solving.</p></div>
    <div className="project-grid">{projects.slice(0,2).map((item,index) => <article className="project" key={item.title}>
     <div className="project-image"><img src={item.image} alt={index === 0 ? 'Ocean-inspired sneaker concept visual' : 'Seed-distributing drone concept visual'} width={1536} height={1024} loading="lazy"/><span className="project-number">0{index+1} / CONCEPT · {item.year}</span></div>
     <div className="project-top"><h3>{item.title}</h3><Button variant="outline" size="icon" aria-label={`View ${item.title}`} title={`View ${item.title}`} onClick={() => setSelected(index)}><ArrowUpRight/></Button></div>
     <p>{item.subtitle}</p><div className="tags">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
    </article>)}</div>
    <div className="research-row"><div><div className="section-label mb-2">03 / Research & public speaking</div><h3>Exploring India’s education system</h3><p>The Free Press Journal · Certificate of Appreciation & medal</p></div><Button variant="ghost" size="icon" aria-label="View education research" title="View education research" onClick={() => setSelected(2)}><ArrowUpRight/></Button></div>
   </section>
   <section className="about-band" id="about"><div className="wrap section about-layout"><div><div className="section-label">02 / A little about me</div><h2>Technical by training.<br/>Creative by instinct.</h2><div className="education"><div className="eyebrow">Currently learning at</div><p className="text-foreground">Prestige Institute of Engineering<br/>Management & Research, Indore</p><p>B.Tech · Computer Science<br/>July 2024 — July 2028</p></div></div><div><p className="about-copy">I’m a Computer Science student who’s just as interested in how a product is built as in how it connects with people. <span>I enjoy shaping brands, exploring 0-to-1 product ideas, and bringing communities together.</span></p><p className="text-muted-foreground text-sm leading-7">From a hackathon stage to a brand concept, I bring research, clear communication and a hands-on approach to the work.</p><div className="skill-grid"><div><h3>Development</h3><div className="tags"><span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">SQL</span></div></div><div><h3>Brand & marketing</h3><p>Brand positioning · Content creation<br/>Campaign concepts · Social media · Outreach</p></div><div><h3>Product & operations</h3><p>Product concepts · Go-to-market · Research<br/>Project coordination · Event operations</p></div><div><h3>Communication & tools</h3><p>Public speaking · Community building<br/>Gemini · Nano Banana · Presentation design</p></div></div></div></div></section>
   <section className="section wrap experience-layout" id="experience"><div><div className="section-label">03 / Experience</div><h2>Learning by doing.<br/>Leading by showing up.</h2><p className="section-note mt-6">Communities, collaborations and<br/>experiences that shape my perspective.</p></div><div>{experience.map(item => <article className="experience-item" key={item.title}><div className="date">{item.date}</div><h3>{item.title}</h3><div className="org">{item.org}</div><p>{item.description}</p></article>)}</div></section>
   <section className="achievement-band"><div className="wrap section"><div className="section-label">04 / Moments that matter</div><h2>Beyond the classroom.</h2><div className="achievement-grid"><article className="achievement"><div className="big">20 anchors.</div><h3>One team. A shared stage.</h3><p>Anchoring Head and internal organising committee member for PIEMR’s internal SIH hackathon in 2025. Led a team of 20 anchors.</p></article><article className="achievement"><div className="big">1st place.</div><h3>Internal SIH Hackathon · 2024</h3><p>My team won our college’s internal Smart India Hackathon — a milestone in collaborative problem-solving and turning an idea into a pitch.</p></article><article className="achievement"><div className="big">Always growing.</div><h3>Recognition & certifications</h3><p>Google Student Ambassador · Bronze recognition<br/>HP LIFE · Business Communication, Apr 2026<br/>EF SET · English Certificate, Jun 2025</p></article></div></div></section>
   <section className="contact wrap" id="contact"><div className="eyebrow"><span className="status-dot"/> Open to conversations & collaborations</div><h2>Good things start<br/>with a conversation<span className="text-primary">.</span></h2><div className="contact-row"><a className="email-link" href="mailto:sharmaaadya0508@gmail.com">sharmaaadya0508@gmail.com <ArrowUpRight size={23}/></a><div className="socials"><Button variant="outline" asChild><a href="https://www.linkedin.com/in/aadya-sharma05" target="_blank" rel="noopener noreferrer"><Linkedin/> LinkedIn <ArrowUpRight/></a></Button><Button variant="outline" asChild><a href="https://github.com/aadyasharma05" target="_blank" rel="noopener noreferrer"><Github/> GitHub <ArrowUpRight/></a></Button><Button variant="outline" size="icon" asChild><a href="mailto:sharmaaadya0508@gmail.com" aria-label="Email Aadya" title="Email Aadya"><Mail/></a></Button></div></div></section>
  </main>
  <footer className="footer wrap"><span>© 2026 AADYA SHARMA</span><span>BUILT WITH INTENTION. ALWAYS IN PROGRESS.</span><a href="#home" className="flex items-center gap-2">BACK TO TOP <ArrowUpRight size={12}/></a></footer>
  {project && <div className="modal-overlay" onClick={() => setSelected(null)}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="project-title" onClick={e => e.stopPropagation()}><Button ref={closeRef} className="modal-close" variant="ghost" size="icon" aria-label="Close project" onClick={() => setSelected(null)}><X/></Button><div className="section-label">{project.year} / Selected work</div><h2 id="project-title">{project.title}</h2><p>{project.subtitle}</p>{project.image && <img src={project.image} alt={`${project.title} concept illustration`} width={1536} height={1024}/>}<div className="tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><p>{project.description}</p><p>{project.detail}</p>{project.image && <p className="text-xs">Concept illustration created for this portfolio; not an original project photograph.</p>}</section></div>}
 </>;
}
