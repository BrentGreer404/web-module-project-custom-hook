import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {   
    const [isDark, setIsDark] = useLocalStorage(key, initialValue)
    return [isDark, setIsDark]
}