import { Button, Input, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { auth, provider } from '../lib/firebase';

export default function Login() {
  const [error, setError] = useState('');
  const router = useRouter();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { currentUser } = useAuthContext();

  // ログインボタン押下時の登録処理
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    auth.signInWithEmailAndPassword(email.value, password.value);
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
      <Text fontSize='4xl'>ログイン画面</Text>
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
        <Button type='submit'>ログイン</Button>
      </form>
      <br />
      <Button backgroundColor='teal.400' textColor='white' onClick={handleLogin}>
        Googleログイン
      </Button>
      <br />
      <br />
    </>
  );
}
