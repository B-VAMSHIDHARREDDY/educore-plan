import Phone, { PHeader, PBody, PNavBar, PCard, PListItem, PSectionTitle, PAvatar } from '../components/Phone';
import styles from './Mobile.module.css';

function StudentHome() {
  return (
    <Phone label="Student — Home">
      <PHeader title="EduCore" right={<><span style={{fontSize:16}}>🔔</span><PAvatar /></>} />
      <PBody>
        <div className={styles.greeting}>Good Morning,</div>
        <div className={styles.name}>Ananya Sharma 🎓</div>
        <div className={styles.cardsRow}>
          <PCard icon="✅" val="87%" label="Attendance" primary progress={87} />
          <PCard icon="⭐" val="8.4" label="CGPA" accent />
        </div>
        <PSectionTitle>Today's Classes</PSectionTitle>
        <PListItem icon="📊" title="Data Structures" sub="CSE-3A • Lab 201" right="9:00 AM" />
        <PListItem icon="💻" title="Operating Systems" sub="CSE-3A • Room 105" right="11:00 AM" />
        <PListItem icon="🗄️" title="DBMS Lab" sub="CSE-3A • CS Lab 1" right="2:00 PM" />
      </PBody>
      <PNavBar items={[{icon:'🏠',label:'Home',active:true},{icon:'📅',label:'Schedule'},{icon:'🤖',label:'AI'},{icon:'📊',label:'Results'},{icon:'👤',label:'Profile'}]} />
    </Phone>
  );
}

function AIAssistantScreen() {
  return (
    <Phone label="Student — AI Assistant">
      <PHeader title="AI Study Assistant" right={<span style={{fontSize:13,color:'var(--text2)'}}>⋯</span>} />
      <PBody>
        <div className={styles.aiMsg} style={{background:'rgba(124,58,237,0.1)',border:'1px solid rgba(124,58,237,0.3)'}}>
          <div className={styles.aiRole} style={{color:'#A78BFA'}}>🤖 AI Assistant</div>
          <div className={styles.aiText}>Sure! Binary Search Trees (BST) store values where left child &lt; parent &lt; right child. Key operations: Insert, Search, Delete — all O(log n) average...</div>
        </div>
        <div className={styles.aiMsg} style={{background:'rgba(26,107,255,0.1)',border:'1px solid rgba(26,107,255,0.3)',textAlign:'right'}}>
          <div className={styles.aiRole} style={{color:'var(--primary)'}}>You</div>
          <div className={styles.aiText}>Explain BST with examples</div>
        </div>
        <div className={styles.quickChips}>
          {['Generate study plan','Predict exam Qs','Summarize topic'].map(c=>(
            <span key={c} className={styles.chip}>{c}</span>
          ))}
        </div>
        <div className={styles.inputRow}>
          <div className={styles.inputBox}>Ask anything about your subjects...</div>
          <div className={styles.sendBtn}>↑</div>
        </div>
      </PBody>
      <PNavBar items={[{icon:'🏠',label:'Home'},{icon:'📅',label:'Schedule'},{icon:'🤖',label:'AI',active:true},{icon:'📊',label:'Results'},{icon:'👤',label:'Profile'}]} />
    </Phone>
  );
}

function FacultyScreen() {
  return (
    <Phone label="Faculty — Dashboard">
      <PHeader title="My Dashboard" right={<PAvatar gradient="linear-gradient(135deg,var(--purple),var(--primary))" />} />
      <PBody>
        <div className={styles.greeting}>Faculty Portal</div>
        <div className={styles.name}>Dr. Ramesh Rao 👩‍🏫</div>
        <div className={styles.cardsRow}>
          <PCard icon="📚" val="4" label="Classes Today" />
          <PCard icon="👥" val="156" label="My Students" accent />
        </div>
        <div className={styles.quickActions}>
          {[{icon:'📝',label:'AI Q-Paper',purple:true},{icon:'✅',label:'Attendance'},{icon:'📤',label:'Upload'}].map(a=>(
            <div key={a.label} className={`${styles.qa} ${a.purple?styles.qaPurple:''}`}>
              <span>{a.icon}</span>
              <span style={{fontSize:9,fontWeight:700,color:a.purple?'#A78BFA':'var(--text3)'}}>{a.label}</span>
            </div>
          ))}
        </div>
        <PSectionTitle>Pending Actions</PSectionTitle>
        <PListItem icon="⚠️" title="Mark CSE-3B Attendance" sub="Algorithms • 11:00 AM" right="Now" warn />
        <PListItem icon="📝" title="7 Assignment Reviews" sub="Data Structures • Unit 3" right="Today" />
        <PListItem icon="📊" title="Enter Mid-Sem Marks" sub="OS Concepts • CSE-4A" right="2 days" />
      </PBody>
      <PNavBar items={[{icon:'🏠',label:'Home',active:true},{icon:'📚',label:'Subjects'},{icon:'✅',label:'Attend'},{icon:'🤖',label:'AI Tools'},{icon:'👤',label:'Profile'}]} />
    </Phone>
  );
}

function ParentScreen() {
  return (
    <Phone label="Parent — Monitoring">
      <PHeader title="Parent Portal" right={<PAvatar gradient="linear-gradient(135deg,var(--warn),#FFB347)" />} />
      <PBody>
        <div className={styles.greeting}>Monitoring</div>
        <div className={styles.name}>Ananya Sharma 🎓</div>
        <div className={styles.cardsRow}>
          <PCard icon="✅" val="87%" label="Attendance" primary progress={87} />
          <PCard icon="⭐" val="8.4" label="CGPA" accent />
        </div>
        <div className={styles.feeAlert}>
          <span style={{fontSize:20}}>✅</span>
          <div>
            <div style={{fontSize:11,fontWeight:700,color:'var(--accent)'}}>Fees Paid</div>
            <div style={{fontSize:9,color:'var(--text3)'}}>Semester 5 — ₹45,000 cleared</div>
          </div>
        </div>
        <PSectionTitle>Recent Activity</PSectionTitle>
        <PListItem icon="📊" title="Mid-Sem Results Published" sub="Data Structures: 42/50" right="Today" />
        <PListItem icon="✅" title="Attendance: Present" sub="All 3 classes attended" right="Today" />
        <PListItem icon="📢" title="Semester Exam Schedule" sub="Exams begin Nov 15" right="Yesterday" />
      </PBody>
      <PNavBar items={[{icon:'🏠',label:'Home',active:true},{icon:'📊',label:'Progress'},{icon:'💰',label:'Fees'},{icon:'💬',label:'Messages'},{icon:'🔔',label:'Alerts'}]} />
    </Phone>
  );
}

function TimetableScreen() {
  const days = ['M','T','W','T','F','S'];
  return (
    <Phone label="Student — Timetable">
      <PHeader title="Timetable" right={<span>📅</span>} />
      <PBody>
        <div className={styles.dayRow}>
          {days.map((d,i) => (
            <div key={i} className={`${styles.dayBtn} ${i===1?styles.dayBtnActive:''}`}>{d}</div>
          ))}
        </div>
        <PSectionTitle>Tuesday, Nov 12</PSectionTitle>
        {[
          {color:'var(--primary)',time:'9:00 – 10:00 AM',title:'Data Structures',sub:'Dr. Rao • Lab 201'},
          {color:'var(--accent)',time:'11:00 AM – 12:00 PM',title:'Operating Systems',sub:'Prof. Singh • Room 105'},
          {color:'var(--purple)',time:'2:00 – 4:00 PM',title:'DBMS Lab',sub:'Ms. Priya • CS Lab 1'},
        ].map(c => (
          <div key={c.title} className={styles.classCard}>
            <div className={styles.classBar} style={{background:c.color}} />
            <div className={styles.classInfo}>
              <div style={{fontSize:10,fontWeight:700,color:c.color}}>{c.time}</div>
              <div style={{fontSize:12,fontWeight:700,color:'var(--white)'}}>{c.title}</div>
              <div style={{fontSize:10,color:'var(--text3)'}}>{c.sub}</div>
            </div>
          </div>
        ))}
      </PBody>
      <PNavBar items={[{icon:'🏠',label:'Home'},{icon:'📅',label:'Schedule',active:true},{icon:'🤖',label:'AI'},{icon:'📊',label:'Results'},{icon:'👤',label:'Profile'}]} />
    </Phone>
  );
}

function ResultsScreen() {
  return (
    <Phone label="Student — Results">
      <PHeader title="My Results" right={<span>📊</span>} />
      <PBody>
        <div className={styles.cgpaCard}>
          <div style={{fontSize:10,color:'var(--text3)',marginBottom:4}}>Current CGPA</div>
          <div style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:36,fontWeight:700,color:'var(--white)'}}>8.4</div>
          <div style={{fontSize:11,color:'var(--accent)'}}>↑ Improved from 8.1 last sem</div>
        </div>
        <PSectionTitle>Semester 5 Results</PSectionTitle>
        {[
          {grade:'A',title:'Data Structures',sub:'42/50 Internal + 78/100 Final',gpa:'9.0',color:'var(--accent)'},
          {grade:'B+',title:'Operating Systems',sub:'38/50 Internal + 71/100 Final',gpa:'8.0',color:'var(--primary)'},
          {grade:'A',title:'DBMS',sub:'45/50 Internal + 82/100 Final',gpa:'9.0',color:'var(--accent)'},
        ].map(r => (
          <div key={r.title} className={styles.resultItem}>
            <div className={styles.gradeChip} style={{color:r.color}}>{r.grade}</div>
            <div style={{flex:1}}>
              <div style={{fontSize:11,fontWeight:600,color:'var(--text)'}}>{r.title}</div>
              <div style={{fontSize:9,color:'var(--text3)'}}>{r.sub}</div>
            </div>
            <div style={{fontSize:10,fontWeight:700,color:r.color}}>{r.gpa}</div>
          </div>
        ))}
      </PBody>
      <PNavBar items={[{icon:'🏠',label:'Home'},{icon:'📅',label:'Schedule'},{icon:'🤖',label:'AI'},{icon:'📊',label:'Results',active:true},{icon:'👤',label:'Profile'}]} />
    </Phone>
  );
}

function AlumniScreen() {
  return (
    <Phone label="Alumni — Portal">
      <PHeader title="Alumni Portal" right={<PAvatar gradient="linear-gradient(135deg,#f59e0b,#ef4444)" />} />
      <PBody>
        <div className={styles.greeting}>Welcome back,</div>
        <div className={styles.name}>Vikram Sharma 🎓 2019</div>
        <div className={styles.quickActions}>
          {[{icon:'📅',label:'Book Appt'},{icon:'📜',label:'Certificates'},{icon:'👥',label:'Network'}].map(a=>(
            <div key={a.label} className={styles.qa}>
              <span>{a.icon}</span>
              <span style={{fontSize:9,fontWeight:700,color:'var(--text3)'}}>{a.label}</span>
            </div>
          ))}
        </div>
        <PSectionTitle>Alumni Updates</PSectionTitle>
        <PListItem icon="🎉" title="Alumni Meet 2024" sub="Dec 15 • Campus Main Hall" right="Register" />
        <PListItem icon="💼" title="Job Board" sub="12 new openings from alumni" right="View" />
        <PListItem icon="📜" title="Migration Certificate" sub="Requested • Processing" right="3 days" warn />
      </PBody>
      <PNavBar items={[{icon:'🏠',label:'Home',active:true},{icon:'👥',label:'Network'},{icon:'📜',label:'Docs'},{icon:'💼',label:'Jobs'},{icon:'👤',label:'Profile'}]} />
    </Phone>
  );
}

export default function Mobile() {
  return (
    <div className={`${styles.page} page-enter`}>
      <div className={styles.pageLabel}><span className={styles.dot}/> Mobile Screens — iOS & Android App</div>
      <div className={styles.sectionHeader}>
        <div className={styles.eyebrow}>Mobile Application</div>
        <h2 className={styles.sectionTitle}>EduCore in your pocket</h2>
        <p className={styles.sectionSub}>Dedicated apps for students, faculty, and parents — with full feature parity on iOS & Android.</p>
      </div>
      <div className={styles.phonesRow}>
        <StudentHome />
        <AIAssistantScreen />
        <FacultyScreen />
        <ParentScreen />
      </div>
      <div className={styles.phonesRow} style={{marginTop:48}}>
        <TimetableScreen />
        <ResultsScreen />
        <AlumniScreen />
      </div>
    </div>
  );
}
