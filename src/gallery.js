import styles from './gallery.module.css';
import img1 from './assets/IMG_4685.jpeg';
import img2 from './assets/IMG_4687.jpeg';
import img3 from './assets/IMG_4663.jpeg';
import img4 from './assets/IMG_4664.jpeg';
import img5 from './assets/IMG_4665.jpeg';
import img6 from './assets/IMG_4666.jpeg';
import img7 from './assets/IMG_4667.jpeg';
import img8 from './assets/IMG_4668.jpeg';
import img9 from './assets/IMG_4669.jpeg';
import img10 from './assets/IMG_4670.jpeg';

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <img src={img1} alt='' />
      <img src={img2} alt='' />
      <img src={img3} alt='' />
      <img src={img4} alt='' />
      <img src={img5} alt='' />
      <img src={img6} alt='' />
      <img src={img7} alt='' />
      <img src={img8} alt='' />
      <img src={img9} alt='' />
      <img src={img10} alt='' />
    </div>
  );
};

export default Gallery;
