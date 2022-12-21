import styles from "./UI.module.css";

const Container = ({ children }) => {
    return <div className={styles.containerUI}>
        {children}
    </div>
};

export default Container;