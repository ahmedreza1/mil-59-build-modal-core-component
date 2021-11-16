import { ReactNode } from 'react';
/**
 * This function gets all the children from the component's properties
 * to sort and index them into an object that can later be easily processed
 * and rendered.
 *
 * @param {Array} children children prop of component
 * @param {Array} components components to look for
 * @returns {Object} object whose props are the found subcomponents and other
 */
export declare const findAll: (children: ReactNode, components: any[]) => any;
