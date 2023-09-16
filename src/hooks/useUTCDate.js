function useUTCDate(date) {
  try {
    if (!date) {
      throw new Error("Invalid date: Date is not provided");
    }

    const localDate = new Date(date);

    if (Number.isNaN(localDate.getTime())) {
      throw new Error("Invalid date: Date is not valid");
    }

    const utcDate = localDate.toISOString();
    return utcDate;
  } catch (error) {
    return null;
  }
}

export default useUTCDate;
