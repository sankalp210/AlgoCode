import { Job } from 'bullmq';

import { IJob } from '../types/bullMqJobDefination';

export default class SampleJob implements IJob {
  name: string;
  payload: Record<string, unknown>;

  constructor(payload: Record<string, unknown>) {
    this.name = this.constructor.name;
    this.payload = payload;
  }

  handle(job?: Job): void {
    console.log(`Handling job: ${this.name} with payload:`, this.payload, job);
    // Add your job handling logic here
  }

  failed(job?: Job): void {
    console.error(`Job failed: ${this.name}`, job?.failedReason);
    // Add your failure handling logic here
  }
}
