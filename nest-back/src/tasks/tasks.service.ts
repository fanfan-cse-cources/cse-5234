import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { AppDataSource_ORDER } from '../index';
import { Order } from '../entities/Order';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private readonly httpService: HttpService) {}

  @Cron(CronExpression.EVERY_30_SECONDS)
  async handleCron() {
    const orderRepository = AppDataSource_ORDER.getRepository(Order);
    const newOrders = await orderRepository.find({
      where: {
        status: 'new',
      },
    });

    for (const order of newOrders) {
      order.status = 'processing';
      await firstValueFrom(
        this.httpService.post(
          `http://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}/shipment-processing/initiation`,
          JSON.stringify({
            order_id: order.order_id,
          }),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        ),
      ).then((res) => {
        this.logger.debug(
          `Order ${res.data.order_id} updated to ${res.data.status}`,
        );
      });
    }
  }
}
