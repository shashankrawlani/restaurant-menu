import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Punjab Sindh Restaurant Menu</title>
        <meta name="description" content="Punjab Sindh restaurant Menu" />
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_BASEPATH}/favicon.ico`}
        />
      </Head>
      <h1>Punjab Sindh</h1>
    </div>
  );
}
