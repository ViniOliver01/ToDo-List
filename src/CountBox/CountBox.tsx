import React from 'react';
import styles from './styles.module.css';

interface CountBoxProps {
  task: number;
  hasComplet?: boolean;
  doneTask?: number;
}

export function CountBox({task, hasComplet, doneTask}:CountBoxProps){

  return (
    <div className={styles.container}>
        <p>{ hasComplet ? doneTask+' de ' : ''}{task}</p>
    </div>
  );
}