import { Button } from '@components/button';
import Link from '@components/link';
import { MegaMenu } from '@components/mega-menu';

export const Nav: React.FC = () => {
  return (
    <nav>
      <Link to="/">
        <img src="logo" />
      </Link>
      <MegaMenu />
      <Button>
        Contact Us
      </Button>
    </nav>
  );
};
