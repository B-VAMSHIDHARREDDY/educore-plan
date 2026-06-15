import DesktopScreen, { TopBar, StatsRow, DataTable, SBtn, Badge } from '../components/DesktopScreen';
import styles from './StakeholderPage.module.css';

const sidebarItems = [
  { icon:'📊', label:'My Dashboard', active:true },
  { icon:'📚', label:'My Subjects' },
  { icon:'✅', label:'Attendance' },
  { icon:'📅', label:'Timetable' },
  { icon:'📝', label:'Assignments' },
  { icon:'🤖', label:'AI Tools' },
  { icon:'📊', label:'Marks Entry' },
  { icon:'💬', label:'Communicate' },
];

const stats = [
  { val:'4', label:'Classes Today' },
  { val:'156', label:'Students Assigned' },
  { val:'89%', label:'Avg Attendance' },
  { val:'7', label:'Pending Reviews', change:'Action needed', warn:true },
];

const tableRows = [
  ['Data Structures','CSE-3A','9:00 AM','Lab 201', <Badge type="active">Marked</Badge>],
  ['Algorithms','CSE-3B','11:00 AM','Room 105', <Badge type="pending">Pending</Badge>],
  ['OS Concepts','CSE-4A','2:00 PM','Room 203', <Badge type="pending">Upcoming</Badge>],
];

const features = [
  { icon:'🧠', title:'AI Question Paper Generator', desc:"Generate internal, mid, semester, and unit test papers with Bloom's Taxonomy support, difficulty level distribution, and auto-formatting.", tag:'AI Powered', tc:'ai' },
  { icon:'📤', title:'Content Upload Hub', desc:'Upload lecture notes, PDFs, PPTs, assignments, video lessons, and reference materials — all organized by subject and topic.', tag:'Core', tc:'core' },
  { icon:'✅', title:'Attendance Management', desc:'Mark daily or subject-wise attendance. Bulk mark entire classes. View attendance reports and identify defaulters instantly.', tag:'Core', tc:'core' },
  { icon:'📊', title:'Marks & Assessment', desc:'Create assignments, evaluate student submissions, enter internal marks, calculate grades, and publish results online.', tag:'Core', tc:'core' },
  { icon:'📅', title:'Smart Timetable View', desc:'View AI-generated personal timetable, upcoming schedule changes, exam dates, and receive automatic conflict alerts.', tag:'AI Powered', tc:'ai' },
  { icon:'📈', title:'Student Performance Tracker', desc:'Monitor class-wide academic trends, identify at-risk students early, and track subject difficulty analysis over time.', tag:'AI Powered', tc:'ai' },
];

export default function Faculty() {
  return (
    <div className={`${styles.page} page-enter`}>
      <div className={styles.pageLabel}><span className={styles.dot}/> Faculty Portal — Teaching & Management</div>
      <div className={styles.hero}>
        <div>
          <div className={`${styles.badge} ${styles.badgeFaculty}`}>👩‍🏫 Faculty</div>
          <h2 className={styles.title}>Teach Smarter,<br/>Not Harder</h2>
          <p className={styles.desc}>Faculty get a dedicated portal to manage courses, upload materials, track attendance, generate AI-powered question papers, and monitor student performance.</p>
          <ul className={styles.featureList}>
            {['Manage courses, syllabus & learning materials','AI question paper generator (Bloom\'s Taxonomy)','Mark & bulk attendance with one click','Evaluate assignments & publish marks online','View timetable updates in real-time','Communicate announcements to students'].map(f=><li key={f}>{f}</li>)}
          </ul>
        </div>
        <DesktopScreen url="educore.app/faculty/dashboard" sidebarItems={sidebarItems}>
          <TopBar title="Today's Overview">
            <SBtn primary>🤖 Generate Q-Paper</SBtn>
          </TopBar>
          <StatsRow stats={stats} />
          <div className={styles.tableLabel}>Today's Classes</div>
          <DataTable
            columns={['Subject','Class','Time','Room','Attendance']}
            rows={tableRows}
            colTemplate="1.5fr 1fr 1fr 1fr 1fr"
          />
        </DesktopScreen>
      </div>
      <div className={styles.sectionHeader}>
        <div className={styles.eyebrow}>Faculty Tools</div>
        <h2 className={styles.sectionTitle}>AI-powered teaching toolkit</h2>
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
