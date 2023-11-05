import { useState } from 'react';
import TypeCheck from '../../helpers/TypeCheck';

export default function useToggle(initialValue: boolean = false): [boolean, (val?:boolean) => void] {
    const [state, setState] = useState<boolean>(initialValue);

    return [
        state,
        (val?: boolean) => setState((prev) => (TypeCheck.isBoolean(val) ? (val as boolean) : !prev)),
    ]
}
