export const fixNonSerializable = (data) => {
  return JSON.parse(JSON.stringify(data));
}