import type { MouseEvent, ReactNode } from "react";
import styles from "./Modal.module.scss";

type ModalProps = {
  closeModalHandler: () => void;
  children: ReactNode;
};

export default function Modal({ children, closeModalHandler }: ModalProps) {
  const preventClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className={styles.Layer}
      onClick={closeModalHandler}
      aria-hidden
      role="banner"
    >
      <div
        className={styles.Modal}
        onClick={preventClickHandler}
        aria-hidden
        role="treeitem"
        aria-selected="false"
      >
        {children}
      </div>
    </div>
  );
}
