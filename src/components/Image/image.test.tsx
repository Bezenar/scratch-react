import { render, screen } from '@testing-library/react';
import Image from '.';
import type { I_Image, I_SrcSet } from './types';

const PROPS: I_Image = {
    src: 'image-src',
    alt: 'image-alt',
};

describe('<Image />', () => {
    describe('Required props', () => {
        beforeEach(() => {
            render(<Image {...PROPS} />);
        });

        it('Props src value, passed to img src attribute', () => {
            expect(screen.getByRole('img')).toHaveAttribute('src', PROPS.src);
        });

        it('Props alt value, passed to img alt attribute', () => {
            expect(screen.getByRole('img')).toHaveAttribute('alt', PROPS.alt);
        });

        it('By default img have loading attribute eager', () => {
            expect(screen.getByRole('img')).toHaveAttribute('loading', 'eager');
        });
    });

    it('Prop className value, pass as classnames to figure element', () => {
        render(<Image {...PROPS} className="additional-class" />);

        expect(screen.getByRole('figure')).toHaveClass('additional-class');
    });

    it('Set prop loading to lazy, should add to image loading attribute lazy', () => {
        render(<Image {...PROPS} loading="lazy" />);

        expect(screen.getByRole('img')).toHaveAttribute('loading', 'lazy');
    });

    it('Passed prop children should render figcaption element', () => {
        render(<Image {...PROPS} children={'caption'} />);

        expect(screen.getByRole('figure').querySelector('figcaption')).toBeInTheDocument();
    });

    it('Prop srcset generate source elements inside figure element', () => {
        const SOURCES: Array<I_SrcSet> = [
            { media: 'm-1', srcset: 'ss-1' },
            { media: 'm-2', srcset: 'ss-2' },
        ];
        render(<Image {...PROPS} srcset={SOURCES} />);

        const sources = screen.getByRole('figure').querySelectorAll('source');

        expect(sources.length).toBe(SOURCES.length);

        sources.forEach((source, i) => {
            expect(source).toHaveAttribute('media', SOURCES[i].media);
            expect(source).toHaveAttribute('srcset', SOURCES[i].srcset);
        });
    });
});
