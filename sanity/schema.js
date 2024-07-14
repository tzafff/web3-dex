import {userSchema} from "./userSchema";
import {transactionSchema} from "./transactionSchema";

export const schema = {
  types: [userSchema, transactionSchema],
}
