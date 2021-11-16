import { HTMLAttributes, ReactNode } from 'react';
import './Modal.css';
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    /** Required ReactNode that needs to exist between component tags */
    children: ReactNode;
    /** defines the type of button to be rendered */
    variant?: 'default' | 'secondary';
    /** callback function to be called when there is a method click */
    /** will allow for http redirect */
    href?: string;
}
/**
 * Button component for the Apollo Component Library
 */
export declare const Modal: ({ children, href, variant, ...props }: Props) => JSX.Element;
