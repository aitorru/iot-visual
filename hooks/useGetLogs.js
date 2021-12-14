import useSWR from 'swr'

export default function useUser (id) {
    const { data, error } = useSWR(`/api/getData/${id}`)
  
    return {
      logs: data,
      isLoading: !error && !data,
      isError: error
    }
  }