import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
    
    const [isDark, setIsDark] = useLocalStorage(key, initialValue)
    const setDark = (bool) => {
        setIsDark(bool)
    }
    return [isDark, setDark]
}