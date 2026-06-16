import Phone, { PHeader, PBody, PNavBar, PSectionTitle, PAvatar } from '../components/Phone';
import styles from './Mobile.module.css';

/* ── Nav items ── */
const STUDENT_NAV = [
  {icon:'🏠',label:'Home'},{icon:'📅',label:'Classes'},{icon:'📖',label:'Learn'},
  {icon:'📩',label:'Inbox'},{icon:'👤',label:'Profile'}
];

/* 01. Dashboard (Home) */
function DashboardScreen() {
  return (
    <Phone label="04. Dashboard (Home)">
      <PHeader title="Hello, Rahul 👋" right={<span style={{fontSize:16,color:'#fff'}}>🔔</span>} />
      <PBody>
        <div style={{fontSize:10,color:'var(--text2)',marginBottom:10}}>B.Sc. Computer Science • 2nd Year</div>
        {/* Today's stats */}
        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <div className={styles.statVal} style={{color:'var(--accent)'}}>2</div>
            <div className={styles.statLabel}>Completed</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statVal}>1</div>
            <div className={styles.statLabel}>Ongoing</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statVal} style={{color:'var(--text3)'}}>2</div>
            <div className={styles.statLabel}>Upcoming</div>
          </div>
        </div>
        <PSectionTitle>Quick Access</PSectionTitle>
        <div className={styles.quickGrid}>
          {[
            {icon:'📅',label:'Timetable',bg:'#E3F2FD'},
            {icon:'✅',label:'Attendance',bg:'#E8F5E9'},
            {icon:'📝',label:'Assignments',bg:'#FFF3E0'},
            {icon:'📋',label:'Exams',bg:'#F3E5F5'},
            {icon:'📊',label:'Results',bg:'#E3F2FD'},
            {icon:'💳',label:'Fee &\nPayments',bg:'#FFEBEE'},
            {icon:'📚',label:'Study\nMaterial',bg:'#E8F5E9'},
            {icon:'📖',label:'Library',bg:'#FFF3E0'},
          ].map(q => (
            <div key={q.label} className={styles.qBtn}>
              <div className={styles.qIcon} style={{background:q.bg}}>{q.icon}</div>
              <div className={styles.qLabel}>{q.label}</div>
            </div>
          ))}
        </div>
        <PSectionTitle>Upcoming Class</PSectionTitle>
        <div className={styles.upcomingCard}>
          <div>
            <div className={styles.upcomingTitle}>Data Structures</div>
            <div className={styles.upcomingMeta}>10:30 AM – 11:30 AM • Room No. 305</div>
          </div>
          <div className={styles.viewAll}>›</div>
        </div>
      </PBody>
      <PNavBar items={[{...STUDENT_NAV[0],active:true},...STUDENT_NAV.slice(1)]} />
    </Phone>
  );
}

/* 02. Timetable */
function TimetableScreen() {
  const days = [
    {d:'Mon',n:'20'},{d:'Tue',n:'21'},{d:'Wed',n:'22'},{d:'Thu',n:'23'},{d:'Fri',n:'24'}
  ];
  const classes = [
    {color:'#1565C0',time:'9:00 AM',subject:'Mathematics',detail:'Room 205 • Prof. Sharma'},
    {color:'#2E7D32',time:'10:30 AM',subject:'Data Structures',detail:'Room 305 • Prof. Verma'},
    {color:'#6A1B9A',time:'12:00 PM',subject:'Digital Electronics',detail:'Room 204 • Prof. Mehta'},
    {color:'#C62828',time:'2:00 PM',subject:'English',detail:'Room 101 • Prof. Singh'},
    {color:'#E65100',time:'3:30 PM',subject:'Sports / Activity',detail:'Ground'},
  ];
  return (
    <Phone label="05. Timetable">
      <PHeader title="← Timetable" right={<span style={{color:'#fff',fontSize:16}}>⋯</span>} />
      <PBody>
        <div style={{display:'flex',gap:6,marginBottom:10}}>
          <div style={{flex:1,background:'var(--primary-lighter)',color:'var(--primary)',borderRadius:6,padding:'4px 0',textAlign:'center',fontSize:10,fontWeight:700}}>Day View</div>
          <div style={{flex:1,background:'#fff',color:'var(--text2)',borderRadius:6,padding:'4px 0',textAlign:'center',fontSize:10,fontWeight:600,border:'1px solid var(--border)'}}>Week View</div>
        </div>
        <div className={styles.dayRow}>
          {days.map((d,i) => (
            <div key={i} className={`${styles.dayBtn} ${i===1?styles.dayBtnActive:''}`}>
              <span style={{fontSize:8}}>{d.d}</span>
              <span className={styles.dayBtnDate}>{d.n}</span>
            </div>
          ))}
        </div>
        {classes.map(c => (
          <div key={c.subject} className={styles.classCard}>
            <div className={styles.classBar} style={{background:c.color}} />
            <div className={styles.classInfo}>
              <div className={styles.classSubject}>{c.subject}</div>
              <div className={styles.classDetail}>{c.detail}</div>
            </div>
            <div className={styles.classTime}>{c.time}</div>
          </div>
        ))}
      </PBody>
      <PNavBar items={[STUDENT_NAV[0],{...STUDENT_NAV[1],active:true},...STUDENT_NAV.slice(2)]} />
    </Phone>
  );
}

/* 03. Attendance */
function AttendanceScreen() {
  const subjects = [
    {name:'Data Structures',pct:92},{name:'Mathematics',pct:85},
    {name:'Digital Electronics',pct:80},{name:'English',pct:90},
  ];
  return (
    <Phone label="06. Attendance">
      <PHeader title="Attendance" right={null} />
      <PBody>
        <div style={{fontSize:10,color:'var(--text2)',marginBottom:8}}>June 2024 ▾</div>
        <div className={styles.attendanceBig}>
          <div className={styles.circleWrap}>
            <svg className={styles.circleSvg} viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="28" fill="none" stroke="#E3F2FD" strokeWidth="6"/>
              <circle cx="32" cy="32" r="28" fill="none" stroke="#1565C0" strokeWidth="6"
                strokeDasharray={`${2*Math.PI*28*0.87} ${2*Math.PI*28*(1-0.87)}`}/>
            </svg>
            <div className={styles.circleText}>
              <span className={styles.circleVal}>87%</span>
              <span className={styles.circleLabel}>Present</span>
            </div>
          </div>
          <div className={styles.attendanceStats}>
            {[['Total Classes','48'],['Present','42'],['Absent','6']].map(([l,v])=>(
              <div key={l} className={styles.attStat}>
                <span className={styles.attStatLabel}>{l}</span>
                <span className={styles.attStatVal}>{v}</span>
              </div>
            ))}
          </div>
        </div>
        <PSectionTitle>Subject Wise</PSectionTitle>
        {subjects.map(s=>(
          <div key={s.name} className={styles.subjectBar}>
            <div className={styles.subjectBarLabel}>
              <span>{s.name}</span><span>{s.pct}%</span>
            </div>
            <div className={styles.barTrack}><div className={styles.barFill} style={{width:`${s.pct}%`}}/></div>
          </div>
        ))}
      </PBody>
      <PNavBar items={[STUDENT_NAV[0],...STUDENT_NAV.slice(1,4),{...STUDENT_NAV[4],active:true}]} />
    </Phone>
  );
}

/* 04. Assignments */
function AssignmentsScreen() {
  const assignments = [
    {sub:'Data Structures',title:'Linked List Implementation',due:'25 Jun 2024',pts:'10 Points'},
    {sub:'Mathematics',title:'Calculus Problem Set',due:'28 Jun 2024',pts:'15 Points'},
    {sub:'Digital Electronics',title:'Lab Report - 3',due:'30 Jun 2024',pts:'10 Points'},
    {sub:'English',title:'Essay Writing',due:'02 Jul 2024',pts:'10 Points'},
  ];
  return (
    <Phone label="07. Assignments">
      <PHeader title="Assignments" right={null} />
      <PBody>
        <div className={styles.tabRow}>
          {['All','Pending','Submitted'].map((t,i)=>(
            <div key={t} className={`${styles.tab} ${i===1?styles.tabActive:''}`}>{t}</div>
          ))}
        </div>
        {assignments.map(a=>(
          <div key={a.title} className={styles.assignCard}>
            <div className={styles.assignSubject}>{a.sub}</div>
            <div className={styles.assignTitle}>{a.title}</div>
            <div className={styles.assignMeta}>
              <span className={styles.assignDue}>Due: {a.due} • {a.pts}</span>
              <span className={styles.pendingBadge}>Pending</span>
            </div>
          </div>
        ))}
      </PBody>
      <PNavBar items={[STUDENT_NAV[0],STUDENT_NAV[1],{...STUDENT_NAV[2],active:true},...STUDENT_NAV.slice(3)]} />
    </Phone>
  );
}

/* 05. Study Material */
function StudyMaterialScreen() {
  const materials = [
    {icon:'📄',sub:'Data Structures',title:'Lecture Notes',meta:'PDF • 2.4 MB'},
    {icon:'📄',sub:'Mathematics',title:'Calculus Formulas',meta:'PDF • 1.2 MB'},
    {icon:'📄',sub:'Digital Electronics',title:'Semiconductor Notes',meta:'PDF • 1.8 MB'},
    {icon:'📄',sub:'English',title:'Language Guide',meta:'PDF • 1.1 MB'},
  ];
  return (
    <Phone label="08. Study Material">
      <PHeader title="Study Material" right={null} />
      <PBody>
        <div className={styles.searchBox}>
          <span style={{fontSize:12,color:'var(--text3)'}}>🔍</span>
          <div className={styles.searchInput}>Search materials...</div>
        </div>
        <div className={styles.filterRow}>
          {['All','Notes','PPT','Reference','Video'].map((f,i)=>(
            <div key={f} className={`${styles.filterChip} ${i===0?styles.filterChipActive:''}`}>{f}</div>
          ))}
        </div>
        {materials.map(m=>(
          <div key={m.title} className={styles.materialItem}>
            <div className={styles.materialIcon}>{m.icon}</div>
            <div className={styles.materialInfo}>
              <div className={styles.materialTitle}>{m.sub}</div>
              <div className={styles.materialMeta}>{m.title}</div>
              <div className={styles.materialMeta}>{m.meta}</div>
            </div>
            <span className={styles.arrowIcon}>›</span>
          </div>
        ))}
      </PBody>
      <PNavBar items={[STUDENT_NAV[0],STUDENT_NAV[1],{...STUDENT_NAV[2],active:true},...STUDENT_NAV.slice(3)]} />
    </Phone>
  );
}

/* 06. Exams */
function ExamsScreen() {
  const exams = [
    {sub:'Data Structures',name:'Unit Test - 2',date:'25 Jun 2024 • 10:00 AM',room:'Room 305',days:'3 Days Left',urgent:true},
    {sub:'Mathematics',name:'Mid Term Exam',date:'01 Jul 2024 • 10:00 AM',room:'Room 203',days:'9 Days Left',urgent:false},
    {sub:'Digital Electronics',name:'End Sem Exam',date:'15 Jul 2024 • 09:30 AM',room:'Hall - A',days:'23 Days Left',urgent:false},
  ];
  return (
    <Phone label="09. Exams">
      <PHeader title="Exams" right={null} />
      <PBody>
        <div className={styles.examTabRow}>
          {['Upcoming','Completed'].map((t,i)=>(
            <div key={t} className={`${styles.tab} ${i===0?styles.tabActive:''}`}>{t}</div>
          ))}
        </div>
        {exams.map(e=>(
          <div key={e.name} className={styles.examCard}>
            <div className={styles.examSubject}>{e.sub}</div>
            <div className={styles.examName}>{e.name}</div>
            <div style={{fontSize:9,color:'var(--text3)',marginTop:2}}>{e.date}</div>
            <div style={{fontSize:9,color:'var(--text3)'}}>{e.room}</div>
            <div className={styles.examMeta}>
              <span className={styles.examDate}></span>
              <span className={`${styles.daysLeft} ${e.urgent?styles.daysLeftSoon:''}`}>{e.days}</span>
            </div>
          </div>
        ))}
      </PBody>
      <PNavBar items={[STUDENT_NAV[0],STUDENT_NAV[1],{...STUDENT_NAV[2],active:true},...STUDENT_NAV.slice(3)]} />
    </Phone>
  );
}

/* 07. Results */
function ResultsScreen() {
  const results = [
    {sub:'Data Structures',grade:'A',gradeClass:''},
    {sub:'Mathematics',grade:'A-',gradeClass:''},
    {sub:'Digital Electronics',grade:'B+',gradeClass:styles.gradeChipB},
    {sub:'English',grade:'A',gradeClass:''},
    {sub:'Environmental Science',grade:'A-',gradeClass:''},
  ];
  return (
    <Phone label="10. Results">
      <PHeader title="Results" right={null} />
      <PBody>
        <div style={{fontSize:10,color:'var(--text2)',marginBottom:8}}>Semester 2 ▾</div>
        <div className={styles.sgpaCard}>
          <div>
            <div className={styles.sgpaLabel}>SGPA</div>
            <div className={styles.sgpaVal}>8.45 / 10</div>
          </div>
          <div className={styles.gradeCircle}>A</div>
        </div>
        <PSectionTitle>Subject &nbsp; Grade</PSectionTitle>
        {results.map(r=>(
          <div key={r.sub} className={styles.resultItem}>
            <div className={`${styles.gradeChip} ${r.gradeClass}`}>{r.grade}</div>
            <div>
              <div className={styles.subjectName}>{r.sub}</div>
            </div>
          </div>
        ))}
      </PBody>
      <PNavBar items={[STUDENT_NAV[0],STUDENT_NAV[1],{...STUDENT_NAV[2],active:true},...STUDENT_NAV.slice(3)]} />
    </Phone>
  );
}

/* 08. Fee & Payments */
function FeeScreen() {
  const history = [
    {label:'Tuition Fee',date:'10 Jan 2024',amt:'₹ 12,500'},
    {label:'Library Fee',date:'12 Jan 2024',amt:'₹ 2,000'},
    {label:'Lab Fee',date:'15 Jan 2024',amt:'₹ 4,000'},
  ];
  return (
    <Phone label="11. Fee & Payments">
      <PHeader title="Fee & Payments" right={null} />
      <PBody>
        <div style={{fontSize:10,color:'var(--text2)',marginBottom:8}}>Current Semester ▾</div>
        <div className={styles.feeCard}>
          <div className={styles.feeRow}>
            <div>
              <div className={styles.feeLabel}>Total Fee</div>
              <div className={styles.feeAmt}>₹ 24,500</div>
            </div>
            <div>
              <div className={styles.feeLabel}>Paid ✓</div>
              <div className={styles.feeAmt}>₹ 18,500</div>
            </div>
          </div>
          <div style={{fontSize:9,opacity:0.8,marginBottom:6}}>Due Amount: <strong>₹ 6,000</strong></div>
          <div className={styles.payNowBtn}>Pay Now</div>
        </div>
        <PSectionTitle>Payment History</PSectionTitle>
        {history.map(h=>(
          <div key={h.label} className={styles.payHistItem}>
            <div>
              <div className={styles.payHistLabel}>{h.label}</div>
              <div className={styles.payHistDate}>{h.date}</div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:6}}>
              <span style={{fontSize:10,fontWeight:700,color:'var(--text)'}}>{h.amt}</span>
              <span className={styles.paidBadge}>Paid</span>
            </div>
          </div>
        ))}
      </PBody>
      <PNavBar items={[STUDENT_NAV[0],STUDENT_NAV[1],{...STUDENT_NAV[2],active:true},...STUDENT_NAV.slice(3)]} />
    </Phone>
  );
}

/* 09. Profile */
function ProfileScreen() {
  const links = [
    {icon:'👤',label:'Personal Details'},
    {icon:'🎓',label:'Academic Details'},
    {icon:'🪪',label:'Download ID Card'},
    {icon:'🔒',label:'Change Password'},
    {icon:'⚙️',label:'Settings'},
    {icon:'❓',label:'Help & Support'},
  ];
  return (
    <Phone label="12. Profile">
      <PHeader title="Profile" right={null} />
      <PBody>
        <div className={styles.profileHeader}>
          <div className={styles.profileAvatar}>👤</div>
          <div className={styles.profileName}>Rahul Kumar</div>
          <div className={styles.profileMeta}>B.Sc. Computer Science</div>
          <div className={styles.profileMeta}>2nd Year • Roll No: CSE20125</div>
        </div>
        <PSectionTitle>Quick Links</PSectionTitle>
        {links.map(l=>(
          <div key={l.label} className={styles.profileMenuItem}>
            <span className={styles.profileMenuLabel}><span>{l.icon}</span>{l.label}</span>
            <span style={{fontSize:12,color:'var(--text3)'}}>›</span>
          </div>
        ))}
        <div className={`${styles.profileMenuItem} ${styles.logoutItem}`}>
          <span className={styles.profileMenuLabel} style={{color:'var(--red)'}}><span>🚪</span>Logout</span>
          <span style={{fontSize:12,color:'var(--red)'}}>›</span>
        </div>
      </PBody>
      <PNavBar items={[STUDENT_NAV[0],...STUDENT_NAV.slice(1,4),{...STUDENT_NAV[4],active:true}]} />
    </Phone>
  );
}

/* 10. Inbox / Notifications */
function InboxScreen() {
  const messages = [
    {icon:'📢',bg:'#E3F2FD',sender:'College Announcement',text:'Class test schedule for this week is updated.',time:'10:30 AM'},
    {icon:'📋',bg:'#E8F5E9',sender:'Examination Cell',text:'Your exam form has been submitted successfully.',time:'09:15 AM'},
    {icon:'📚',bg:'#FFF3E0',sender:'Library',text:'New book "Data Structures in C++" is available now.',time:'Yesterday'},
    {icon:'💼',bg:'#F3E5F5',sender:'Placement Cell',text:'Infosys is coming for campus drive on 20th July.',time:'2 days ago'},
  ];
  return (
    <Phone label="13. Inbox / Notifications">
      <PHeader title="Inbox" right={null} />
      <PBody>
        <div className={styles.inboxTabRow}>
          {['All','Announcements','Messages'].map((t,i)=>(
            <div key={t} className={`${styles.tab} ${i===0?styles.tabActive:''}`}>{t}</div>
          ))}
        </div>
        {messages.map(m=>(
          <div key={m.sender} className={styles.messageItem}>
            <div className={styles.messageHeader}>
              <div className={styles.messageIcon} style={{background:m.bg}}>{m.icon}</div>
              <div className={styles.messageSender}>{m.sender}</div>
              <div className={styles.messageTime}>{m.time}</div>
            </div>
            <div className={styles.messageText}>{m.text}</div>
          </div>
        ))}
      </PBody>
      <PNavBar items={[STUDENT_NAV[0],...STUDENT_NAV.slice(1,3),{...STUDENT_NAV[3],active:true},STUDENT_NAV[4]]} />
    </Phone>
  );
}

/* ── Page Export ── */
export default function Mobile() {
  return (
    <div className={`${styles.page} page-enter`}>
      <div className={styles.pageLabel}><span className={styles.dot}/> Mobile Screens — iOS & Android App</div>
      <div className={styles.sectionHeader}>
        <div className={styles.eyebrow}>Mobile Application</div>
        <h2 className={styles.sectionTitle}>EduCore in your pocket</h2>
        <p className={styles.sectionSub}>All your academic journey in one place — Timetable, Attendance, Exams, Results & more.</p>
      </div>
      <div className={styles.phonesRow}>
        <DashboardScreen />
        <TimetableScreen />
        <AttendanceScreen />
        <AssignmentsScreen />
        <StudyMaterialScreen />
      </div>
      <div className={styles.phonesRow} style={{marginTop:48}}>
        <ExamsScreen />
        <ResultsScreen />
        <FeeScreen />
        <ProfileScreen />
        <InboxScreen />
      </div>
    </div>
  );
}
