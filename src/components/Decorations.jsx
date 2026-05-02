import { motion } from 'framer-motion';
import chainLeft from '../assets/decor/chain.gif';
import chainRight from '../assets/decor/chain.gif';
import moon from '../assets/decor/moon.webp';
import roses from '../assets/decor/roses.png';
import candelebra from '../assets/decor/candelebra.gif';

export const ChainBorders = () => {
  return (
    <>
      {/* Left Chain Border */}
      <div className="fixed left-4 top-0 bottom-0 z-0 pointer-events-none">
        <motion.div
          className="w-16 h-full"
          style={{
            backgroundImage: `url(${chainLeft})`,
            backgroundRepeat: 'repeat-y',
            backgroundSize: 'contain',
          }}
          animate={{ opacity: [0.9, 3, 0.9] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Right Chain Border */}
      <div className="fixed right-4 top-0 bottom-0 z-0 pointer-events-none">
        <motion.div
          className="w-16 h-full"
          style={{
            backgroundImage: `url(${chainRight})`,
            backgroundRepeat: 'repeat-y',
            backgroundSize: 'contain',
          }}
          animate={{ opacity: [0.9, 3, 0.9] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </div>
    </>
  );
};

export const MoonBackground = () => {
  return (
    <div className="fixed inset-0 z-1 pointer-events-none">
      <motion.div
        className="absolute top-20 right-32 w-96 h-96 opacity-70"
        style={{
          backgroundImage: `url(${moon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        animate={{
          y: [0, -40, 0],
          rotate: [0, 15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export const RosesDecor = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Bottom Left Roses */}
      <motion.div
        className="absolute bottom-1 left-0 w-64 h-64 opacity-90"
        style={{
          backgroundImage: `url(${roses})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      {/* Top Right Roses */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 opacity-40 scale-x-[-1]"
        style={{
          backgroundImage: `url(${roses})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        animate={{ rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />
    </div>
  );
};

export const CandelebraDecor = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Candelebra - Floating with motion */}
      <motion.div
        className="absolute top-1/3 left-24 w-32 h-32 opacity-70"
        style={{
          backgroundImage: `url(${candelebra})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        animate={{
          y: [0, -20, 0, -15, 0],
          x: [0, 10, 0, -10, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};