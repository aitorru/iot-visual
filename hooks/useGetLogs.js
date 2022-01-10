import useSWR from 'swr'

export default function useUser (id) {
    const { data, error } = useSWR(`/api/getData/${id}?_vercel_no_cache=1`)
  
    return {
      logs: data,
      isLoading: !error && !data,
      isError: error
    }
  }