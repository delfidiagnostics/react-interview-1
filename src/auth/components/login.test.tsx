import {render, screen} from '../../utils/test-utils';
import Login from "./login";
import {useAuth0} from "@auth0/auth0-react";
import {Mock} from "vitest";
import {MemoryRouter} from "react-router-dom";

describe('Login', function () {

    describe('when on login page', function () {
        (useAuth0 as unknown as Mock)
            .mockReturnValue({loginWithRedirect: vi.fn()});
        it('should render component', function () {
            render(
                <MemoryRouter>
                    <Login></Login>
                </MemoryRouter>
            );
            expect(screen.getByText('SSO Login')).toBeInTheDocument();
        });
    });
});