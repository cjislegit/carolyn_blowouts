import styles from './sideBar.module.css';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.top}>
        <h1>Hair and Makeup in Orange County</h1>
        <div>
          Hello! My name is Carolyn and welcome to Super Brite! I have been
          lovingly doing hair and make-up since 2018 and have over 8 years of
          exceptional customer service experience. I chose the name Super Brite
          to encapsulate the energy and happiness I have in my passion for
          beauty. I service all ages and genders and have a variety of skills. I
          strive for more education on a regular basis to keep on trend and keep
          my loyal clients in the know with what is best for their service.
        </div>
        <form action='https://www.fresha.com/a/super-brite-orange-1108-east-katella-avenue-q44vwh8l/booking?menu=true'>
          <input type='submit' value='Book Now' />
        </form>
      </div>
      <div className={styles.bottom}>
        <span>
          <a
            aria-label='Insagram link'
            href='https://www.instagram.com/super.brite/'
          >
            <i class='fab fa-instagram fa-2x'></i>
          </a>
        </span>
        <div>Carolyn Escandon</div>
      </div>
    </div>
  );
};

export default SideBar;
