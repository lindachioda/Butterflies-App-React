
//useContext

import React, { useCallback, useContext, useState } from "react";
import type { AppProviderProps, ContextType } from "./type";
import useFetch from "./useFetch";

const AppContext = React.createContext<ContextType | null>(null)

//provider
const AppProvider = ({ children }: AppProviderProps) => {
//sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false)
//API
  const [query, setQuery] = useState("monarch");
  const { isLoading, isError, count, data } = useFetch(query)
//scroll positione
  const [scrollPosition, setScrollPosition] = useState(0)

  //apri sidebar
  const openSidebar = () => {
    setSidebarOpen(true)
  }

  //chiudi sidebar
const closeSidebar = () => {
    setSidebarOpen(false)
  }

  //cambia la query
  const searchButterfly = (input: string) => {
    setQuery(input)
  }

// salva posizione scroll
  const getScrollPosition = (value: number) => {
    setScrollPosition(value)
  }

  // eliminar posizione scroll
  const deleteScrollPosition = useCallback((): void => {setScrollPosition(0)}, [])

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        openSidebar,
        closeSidebar,
        query,
        isLoading,
        isError,
        data,
        count,
        searchButterfly,
        getScrollPosition,
        deleteScrollPosition,
        scrollPosition
      }}
    >
      {children}
    </AppContext.Provider>
  )
};

// Global context
const useGlobalContext = () => {
  const context = useContext(AppContext)

  if (context === null) {
    throw new Error("useGlobalContext deve essere utilizzato dentro AppProvider");
  }

  return context
}

export { AppProvider, useGlobalContext };
