import { USER, ADMIN } from "./role";

const aclMatrix = {
  ALL_ACCESS: [USER, ADMIN],
  ADMIN_ACCESS: [ADMIN],
};

export default aclMatrix;
