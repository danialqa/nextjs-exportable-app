import type { NextPage } from 'next';
import Link from 'next/link';

import { Helmet } from '@components';

import styles from './home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Helmet title="Home" />

      <main className={styles.main}>
        <img
          src="/images/home-image.svg"
          width={408.5}
          height={434.22}
          alt=""
        />

        <h1 className={styles.title}>
          Welcome to <span>Delivery App!</span>
        </h1>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/requests">
                <a>View Requests</a>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <a>Your Profile</a>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
};

export default Home;
