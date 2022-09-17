
export  const PersistLocalStorage = <T,>(key:string,value:T) => {
    localStorage.setItem(key, JSON.stringify({...value}))

}
export const ClearLocalStorage = (key:string) => {
    localStorage.removeItem(key)
}