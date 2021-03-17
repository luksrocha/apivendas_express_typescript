import Customer from 'src/modules/customers/typeorm/entities/Customer';
import Product from 'src/modules/products/typeorm/entities/Product';
import Order from '../entities/Order';
import { EntityRepository, Repository } from 'typeorm';


interface IProduct {
  product_id: string,
  price: number,
  quantity: number
}

interface IRequest {
  customer: Customer;
  products: IProduct[];
}

@EntityRepository(Order)
export class OrdersRepository extends Repository<Order>{

  public async findById(id: string): Promise<Order | undefined> {
    const order = await this.findOne(id, {
      relations: ['order_products', 'customer']
    });

    return order;
  }

  public async createOrder({ customer, products }: IRequest): Promise<Order> {
    const order = this.create({
      customer,
      order_products: products
    });

    await this.save(order);

    return order
  }
}
