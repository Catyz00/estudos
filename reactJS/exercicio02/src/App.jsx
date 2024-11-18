import Title2 from './componentes/Title2';
import Text2 from './componentes/Text2';
import Button2 from './componentes/Button2';
import Poster2 from './componentes/Poster2';
import styles from './styles/App2.module.css';

export default function App() {
  return (
      <div className={styles.app}>
      <Poster2 />
        <div className={styles.divTextos}>
          <Title2/>
          <Text2 />
          <Button2 />
        </div>
    </div>    
  );
}

