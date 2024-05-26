import { injected } from "brandi";
import { Car } from "../../models";
import { HttpCarService } from "../http/http-car.service";
import { TOKENS } from "../../di/tokens";

export class CarService {
  constructor(private httpCarService: HttpCarService) {}

  public async getAllDetails() {
    return await this.httpCarService.getAll();
  }
}

injected(CarService, TOKENS.httpCarService);
