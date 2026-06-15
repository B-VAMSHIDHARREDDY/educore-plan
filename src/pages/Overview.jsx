import styles from './Overview.module.css';

function AppMockup() {
  return (
    <div className={styles.mockup}>
      <div className={styles.mockupHeader}>
        <div className={styles.dots}><span/><span/><span/></div>
        <div className={styles.mockupTitle}>EduCore — Dashboard</div>
      </div>
      <div className={styles.dashGrid}>
        {[
          { icon: '🎓', num: '2,847', label: 'Total Students', accent: true },
          { icon: '👩‍🏫', num: '142', label: 'Faculty' },
          { icon: '📚', num: '38', label: 'Subjects' },
        ].map(c => (
          <div key={c.label} className={`${styles.dashCard} ${c.accent ? styles.dashCardAccent : ''}`}>
            <div className={styles.dashIcon}>{c.icon}</div>
            <div className={styles.dashNum}>{c.num}</div>
            <div className={styles.dashLabel}>{c.label}</div>
          </div>
        ))}
      </div>
      <div className={styles.chartCard}>
        <div className={styles.chartLabel}>Attendance This Week</div>
        <div className={styles.bars}>
          {[45,78,62,85,91,55,40].map((h,i) => (
            <div key={i} className={`${styles.bar} ${h>80?styles.barHi:''} ${i===4?styles.barAcc:''}`} style={{height:`${h}%`}} />
          ))}
        </div>
      </div>
      <div className={styles.pills}>
        {['🤖 AI Timetable','📊 Analytics','💰 Fee Mgmt','📝 Exams','📱 Mobile App','🎓 Alumni'].map(p => (
          <span key={p} className={styles.pill}>{p}</span>
        ))}
      </div>
    </div>
  );
}

function StepFlow() {
  const steps = [
    { n:1, icon:'🏫', title:'Onboard College', desc:'Join via unique invite link, set up branches & structure' },
    { n:2, icon:'👤', title:'Enroll Users', desc:'Students & faculty join via hall ticket or email' },
    { n:3, icon:'📅', title:'Manage Academics', desc:'Syllabi, timetables, attendance & exams in one place' },
    { n:4, icon:'🤖', title:'AI Workflows', desc:'Generate timetables, study materials & question papers' },
    { n:5, icon:'📊', title:'Results & Analytics', desc:'Upload once, AI calculates CGPA & flags at-risk students' },
    { n:6, icon:'🎓', title:'Alumni & Beyond', desc:'Alumni book appointments & stay connected digitally' },
    { n:7, icon:'📈', title:'Growth & Revenue', desc:'Earn via subscriptions, ads & premium add-ons' },
  ];
  return (
    <div className={styles.stepsGrid}>
      {steps.map((s,i) => (
        <div key={s.n} className={styles.step}>
          <div className={styles.stepNum}>{s.n}{i < steps.length-1 && <span className={styles.connector}/>}</div>
          <div className={styles.stepIcon}>{s.icon}</div>
          <div className={styles.stepTitle}>{s.title}</div>
          <div className={styles.stepDesc}>{s.desc}</div>
        </div>
      ))}
    </div>
  );
}

const features = [
  { icon:'🤖', title:'AI Timetable Generator', desc:'Automatically creates optimized, conflict-free timetables based on faculty availability, room constraints, and subject requirements.', tag:'AI Powered', tagClass:'ai' },
  { icon:'📝', title:'Smart Enrollment', desc:'Instant onboarding via invite link or hall ticket. Dynamic admission forms with conditional fields and document upload.', tag:'Core', tagClass:'core' },
  { icon:'📊', title:'Result Intelligence', desc:'CGPA calculation, at-risk student alerts, performance benchmarking — all automated with AI-driven insights.', tag:'AI Powered', tagClass:'ai' },
  { icon:'💡', title:'AI Study Assistant', desc:'Students ask academic questions, get topic explanations, summaries, and personalized study plans generated instantly.', tag:'AI Powered', tagClass:'ai' },
  { icon:'📄', title:'Question Paper Composer', desc:"Faculty generate balanced exam papers with Bloom's Taxonomy support, difficulty distribution, and automatic formatting.", tag:'AI Powered', tagClass:'ai' },
  { icon:'🎓', title:'Alumni Self-Service', desc:'Alumni book appointments, request certificates digitally, and stay connected with their institution through dedicated portal.', tag:'New', tagClass:'new' },
  { icon:'💰', title:'Fee Management', desc:'Online payments, automated reminders, receipt generation, due tracking — for tuition, hostel, lab, and all fee types.', tag:'Core', tagClass:'core' },
  { icon:'📚', title:'Library Management', desc:'Book catalog, issue/return/renew tracking, overdue alerts, and fine management — fully digitized.', tag:'Core', tagClass:'core' },
  { icon:'🔔', title:'Communication Hub', desc:'Push, email, SMS, and in-app notifications for students, faculty, and parents — fee alerts, exam updates, and announcements.', tag:'Core', tagClass:'core' },
];

const impacts = [
  { icon:'⏱️', val:'70%+', label:'Admin Time Saved', sub:'Automation of scheduling, attendance & reports' },
  { icon:'🎯', val:'43K+', label:'Colleges TAM', sub:'Total addressable market in India' },
  { icon:'📈', val:'₹78Cr', label:'ARR Potential', sub:'At 5,000 Pro college subscribers' },
  { icon:'🔗', val:'∞', label:'Network Effect', sub:'More colleges → More students → More ads' },
];

export default function Overview({ onNavigate }) {
  return (
    <div className={`${styles.page} page-enter`}>
      <div className={styles.pageLabel}><span className={styles.dot}/> Overview — EduCore Platform</div>

      {/* HERO */}
      <div className={styles.heroGrid}>
        <div>
          <div className={styles.badge}><span className={styles.pulse}/> AI-Powered Education Platform</div>
          <h1 className={styles.heroTitle}>The Operating<br/>System for<br/><em>Every College</em></h1>
          <p className={styles.heroSub}>EduCore unifies every academic and administrative process in one intelligent platform — for students, faculty, admins, and parents.</p>
          <div className={styles.heroActions}>
            <button className={styles.btnPrimary} onClick={() => onNavigate('admin')}>View Dashboard →</button>
            <button className={styles.btnGhost} onClick={() => onNavigate('mobile')}>See Mobile App</button>
          </div>
          <div className={styles.statsGrid}>
            {[{val:'43K+',label:'Colleges in India TAM'},{val:'38M+',label:'Student Audience'},{val:'₹78Cr',label:'ARR Potential'}].map(s => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statVal}>{s.val}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div><AppMockup /></div>
      </div>

      {/* PROBLEM / SOLUTION */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>The Problem & Solution</div>
          <h2 className={styles.sectionTitle}>Colleges run on chaos.<br/>EduCore fixes that.</h2>
        </div>
        <div className={styles.probSolGrid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}><div className={`${styles.cardIcon} ${styles.iconRed}`}>❌</div><div className={styles.cardTitle}>The Problem</div></div>
            <ul className={styles.problemList}>
              {['Manual admissions & data chaos across disconnected tools','Timetable clashes & scheduling delays costing faculty hours','No real-time insights on student performance or at-risk flags','Alumni & documents managed offline or in spreadsheets','Multiple tools with zero integration between systems'].map(i=><li key={i}>{i}</li>)}
            </ul>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}><div className={`${styles.cardIcon} ${styles.iconGreen}`}>✅</div><div className={styles.cardTitle}>The Solution</div></div>
            <ul className={styles.solutionList}>
              {['Smart Enrollment via invite link — onboard instantly, zero friction','AI Timetable Builder creates conflict-free schedules in seconds','Result Intelligence flags at-risk students automatically with CGPA trends','Alumni Self-Service portal for appointments & digital certificates','One unified platform for every stakeholder at every stage'].map(i=><li key={i}>{i}</li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>How EduCore Works</div>
          <h2 className={styles.sectionTitle}>Seven steps to a smarter college</h2>
        </div>
        <StepFlow />
      </div>

      {/* FEATURES */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>Platform Features</div>
          <h2 className={styles.sectionTitle}>Everything a college needs</h2>
        </div>
        <div className={styles.featuresGrid}>
          {features.map(f => (
            <div key={f.title} className={styles.featureCard}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <div className={styles.featureTitle}>{f.title}</div>
              <div className={styles.featureDesc}>{f.desc}</div>
              <span className={`${styles.tag} ${styles['tag_'+f.tagClass]}`}>{f.tag}</span>
            </div>
          ))}
        </div>
      </div>

      {/* IMPACT */}
      <div className={styles.section}>
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
