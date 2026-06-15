import styles from './Sidebar.module.css';

const pages = [
  { id: 'overview', label: 'Overview', group: 'Pages' },
  { id: 'admin', label: 'Admin Dashboard', group: 'Pages' },
  { id: 'faculty', label: 'Faculty Portal', group: 'Pages' },
  { id: 'student', label: 'Student Portal', group: 'Pages' },
  { id: 'ai', label: 'AI Features', group: 'Features' },
  { id: 'mobile', label: 'Mobile Screens', group: 'Features' },
  { id: 'revenue', label: 'Revenue Model', group: 'Business' },
];

export default function Sidebar({ activePage, onNavigate }) {
  const groups = [...new Set(pages.map(p => p.group))];
  return (
    <aside className={styles.sidebar}>
      {groups.map(group => (
        <div key={group}>
          <div className={styles.groupTitle}>{group}</div>
          {pages.filter(p => p.group === group).map(p => (
            <button
              key={p.id}
              className={`${styles.item} ${activePage === p.id ? styles.active : ''}`}
              onClick={() => onNavigate(p.id)}
            >
              <span className={`${styles.dot} ${activePage === p.id ? styles.dotActive : ''}`} />
              {p.label}
            </button>
          ))}
          <div className={styles.sep} />
        </div>
      ))}
    </aside>
  );
}
