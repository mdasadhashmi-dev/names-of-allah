import { allNames, type AllahName } from "@/data/names";

const approvedNames = allNames.filter((n) => n.approved);

export function getNameOfDay(): AllahName {
  const dayIndex = Math.floor(Date.now() / 86400000) % approvedNames.length;
  return approvedNames[dayIndex];
}
