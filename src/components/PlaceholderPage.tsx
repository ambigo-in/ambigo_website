import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage = ({ title }: PlaceholderPageProps) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white py-24 px-4 text-center">
      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8">
        <span className="text-4xl text-primary">🚧</span>
      </div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{title}</h1>
      <p className="text-xl text-gray-500 mb-8 max-w-2xl">
        This page is currently under construction. Check back soon for updates!
      </p>
      <Link to="/" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors">
        Back to Home
      </Link>
    </div>
  );
};

export default PlaceholderPage;
