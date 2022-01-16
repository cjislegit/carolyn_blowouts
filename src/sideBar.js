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
        <form action='https://www.fresha.com/a/super-brite-orange-1108-east-katella-avenue-q44vwh8l/booking?menu=true'>
          <input type='submit' value='Book Now' />
        </form>
      </div>
      <div className={styles.bottom}>
        <span>
          <a href='https://www.instagram.com/super.brite/'>
            <i class='fab fa-instagram fa-2x'></i>
          </a>
        </span>
        <div>Carolyn Escandon</div>
      </div>
    </div>
  );
};

export default SideBar;
