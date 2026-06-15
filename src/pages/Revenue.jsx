import styles from './Revenue.module.css';

const impacts = [
  { icon:'🏫', val:'43,000+', label:'Colleges in India', sub:'Total Addressable Market' },
  { icon:'🎓', val:'38M+', label:'Students', sub:'Captive & High Intent Audience' },
  { icon:'💰', val:'₹78Cr+', label:'ARR Potential', sub:'At 5,000 Pro College Subscribers' },
  { icon:'🚀', val:'2026', label:'Launch Year', sub:"Digital transformation of India's colleges" },
];

export default function Revenue() {
  return (
    <div className={`${styles.page} page-enter`}>
      <div className={styles.pageLabel}><span className={styles.dot}/> Revenue Model — How EduCore Earns</div>
      <div className={styles.sectionHeader}>
        <div className={styles.eyebrow}>Business Model</div>
        <h2 className={styles.sectionTitle}>Three revenue streams,<br/>compounding growth</h2>
        <p className={styles.sectionSub}>EduCore earns through college subscriptions, in-platform advertising, and premium AI add-ons — each reinforcing the other.</p>
      </div>

      <div className={styles.revGrid}>
        <div className={`${styles.revCard} ${styles.revPrimary}`}>
          <div className={styles.revIcon}>🏛️</div>
          <div className={styles.revLabel}>Primary Revenue</div>
          <div className={styles.revTitle}>College Subscriptions</div>
          <div className={styles.revDesc}>Monthly SaaS fee per college based on plan tier and enrolled student count. Predictable, recurring revenue that scales with the platform.</div>
          <div className={styles.revExtra}>
            <div className={styles.pricingGrid}>
              <div className={styles.priceBox}><div className={styles.priceVal}>₹999</div><div className={styles.priceSub}>Starter / mo</div></div>
              <div className={styles.priceBox}><div className={styles.priceVal}>₹2,499</div><div className={styles.priceSub}>Pro / mo</div></div>
            </div>
          </div>
        </div>

        <div className={`${styles.revCard} ${styles.revBonus}`}>
          <div className={styles.revIcon}>📣</div>
          <div className={styles.revLabel} style={{color:'var(--warn)'}}>Bonus Revenue</div>
          <div className={styles.revTitle}>College Advertising</div>
          <div className={styles.revDesc}>Degree colleges advertise to students on intermediate colleges on the platform. High-intent audience — students actively choosing their next step.</div>
          <div className={styles.revExtra}>
            <div className={styles.adBox}>
              <div>38M+ captive student audience</div>
              <div style={{color:'var(--warn)',fontWeight:700}}>High Intent</div> at college selection stage
            </div>
          </div>
        </div>

        <div className={`${styles.revCard} ${styles.revUpsell}`}>
          <div className={styles.revIcon}>💎</div>
          <div className={styles.revLabel} style={{color:'var(--accent)'}}>Upsell Revenue</div>
          <div className={styles.revTitle}>Premium Add-ons</div>
          <div className={styles.revDesc}>AI credits, priority support, custom integrations, and white-labelling for institutions that want branded experiences.</div>
          <div className={styles.revExtra}>
            <ul className={styles.upsellList}>
              {['Extra AI Credits','White-label Branding','Custom Integrations','Priority SLA Support'].map(i=>(
                <li key={i}><span>✓</span>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Network Effect */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>Growth Engine</div>
          <h2 className={styles.sectionTitle}>The network effect flywheel</h2>
        </div>
        <div className={styles.flywheel}>
          {[
            {icon:'🏫',title:'More Colleges',sub:'Join the platform'},
            {icon:'🎓',title:'More Students',sub:'Captive audience grows'},
            {icon:'📣',title:'More Advertisers',sub:'Colleges pay to reach students'},
            {icon:'📈',title:'More Growth',sub:'Platform value compounds'},
          ].map((s,i,arr) => (
            <div key={s.title} className={styles.flywheelItem}>
              <div className={styles.flywheelIcon}>{s.icon}</div>
              <div className={styles.flywheelTitle}>{s.title}</div>
              <div className={styles.flywheelSub}>{s.sub}</div>
              {i < arr.length-1 && <div className={styles.arrow}>→</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Market */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>Market Opportunity</div>
          <h2 className={styles.sectionTitle}>A massive, underserved market</h2>
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
