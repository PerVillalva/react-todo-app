import { useEffect } from 'react';

function useClickOutside(ref, handleClickOutside) {
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                handleClickOutside(e);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [ref, handleClickOutside]);
}

export default useClickOutside;
