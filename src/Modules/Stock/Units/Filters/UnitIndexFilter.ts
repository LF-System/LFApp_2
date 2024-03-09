import { BaseIndexFilter } from "../../../../Shared/Filters/BaseIndexFilter/BaseIndexFilter";
import { PaginateTypeEnum } from "../../../../Shared/Libraries/HttpClient/Interface/HttpClientInterface";

export interface UnitIndexFilter extends BaseIndexFilter {}

export function createUnitIndexFilter(): UnitIndexFilter {
  return {
    paginate_type: PaginateTypeEnum.CURSOR,
    limit: 15,
    page: 1,
    order_by: "units.name",
    like: [],
    primary_keys: [],
  };
}
