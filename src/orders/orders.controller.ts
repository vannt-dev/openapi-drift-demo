import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  list() {
    return [];
  }

  // the document calls this parameter {id}: a note, not a drift
  @Get(':orderId/items')
  items(@Param('orderId') orderId: string) {
    return { orderId, items: [] };
  }

  @Put(':orderId')
  replace(@Param('orderId') orderId: string) {
    return { orderId };
  }
}
