interface MultiData {
  value: number;
  multiplier: number;
}

export const processData = (data: MultiData[]): MultiData[] => {
  const newData: MultiData[] = [];
  data.forEach((e) =>
    newData.push({ value: e.value * e.multiplier, multiplier: e.multiplier })
  );
  return newData;
};
