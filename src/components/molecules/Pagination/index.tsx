import { useMemo } from 'react';
import Button from '@atoms/Button';
import Displacement from '@icons/Displacement';
import Caret from '@icons/Caret';
import TypeCheck from '@helpers/TypeCheck';
import type { I_Pagination } from './types';

const Pagination: React.FC<I_Pagination> = ({ active, totalPages, visiblePages = 5, onChange }) => {
    const handlePage = (payload: 'next' | 'prev' | 'start' | 'end' | number) => {
        if(TypeCheck.isNumber(payload)) {
            return onChange(payload as number);
        }

        switch (payload) {
            case 'end':
                onChange(totalPages);
                break;
            case 'start':
                onChange(1);
                break;
            case 'prev':
                if (active - 1 >= 1) {
                    onChange(active - 1);
                }
                break;
            case 'next':
            default:
                if (active < totalPages) {
                    onChange(active + 1);
                }
                break;
        }
    };

    const renderPageButtons = useMemo<Array<JSX.Element>>(() => {
        // If all pages can fit in visible count
        if(totalPages <= visiblePages) {
            return [...Array(totalPages).keys()].map((i) => (
                <Button key={`page-${i}`} onClick={() => handlePage(i + 1)}>{ i + 1 }</Button>
            ));
        }
        // Count of buttons at left and at right side from active page
        const countBySides = Math.floor((visiblePages - 1) / 2);

        let result: Array<number> = [];

        if (active < countBySides + 1) {
            // Case when active button is lower than pages by sides
            /** @example visible count is 5, count by sides are 2, and active are less that 3  */
            for (let i = 1; i <= visiblePages; i++) {
                result.push(i);
            }
        } else if (active + countBySides >= totalPages) {
            // Case when active moved to total pages count. Prevent render overflow pages
            /** @example visible count is 5, total is 10, active is 8 */
            for (let i = totalPages; i > totalPages - visiblePages; i--) {
                result.push(i);
            }
            //Need to reverse, because iteration goes from end point
            result = result.reverse();
        } else {
            // Case when active are great than count by sides + one (active) and less than total pages - count by side
            /** @example visible count is 5, total pages is 10, count by sides are 2, active are 6*/
            for (let i = active - countBySides; i <= active + countBySides; i++) {
                result.push(i);
            }
        }
        
        // Case When visible pages are even. Prepend/append missed
        if (result.length !== visiblePages) {
            if(result[0] - 1 >= 1) {
                result.unshift(result[0] - 1);
            } else {
                result.push(result[result.length - 1] + 1);
            }
        }

        return result.map((number) => (
            <Button key={number} withoutBorder={number !== active} onClick={() => handlePage(number)}>{number}</Button>
        ));
    }, [visiblePages, active, totalPages]);

    return (
        <article className="flex ai-center jc-center gap-5">
            <Button disabled={active === 1} onClick={() => handlePage('start')}>
                <Displacement direction="left" />
            </Button>

            <Button disabled={active === 1} onClick={() => handlePage('prev')}>
                <Caret direction="left" />
            </Button>

            {renderPageButtons}

            <Button disabled={active === totalPages} onClick={() => handlePage('next')}>
                <Caret direction="right" />
            </Button>

            <Button disabled={active === totalPages} onClick={() => handlePage('end')}>
                <Displacement direction="right" />
            </Button>
        </article>
    );
};

export default Pagination;
