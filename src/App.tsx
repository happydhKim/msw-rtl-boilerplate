import useSWR from 'swr';

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
      {user && `${user.name}님은 ${user.age} 살입니다.`}
    </div>
  );
};

export default App;
