import { heroes } from "../data/heroes-data";

export const getHeroesByName = (name) => {
    name = name.toLocaleLowerCase()
    return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(name));
}