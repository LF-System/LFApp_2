import { HttpClient, HttpData, HttpResponse } from "../Libraries/HttpClient/Interface/HttpClientInterface";
import { utils } from "../Utils";

export default class BaseUseCase {
  protected httpClient: HttpClient;
  constructor(HttpClient: HttpClient) {
    console.log('dsadas');
    this.httpClient = HttpClient;
    this.httpClient.addAuthorizationToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbGZhcGkudGVzdC9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTcxMDAwOTI1MywiZXhwIjoxNzEwMDEyODUzLCJuYmYiOjE3MTAwMDkyNTMsImp0aSI6IjFwQ3dURFg4cFFwS1g3cTkiLCJzdWIiOiIxIiwicHJ2IjoiNDc2NmUzNGM1NzkyYmRlNWMyNTEwMGNjYzMxYjYyOTViNzQ5YWQ0YyJ9.vBwUYXdxcVQr6fnvFFluj6xWj5cpYd0B9R8yawlAGgg');
  }

  handleErrors(res: HttpResponse<HttpData<any>>) {
    if (res.status === 422) {
      const error = utils.formatErrorValidation(res.data?.data);
      utils.showWarningLikeToast(error);
      throw new Error(error);
    }
    if (res.data?.message) {
      const error = res.data?.message;
      utils.showErrorLikeToast(error);
      throw new Error(error);
    }
    const error = res.statusText
      ? res.statusText
      : "Um erro não catalogado ocorreu.";
    utils.showErrorLikeToast(error);
    throw new Error(error);
  }
}