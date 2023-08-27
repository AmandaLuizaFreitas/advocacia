
import { features } from "../../constants";
import styles,{layout} from "../../style";
import Button from "../Button/Button";


const FeatureCard =({icon,title,content,index})=>{
  return(

  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length -1 ? 'mb-6':'mb-0' } feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimYellow`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%]object-contain"/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
     <h4 className="font-poppins font-semibold text- dimBlue text-[18px] leading-[23px] mb-1">{title}</h4>
     <p className="font-poppins font-normal text- dimBlue text-[16px] leading-[24px] mb-1">{content}</p>
    </div>
  </div>
  )

}


const Business = () => {
  return (
    <section id="features" className={layout.section}>
     <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Nosso história </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
      Somos um escritório jurídico altamente qualificado, com profunda expertise abrangendo diversas áreas do Direito.Acumulamos 20 anos de sólida experiência. Nossa equipe é composta por advogados especializados nas vertentes que abraçamos, 
      </p>
      <Button styles= "mt-10 "/>
     </div>
     <div className={`${layout.sectionImg} flex-col text-dimBlue `}>
        {features.map((feature,index)=>(
          <FeatureCard key={feature.id} {...feature} index={index}  />
        ))}
     </div>
    </section>
  )
}

export default Business