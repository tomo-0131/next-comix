import { Button, Text } from '@chakra-ui/react';
import styles from '../styles/components/modalDescription.module.scss';

export const ModalDescription = ({ caption, isShow, setIsShow }) => {
  const closeModal = () => {
    setIsShow(false);
  };

  if (isShow == true) {
    return (
      <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <Text>{caption}</Text>
          <Button className={styles.button} onClick={() => closeModal()}>
            CLOSE
          </Button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
