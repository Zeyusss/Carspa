export const LocalStorageUtil = {
  load(key: string, fallback: any) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (error) {
      return fallback;
    }
  },
  save(key: string, value: any) {
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
    } catch (error) {
      console.error('LocalStorageUtil.save failed:', error);
    }
  },
  remove(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('LocalStorageUtil.remove failed:', error);
    }
  },
  clearAll() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('LocalStorageUtil.clearAll failed:', error);
    }
  },
};
