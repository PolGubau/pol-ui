export const transformDateToISOString = (dateString: string): string => {
  const date = new Date(dateString);
  const isoString = date.toISOString();

  return isoString;
};
