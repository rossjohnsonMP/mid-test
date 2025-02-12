import { processData } from "./util";

describe("test", () => {
  it("test1", () => {
    expect(processData([{ value: 2, multiplier: 4 }])).toEqual([
      {
        value: 8,
        multiplier: 4,
      },
    ]);
  });
});
