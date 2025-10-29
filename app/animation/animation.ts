import { Variants } from "motion";

export const HeroVariants: Variants= {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};



export const StripParentVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: 'easeInOut',
            delayChildren: 0.4,
            staggerChildren: 0.8
        }
    }
};

export const StripChildVariants: Variants = {
    hidden: { opacity: 0, x:50  }, 
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
};



export const ZoomInOutVariant: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [-1, 1.06, 1],
    transition: {
      duration: 2.4, 
      ease: [0.45, 0, 0.55, 1], 
      repeat: Infinity,
      repeatType: "mirror", 
    },
  },
};