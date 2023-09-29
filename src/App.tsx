import {
  Categories,
  Footer,
  HappyCustomers,
  Hero,
  OurMission,
} from './components';

const App = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1200px] w-full">
        <Hero />
        <Categories title="Top Competitions" />
        <Categories title="Top Football Clubs" />
        <Categories title="Top Football Matches" />
        <Categories title="Top Artists" />
        <OurMission />
        <HappyCustomers />
        <Footer />
      </div>
    </div>
  );
};

export default App;
