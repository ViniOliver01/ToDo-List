import React, { useState } from 'react';
import styles from './styles.module.css';
import { Check, Trash } from 'phosphor-react'

interface TaskItemProps{
    id: number;
    content: string;
    onDoneTask: (status: boolean, id: number, content:string) => void;
    onDeleteTask: (id: number) => void;
}

export function TaskItem({id, content, onDoneTask, onDeleteTask}: TaskItemProps){
    const [checkBox, setCheckBox] = useState(false);

    function handleCheckBox() {
        setCheckBox(!checkBox)
        onDoneTask(!checkBox, id, content)
    }

    function handleDeleteComment (){
        onDeleteTask(id)
      }

  return (
    <div className={styles.container}>
        <div 
            className={checkBox == true ? styles.checkboxTrue : styles.checkboxFalse} 
            onClick={handleCheckBox}>
            <Check size={checkBox == true ? 16 : 0}/>
        </div>
        <p 
        className={checkBox == false ? styles.TextDone : styles.TextunDone}>{content}</p>
        <div className={styles.TrashIcon} onClick={handleDeleteComment}><Trash size={18}/></div>
    </div>
  );
}