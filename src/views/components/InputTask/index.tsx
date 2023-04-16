import React, {useCallback, useState} from "react"

import styles from "./index.module.scss"

interface InputTaskProps{
	id: string,
	title: string,
	onDone: (title:string) => void,
	onEddited: (id: string, title: string) => void,
	onRemoved: (id: string) => void
}

export const InputTask: React.FC<InputTaskProps> = ({id, title, onDone, onEddited, onRemoved}) => {
	
	const [checked, setChecked] = useState(false)
	const [isEditMode, setIsEditMode] = useState(false)
	const [value, setValue] = useState(title)
	
	return(
		<div className={styles.inputTask}>
			<label className={styles.inputTaskLabel}>
				<input 
					type="checkbox"
					disabled={isEditMode}
					checked={checked}
					className={styles.inputTaskCheckbox}
					onChange={event => {
						setChecked(event.target.checked)

						if(event.target.checked){
							onDone(id)
						}		
					}}				
				/>
				{isEditMode ? <input
					value={value}
					onChange={event => setValue(event.target.value)}
					className={styles.inputTaskTitleEdit}
					onKeyDown={event => {
						if(event.key === "Enter"){
							onEddited(id, value)
							setIsEditMode(false)
						}
					}}
				/> : (<h3 className={styles.inputTaskTitle}>{title}</h3>)}
				
			</label>
				{isEditMode ? (
					<button
					aria-label="Save"
					className={styles.inputTaskSave}
					onClick={() => {
						onEddited(id, value)
						setIsEditMode(false)
					}}
				/>
				) : (
					<button
						aria-label="Edit"
						className={styles.inputTaskEdit}
						onClick={() => {
							setIsEditMode(true)
						}}
					/>
					)
				}
				<button
					aria-label="Remove"
					className={styles.inputTaskRemove}
					onClick={() => {
						if(confirm("Are ypu sure?")){
							onRemoved(id)
						}
					}}
				/>
		</div>
	)
}