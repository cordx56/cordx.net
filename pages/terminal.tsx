import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/terminal.module.css";

const Terminal = dynamic(() => import("../components/terminal"), {
  ssr: false,
});

const wrapperDivStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
};

const TerminalPage = () => (
  <>
    <Head>
      <title>cordx.net - Terminal</title>
    </Head>
    <div style={wrapperDivStyle}>
      <Terminal className={styles.terminal} />
    </div>
  </>
);

export default TerminalPage;
