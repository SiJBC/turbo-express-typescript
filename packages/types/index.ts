import axios, { AxiosResponse } from "axios";
import fs from 'fs'

function returnData(): Promise<AxiosResponse<[]>>{
    return axios.get('https://random-data-api.com/api/v2/users?size=2&is_xml=true')
  }

  async function generateData(): Promise<void>{
    const {data} = await returnData()
    fs.writeFileSync('types.d.ts', JSON.stringify(data))
  }

  generateData()