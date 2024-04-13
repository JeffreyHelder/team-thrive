'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const FramerTest = () => {
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </motion.div>
        </AnimatePresence>
    );
};

export default FramerTest;
