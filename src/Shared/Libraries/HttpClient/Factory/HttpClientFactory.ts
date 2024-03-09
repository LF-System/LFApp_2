import { HttpClientTypeEnum } from "../Enum/HttpClientTypeEnum";
import { HttpClient } from "../Interface/HttpClientInterface";
import { HttpClientAxios } from "../Strategy/Axios/HttpClientAxios";

export default class HttpClientFactory {
  public static make(
    type: HttpClientTypeEnum = HttpClientTypeEnum.FETCH
  ): HttpClient {
    switch (type) {
      case HttpClientTypeEnum.AXIOS:
        return new HttpClientAxios();
      /*case HttpClientTypeEnum.FETCH:
        return new HttpClientFetch();*/
      default:
        return new HttpClientAxios();
    }
  }
}
