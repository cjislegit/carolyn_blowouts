import styles from './sideBar.module.css';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.top}>
        <h1>Haircuts and Stuff</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu elementum,
          velit suspendisse sed faucibus quis viverra. Ac risus dictum pulvinar
          pulvinar ut.
        </div>
        <input type='button' value='Book Now' />
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default SideBar;
