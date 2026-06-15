import DesktopScreen, { TopBar, StatsRow, DataTable, SBtn, Badge } from '../components/DesktopScreen';
import styles from './StakeholderPage.module.css';

const sidebarItems = [
  { icon: '📊', label: 'Dashboard', active: true },
  { icon: '🎓', label: 'Students' },
  { icon: '👩‍🏫', label: 'Faculty' },
  { icon: '📅', label: 'Timetable' },
  { icon: '💰', label: 'Fees' },
  { icon: '📝', label: 'Exams' },
  { icon: '📚', label: 'Library' },
  { icon: '🎓', label: 'Alumni' },
  { icon: '📣', label: 'Ads' },
  { icon: '⚙️', label: 'Settings' },
];

const stats = [
  { val: '2,847', label: 'Total Students', change: '↑ 12% this year' },
  { val: '87.3%', label: 'Avg Attendance', change: '↑ 3.2%' },
  { val: '₹48.2L', label: 'Fee Collected', change: '↑ 8% MoM' },
  { val: '23', label: 'At-Risk Students', change: '↑ needs action', warn: true },
];

const tableRows = [
  ['Ananya Sharma', 'B.Tech CSE', '2024–28', <Badge type="paid">Paid</Badge>, <Badge type="active">Approved</Badge>],
  ['Rohan Mehta', 'MBA Sem 1', '2024–26', <Badge type="pending">Pending</Badge>, <Badge type="active">Approved</Badge>],
  ['Priya Nair', 'B.Com Year 2', '2023–26', <Badge type="paid">Paid</Badge>, <Badge type="active">Approved</Badge>],
  ['Kiran Reddy', 'B.Tech ECE', '2024–28', <Badge type="pending">Due</Badge>, <Badge type="review">Review</Badge>],
];

const features = [
  { icon: '🏫', title: 'Multi-Branch Management', desc: 'Manage multiple branches from one admin account. View consolidated reports and monitor each campus independently.', tag: 'Core', tc: 'core' },
  { icon: '🔐', title: 'Role & Permission Control', desc: 'Create custom roles — HOD, Principal, Accountant, Librarian — with granular permission controls per module.', tag: 'Core', tc: 'core' },
  { icon: '📋', title: 'Academic Year Setup', desc: 'Configure academic years, activate or archive them, and manage the academic calendar with curriculum planning.', tag: 'Core', tc: 'core' },
  { icon: '💳', title: 'Fee Collection Engine', desc: 'Online payments, automated due reminders, receipt generation, and complete financial reporting by branch or program.', tag: 'Core', tc: 'core' },
  { icon: '📣', title: 'Ad & Notification Hub', desc: 'Manage college advertising listings, send targeted push, email, and SMS communications to students, faculty, and parents.', tag: 'New', tc: 'new' },
  { icon: '📈', title: 'Analytics & Reports', desc: 'Admission trends, revenue reports, attendance analytics, subject performance, faculty metrics — all in one reporting suite.', tag: 'AI Powered', tc: 'ai' },
];

export default function Admin() {
  return (
    <div className={`${styles.page} page-enter`}>
      <div className={styles.pageLabel}><span className={styles.dot}/> Admin Dashboard — College Admin Portal</div>
      <div className={styles.hero}>
        <div>
          <div className={`${styles.badge} ${styles.badgeAdmin}`}>🏛️ College Admin</div>
          <h2 className={styles.title}>Complete Institutional<br/>Control at a Glance</h2>
          <p className={styles.desc}>Admins get full visibility across students, faculty, fees, attendance, exams, and reports — all in a single unified dashboard.</p>
          <ul className={styles.featureList}>
            {['Student & faculty lifecycle management','AI-powered timetable scheduling','Fee collection & financial reports','Result management & CGPA tracking','Branch-level analytics and insights','Ad listings & platform monetization'].map(f=><li key={f}>{f}</li>)}
          </ul>
        </div>
        <DesktopScreen url="educore.app/admin/dashboard" sidebarItems={sidebarItems}>
          <TopBar title="Dashboard">
            <SBtn>Export</SBtn>
            <SBtn primary>+ Admit Student</SBtn>
          </TopBar>
          <StatsRow stats={stats} />
          <div className={styles.tableLabel}>Recent Admissions</div>
          <DataTable
            columns={['Student','Program','Batch','Fee Status','Admission']}
            rows={tableRows}
            colTemplate="2fr 1.5fr 1fr 1fr 1fr"
          />
        </DesktopScreen>
      </div>

      <div className={styles.sectionHeader}>
        <div className={styles.eyebrow}>Admin Capabilities</div>
        <h2 className={styles.sectionTitle}>Full institutional intelligence</h2>
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
