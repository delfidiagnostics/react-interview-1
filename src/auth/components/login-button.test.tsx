import {render, screen, userEvent} from '../../utils/test-utils';
import LoginButton from "./login-button";
import {useAuth0} from "@auth0/auth0-react";
import {Mock} from "vitest";
import {MemoryRouter} from "react-router-dom";

describe('LoginButton', function () {
    const mocked = (useAuth0 as unknown as Mock)
        .mockReturnValue({loginWithRedirect: vi.fn()});

    beforeEach(() => {
        render(
            <MemoryRouter>
                <LoginButton></LoginButton>
            </MemoryRouter>
        );
    });
    it('should render component', function () {
        expect(screen.getByText('SSO Login')).toBeInTheDocument();
    });
    describe('when clicked', function () {
        it('should call auth0 login with default options', async function () {
            // screen.debug();
            const user = userEvent.setup();
            await user.click(screen.getByText('SSO Login'));
            expect(mocked().loginWithRedirect).toHaveBeenCalled();
        });
        it('should call auth0 login and pass default location state', async function () {
            // screen.debug();
            const user = userEvent.setup();
            await user.click(screen.getByText('SSO Login'));
            const expected = {
                appState: {
                    returnTo: '/home'
                }
            }
            expect(mocked().loginWithRedirect).toHaveBeenCalledWith(expected);
        });
    });

});