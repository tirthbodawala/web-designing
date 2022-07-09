import { CardList } from '@components/card/list';
import { Nav } from '@components/nav';
import { Slider } from '@components/slider';

const HomePage: React.FC = () => (
  <main>
    <Nav />
    <Slider />
    <CardList />
  </main>
);

export default HomePage;
