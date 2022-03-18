import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.scss";
import { useTranslation } from "next-i18next";

const Home: NextPage = () => {
	const { t } = useTranslation('common');
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>{t("sample test phrase")}</main>
		</div>
	);
};

export default Home;
