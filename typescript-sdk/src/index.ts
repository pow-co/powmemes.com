
import { BoostPowJob } from 'boostpow'

import moment from 'moment'

export interface Prize {

}

export class Competition {
  start_time: number; // unix timestamp
  end_time: number; // unix timestamp
  prizes: [];

  constructor({ start_time, end_time, prizes }: { start_time: number, end_time: number, prizes?: Prize[]}) {
    this.start_time = start_time
    this.end_time = end_time
    this.prizes = []
  }

}

export async function getUnminedJobs(): Promise<BoostPowJob[]> {

  return []

}

export async function getCurrentCompetition(): Promise<Competition> {

  return new Competition({
    start_time: moment().subtract(1, 'day').unix(),
    end_time: moment().unix()
  })

}

