import { heroes } from "../data/heroes-data";

export const getHeroesById = (id) => {

    return heroes.find(heroe => heroe.id === id);
}