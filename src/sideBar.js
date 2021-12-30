import styles from './sideBar.module.css';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default SideBar;
