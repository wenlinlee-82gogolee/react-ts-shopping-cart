import { useEffect, useState } from 'react';

//either type t or a funciton which return the same type
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    //if we have value store in the localStorage
    if (jsonValue != null) return JSON.parse(jsonValue);

    //if we don't have value store in the localStorage
    if (typeof initialValue === 'function') {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
