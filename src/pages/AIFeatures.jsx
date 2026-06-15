import styles from './AIFeatures.module.css';

const aiCards = [
  {
    icon: '🧠', title: 'Smart Study Engine', role: 'For Students',
    desc: 'Students interact with an AI that understands their syllabus, generates topic summaries, predicts important exam questions, and creates personalized study plans based on upcoming exam dates.',
    bullets: ['Topic-wise question prediction & difficulty scoring','Instant summaries of any uploaded content','Personalized study plan generation','Exam prep suggestions based on past patterns'],
  },
  {
    icon: '📄', title: 'Question Paper Composer', role: 'For Faculty',
    desc: "Faculty define exam type, subject, and difficulty distribution — the AI generates complete, formatted question papers with Bloom's Taxonomy tagging, ready to export and print.",
    bullets: ["Bloom's Taxonomy classification (Remember to Create)",'Configurable difficulty: Easy / Medium / Hard split','Internal, mid, semester & unit test support','Auto-formatting and export-ready output'],
  },
  {
    icon: '📅', title: 'Timetable Intelligence', role: 'For Admins',
    desc: 'Admins input faculty availability, room capacity, and subject requirements — the AI solves scheduling constraints and generates conflict-free timetables in seconds, not hours.',
    bullets: ['Zero scheduling conflicts guaranteed','Faculty & room availability optimization','Handles complex multi-branch, multi-batch scenarios','Instant regeneration on any constraint change'],
  },
  {
    icon: '📊', title: 'Results AI', role: 'For Everyone',
    desc: 'Upload results once. The AI automatically calculates CGPA, identifies at-risk students based on performance trends, generates comparative analytics, and sends early warning alerts.',
    bullets: ['Automatic CGPA & GPA calculation','At-risk student flagging with trend analysis','Subject difficulty analysis across batches','Performance forecasting & academic benchmarking'],
  },
];

const impacts = [
  { icon:'⚡', val:'Seconds', label:'Timetable Generation', sub:'vs. hours of manual work by admin teams' },
  { icon:'📝', val:'5 min', label:'Question Paper Creation', sub:'vs. 2-3 hours for faculty' },
  { icon:'🎯', val:'Early', label:'At-Risk Detection', sub:'Flag students before exams, not after results' },
  { icon:'📈', val:'+18%', label:'Student Performance', sub:'Projected improvement with AI study guidance' },
];

export default function AIFeatures() {
  return (
    <div className={`${styles.page} page-enter`}>
      <div className={styles.pageLabel}><span className={styles.dot}/> AI Features — Intelligent Automation</div>
      <div className={styles.sectionHeader}>
        <div className={styles.eyebrow}>AI at the Core</div>
        <h2 className={styles.sectionTitle}>Intelligence built into<br/>every workflow</h2>
        <p className={styles.sectionSub}>Four AI engines power EduCore — each designed for a specific stakeholder's biggest pain point.</p>
      </div>
      <div className={styles.grid}>
        {aiCards.map(c => (
          <div key={c.title} className={styles.card}>
            <div className={styles.cardGlow} />
            <div className={styles.cardIcon}>{c.icon}</div>
            <div className={styles.cardTitle}>{c.title}</div>
            <div className={styles.cardRole}>{c.role}</div>
            <div className={styles.cardDesc}>{c.desc}</div>
            <ul className={styles.bullets}>
              {c.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>AI Impact</div>
          <h2 className={styles.sectionTitle}>What AI saves & delivers</h2>
        </div>
        <div className={styles.impactGrid}>
          {impacts.map(c => (
            <div key={c.label} className={styles.impactCard}>
              <div className={styles.impactIcon}>{c.icon}</div>
              <div className={styles.impactVal}>{c.val}</div>
              <div className={styles.impactLabel}>{c.label}</div>
              <div className={styles.impactSub}>{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
