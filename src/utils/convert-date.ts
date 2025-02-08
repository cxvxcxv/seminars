export const formatDateForInput = (dateStr: string | undefined) => {
  if (!dateStr) return '';
  const parts = dateStr.split('.'); // splits dd.mm.yyyy
  if (parts.length === 3) {
    return `${parts[2]}-${parts[1]}-${parts[0]}`; // converts to yyyy-mm-dd
  }
  return '';
};

export const formatDateForDatabase = (dateStr: string | undefined) => {
  if (!dateStr) return '';
  const parts = dateStr.split('-'); // splits yyyy-mm-dd
  if (parts.length === 3) {
    return `${parts[2]}.${parts[1]}.${parts[0]}`; // converts to dd.mm.yyyy
  }
  return '';
};
