import {
  Controller,
  Get,
  Header,
  HttpCode,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(555)
  @Header('random-header', 'value-header')
  //   @Redirect('https://nestjs.com', 18)
  getRequestData(@Req() request: Request, @Res() res: Response): string {
    // return 'getRequestData()';
    res.send('getRequestData()');

    return 'data';
  }
}
