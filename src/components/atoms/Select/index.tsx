import cn from '@helpers/cn';
import s from './Select.module.scss';
import useClickOutside from '@hooks/useClickOutside';
import useToggle from '@hooks/useToggle';
import type { I_Select } from './types';

const Select: React.FC<I_Select> = ({ selected, options, placeholder, onSelect }) => {
    const [isOpened, toggleOpened] = useToggle(false);
    const selectRef = useClickOutside<HTMLElement>(() => toggleOpened(false));

    return (
        <article ref={selectRef} className={cn(s.select, { [s.opened]: isOpened }, 'px-4 pt-4')}>
            <div
                className={cn(s.selectedArea, 'text--center pointer py-1 pl-5 pr-8')}
                role="button"
                onClick={() => toggleOpened()}
            >
                <span className={!!selected ? 'text--primary' : 'text--secondary'}>
                    {selected || placeholder || ''}
                </span>
                <span className={s.arrow}></span>
            </div>

            {isOpened && (
                <ul className={cn(s.list, 'text--center')}>
                    {options.map((opt) => (
                        <li
                            key={opt.id}
                            className={cn('text--primary py-4 pointer', s.listItem)}
                            onClick={() => onSelect(opt)}
                        >
                            {opt.value}
                        </li>
                    ))}
                </ul>
            )}
        </article>
    );
};

export default Select;
