function quickSort<T>(list: T[], compare: (a: T, b: T) => number): T[] {
  if (list.length < 2) {
    return list;
  }

  const pivot = list[Math.floor(list.length / 2)];
  const lt: T[] = [];
  const gt: T[] = [];
  const eq: T[] = [];

  list.forEach((item) => {
    const comparison = compare(item, pivot);
    if (comparison < 0) {
      lt.push(item);
    } else if (comparison > 0) {
      gt.push(item);
    } else {
      eq.push(item);
    }
  });

  return [...quickSort(lt, compare), ...eq, ...quickSort(gt, compare)];
}

export default quickSort