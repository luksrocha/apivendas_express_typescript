import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import CustomersRepository from "../typeorm/repositories/CustomersRepository";
import Customer from "../typeorm/entities/Customer";

class ListCustomerService {
  public async execute(): Promise<Customer[]> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const customer = await customersRepository.find();

    return customer;
  }
}

export default ListCustomerService;
