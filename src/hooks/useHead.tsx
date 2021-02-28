import React from 'react';

const useHeader = (name: string) => {
    React.useEffect(() => {
        document.title = 'Dogs | ' + name;
    }, [name])
}

export default useHeader;