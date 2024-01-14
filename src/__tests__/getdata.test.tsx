// login.test.js
import { ProductUrl } from '@/client/services';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';


describe('Get Data test', () => {
    it('Fetch Data from the api', async () => {

        // Make a GET request to the API
        const response = await axios.get(ProductUrl);

        // Assert that the response status is 200
        expect(response.status).toBe(200);

        // Assert that the response data is an array
        expect(Array.isArray(response.data)).toBe(true);

        // Assert that the array has a length greater than 0
        expect(response.data.length).toBeGreaterThan(0);
    });
});
