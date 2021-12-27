import { Button, Image } from '@chakra-ui/react';
// import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/components/index.module.scss';
import { ModalDescription } from './ModalDescription';

export function BookList(props) {
  const { book } = props;
  const [isShow, setIsShow] = useState(false);
  const openModal = () => {
    setIsShow(true);
  };

  return (
    <>
      <Image src={book.Item.largeImageUrl} width='200px' className={styles.indexImage} alt='' />
      <div className={styles.indexTitle}>{book.Item.title}</div>
      <br />
      <Button
        className={styles.indexButtonModal}
        backgroundColor='gray.400'
        justify='center'
        alignItems='center'
        onClick={openModal}
      >
        Open Modal
      </Button>
      <ModalDescription isShow={isShow} setIsShow={setIsShow} caption={book.Item.itemCaption} />
    </>
  );
}
