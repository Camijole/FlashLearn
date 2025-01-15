
import '../styling/banner.css';

interface BannerProps {
  children: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <div className="banner">
      <h1 className="logo">{children}</h1>
    </div>
  );
};

export default Banner;
