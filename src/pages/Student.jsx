import DesktopScreen, { TopBar, StatsRow, DataTable, SBtn } from '../components/DesktopScreen';
import styles from './StakeholderPage.module.css';

const sidebarItems = [
  { icon:'🏠', label:'Dashboard', active:true },
  { icon:'📅', label:'Timetable' },
  { icon:'📚', label:'Subjects' },
  { icon:'✅', label:'Attendance' },
  { icon:'📊', label:'My Results' },
  { icon:'💰', label:'Fee Status' },
  { icon:'🤖', label:'AI Assistant' },
  { icon:'📝', label:'Assignments' },
  { icon:'🔔', label:'Notifications' },
];

const stats = [
  { val:'87%', label:'Attendance', change:'Min 75% required' },
  { val:'8.4', label:'Current CGPA', change:'↑ Last: 8.1' },
  { val:'3', label:'Classes Today' },
  { val:'₹0', label:'Fee Due', change:'All Clear ✓' },
];

const tableRows = [
  ['Data Structures','9:00 AM','Lab 201','Dr. Rao'],
  ['Operating Systems','11:00 AM','Room 105','Prof. Singh'],
  ['DBMS Lab','2:00 PM','CS Lab 1','Ms. Priya'],
];

const features = [
  { icon:'💡', title:'AI Study Assistant', desc:'Ask any academic question, get topic summaries, explanations, and AI-curated study plans tailored to your exam schedule.', tag:'AI Powered', tc:'ai' },
  { icon:'📖', title:'Subject Learning Hub', desc:'Access syllabus, lecture notes, PDF documents, PPT presentations, video lessons, assignments, and reference materials per subject.', tag:'Core', tc:'core' },
  { icon:'🔮', title:'AI Question Predictor', desc:'Predict frequently asked exam questions, get topic-wise important questions with difficulty-level classification for smarter prep.', tag:'AI Powered', tc:'ai' },
  { icon:'📊', title:'Academic Progress', desc:'View internal marks, exam results, GPA/CGPA trends, and attendance reports in one unified progress tracker.', tag:'Core', tc:'core' },
  { icon:'💰', title:'Fee & Documents', desc:'Check fee status, pay online, download receipts, and access all academic certificates and documents securely.', tag:'Core', tc:'core' },
  { icon:'🔔', title:'Smart Notifications', desc:'Receive exam alerts, attendance warnings, fee reminders, assignment deadlines, and class updates in real-time.', tag:'Core', tc:'core' },
];

export default function Student() {
  return (
    <div className={`${styles.page} page-enter`}>
      <div className={styles.pageLabel}><span className={styles.dot}/> Student Portal — Learning & Progress</div>
      <div className={styles.hero}>
        <div>
          <div className={`${styles.badge} ${styles.badgeStudent}`}>🎓 Student</div>
          <h2 className={styles.title}>Your Entire Academic<br/>Life, One Place</h2>
          <p className={styles.desc}>Students get a personalized learning hub with timetables, study materials, AI assistance, marks tracking, fee status, and exam schedules — accessible anywhere.</p>
          <ul className={styles.featureList}>
            {['Personalized dashboard with today\'s classes','Access notes, PDFs, PPTs, and video lessons','AI Study Assistant for instant help on any topic','Track attendance, internal marks & CGPA','View fee status and download receipts','Discover colleges and relevant ads'].map(f=><li key={f}>{f}</li>)}
          </ul>
        </div>
        <DesktopScreen url="educore.app/student/dashboard" sidebarItems={sidebarItems}>
          <TopBar title="Good Morning, Ananya 👋">
            <SBtn primary>🤖 Ask AI</SBtn>
          </TopBar>
          <StatsRow stats={stats} />
          <div className={styles.tableLabel}>Today's Schedule</div>
          <DataTable
            columns={['Subject','Time','Room','Faculty']}
            rows={tableRows}
            colTemplate="2fr 1fr 1fr 1fr"
          />
        </DesktopScreen>
      </div>
      <div className={styles.sectionHeader}>
        <div className={styles.eyebrow}>Student Features</div>
        <h2 className={styles.sectionTitle}>Learn, track, grow</h2>
      </div>
      <div className={styles.grid}>
        {features.map(f => (
          <div key={f.title} className={styles.card}>
            <div className={styles.icon}>{f.icon}</div>
            <div className={styles.cardTitle}>{f.title}</div>
            <div className={styles.cardDesc}>{f.desc}</div>
            <span className={`${styles.tag} ${styles['tag_'+f.tc]}`}>{f.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
