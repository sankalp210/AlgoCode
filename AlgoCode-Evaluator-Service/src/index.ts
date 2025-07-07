import express from 'express';

import config from './config/server.config.js';
import runPython from './containers/runPythonDocker';
import apiRouter from './routes/index.js';

const { PORT } = config;

const app = express();

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  const code = `x = input()
y = input()
print("value of x is", x)
print("value of y is", y)
`;

  const inputCase = `100
200
`;

  runPython(code, inputCase);
});
