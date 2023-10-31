import { Children, memo } from 'react';
import type { I_Image, I_SrcSet } from './types';

const Image: React.NamedExoticComponent<I_Image> = memo(
    ({ src, alt, children, loading = 'eager', srcset, className = '' }) => {
        return (
            <figure className={className}>
                {srcset?.map((set: I_SrcSet) => (
                    <source key={set.media} media={set.media} srcSet={set.srcset} />
                ))}
                <img src={src} alt={alt} loading={loading} />
                {Children.count(children) > 0 && <figcaption>{children}</figcaption>}
            </figure>
        );
    }
);

export default Image;
