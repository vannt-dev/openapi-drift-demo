import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { OrdersController } from './orders/orders.controller';
import { UsersController } from './users/users.controller';

@Module({ controllers: [UsersController, OrdersController, HealthController] })
export class AppModule {}
