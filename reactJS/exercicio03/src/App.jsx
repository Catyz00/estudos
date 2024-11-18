import Profile from '../Profile/Profile.jsx';
import profileImg2 from '../public/Mask group.png';
import styles from '../styles/all.module.css';

export default function App(){
  return(
    <>
      <Profile className={styles.divProfile} 
      profileImg={profileImg2}
      title="Catarina Dalsan"
      paragraph="Front-end developer and UI/UX designer"
      number="+55119945*****"
      email="catarina.dalsan@outlook.com"
      GitHubUrl="https://github.com/Catyz00"
      LinkedinUrl="https://www.linkedin.com/in/catarina-dalsan/"
      TwitterUrl="https://x.com/a_catyz"/>
    </>
  );
}