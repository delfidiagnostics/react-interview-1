import {mockUseAuth0, render, screen} from '../../utils/test-utils';
import {MemoryRouter, Route, Routes} from "react-router-dom";
import ProtectedRoute from "./protected-route";
import {auth0Config} from "../providers/auth-provider";

describe('ProtectedRoute', function () {

    describe('when loading', function () {
        it('should show loading component', function () {
            mockUseAuth0({
                isAuthenticated: false,
                isLoading: true
            });
            render(
                <MemoryRouter initialEntries={['/']}>
                    <Routes>
                        <Route path='/' element={<ProtectedRoute requiredPermissions={['test:read']}><p>hello</p>
                        </ProtectedRoute>}>
                        </Route>
                        <Route path='/login' element={<h1>SSO Login</h1>}></Route>
                        <Route path='/unauthorized' element={<h1>403: Unauthorized</h1>}></Route>
                    </Routes>
                </MemoryRouter>
            )
            expect(screen.getByText('Loading...')).toBeInTheDocument();
        });
    });

    describe('when not logged in', function () {
        const {audience} = auth0Config;
        const claimKey = `${audience}/permissions`;
        let user = {
            [claimKey]: ['test:read']
        };
        it('should navigate to login page', async function () {
            mockUseAuth0({
                    isAuthenticated: false,
                    isLoading: false,
                    user
                });
            render(
                <MemoryRouter initialEntries={['/']}>
                    <Routes>
                        <Route path='/' element={<ProtectedRoute requiredPermissions={['test:read']}><p>hello</p>
                        </ProtectedRoute>}>
                        </Route>
                        <Route path='/login' element={<h1>SSO Login</h1>}></Route>
                        <Route path='/unauthorized' element={<h1>403: Unauthorized</h1>}></Route>
                    </Routes>
                </MemoryRouter>
            )
            expect(screen.getByText('SSO Login')).toBeInTheDocument();
        });
    });

    describe('when logged in but not enough perms', function () {
        const {audience} = auth0Config;
        const claimKey = `${audience}/permissions`;
        let user = {
            [claimKey]: []
        };
        it('should navigate to unauthorized page', async function () {
            mockUseAuth0({
                isAuthenticated: true,
                isLoading: false,
                user
            });
            render(
                <MemoryRouter initialEntries={['/']}>
                    <Routes>
                        <Route path='/' element={<ProtectedRoute requiredPermissions={['test:read']}><p>hello</p>
                        </ProtectedRoute>}>
                        </Route>
                        <Route path='/login' element={<h1>SSO Login</h1>}></Route>
                        <Route path='/unauthorized' element={<h1>403: Unauthorized</h1>}></Route>
                    </Routes>
                </MemoryRouter>
            )
            expect(screen.getByText('403: Unauthorized')).toBeInTheDocument();
        });
    });
});