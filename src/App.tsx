import "./App.css";
import { useState } from "react";
import { WEB3AUTH_NETWORK_TYPE } from "./config/web3AuthNetwork";
import { CHAIN_CONFIG_TYPE } from "./config/chainConfig";
import styles from "./styles/Home.module.css";
import { Web3AuthProvider } from "./services/web3auth";
import Setting from "./components/Setting";
import Main from "./components/Main";

function App() {
  const [web3AuthNetwork, setWeb3AuthNetwork] = useState<WEB3AUTH_NETWORK_TYPE>("mainnet");
  const [chain, setChain] = useState<CHAIN_CONFIG_TYPE>("mainnet");

  return (
    <div className={styles.container}>
      <Web3AuthProvider chain={chain} web3AuthNetwork={web3AuthNetwork}>
        <h1 className={styles.title}>
          <a target="_blank" href="http://web3auth.io/" rel="noreferrer">
            TheBridge
          </a>{" "}
          @ ETHAmsterdam
        </h1>
        <Setting setNetwork={setWeb3AuthNetwork} setChain={setChain} />
        <Main />
      </Web3AuthProvider>
      <footer className={styles.footer}>
        <a href="https://precious-apparel-30c.notion.site/Your-Quests-28d0024850864ad2b13ac1ad5aa0afbd" target="_blank" rel="noopener noreferrer">
          Start your quest {"  "}
          <img className={styles.logo} src="/images/thebridge-logo.png" alt="thebridge-logo" />
        </a>
      </footer>
    </div>
  );
}

export default App;
