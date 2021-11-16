import React from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { Default as Modal } from '../stories/Modal.stories';

describe('Modal', () => {
    it("renders correctly", () => {
        // given
        render(<Modal>Hello World!</Modal>);

        // when then
        expect(screen.getByText(/hello world!/i)).toBeInTheDocument();
    })

    it("can be clicked", () => {
        // given
        let onClick: jest.Mock<any, any> = jest.fn();
        render(<Modal onClick={onClick}>Test Modal</Modal>);

        // when
        userEvent.click(screen.getByRole('modal', { name: /test modal/i}));

        // then
        expect(onClick).toHaveBeenCalledTimes(1);
    })
})