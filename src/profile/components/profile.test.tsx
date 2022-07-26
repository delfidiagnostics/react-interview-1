import {mockUseAuth0, render, screen} from '../../utils/test-utils';
import Profile from "./profile";

describe('Profile', async () => {
    it('should render component', () => {
        mockUseAuth0({isAuthenticated: true, isLoading: false, user: {name: 'test', picture:''}})
        render(<Profile></Profile>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });
});
