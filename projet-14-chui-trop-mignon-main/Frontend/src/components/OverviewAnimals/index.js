import { useSelector } from 'react-redux';

import Card from 'src/components/ListAnimals/Cards';

import './overviewAnimals.scss';

function OverviewAnimals () {
  const animals = useSelector((state) => state.animals.list);

  return (
    <div className="overview-page">
      <section className="overview-section">
        <h1 className="overview-title">🐾 Nos derniers arrivés 🐾</h1>
            {animals && (
            <div className="overview-content">
              {animals.slice(-3).map((animals) => (
                <Card key={animals.id} {...animals} />
              ))}
            </div>
        )}
    </section>
    </div>
  );
}

export default OverviewAnimals;
