import axios from "axios";
import { useEffect, useState } from "react";
import type { ApiResponse } from "./type";

// search by name
const searchUrl = "https://api.inaturalist.org/v1/taxa?taxon_id=47224&rank=species&per_page=30&q=";

// search by id
const singleUrl = "https://api.inaturalist.org/v1/taxa/";

const useFetch = (query: string, type: boolean = false) => {
  const url = type ? singleUrl : searchUrl

  const [isLoading, setIsLoading] = useState(true)
  //dati api
  const [data, setData] = useState<ApiResponse>({ data: [] })
  const [count, setCount] = useState(0)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setIsError(false)

      try {
        const response = await axios.get(`${url}${encodeURIComponent(query)}`)

//RESULTS: data!!!
//se cerco una singola farfalla, prendo il primo elemento dell'array
        const results = type ? response.data.results?.[0] ?? null : response.data.results ?? []

         setData({ data: results })
        setCount( response.data.total_results ?? (Array.isArray(results) ? results.length : results ? 1 : 0))
        console.log("QUERY:", query)
        console.log("URL:", `${url}${query}`)
        console.log("RISPOSTA API:", response.data)

      } catch (err) {
        console.log(err)
        setIsError(true)
        setCount(0)
        setData({ data: [] })

      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url, query, type])

  return { isLoading, data, isError, count }
};

export default useFetch;
