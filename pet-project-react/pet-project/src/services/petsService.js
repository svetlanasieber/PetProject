let url = 'http://localhost:6500/pets';

export const getAll = (category = 'All') => {
    const currentUrl = url + (category != 'All' ? `?category=${category}` : '');
    return fetch(currentUrl)
        .then(x => x.json())
        .catch(x => console.log(x));
};

export const getOne = (id) => {
    return fetch(`${url}/${id}`)
        .then(x => x.json())
        .catch(x => console.log(x))
};