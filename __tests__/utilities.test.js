import { countDuplicateObjectsBasedOnKeys } from "../utils/utilities";
import mockData from "../mockData/data.json";

describe("count duplicate object based on keys function", () => {
    const mockDataArray = mockData.objects;
    const results = {
    alphabetical: 19,
    alphanumerics: 8,
    integers: 22,
    realNumbers: 16,
  };

  it("should receive an array and return an object", () => {
    expect(countDuplicateObjectsBasedOnKeys(mockDataArray)).toEqual(results);
  });
});
