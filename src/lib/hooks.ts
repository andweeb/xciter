import { useEffect, useRef } from 'react';

// Custom hook to use the previous value of some state
export function usePrevious(value: any) {
    const ref = useRef();

    // Store current value in ref
    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}
