import { ChangeEvent, FormEvent, InvalidEvent, useState} from 'react';
import styles from './styles.module.css';
import { PlusCircle  } from "phosphor-react";

interface NewTaskBarProps{
  onNewTaskItem: (textTask: string) => void;
}

export function NewTaskBar({onNewTaskItem}: NewTaskBarProps){
  const [textNull, setTextNull] = useState(false)
  const [newCommentText, setnewCommentText] = useState('')

  function handleCreateNewComment(event: FormEvent){
    event.preventDefault()
    if(newCommentText!=''){
      onNewTaskItem(newCommentText)
      setnewCommentText('');
    }else{
      setTextNull(true)
    }
  }
  function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>){
    event.preventDefault()
    setnewCommentText(event.target.value)
    setTextNull(false)
    event.target.setCustomValidity('');
  }
  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity("Esse campo é obrigatório!");
    setTextNull(true)
  }


  return (
    <form className={styles.container} onSubmit={handleCreateNewComment}>
      <input 
        className={textNull ? styles.inputNull : styles.input}
        name="text" 
        placeholder='Adicione uma nova tarefa'
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        value={newCommentText}
        required
      />

        <button 
          type="submit" 
          >Criar<PlusCircle size={20} />
          </button>
    </form>
  );
}

