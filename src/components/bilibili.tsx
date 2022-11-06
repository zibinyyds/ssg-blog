import styles from "@/styles/YouTube.module.css";

export default function Bilibili({ aid }: { aid: string }) {
  return (
    <div className={styles.container}>
      <iframe
        src={`//player.bilibili.com/player.html?aid=${aid}`}
        scrolling="no"
        frameBorder="no"
        className={styles.frame}
      ></iframe>
    </div>
  );
}
