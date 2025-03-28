import { Controller, Get, HttpCode, HttpStatus, Res, Version } from '@nestjs/common';
import { join } from 'path';
import { Public } from '../../common/decorators/is-public.decorator';
import { type Response } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Statics')
@Controller()
export class StaticsController {

  @Public()
  @Version('1')
  @HttpCode(HttpStatus.OK)
  @Get('index')
  sorotecaPage(@Res() res: Response) {
    return res.sendFile(join(`${process.cwd()}/public/soroteca.html`));
  }
  @Public()
  @Version('1')
  @HttpCode(HttpStatus.OK)
  @Get('login-script')
  loginScript(@Res() res: Response) {
    return res.sendFile(join(`${process.cwd()}/public/scripts/script.js`));
  }
  

  @Public()
  @Version('1')
  @HttpCode(HttpStatus.OK)
  @Get('search')
  searchPage(@Res() res: Response) {
    return res.sendFile(join(`${process.cwd()}/public/search.html`));
  }

  @Public()
  @Version('1')
  @HttpCode(HttpStatus.OK)
  @Get('transaction')
  transactionPage(@Res() res: Response) {
    return res.sendFile(join(`${process.cwd()}/public/transaction.html`));
  }

  @Public()
  @Version('1')
  @HttpCode(HttpStatus.OK)
  @Get('login-page')
  loginPage(@Res() res: Response) {
    return res.sendFile(join(`${process.cwd()}/public/login.html`));
  }

  @Public()
  @Version('1')
  @HttpCode(HttpStatus.OK)
  @Get('all-banks')
  allBanksPage(@Res() res: Response) {
    return res.sendFile(join(`${process.cwd()}/public/all-banks.html`));
  }

  @Public()
  @Version('1')
  @HttpCode(HttpStatus.OK)
  @Get('icon')
  notFoundImage(@Res() res: Response) {
    return res.sendFile(
      join(
        `${process.cwd()}/public/icons/lab.png`,
      ),
    );
  }
  @Public()
  @Version('1')
  @HttpCode(HttpStatus.OK)
  @Get('soroteca-logo')
  logo(@Res() res: Response) {
    return res.sendFile(
      join(
        `${process.cwd()}/public/icons/soroteca-logo.png`,
      ),
    );
  }
  @Public()
  @Version('1')
  @HttpCode(HttpStatus.OK)
  @Get('background')
  background(@Res() res: Response) {
    return res.sendFile(
      join(
        `${process.cwd()}/public/icons/background.jpg`,
      ),
    );
  }
 
  @Public()
  @HttpCode(HttpStatus.OK)
  @Get('*')
  defaultPage(@Res() res: Response) {
    return res.sendFile(join(`${process.cwd()}/public/login.html`));
  }
}
