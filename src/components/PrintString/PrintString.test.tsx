import { screen, render, waitFor } from '@testing-library/react';
import PrintString from '.';
import type { RenderResult } from '@testing-library/react';

const VALUE = 'Lorem';
const mockOnPrintComplete = jest.fn();

describe('<PrintString />', () => {
    describe('Default props', () => {
        let container: RenderResult['container'] | null = null;

        beforeEach(() => {
            const { container: resultContainer } = render(<PrintString value={VALUE} />);
            container = resultContainer;
        });

        it('Text should apply primary color', () => {
            expect(container?.querySelector('.text--primary')).toBeInTheDocument();
        });

        it('Text should apply md size', () => {
            expect(container?.querySelector('.text--md')).toBeInTheDocument();
        });

        it('Should display text cursor', () => {
            expect(screen.getByText(/^\|$/)).toBeInTheDocument();
        });

        it('First letter appear after 300ms', async () => {
            await waitFor(
                () => {
                    expect(screen.getByText(/^L$/)).toBeInTheDocument();
                },
                { timeout: 350 }
            );
        });

        it('After type complete, text cursor disappear', async () => {
            await waitFor(
                () => {
                    expect(screen.queryByText(/^\|$/)).not.toBeInTheDocument();
                },
                { timeout: VALUE.length * 350 }
            );
        });
    });

    describe('Optional props', () => {
        it('Color, change text color', () => {
            const { container } = render(<PrintString value={VALUE} color="secondary" />);

            expect(container.querySelector('.text--secondary')).toBeInTheDocument();
        });

        it('Size, change text size', () => {
            const { container } = render(<PrintString value={VALUE} size="lg" />);

            expect(container.querySelector('.text--lg')).toBeInTheDocument();
        });

        it('PrintSpeed, control letter time appearing', async () => {
            render(<PrintString value={VALUE} printSpeed={100} />);

            await waitFor(
                () => {
                    expect(screen.getByText(/^L$/)).toBeInTheDocument();
                },
                { timeout: 150 }
            );
        });

        it('PrintSpeed, control letter time appearing', async () => {
            render(<PrintString value={VALUE} printSpeed={100} onPrintComplete={mockOnPrintComplete} />);

            await waitFor(
                () => {
                    expect(mockOnPrintComplete).toHaveBeenCalled();
                    expect(mockOnPrintComplete).toHaveBeenCalledTimes(1);
                },
                { timeout: VALUE.length * 150 }
            );
        });
    });
});
