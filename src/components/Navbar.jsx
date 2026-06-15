import styles from './Navbar.module.css';

export default function Navbar({ activePage, onNavigate }) {
  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'admin', label: 'Admin' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'student', label: 'Student' },
    { id: 'ai', label: 'AI Features' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'revenue', label: 'Revenue' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>🎓</div>
        <span>Edu<span className={styles.logoAccent}>Core</span></span>
      </div>
      <div className={styles.links}>
        {navLinks.map(l => (
          <button
            key={l.id}
            className={`${styles.link} ${activePage === l.id ? styles.linkActive : ''}`}
            onClick={() => onNavigate(l.id)}
          >
            {l.label}
          </button>
        ))}
      </div>
      <div className={styles.actions}>
        <button className={styles.btnGhost}>Log in</button>
        <button className={styles.btnPrimary} onClick={() => onNavigate('admin')}>Get Started</button>
      </div>
    </nav>
  );
}
