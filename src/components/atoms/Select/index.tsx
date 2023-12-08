import cn from '@helpers/cn';
import s from './Select.module.scss';
// import useClickOutside from '@hooks/useClickOutside';
// import useToggle from '@hooks/useToggle';
import type { I_Option, I_Select } from './types';

const Select: React.FC<I_Select> = ({ selected, options, placeholder, onSelect }) => {

    const handleSelect = (opt: I_Option) => {
        onSelect(opt);
        // toggleOpened(false);
    }

    return (
        <article className={cn(s.select, 'px-4 pt-4')}>
            <div
                className={cn(s.selectedArea, 'text--center pointer py-1 pl-5 pr-8')}
                role="combobox"
                // onClick={() => toggleOpened()}
            >
                <span className={!!selected ? 'text--primary' : 'text--secondary'}>
                    {selected || placeholder || ''}
                </span>
                <span className={s.arrow}></span>
            </div>

            <div className={s.listWrapper}>
                <ul className={cn(s.list, 'text--center')}>
                    {options.map((opt) => (
                        <li
                            key={opt.id}
                            className={cn('text--primary py-4 pointer', s.listItem)}
                            onClick={() => handleSelect(opt)}
                        >
                            {opt.value}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default Select;
