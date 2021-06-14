import Head from "next/head";

import Button from "../components/Button";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.Container}>
      <Head>
        <title>Next Template</title>
        <meta name="description" content="Next.js template by Ivan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome</h1>
      <Button>Click Me</Button>
    </div>
  );
}
