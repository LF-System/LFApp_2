import { BaseEntity } from "../../../../Shared/Entities/BaseEntity";

export interface Unit extends BaseEntity {
  id: string;
  name: string;
  created_at: Date | null;
  updated_at: Date | null;
  created_by_user_id: string | null;
  updated_by_user_id: string | null;
}

export function createUnit(): Unit {
  return {
    id: "",
    name: "",
    created_at: null,
    updated_at: null,
    created_by_user_id: null,
    updated_by_user_id: null,
  };
}
