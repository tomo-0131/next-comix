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

export default function Home() {
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
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  console.log(books);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const callSearch = (e) => {
    e.preventDefault();
    fetchRakutenBook(searchText);
  };

  return (
    <>
      <input className={styles.indexInput} value={searchText} onChange={handleChange} />
      <button className={styles.indexButton} type='button' onClick={(e) => callSearch(e)}>
        検索
      </button>
      <div>
        {books.map(({ Item }) => {
          return (
            <div>
              <Image src={Item.mediumImageUrl} alt='' />
              <div>
                <div key={Item.isbn}>
                  <div className={styles.indexTitle}>{Item.title}</div>
                  <br />
                  <button className={styles.indexButtonModal}>Open Modal</button>
                  <br />
                  <AddIcon />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
