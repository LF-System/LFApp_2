import { HttpData } from "../../../../Shared/Libraries/HttpClient/Interface/HttpClientInterface";
import BaseUseCase from "../../../../Shared/UseCases/BaseUseCase";
import { Unit } from "../Entities/Unit";
import { resource } from "./Consts";

export class UnitShowUseCase extends BaseUseCase {
  
  async execute(id: string): Promise<Unit | undefined> {
    const url = `${resource}/${id}`;
    const res = await this.httpClient.get<HttpData<Unit | any>>(
      url
    );
    if (res.status === 200) {
      return res.data?.data;
    }
    this.handleErrors(res);
  }

}
