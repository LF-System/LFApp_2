import { HttpData } from "../../../../Shared/Libraries/HttpClient/Interface/HttpClientInterface";
import BaseUseCase from "../../../../Shared/UseCases/BaseUseCase";
import { Unit } from "../Entities/Unit";
import { resource } from "./Consts";

export class UnitUpdateUseCase extends BaseUseCase {
  async update(item: Unit, id: string): Promise<Unit | undefined> {
    const url = `${resource}/${id}`
    const res = await this.httpClient.put<HttpData<Unit | any>>(
      url,
      {
        body: item,
      }
    );
    if (res.status === 200) {
      return res.data?.data;
    }
    this.handleErrors(res);
  }
}
