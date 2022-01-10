import useGetLogs from '../../hooks/useGetLogs'

export default function QueryResults({id}) {

    const { logs, isLoading, isError } = useGetLogs(id);

    if( isLoading) return <div>
        <div className='h-8 w-4/5 bg-gray-500 rounded-lg animate-pulse'></div>
        <div className='h-8 w-4/5 bg-gray-500 rounded-lg animate-pulse'></div>
        <div className='h-8 w-4/5 bg-gray-500 rounded-lg animate-pulse'></div>
    </div>;

    if(isError) return <h1 className='text-2xl'>Error en servidor</h1>

    if(!isLoading && !isError && logs.length === 0) return <h1 className='text-2xl'>No se han encontrado resultados</h1>

    return (
        <table className="table-auto w-4/5 border border-green-800">
            <thead>
                <tr>
                <th className='border border-green-600'>rpi</th>
                <th className='border border-green-600'>Date</th>
                <th className='border border-green-600'>¿Ha arrancado?</th>
                </tr>
            </thead>
            <tbody>
                    {logs.map(x => {
                        return (
                            <tr key={x.date._seconds}>
                                <td className='border border-green-600 text-center text-lg'>{x.rpi}</td>
                                <td className='border border-green-600 text-center text-lg'>{new Date(x.date._seconds * 1000).toString()}</td>
                                <td className='border border-green-600 text-center text-lg'>{x.arranca ? "Ha arrancado" : "No ha arrancado"}</td>
                            </tr>
                        )
                        
                    })}
            </tbody>
        </table>
    )
}