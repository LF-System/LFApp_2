import HttpClientFactory from "../../../../Shared/Libraries/HttpClient/Factory/HttpClientFactory";
import { UnitCreateUseCase } from "./UnitCreateUseCase";
import { UnitDestroyUseCase } from "./UnitDestroyUseCase";
import { UnitIndexUseCase } from "./UnitIndexUseCase";
import { UnitShowUseCase } from "./UnitShowUseCase";
import { UnitUpdateUseCase } from "./UnitUpdateUseCase";

const httpclient = HttpClientFactory.make();
const unitCreateUseCaseInstance = () => new UnitCreateUseCase(httpclient);
const unitDestroyUseCaseInstance = () => new UnitDestroyUseCase(httpclient);
const unitIndexUseCaseInstance = (function () {
  return new UnitIndexUseCase(httpclient);
});
const unitShowUseCaseInstance = () => new UnitShowUseCase(httpclient);
const unitUpdateUseCaseInstance = () => new UnitUpdateUseCase(httpclient);

export { 
  unitCreateUseCaseInstance,
  unitDestroyUseCaseInstance,
  unitIndexUseCaseInstance,
  unitShowUseCaseInstance,
  unitUpdateUseCaseInstance,
};