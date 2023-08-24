import React from "react";
import { PuffLoader } from "react-spinners";
import logoImage from "../assets/images/Logo-main.png";

interface LoadScreenProps {
  loading: boolean;
}

const LoadScreen: React.FC<LoadScreenProps> = ({ loading }) => {
  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <div style={styles.topContainer}>
          <div style={styles.loaderContainer}>
            <PuffLoader
              color={"#2de1bd"}
              loading={loading}
              size={80}
              aria-label="Loading Spinner"
              data-testid="loader"
              css={{ opacity: 0.28 }}
            />
            <img
              src={logoImage}
              style={styles.spinnerLogo}
              alt="Logo"
            />
          </div>
          <div style={styles.loadingTitle}>ALLCOIN</div>
        </div>
        <div style={styles.bottomContainer}>Enabling Real World P2P</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundImage: "linear-gradient(to bottom, #11836c, #18dbb4, #2de1bd)",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    paddingTop: "52px",
    paddingBottom: "10px",
    overflow: "hidden",
  },
  topContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
  },
  loaderContainer: {
    position: "relative",
    zIndex: 10,
  },
  spinnerLogo: {
    width: "8rem",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  loadingTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  bottomContainer: {
    color: "black",
    marginTop: "2rem",
  },
};

export default LoadScreen;
