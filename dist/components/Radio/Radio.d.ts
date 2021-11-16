import { HTMLAttributes, ReactNode } from 'react';
import './Radio.css';
export interface Props extends HTMLAttributes<HTMLInputElement> {
    /** You can define an element pertaining to radio */
    children?: ReactNode;
    /** Determines whether input is disabled */
    disabled?: boolean;
    /** Value that the radio represents*/
    value?: string;
}
/**
 * An input object that is a list of items where a single entry can be selected
 */
export declare const Radio: ({ children, ...props }: Props) => JSX.Element;
