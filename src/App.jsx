import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <button
            className="bg-blue-400 text-white rounded px-4 py-2 m-2"
            onClick={() => setCount((count) => count + 1)}>

            count is: { count }
        </button>
    )
}

export default App
