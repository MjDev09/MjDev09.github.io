import { motion } from 'framer-motion';

function ButtonIcon({icon: IconComponent, className ='taskbar__button', onClick}){
    
    
    return (
        
        <button  className={className} onClick={onClick}>
             <motion.div
        animate={{
          color: ['#0e2b07', '#0c8d37','#0e2b07' ]
        }}
        transition={{
          duration: 8,
          repeat: 3
          
        }}
        
      >
        <IconComponent />
      </motion.div>
            
        </button>
    )
};

export default ButtonIcon;