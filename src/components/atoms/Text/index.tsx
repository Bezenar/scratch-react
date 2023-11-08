import { createElement, memo } from 'react';
import cn from '../../../helpers/cn';
import type { I_Text } from './types';

const Text: React.NamedExoticComponent<I_Text> = memo(({
    children,
    value,
    className = '',
    color = 'primary',
    size = 'md',
    paragraph,
}) => {

    return createElement(
        paragraph ? 'p' : 'span',
        { className: cn(`text--${size}`, `text--${color}`, className) },
        !!value ? value : children
    );
});

export default Text;
