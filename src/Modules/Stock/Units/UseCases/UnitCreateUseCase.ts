import { HttpData } from "../../../../Shared/Libraries/HttpClient/Interface/HttpClientInterface";
import BaseUseCase from "../../../../Shared/UseCases/BaseUseCase";
import { Unit } from "../Entities/Unit";
import { resource } from "./Consts";

export class UnitCreateUseCase extends BaseUseCase {
  async execute(item: Unit): Promise<Unit | undefined> {
    const url = resource;
    const res = await this.httpClient.post<HttpData<Unit | any>>(
      url, 
      {
        body: item,
      }
    );
    if (res.status === 201) {
      return res.data?.data;
    }
    this.handleErrors(res);
  }
}
