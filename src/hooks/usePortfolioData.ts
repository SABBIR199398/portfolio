import { useQuery } from 'react-query';

const fetchPortfolioData = async () => {
  const response = await fetch('https://api.example.com/portfolio'); // Replace with your API endpoint
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const usePortfolioData = () => {
  return useQuery('portfolioData', fetchPortfolioData);
};

export default usePortfolioData;