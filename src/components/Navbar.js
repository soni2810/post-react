import styles from '../styles/navbar.module.css';
const Navbar = () => {
    return (
      <div className={styles.nav}>
        <div className={styles.leftDiv}>
          <a href="javascript:void(0)">
            <img
              alt=""
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
            />
          </a>
        </div>
  
        <div className={styles.rightNav}>
          <div className={styles.user}>
            <a href="javascript:void(0)">
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt=""
                className={styles.userDp}
              />
            </a>
            <span className={styles.span}>Aakash</span>
          </div>
  
          <div className={styles.navLinks}>
            <ul>
              <li>
                <a href="javascript:void(0)">Log in</a>
              </li>
              <li>
                <a href="javascript:void(0)">Log out</a>
              </li>
              <li>
                <a href="javascript:void(0)">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

export default Navbar;