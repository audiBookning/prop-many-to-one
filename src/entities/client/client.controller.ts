import { Controller, Get } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientSvc: ClientService) {}

  @Get('all')
  getAllClients() {
    return this.clientSvc.getAllClients();
  }
}
