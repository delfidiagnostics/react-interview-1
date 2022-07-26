import { render, screen } from '../../utils/test-utils';
import { AuthProvider } from './auth-provider';

vi.mock('react-router-dom', () => {
  return {
    useNavigate: vi.fn(),
  };
});

describe('AuthProvider', () => {
  it('should render provider', () => {
    render(
      <AuthProvider>
        <h1>Hello</h1>
      </AuthProvider>,
    );
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
