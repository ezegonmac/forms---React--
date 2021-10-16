import { useRef } from "react"


const App = () => {
    const input = useRef()
    const file = useRef()
    const submit = () => {
        console.log(input.current.value)
        console.log(file.current.files[0])
        const form = new FormData()
        form.append("campo", input.current.value)
        form.append("archivo", file.current.files[0])
        fetch("/lala", { method: "POST", body: form})
    }

    return (
        <div>
            <div>
                <span>Lala</span>
                <input type="text" name="campo" ref={input}/>
                <input type="file" ref={file}/>
            </div>
            <input type="submit" value="Enviar" onClick={submit}/>
        </div>
    )

}

export default App