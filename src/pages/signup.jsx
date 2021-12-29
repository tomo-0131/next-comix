import { Button, Input, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { auth, provider } from '../lib/firebase';
import NextLink from 'next/link';

export default function Signup() {
  const [error, setError] = useState('');
  const router = useRouter();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { currentUser } = useAuthContext();

  // 登録ボタン押下時の登録処理
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    auth.createUserWithEmailAndPassword(email.value, password.value);
    router.replace('/');
  };

  const handleLogin = async (e) => {
    try {
      await auth.signInWithPopup(provider);
      router.replace('/');
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };
  return (
    <>
      <Text fontSize='4xl'>新規登録</Text>
      {currentUser && <Text fontSize='2xl'>{currentUser.email}</Text>}
      {error && <span>{error}</span>}
      <form onSubmit={handleSubmit}>
        <span>メールアドレス</span>
        <Input ref={emailRef} name='email' type='email' />
        <br />
        <br />
        <span>パスワ-ド</span>
        <Input ref={passwordRef} name='password' type='password' />
        <br />
        <br />
        <Button type='submit'>登録</Button>
      </form>
      <br />
      <button onClick={handleLogin}>Googleアカウントで登録</button>
      <br />
      <br />
      <Text>
        既に登録済みのお客様は<NextLink href='/login'>こちら</NextLink>から
      </Text>
      <br />
      <br />
    </>
  );
}
