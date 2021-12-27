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
import { ModalDescription } from '../components/ModalDescription';
import { BookList } from '../components/BookList';

export default function Comics() {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isShow, setIsShow] = useState(false);

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
      <div className={styles.indexInputArea}>
        <input className={styles.indexInput} value={searchText} onChange={handleChange} />
      </div>
      <div className={styles.indexButtonArea}>
        <Button
          className={styles.indexButton}
          backgroundColor='gray.500'
          type='button'
          onClick={(e) => callSearch(e)}
        >
          検索
        </Button>
      </div>
      <div className={styles.indexBg}>
        {books.map((book, index) => (
          <BookList key={`${index} - ${book.Item.title}`} book={book} />
        ))}
      </div>
    </div>
  );
}
