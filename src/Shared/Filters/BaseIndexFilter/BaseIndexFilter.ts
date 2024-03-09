import { PaginateTypeEnum } from "../../Libraries/HttpClient/Interface/HttpClientInterface";
import { BaseFilter } from "../BaseFilter/BaseFilter";

export interface BaseIndexFilter extends BaseFilter {
  paginate_type: PaginateTypeEnum;
  limit: number;
  page: string|number|null;
  order_by: string;
  like: any[];
  primary_keys: number[];
}