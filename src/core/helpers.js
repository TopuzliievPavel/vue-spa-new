const SortService = {
  sort: (a, b, direction) => {
    switch (direction) {
      case "reverse":
        return a > b ? 1 : -1;
      default:
        return a < b ? 1 : -1;
    }
  }
};

export { SortService }
