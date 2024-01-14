export function IsNullOrEmpty(pVal: any): boolean {
  return (
    typeof pVal === "undefined" ||
    pVal === null ||
    (typeof pVal === "string" && String(pVal.trim()).length === 0) ||
    (typeof pVal === "object" && Object.keys(pVal).length === 0)
  );
}

export function IsNotNullOrEmpty(pVal: any): boolean {
  return !IsNullOrEmpty(pVal);
}