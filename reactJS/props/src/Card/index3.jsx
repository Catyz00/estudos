import styles from '../styles/App3.module.css'
import Button2 from '../componentes/Button2'

export default function card({title, posterImg}) {
    return (
        <div className={styles.app}>
        <img className={styles.all.module} src={posterImg} alt={title} />
          <div className={styles.divTextos}>
          <h1>{title}</h1>
          <p>Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.</p>
            <Button2 />
          </div>
      </div> 
    );
}