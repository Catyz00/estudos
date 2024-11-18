import styles from '../styles/all.module.css';
import LinkButton from "../componentes2/LinkButton";
import ProfileSection from "./ProfileSection/index.jsx";

export default function Profile({ title, profileImg, paragraph, number, email, GitHubUrl, LinkedinUrl, TwitterUrl }) {
    return (
        <div className={styles.app}>
            <div className={styles.divProfile}>
                <img className={styles.all} src={profileImg} alt={title} />
                <div className={styles.divTextos}>
                    <h1>{title}</h1>
                    <hr />
                    <ProfileSection>{paragraph}</ProfileSection>
                    <hr />
                    <ProfileSection>{number}</ProfileSection>
                    <hr />
                    <ProfileSection>{email}</ProfileSection>
                    <hr />
                    <ProfileSection>
                        <LinkButton href={GitHubUrl}>GitHub</LinkButton>
                        <LinkButton href={LinkedinUrl}>Linkedin</LinkButton>
                        <LinkButton href={TwitterUrl}>Twitter</LinkButton>
                    </ProfileSection>
                </div>
            </div>

        </div>
    );
}

