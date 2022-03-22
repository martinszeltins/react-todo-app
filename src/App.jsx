import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count => {
            return count + 1
        })
    }

    return (
        <button
            className="bg-blue-400 text-white rounded px-4 py-2 m-2"
            onClick={increment}>

            count is: { count }
        </button>
    )
}

export default App
