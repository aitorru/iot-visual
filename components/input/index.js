export default function InputId({placeholder, inputValue, setInputValue, className}) {
    return (
        <div className="flex flex-row align-middle justify-center justify-items-center items-center">
            <h1 className="text-2xl">Introduce el id de la empresa</h1>
        <input value={inputValue} onChange={setInputValue} placeholder={placeholder} className={`m-5 rounded-lg border border-black bg-zinc-100 p-3 ${className}`} />
        </div>
    )
}