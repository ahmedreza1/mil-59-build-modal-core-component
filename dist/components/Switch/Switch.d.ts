import { HTMLAttributes, ReactNode } from 'react';
import './Switch.css';
export interface Props extends HTMLAttributes<HTMLInputElement> {
    /** Can assign text or element to switch */
    children?: ReactNode;
    /** Determines whether the switch is disabled */
    disabled?: boolean;
    /** Value that the switch represents */
    value?: string;
    /** Variant of switch */
    variant?: "default" | "secondary";
}
/**
 * UI element that slides a button from on to off.
 */
export declare const Switch: ({ children, variant, ...props }: Props) => JSX.Element;
