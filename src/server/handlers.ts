import { rest } from 'msw';

export const handlers = () => {
  return [rest.get('/api/user', getUserInformation)];
};

const getUserInformation: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      name: 'κΉλν',
      age: 7,
    })
  );
};
