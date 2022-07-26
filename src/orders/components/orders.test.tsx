import { render, screen } from '../../utils/test-utils';
import Orders from './orders';

describe('Orders', async () => {
  it('should render component', () => {
    render(<Orders></Orders>);
    expect(screen.getByText('Orders')).toBeInTheDocument();
  });
});
