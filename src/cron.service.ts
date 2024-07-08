import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import * as process from "node:process";

@Injectable()
export class CronService{
@Cron('*/14 * * * *')
  async handleCron() {
    const response = await fetch(process.env.SERVER_URL + 'health');
    console.log(await response.json());
  }
}