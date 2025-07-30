import express from 'express';

import config from './config/server.config.js';
import SubmissionJob from './jobs/submissionJob.js';
import apiRouter from './routes/index.js';
import { SubmissionPayload } from './types/submissionPayload.js';

const { PORT } = config;
const app = express();

app.use('/api', apiRouter);

app.listen(PORT, async () => {
  console.log(`✅ Server is running on port ${PORT}`);

  // Sample code and input
  const userCode = `
    class Solution {
      public:
      vector<int> permute() {
          vector<int> v;
          v.push_back(10);
          return v;
      }
    };
  `;

  const fullCode = `
  #include<iostream>
  #include<vector>
  #include<stdio.h>
  using namespace std;

  ${userCode}

  int main() {
    Solution s;
    vector<int> result = s.permute();
    for(int x : result) {
      cout << x << " ";
    }
    cout << endl;
    return 0;
  }
  `;

  const inputCase = `10\n`;

  // Create payload object
  const payload: Record<string, SubmissionPayload> = {
    'test-job-1': {
      code: fullCode,
      inputCase,
      language: 'cpp', // or 'javascript', 'python', etc.
    },
  };

  // Instantiate the job and call handle()
  const job = new SubmissionJob(payload);
  await job.handle(); // you can pass a mock Job instance if needed
});
