import { heroes } from "../data/heroes-data";

export const getHeroesByPublisher = (publisher) => {
    const validHeroes = ['DC Comics', 'Marvel Comics'];

    if (!validHeroes.includes(publisher))
        throw new Error(`Publish ${publisher} no es valid. valid = ${validHeroes}`);

    return heroes.filter(heroe => heroe.publisher === publisher);
}