import React from 'react';
import useHead from '../../hooks/useHead'

const PageNotFound = () => {
    useHead('404 Página não encontrada')
    return <>Página não encontrada</>
}

export default PageNotFound;