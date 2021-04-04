import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { types } from "../../types/types";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "./LoginScreen";

describe('test in login', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    };

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    };

    test('should snaptshot', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <LoginScreen />
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    })


    test('should login', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <LoginScreen history={historyMock} />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        wrapper.find('button').simulate('click');

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'jorge'
            }
        });
        expect(historyMock.replace).toHaveBeenCalledWith('/');
    });

    test('should login and go path', () => {
        localStorage.setItem('lastPath', '/test');
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <LoginScreen history={historyMock} />
                </MemoryRouter>
            </AuthContext.Provider>
        );
       
        wrapper.find('button').simulate('click');
        expect(historyMock.replace).toHaveBeenCalledWith('/test');
    });

});