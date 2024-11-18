import StatusText from './componentes/StatusText';
import { Subtitle } from './componentes/Subtitle';
import Title from './componentes/Title';
import styles from '.App.module.css';

export default function App() {

  return(
    <div className={styles.app}>
      <Title/>
      <Subtitle/>
      <StatusText/>
    </div>
  )
}