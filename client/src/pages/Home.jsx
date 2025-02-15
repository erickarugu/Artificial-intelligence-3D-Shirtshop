import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from '../components';

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'


const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
          <motion.section className="home" {...slideAnimation ('left')}>
            <motion.header {...slideAnimation('down')}>
              <img
                  src='./threejs.png'
                  alt='logo'
                  className='w-8 h-8 object-contain'
              />
            </motion.header>

            <motion.div className='home-content' {...headContainerAnimation}>
              
              <motion.div>
                <h1 className='head-text'>
                  MAKE <br className='xl:block hidden' /> IT HAPPEN.
                </h1>
              </motion.div>

              <motion.div
                {...headContentAnimation}
                className='flex flex-col gap-5'
              >
                <p className='max-w-md font-normal text-white-600 text-base'>
                Design your own one-of-a-kind shirt with our revolutionary 3D customization tool. 
                <strong><i> Let your creativity run wild </i></strong> and express your unique style.
                </p>
                    
                 <CustomButton
                    type='filled'
                    title='Customize It'
                    handleClick={() => state.intro = false}
                    customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                 />

              </motion.div>

            </motion.div>

              </motion.section>
)}
    </AnimatePresence>
  )
}

export default Home;