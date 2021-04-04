import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { AuthContext } from "../components/auth/AuthContext";
import { DashboardRoutes } from "./DashboardRoutes";

describe('test in dashboard', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'jorge'
        }
    }

    test('should snaptshot', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}  >
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('jorge');
    })

});