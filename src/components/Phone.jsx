import styles from './Phone.module.css';

export default function Phone({ label, children }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.phone}>
        <div className={styles.notch}><div className={styles.notchBar}/></div>
        <div className={styles.screen}>{children}</div>
        <div className={styles.homeBar}><div className={styles.homeIndicator}/></div>
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

export function PHeader({ title, right }) {
  return (
    <div className={styles.header}>
      <div className={styles.headerTitle}>{title}</div>
      <div className={styles.headerRight}>{right}</div>
    </div>
  );
}

export function PBody({ children }) {
  return <div className={styles.body}>{children}</div>;
}

export function PNavBar({ items }) {
  return (
    <div className={styles.navBar}>
      {items.map(item => (
        <div key={item.label} className={`${styles.navItem} ${item.active ? styles.navItemActive : ''}`}>
          <div className={styles.navIcon}>{item.icon}</div>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export function PCard({ icon, val, label, primary, accent, progress }) {
  return (
    <div className={`${styles.card} ${primary ? styles.cardPrimary : ''} ${accent ? styles.cardAccent : ''}`}>
      <div className={styles.cardIcon}>{icon}</div>
      <div className={styles.cardVal}>{val}</div>
      <div className={styles.cardLabel}>{label}</div>
      {progress !== undefined && (
        <div className={styles.progressBar}><div className={styles.progressFill} style={{width:`${progress}%`}}/></div>
      )}
    </div>
  );
}

export function PListItem({ icon, title, sub, right, warn }) {
  return (
    <div className={styles.listItem}>
      <div className={styles.listIcon}>{icon}</div>
      <div className={styles.listInfo}>
        <div className={styles.listTitle}>{title}</div>
        <div className={styles.listSub}>{sub}</div>
      </div>
      <div className={styles.listRight} style={warn?{color:'var(--warn)'}:{}}>{right}</div>
    </div>
  );
}

export function PSectionTitle({ children }) {
  return <div className={styles.sectionTitle}>{children}</div>;
}

export function PAvatar({ gradient }) {
  return <div className={styles.avatar} style={gradient ? {background: gradient} : {}}/>;
}
