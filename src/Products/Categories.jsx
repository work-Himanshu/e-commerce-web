import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function Categories() {
  const [hero, setHero] = useState(null);
  const location = useLocation();

  useEffect(() => {
    dataFetcher();
  }, [location.pathname]);

  const dataFetcher = async () => {
    try {
      let query = 'Male Jackets';

      switch (location.pathname.split('/')[2]) {
        case 'men':
          query = 'men jackets fashion';
          break;

        case 'women':
          query = 'women jackets fashion';
          break;

        case 'sneakers':
          query = 'sneakers footwear shoes';
          break;
      }

      const res = await axios.get('https://api.pexels.com/v1/search', {
        params: { query: query, per_page: 1 },
        headers: {
          Authorization:
            'zEg8HUKQJWRvqWFCZP4RRT8tL5iSrWpR4pzDi3DlIneQ0Z2BRXdKAh6l',
        },
      });

      setHero(res.data.photos[0]);
    } catch (err) {
      console.log(err);
    }
  };

  if (!hero)
    return (
      <Card className="p-4">
        <p>Loading...</p>
      </Card>
    );

  return (
    <div className="p-4">
      <Card>
        <CardContent>
          {/* 2×2 Grid */}
          <div className="grid grid-cols-2 gap-4">
            <CardMedia
              className="h-48 w-full rounded-lg object-cover"
              image={hero.src.large}
              title={hero.photographer}
            />

            <CardMedia
              className="h-48 w-full rounded-lg object-cover"
              image={hero.src.large}
              title={hero.photographer}
            />

            <CardMedia
              className="h-48 w-full rounded-lg object-cover"
              image={hero.src.large}
              title={hero.photographer}
            />

            <CardMedia
              className="h-48 w-full rounded-lg object-cover"
              image={hero.src.large}
              title={hero.photographer}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
