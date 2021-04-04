import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router";
import { HeroScreen } from "./HeroScreen";

describe('test in heroe screen', () => {

    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    };

    test('should redirect if no have params in url ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe']}>
                <HeroScreen history={history} />
            </MemoryRouter>
        );
        expect(wrapper.find('Redirect').exists()).toBeTruthy();
    });

    test('should heroe if param valid ', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/dc-batman']}>
                <Route path="/heroe/:id" component={HeroScreen}>
                </Route>
            </MemoryRouter>
        );


        expect(wrapper.find('h3').exists()).toBeTruthy();
    })

    test('should click button back and call push', () => {

        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/dc-batman']}>
                <Route
                    path="/heroe/:id"
                    component={() => (
                        <HeroScreen
                            history={history}
                        />
                    )}>
                </Route>
            </MemoryRouter>
        );

        wrapper.find('button').simulate('click')
        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();
    });

    test('should click button back and call back', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/dc-batman']}>
                <Route
                    path="/heroe/:id"
                    component={() => (
                        <HeroScreen
                            history={history}
                        />
                    )}>
                </Route>
            </MemoryRouter>
        );

        wrapper.find('button').simulate('click')
        expect(history.goBack).toHaveBeenCalled();
        expect(history.push).not.toHaveBeenCalled();
    });

    test('should redirect hereo not found', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/dc-not-found']}>
                <Route
                    path="/heroe/:id"
                    component={() => (
                        <HeroScreen
                            history={history}
                        />
                    )}>
                </Route>
            </MemoryRouter>
        );

        expect(wrapper.text()).toBe('');
    });

});