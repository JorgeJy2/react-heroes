import { mount } from "enzyme";
import { MemoryRouter, Router } from "react-router";
import { types } from "../../types/types";
import { AuthContext } from "../auth/AuthContext";
import { Navbar } from "./Navbar";

describe('test in navbar', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'jorge'
        }
    };

    const wrapper = mount(
        <AuthContext.Provider
            value={contextValue} >
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(()=>{
        jest.clearAllMocks();
    });

    test('should snaptshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should show name', () => {
        expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.name);
    });

    test('should logout', () => {
        wrapper.find('button').simulate('click');

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });

        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    });

});