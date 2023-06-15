import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from  './App.module.scss';

export default function App() {
  return (
    <div className={styles.App_page}>
   <Home />
    </div>
  );
}

