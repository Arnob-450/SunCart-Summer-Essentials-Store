import { FaArrowRightLong } from 'react-icons/fa6';
import { WiDaySunny } from 'react-icons/wi';
import { FaTint, FaLeaf, FaAppleAlt } from 'react-icons/fa';
import { GiPalmTree } from 'react-icons/gi';

const tips = [
  {
    icon: <FaTint className='text-teal-700' />,
    title: 'Stay Hydrated',
    desc: 'Drink plenty of water',
  },
  {
    icon: <FaLeaf className='text-teal-700' />,
    title: 'Use Sunscreen',
    desc: 'Protect your skin',
  },
  {
    icon: <FaAppleAlt className='text-teal-700' />,
    title: 'Eat Fresh',
    desc: 'More fruits & veggies',
  },
];

const SummerCareTips = () => {
  return (
    <div className='relative overflow-hidden rounded-2xl bg-teal-50/70 p-8 h-full min-w-2xl'>
      <GiPalmTree className='absolute -top-2 right-4 text-teal-800/20 text-8xl rotate-12' />
      <div className='relative flex items-start gap-4'>
        <div className='flex flex-col'>
          <div className='flex items-center gap-2 mb-2'>
            <WiDaySunny className='text-yellow-500 text-3xl' />
            <h2 className='text-2xl font-bold text-teal-950'>Summer Care Tips</h2>
          </div>

          <p className='text-teal-800 font-medium max-w-xs'>
            Keep your skin fresh, hydrated and healthy this summer.
          </p>

          <button className='btn btn-outline rounded-full border-teal-900 text-teal-900 hover:bg-teal-900 hover:text-white gap-2 w-fit mt-4'>
            Read Tips <FaArrowRightLong />
          </button>
        </div>

        <div className='flex flex-col gap-4 ml-6'>
          {tips.map((tip, idx) => (
            <div key={idx} className='flex items-center gap-3'>
              <div className='w-9 h-9 rounded-full bg-teal-100 flex items-center justify-center shrink-0'>
                {tip.icon}
              </div>
              <div>
                <p className='font-semibold text-teal-950 text-sm'>{tip.title}</p>
                <p className='text-teal-700 text-xs'>{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummerCareTips;