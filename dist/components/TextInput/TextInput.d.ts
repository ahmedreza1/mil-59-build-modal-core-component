import { HTMLAttributes } from 'react';
import './TextInput.css';
export interface Props extends HTMLAttributes<HTMLInputElement> {
    /** Placeholder text for input */
    placeholder?: string;
    /** Determines whether user can type in the text input */
    disabled?: boolean;
    /** Determines whether the text input is a password */
    password?: boolean;
    /** Determines what type of text input will be shown */
    variant?: "default" | "secondary";
}
/**
 * Text Input from the Apollo Component Library
 */
export declare const TextInput: ({ variant, password, ...props }: Props) => JSX.Element;
