import UnitTestHelper from '.';

const spyOnHistory = jest.spyOn(history, 'pushState');

describe('UnitTestHelper', () => {
    describe('renderWithRouter', () => {
        it('Render without provided route', () => {
            UnitTestHelper.renderWithRouter(<div>My component</div>);

            expect(spyOnHistory).toHaveBeenCalled();
            expect(spyOnHistory).toHaveBeenCalledWith({}, 'Test page', '/');
        });

        it('Render with provided route', () => {
            UnitTestHelper.renderWithRouter(<div>My component</div>, '/test-path');

            expect(spyOnHistory).toHaveBeenCalled();
            expect(spyOnHistory).toHaveBeenCalledWith({}, 'Test page', '/test-path');
        });

        it('Render result', () => {
            const result = UnitTestHelper.renderWithRouter(<div>My component</div>);         

            expect(result.container).toEqual(expect.any(HTMLDivElement));
            expect(result.rerender).toEqual(expect.any(Function));
            expect(result.unmount).toEqual(expect.any(Function));
        });
    });
});