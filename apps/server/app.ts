import express, { Request, Response } from 'express';
import axios, {AxiosResponse} from 'axios'
import {RootObject} from 'types'

const app = express()
const port = 6060;

function returnData(): Promise<AxiosResponse<RootObject[], any>>{
    return axios.get('https://random-data-api.com/api/v2/users?size=10&is_xml=true')
  }

  app.get('/json', async (req: Request, res: Response) => {
    const {data} = await returnData()
    res.send(data)
})

  app.listen(port, () => {
    console.log(`application running on port ${port}`)
})