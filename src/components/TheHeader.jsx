import { Tabs, TabList, TabPanels, Tab, TabPanel, HStack, Box, Link, Text } from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

import NextLink from 'next/link';

import styles from '../styles/components/header.module.scss';

export default function TheHeader() {
  return (
    <>
      <Text
        align={{ base: 'center', md: 'center', lg: 'left' }}
        mt={{ base: '1em', md: '3em', lg: '1rem' }}
        ml={{ base: '-1em', md: '3em', lg: '3rem' }}
        fontSize={{ base: '34px', md: '40px', lg: '50px' }}
      >
        ⚡️ Comix
      </Text>
      <Tabs className={styles.headerTabs}>
        <TabList>
          <Tab>
            <NextLink href='/'>
              <Tab>Home</Tab>
            </NextLink>
          </Tab>
          <Tab>
            <NextLink href='/comics'>
              <Tab>Comics</Tab>
            </NextLink>
          </Tab>
          <Tab>
            <NextLink href='/about'>
              <Tab>About</Tab>
            </NextLink>
          </Tab>
        </TabList>
      </Tabs>
    </>
  );
}
