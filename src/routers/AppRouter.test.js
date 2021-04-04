import { mount } from "enzyme";
import { AuthContext } from "../components/auth/AuthContext";
import { AppRouter } from "./AppRouter";

describe('test in app route', () => {

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  }

  test('should show login if user not auth', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('LoginScreen');
  });

  test('should show marvel component if user auth', () => {
    contextValue.user = {
      logged: true,
      name: 'jorge'
    }
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>);
    expect(wrapper.find('.navbar').exists()).toBeTruthy();
  });


});