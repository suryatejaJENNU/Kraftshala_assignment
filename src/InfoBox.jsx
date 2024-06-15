import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css';

const InfoBox = ({ info }) => {
  const { city, temp, tempMin, tempMax, humidity, feelsLike, weather } = info;

  const getCurrentDateTime = () => {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return now.toLocaleDateString('en-US', options);
  };

  const getImageUrl = () => {
    if (weather.includes('rain')) {
      return "https://images.unsplash.com/photo-1618557703025-7ec58c83581a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    } else if (temp > 15) {
      return "https://images.unsplash.com/photo-1577985759186-0854dfd3f218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SE9UJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    } else {
      return "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    }
  };

  const getWeatherIcon = () => {
    if (weather.includes('thunderstorm')) {
      return <ThunderstormIcon />;
    } else if (weather.includes('clear') || weather.includes('sunny')) {
      return <WbSunnyIcon />;
    } else {
      return <AcUnitIcon />;
    }
  };

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={getImageUrl()}
            title="Weather Image"
            alt="Weather Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {city} {getWeatherIcon()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div>Date and Time: {getCurrentDateTime()}</div>
              <div>Temperature: {temp}&deg;C</div>
              <div>Humidity: {humidity}%</div>
              <div>Max Temperature: {tempMax}&deg;C</div>
              <div>Min Temperature: {tempMin}&deg;C</div>
              <div>The Weather can be described as <i>{weather}</i> and Feels Like: {feelsLike}&deg;C</div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoBox;
