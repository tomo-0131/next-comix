import React from 'react';
import { Flex, Text, HStack } from '@chakra-ui/react';
import styles from '../styles/components/header.module.scss';
export default function Footer() {
  return (
    <div>
      <Flex
        bg='white'
        width='100%'
        justifyContent='center'
        alignItems='center'
        direction='column'
        boxShadow='0 -1px 6px -1px rgba(0, 0, 0, 0.1)'
        padding={4}
      >
        <HStack spacing={8} mb={8}>
          <Text color='gray.400'>Privacy</Text>
          <Text color='gray.400'>Terms of Use</Text>
        </HStack>
        <Flex width='100%' justifyContent='center' wrap='wrap'>
          <Text width='50%' textAlign='center' color='gray.600' fontSize='sm'>
            ©️Comix All Rights Reserved bearguy
          </Text>
        </Flex>
      </Flex>
    </div>
  );
}
