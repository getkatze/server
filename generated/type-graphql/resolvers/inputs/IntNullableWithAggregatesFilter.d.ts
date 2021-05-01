import { NestedFloatNullableFilter } from "../inputs/NestedFloatNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { NestedIntNullableWithAggregatesFilter } from "../inputs/NestedIntNullableWithAggregatesFilter";
export declare class IntNullableWithAggregatesFilter {
    equals?: number | undefined;
    in?: number[] | undefined;
    notIn?: number[] | undefined;
    lt?: number | undefined;
    lte?: number | undefined;
    gt?: number | undefined;
    gte?: number | undefined;
    not?: NestedIntNullableWithAggregatesFilter | undefined;
    count?: NestedIntNullableFilter | undefined;
    avg?: NestedFloatNullableFilter | undefined;
    sum?: NestedIntNullableFilter | undefined;
    min?: NestedIntNullableFilter | undefined;
    max?: NestedIntNullableFilter | undefined;
}
