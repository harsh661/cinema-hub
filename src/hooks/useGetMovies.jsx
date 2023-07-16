import { useEffect, useState } from "react"

const useGetMovies = (query) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}`
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          `Bearer ${import.meta.env.VITE_REACT_API_KEY}`,
      },
    }

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setData(json.results))
      .catch((err) => console.error("error:" + err))
  }, [])
  return data
}

export default useGetMovies
