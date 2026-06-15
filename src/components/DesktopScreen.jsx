import styles from './DesktopScreen.module.css';

export default function DesktopScreen({ url, sidebarItems, children }) {
  return (
    <div className={styles.screen}>
      <div className={styles.bar}>
        <div className={styles.dots}><span/><span/><span/></div>
        <div className={styles.url}>{url}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <div className={styles.logo}>Edu<span>Core</span></div>
          {sidebarItems.map(item => (
            <div key={item.label} className={`${styles.item} ${item.active ? styles.itemActive : ''}`}>
              <span>{item.icon}</span> {item.label}
            </div>
          ))}
        </div>
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
}

export function TopBar({ title, children }) {
  return (
    <div className={styles.topbar}>
      <div className={styles.pageTitle}>{title}</div>
      <div className={styles.actions}>{children}</div>
    </div>
  );
}

export function StatsRow({ stats }) {
  return (
    <div className={styles.statsRow}>
      {stats.map(s => (
        <div key={s.label} className={styles.stat}>
          <div className={styles.statVal}>{s.val}</div>
          <div className={styles.statLabel}>{s.label}</div>
          {s.change && <div className={styles.statChange} style={s.warn?{color:'var(--warn)'}:{}}>{s.change}</div>}
        </div>
      ))}
    </div>
  );
}

export function DataTable({ columns, rows, colTemplate }) {
  return (
    <div className={styles.tableWrap}>
      <div className={styles.tableHead} style={{gridTemplateColumns: colTemplate}}>
        {columns.map(c => <span key={c}>{c}</span>)}
      </div>
      {rows.map((row, i) => (
        <div key={i} className={styles.tableRow} style={{gridTemplateColumns: colTemplate}}>
          {row.map((cell, j) => (
            <span key={j}>{cell}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function SBtn({ primary, children }) {
  return <button className={`${styles.sBtn} ${primary ? styles.sBtnP : styles.sBtnS}`}>{children}</button>;
}

export function Badge({ type, children }) {
  return <span className={`${styles.badge} ${styles['badge_'+type]}`}>{children}</span>;
}
