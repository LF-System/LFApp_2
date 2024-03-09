import { HttpClient, HttpData, HttpPager } from "../../../../Shared/Libraries/HttpClient/Interface/HttpClientInterface";
import BaseUseCase from "../../../../Shared/UseCases/BaseUseCase";
import { Unit } from "../Entities/Unit";
import { UnitIndexFilter } from "../Filters/UnitIndexFilter";
import { resource } from "./Consts";

export class UnitIndexUseCase extends BaseUseCase {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    console.log("hello world");
  }
  async execute(filter: UnitIndexFilter): Promise<HttpPager<Unit> | undefined> {
    const queries = { params: filter };
    const url = resource;
    const res = await this.httpClient.get<HttpData<HttpPager<Unit>>>(
      url,
      queries
    );
    if (res.status === 206) {
      return res.data?.data;
    }
    this.handleErrors(res);
  }
}
