import { motion } from 'framer-motion';
import chainLeft from '../assets/decor/chain.gif';
import chainRight from '../assets/decor/chain.gif';
import moon from '../assets/decor/moon.webp';
import roses from '../assets/decor/roses.png';
import jesterLeft from '../assets/decor/jester2_left.png';
import jesterRight from '../assets/decor/jester2_right.png';
import candelebra from '../assets/decor/candelebra.gif';

export const ChainBorders = () => {
  return (
    <>
      {/* Left Chain Border */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <motion.div
          className="w-8 h-full"
          style={{
            backgroundImage: `url(${chainLeft})`,
            backgroundRepeat: 'repeat-y',
            backgroundSize: 'contain',
          }}
          animate={{ opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Right Chain Border */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <motion.div
          className="w-8 h-full"
          style={{
            backgroundImage: `url(${chainRight})`,
            backgroundRepeat: 'repeat-y',
            backgroundSize: 'contain',
          }}
          animate={{ opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>
    </>
  );
};

export const MoonBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 opacity-20"
        style={{
          backgroundImage: `url(${moon})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </div>
  );
};

export const RosesDecor = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Bottom Left Roses */}
      <motion.div
        className="absolute bottom-0 left-0 w-48 h-48 opacity-30"
        style={{
          backgroundImage: `url(${roses})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        animate={{ rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      {/* Top Right Roses */}
      <motion.div
        className="absolute top-0 right-0 w-48 h-48 opacity-30 scale-x-[-1]"
        style={{
          backgroundImage: `url(${roses})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        animate={{ rotate: [0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />
    </div>
  );
};

export const DancingJesters = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Left Jester */}
      <motion.div
        className="absolute bottom-32 left-12 w-24 h-24"
        style={{
          backgroundImage: `url(${jesterLeft})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      {/* Right Jester */}
      <motion.div
        className="absolute bottom-32 right-12 w-24 h-24"
        style={{
          backgroundImage: `url(${jesterRight})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />
    </div>
  );
};

export const CandelebraDecor = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Candelebra - positioned in a corner */}
      <motion.div
        className="absolute top-1/3 left-20 w-16 h-16 opacity-40"
        style={{
          backgroundImage: `url(${candelebra})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </div>
  );
};