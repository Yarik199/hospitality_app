export const headerContainer = {
    maxHeight: '200px',
}

export const headerImageStyles = (loaded: boolean) => {
    return {
        width: '100%',
        maxHeight: '200px',
        objectFit: 'cover',
        backgroundColor: '#fff',
        display: loaded ? 'inline-block' : 'none'
    }
}