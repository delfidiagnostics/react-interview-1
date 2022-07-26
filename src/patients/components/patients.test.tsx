import { render, screen } from '../../utils/test-utils';
import Patients from "./patients";

describe('Patients', async () => {
    it('should render component', () => {
        render(<Patients></Patients>);
        expect(screen.getByText('Patients')).toBeInTheDocument();
    });
});
