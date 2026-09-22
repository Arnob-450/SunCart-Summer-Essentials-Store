import { GiSunglasses, GiPalmTree } from 'react-icons/gi';
import { FaLeaf, FaWater } from 'react-icons/fa';

const brands = [
  {
    name: 'SunShade',
    icon: <GiSunglasses />,
    bg: 'bg-violet-100',
    text: 'text-violet-700',
  },
  {
    name: 'GlowSkin',
    icon: <FaLeaf />,
    bg: 'bg-emerald-100',
    text: 'text-emerald-700',
  },
  {
    name: 'BeachVibe',
    icon: <FaWater />,
    bg: 'bg-sky-100',
    text: 'text-sky-700',
  },
  {
    name: 'AquaLife',
    icon: <GiPalmTree />,
    bg: 'bg-orange-100',
    text: 'text-orange-600',
  },
];

const TopBrands = () => {
  return (
    <div className='h-full min-w-2xl '>
      <div className='border-l-4 border-orange-500 pl-3 mb-6'>
        <h2 className='text-2xl font-bold text-teal-950'>Top Brands</h2>
        <p className='text-teal-700 font-medium text-sm'>
          Shop from your favorite summer brands.
        </p>
      </div>

      <div className='grid grid-cols-4 gap-4'>
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center gap-3 rounded-2xl py-8 ${brand.bg} cursor-pointer hover:scale-105 transition-transform`}
          >
            <span className={`text-3xl ${brand.text}`}>{brand.icon}</span>
            <span className={`font-semibold text-sm ${brand.text}`}>{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;