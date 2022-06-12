import React from 'react'
import {motion} from "framer-motion"
import {ModalLoader} from "./loaderComponents"
function Loader({bg}) {

    const loaderVariants = {
        animationOne: {
            x: [ -20, 20 ],
            y: [ 0, -30 ],
            transition: {
                x: {

                    yoyo: Infinity,
                    duration: 0.5

                },
                y: {
                    ease:"easeOut",
                    yoyo: Infinity,
                    duration: 0.25
                },
            }
        }
    }
  return (
    <ModalLoader bg={bg}>
        <motion.div className='loader'
        variants={loaderVariants}
        animate={"animationOne"}
        >

        </motion.div>
    </ModalLoader>
  )
}

export default Loader