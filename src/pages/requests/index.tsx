import type { NextPage } from 'next';
import Link from 'next/link';

import { Helmet } from '@components';

import styles from '../home.module.scss';

const Requests: NextPage = () => {
  return (
    <div className={styles.container}>
      <Helmet title="Requests" />

      <main className={styles.main}>
        <h1 className={styles.title}>Requests list</h1>

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

export default Requests;
