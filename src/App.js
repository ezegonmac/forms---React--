import { useState } from "react"

const App = () => {
    const [value, setValue] = useState({
			normal: "adsjflkjad", 
			texto: "", 
			select: "seleccione", 
			check: false,
			estado: "feliz",
		})
    const handleChange = ({ target }) => {
        console.log(target.name)
        setValue({ 
            ...value,
            [target.name]: target.type === "checkbox" 
                ? target.checked
                : target.value 
        })
    }

    return(
        <div>
            {value.length < 5 ? <span>longitud minima de 5</span>: null}
            <input type="text" name="normal" value={value.normal} onChange={handleChange}/>
            
						<textarea name="texto" onChange={handleChange} value={value.texto}/>
        
							{/* SELECT */}
            <select value={value.select} name="select" onChange={handleChange}>
                <option value="seleccione">-- Seleccione --</option>
                <option value="chanchofeliz">-- Chancho Feliz --</option>
                <option value="chanchitotriste">-- Chanchito Feliz --</option>
                <option value="felipe">-- Felipe --</option>
            </select>

						 {/* CHECKBOX */}
            <input
                type="checkbox"
                name="check"
                onChange={handleChange}
                checked={value.check}    // Diferente q los demas elementos
            />

							{/* RADIO BUTTON */}
            <div>
                <label>Chancho</label>
                <input 
                    onChange={handleChange} 
                    type="radio" 
                		value="feliz" 
                    name="estado" 
                    checked={value.estado === "feliz"} 
										/> Feliz
                <input 
                    onChange={handleChange} 
                    type="radio" 
                    value="triste" 
                    name="estado"
                    checked={value.estado === "triste"} 
										/> Triste
                <input 
                    onChange={handleChange} 
                    type="radio" 
                    value="felipe" 
                    name="estado"
                    checked={value.estado === "felipe"} 
                /> Felipe
            </div>

        </div>
    )
}

export default App