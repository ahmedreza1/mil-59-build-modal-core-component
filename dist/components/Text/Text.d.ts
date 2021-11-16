import { HTMLAttributes, ReactNode } from 'react';
import './Text.css';
export interface Props extends HTMLAttributes<HTMLParagraphElement> {
    /** Text needs to exist between tags */
    children: ReactNode;
    /** Determines whether it is a header or not, number directly relates to the kind of header tag i.e. header={1} => h1 */
    header?: 0 | 1 | 2 | 3;
    /** Determines whether the element has margins or not */
    margins?: boolean;
    /** Determines whether the element is inline or not */
    inline?: boolean;
    /** Determines whether the text is bold or not */
    bold?: boolean;
    /** Determines whether the text is italic or not */
    italic?: boolean;
    /** Determines whether the text is underline */
    underline?: boolean;
    /** Determines whether the text is uppercase or not */
    upper?: boolean;
    /** Determines whether the text is lowercase or not */
    lower?: boolean;
    /** Determines whether the first letter of every word is capital or not */
    pascal?: boolean;
}
/**
 * Typography component for the Apollo Component Library
 */
export declare const Text: ({ children, header, margins, inline, bold, italic, underline, upper, lower, pascal, ...props }: Props) => JSX.Element;
