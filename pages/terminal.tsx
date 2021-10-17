import Head from "next/head";
import dynamic from "next/dynamic";

const Terminal = dynamic(() => import("../components/terminal"), {
  ssr: false,
});

const wrapperDivStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const TerminalPage = () => (
  <>
    <Head>
      <title>cordx.net - Terminal</title>
    </Head>
    <div style={wrapperDivStyle}>
      <Terminal />
    </div>
  </>
);

export default TerminalPage;
