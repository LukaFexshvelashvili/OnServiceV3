import { motion, AnimatePresence } from "motion/react";

const Loader = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-main z-50 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div className="os_loader"></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
