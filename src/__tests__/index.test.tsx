// login.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../app/section/Login'; // Update the import path based on your project structure
import { Providers } from '../components/Provider';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';


describe('Login Page', () => {
    it('renders login form', () => {
        render(<Providers><Login /></Providers>);

        console.log(screen);
        // Ensure that the login form elements are present
        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    });

    it('validates user input', async () => {
        render(<Providers><Login /></Providers>);

        // Attempt to submit the form without entering any data
        fireEvent.click(screen.getByRole('button', { name: /login/i }));

        // Ensure that error messages are displayed for empty fields
        expect(await screen.findByText("User Name is required")).toBeInTheDocument();
        expect(await screen.findByText("Password is required")).toBeInTheDocument();
        // Enter valid email and password
        await userEvent.type(screen.getByLabelText(/username/i), 'mor_2314');
        await userEvent.type(screen.getByLabelText(/password/i), '83r5^_');

        // Attempt to submit the form again
        fireEvent.click(screen.getByRole('button', { name: /login/i }));

        await waitFor(async () => {
            expect(await screen.queryByText("User Name is required")).not.toBeInTheDocument();
            expect(await screen.queryByText("Password is required")).not.toBeInTheDocument();
        });
    });

});
