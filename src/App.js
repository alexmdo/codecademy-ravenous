import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

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
    },
    {
      image: 'sample.jpg',
      name: 'Sample Restaurant',
      address: '456 Main St',
      city: 'Sometown',
      state: 'CA',
      zipCode: '54321',
      category: 'Restaurant',
      rating: 3.5,
      reviewCount: 24,
    }
  ];

  return (
    <div className="app">
      <SearchBar />
      <BusinessList businesses={restauranteData} />
    </div>
  );
}

export default App;
