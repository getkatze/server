import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';
import { StringFilter } from '../inputs/StringFilter';
export declare class UserWhereInput {
  AND?: UserWhereInput[] | undefined;
  OR?: UserWhereInput[] | undefined;
  NOT?: UserWhereInput[] | undefined;
  id?: StringFilter | undefined;
  createdAt?: DateTimeFilter | undefined;
  username?: StringFilter | undefined;
  crypto?: IntFilter | undefined;
}
