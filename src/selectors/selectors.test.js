import expect from 'expect';
import { authorsFormmatedToDropdown } from './selectors';

describe('Selectors', () => {
  it('Author Selector', () => {
    it('transform authors data to use in a dropdown', () => {
       const authors = [{
         id: 'id',
         fistName: 'firstName',
         lastName: 'lastName'
       }];
       expect(authorsFormmatedToDropdown(authors)).toBe([{
         value: 'id',
         text: 'firstName lastName'
       }]);
    });
  });
});
