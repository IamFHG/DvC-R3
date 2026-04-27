// Import necessary dependencies
import heroBg from './HeroHD.png';

function Hero() {
  return (
    <div style={{ backgroundImage: `url(${heroBg})` }}>
      <h1>Welcome to Our Site</h1>
    </div>
  );
}

export default Hero;