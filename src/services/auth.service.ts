const baseUrl= 'https://rickandmortyapi.com/api'

const  charactersUrl = `${baseUrl}/character`
export const getMorty = async () => {
    return fetch(charactersUrl + '/2')
        .then(response => response.json())

}