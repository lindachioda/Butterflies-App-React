import { useEffect } from "react"

//costumeHook che cabia il titolo della pagina http quando cambio pagina
const useTitle = (title:string) => {
  useEffect(() => {
    document.title = `Wiki Drink - ${title}`;
  }, [title])
  return
};

export default useTitle