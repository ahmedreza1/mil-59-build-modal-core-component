import { HTMLAttributes, ReactNode } from 'react';
import './Checkbox.css';
export interface Props extends HTMLAttributes<HTMLInputElement> {
    /** Tags must be have value in between */
    children: ReactNode;
    /** Value that the checkbox represents */
    value?: string;
    /** Determines whether the user can change the input */
    disabled?: boolean;
}
/**
 * An input object that is a list of items where a single entry can be selected
 */
export declare const Checkbox: ({ children, ...props }: Props) => JSX.Element;
