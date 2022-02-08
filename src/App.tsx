import useSWR from 'swr';
import logo from './logo.svg';
import './App.css';

import type { FC } from 'react';

async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

type User = {
  name: string;
  age: number;
}

const App: FC = () => {
  const { data: user } = useSWR<User>('/api/user', fetcher);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="App">
        {user && `${user.name}님은 ${user.age} 살입니다.`}
      </div>
    </div>
  );
};

export default App;
