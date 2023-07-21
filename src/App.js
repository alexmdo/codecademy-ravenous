import logo from './logo.svg';
import './App.css';
import Business from './components/Business/Business';

function App() {
  const restauranteData = [
    {
      image: 'restaurant1.jpg',
      name: 'React Cafe',
      address: '123 Anywhere St',
      city: 'Anytown',
      state: 'NY',
      zipCode: '12345',
      category: 'Cafe',
      rating: 4.5,
      reviewCount: 12
    }
  ];

  return (
    <div className="app">
      {restauranteData.map((restaurant, index) => (
        <Business key={index} {...restaurant} />
      ))}
    </div>
  );
}

export default App;
