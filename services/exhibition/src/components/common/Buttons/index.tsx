import styles from './Button.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}


export const Button = ({children, onClick, disabled, ...props}:ButtonProps) => {
    return (
        <button {...props} className={styles.button} onClick={onClick} disabled={disabled}>
            {children}  
        </button>
    )
}

