
import { types } from "../../types/types";
import { authReducer } from "./authReducer";

describe('test int authreducer', () => {

    test('should defult reducer ', () => {

        const user = authReducer({ logged: false }, {});

        expect(user).toEqual({ logged: false });

    });

    test('should login', () => {

        const user = authReducer({ logged: false }, {
            type: types.login,
            payload: {
                name: 'jorge'
            }
        });

        expect(user).toEqual({ logged: true, name: 'jorge' });
    });

    test('should logout', () => {
        const user = authReducer({ logged: false, name: 'jorge' }, {
            type: types.logout
        });

        expect(user).toEqual({ logged: false });
    });




});
