import React, {useCallback, useState} from "react"

import styles from "./index.module.scss"

interface InputPlauProps{
	onAdd: (title:string) => void
}

export const InputPlus: React.FC<InputPlauProps> = ({onAdd})=>{
	
	const [inputValue, setInputValue ] = useState("")
	const addTask = useCallback(() => {
		onAdd(inputValue)
		setInputValue("")
	}, [inputValue])


	return(
		<div className={styles.inputPlus}>
			<input 
			type="text" 
			className={styles.inputPlusValue} 
			value={inputValue}
			placeholder="Type here..."
			onChange={(event) => {
				setInputValue(event.target.value)
			}}
			onKeyDown={event => {
				if(event.key === "Enter"){
					addTask()
				}
			}}
			/>
			<button 
			onClick={addTask}
			aria-label="Add"
			className={styles.inputPlusButton} 
			/>
		</div>
	)
}