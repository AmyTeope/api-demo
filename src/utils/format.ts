/* eslint-disable @typescript-eslint/no-explicit-any */
export const formatDateKey = (data: any[], oldKey: string, newKey: string, deleteKey: boolean, isNewDate: boolean = true): any[] => {
  return data.map((item: any) => {
    const newItem = {
      ...item,
      [newKey]: isNewDate ? new Date(item[oldKey]) : item[oldKey],
    }
    if (deleteKey) delete newItem[oldKey]
    return newItem
  })
}
