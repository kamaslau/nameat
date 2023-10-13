// TODO improve efficiency if neccessary
import rowsJSON from "../rows.json";

const columnIndexMap = {};

export const getColumnIndexMap = () => {
  if (Object.keys(columnIndexMap).length > 0) return columnIndexMap; // Singleton pattern

  const concernedColumns = [
    "Address",
    "Applicant",
    "FoodItems",
    "Latitude",
    "locationid",
    "LocationDescription",
    "Longitude",
  ]; // TODO dynamicly support more fields if needed in the future
  concernedColumns.forEach(
    (item) => (columnIndexMap[item] = findColumnIndex(item))
  );

  return columnIndexMap;
};

export const findColumnIndex = (label) => {
  const {
    view: { columns },
  } = rowsJSON.meta;

  return columns.findIndex((item) => item.name === label) ?? null;
};

export const findItemByColumn = (key, value, matchLength = null) => {
  console.log("findItemByColumn: ", key, value, matchLength);

  const columnIndex = typeof key === "number" ? key : findColumnIndex(key);

  const { data } = rowsJSON;

  // TODO algorithym to generate and facilitate a shortest path tree
  const result =
    data.find((item) => {
      const candidate = (
        Number(matchLength) > 0
          ? item.at(columnIndex).substring(0, matchLength)
          : item.at(columnIndex)
      ).toLowerCase();

      return candidate === value;
    }) ?? null;

  // console.log("result: ", result);
  return result;
};
