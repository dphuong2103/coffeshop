import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import styles from './styles.module.scss';

export function DefaultLayout() {
  return (
    <div className={styles['layout-container']}>
      <Header />
      <Outlet />
    </div>
  );
}