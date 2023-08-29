import { feedback } from "../../constants";
import styles from "../../style";
import FeedbackCard from "../FeedbackCard/FeedbackCard";

const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
     
  
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative  z-[1] ">
      <h1 className={styles.heading2}>O que as pessoas estão <br className="sm:block hidden"/> dizendo sobre nós</h1>
      <div className="w-full md:mt-0 mt-6">
         <p className={`${styles.paragraph} text-left max-w-[450px]`}>Seu sucesso é a nossa prioridade, e sua justiça é nossa missão.</p>
      </div>
    </div>
    <div className="flex flex-wrap sm:justify-start  justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card)=>(
       <FeedbackCard key={card.id} {...card}/>
      ))}  
    </div>
    </section>
  )
}

export default Testimonials