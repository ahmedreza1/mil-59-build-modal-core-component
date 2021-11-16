import React, { HTMLAttributes, ReactNode } from 'react';
import './Button.css';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    /** Required ReactNode that needs to exist between component tags */
    children: ReactNode;
    /** defines the type of button to be rendered */
    variant?: 'default' | 'secondary';
    /** callback function to be called when there is a method click */
    onClick?: () => void;
    /** will allow for http redirect */
    href?: string;
}

/**
 * Button component for the Apollo Component Library
 */
export const Button = ({children, href, variant = "default", ...props}: Props) => {
    const button: JSX.Element = (
        <button {...props} className={`apollo-component-library-button ${variant}`}>
            {children}
        </button>
    )

    // if the href element exists, render it with link capabilities, else just render the standalone button
    return href ? (<a href={href} target="_blank">{button}</a>) : button;   
}