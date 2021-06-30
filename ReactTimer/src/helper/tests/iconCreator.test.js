import React from 'react';
import { icon } from './iconCreator';

describe('icon', () => {
    it('should be defined', () => {
        expect(icon).toBeDefined();
    });
    it('should be function', () => {
        expect(typeof icon).toBe('function');
    });
    it('should return 🌞', () => {
        const mode = 'light';
        expect(icon(mode)).toEqual(<>🌞</>);
    });
    it('should return 🌙', () => {
        const mode = 'dark';
        expect(icon(mode)).toEqual(<>🌙</>);
    });
});
