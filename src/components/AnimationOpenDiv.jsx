import { motion } from 'framer-motion';


function AnimationOpenDiv ({content: Component, classname, classNameTitle, classNameParagraph, classnameSubtitle, classnameBoxCard_box,classnameBoxCard, classnameBoxCardCard, classnameImageCard, classnameModal, classnameImageModal, classnamebox, email, classnameIcon, classnameEmail}){


    return (
            <motion.div
              initial={{ opacity: 0, scaleY: 0, scaleX: 0, position: "absolute", bottom: "-36.8vw"  }}
              animate={{ opacity: 1, scaleY: 1, scaleX:1, position: "relative", bottom: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Component 
              classname={classname} 
              classNameTitle={classNameTitle} 
              classNameParagraph={classNameParagraph} 
              classnameSubtitle={classnameSubtitle} 
              classnameBoxCard_box={classnameBoxCard_box} 
              classnameBoxCard={classnameBoxCard} 
              classnameBoxCardCard={classnameBoxCardCard} 
              classnameImageCard={classnameImageCard} 
              classnameModal={classnameModal} 
              classnameImageModal={classnameImageModal} 
              classnamebox={classnamebox} 
              email={email}
              classnameIcon={classnameIcon}
              classnameEmail={classnameEmail}
              />
            </motion.div>
          
    )
}

export default AnimationOpenDiv;