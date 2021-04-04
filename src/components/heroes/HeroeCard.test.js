import { shallow } from "enzyme";
import { HeroeCard } from "./HeroeCard";

describe('test in card',()=>{

    const mokHeroe = {
        id: 1,
        superhero: 'Name',
        publisher: 'Public',
        alter_ego: 'None',
        first_appearance: 'Today',
        characters: 'fly'
    }

    const wrapper = shallow(<HeroeCard {...mokHeroe}/>);

    test('should snaptshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should data in card', ()=>{
        expect(wrapper.find('img').prop('src')).toBe(`./assets/heroes/${mokHeroe.id}.jpg`);
        expect(wrapper.find('h5').text().trim()).toBe(mokHeroe.superhero);
        expect(wrapper.find('p').at(0).text().trim()).toBe(mokHeroe.alter_ego);
        // if(alter_ego !== characters) {
        //     expect(wrapper.find('p').at(1).text().trim()).toBe(mokHeroe.characters);    
        //     expect(wrapper.find('p').at(2).text().trim()).toBe(mokHeroe.first_appearance);
        // } else {
        //     expect(wrapper.find('p').at(1).text().trim()).toBe(mokHeroe.first_appearance);    
        // }

    });
    
});