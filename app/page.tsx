import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to The Lex Quartet
                </h1>
                <p className={styles.description}>
				This is where the main body of the homepage will be
                </p>
			</main>
			<footer className={styles.footer}>
				This is where the footer will be
			</footer>
		</div>
	);
}
