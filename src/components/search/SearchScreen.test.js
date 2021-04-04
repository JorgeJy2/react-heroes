import { mount} from "enzyme";
import { MemoryRouter, Route } from "react-router";
import { SearchScreen } from "./SearchScreen";

describe('test in search', ()=>{
    test('should snaptshot', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route  path="/search" component={SearchScreen}  />
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Search');
    });


    test('should find batman ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route  path="/search" component={SearchScreen}  />
            </MemoryRouter>
        );
        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper.find('.card').length).toBe(1);
    });


    test('should not found', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=not-found']}>
                <Route  path="/search" component={SearchScreen}  />
            </MemoryRouter>
        );
        expect(wrapper.find('input').prop('value')).toBe('not-found');
        expect(wrapper.find('.card').length).toBe(0);
        expect(wrapper.find('p').text().trim()).toBe('Heroe not found');
    });

    test('should submit', () => {

        const history ={
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=not-found']}>
                <Route path="/search"
                        component={ ()=>
                            <SearchScreen history={history} />}
                              />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {
            target: {
                value: 'batman'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() { } });

        expect(history.push).toHaveBeenCalledWith('?q=batman');
    });
    
    
});