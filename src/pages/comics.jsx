import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Divider,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import styles from '../styles/components/index.module.scss';

import axios from 'axios';
import { useState } from 'react';
import NextLink from 'next/link';

export default function Comics() {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState('');

  const fetchRakutenBook = () => {
    const encodeUrl = encodeURI(searchText);
    axios
      .get(
        `https://app.rakuten.co.jp/services/api/BooksBook/Search/20130522?applicationId=1086884900424216159&title=${encodeUrl}&format=json`,
      )
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          setBooks(res.data.Items);
          setSearchText('');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const callSearch = (e) => {
    e.preventDefault();
    fetchRakutenBook(searchText);
  };

  return (
    <div className={styles.indexBg}>
      <input className={styles.indexInput} value={searchText} onChange={handleChange} />
      <Button
        className={styles.indexButton}
        backgroundColor='gray.400'
        type='button'
        onClick={(e) => callSearch(e)}
      >
        検索
      </Button>
      <div className={styles.indexBg}>
        {books.map(({ Item }) => {
          return (
            <div>
              <Image className={styles.indexImage} src={Item.largeImageUrl} width='200px' alt='' />
              <div>
                <div key={Item.isbn}>
                  <div className={styles.indexTitle}>{Item.title}</div>
                  <br />
                  <Button
                    className={styles.indexButtonModal}
                    backgroundColor='gray.400'
                    justify='center'
                  >
                    Open Modal
                  </Button>
                  <br />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
