import BaseUseCase from "../../../../Shared/UseCases/BaseUseCase";
import { resource } from "./Consts";

export class UnitDestroyUseCase extends BaseUseCase {
  async execute(id: string): Promise<boolean | undefined> {
    const url = `${resource}/${id}`;
    const res = await this.httpClient.delete<any>(
      url
    );
    if (res.status === 204) {
      return true;
    }
    this.handleErrors(res);
  }  
}
