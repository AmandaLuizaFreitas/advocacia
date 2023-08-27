import styles from "../../style";
import{jusc} from '../../assets/index';
import GetStarted from "../GetStarted/GetStarted";

const Hero = () => 
  (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl: px-0 sm:px-16 px-6 `}>
       
       
       <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins  font-semibold ss:text-[62px] text-[42px] text-dimBlue ">Escritório de   <br className="sm:block hidden ss:leading-[100px] leading-[72px]"/>{""}  
        Advocacia
        <br className="sm:block hidden"/>
        <span className="text-gradient"> LexJuris</span>
     
         </h1>
         <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted/>
         </div>
       </div>
       
       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Assegure a defesa dos seus direitos legais.
        Conta com uma equipe de profissionais altamente especializados em áreas como Direito de Família, Direito do Consumidor, Direito Criminal e Direito Trabalhista.
</p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={jusc} alt="cobrança" className="w-[100%] h-[100%] relative z-[5] "  />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
      <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full"/>
      <div className="absolute z-[0] w-[50%] h-[50%]  right-20  bottom-20 blue__gradient"/>
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
    <GetStarted/>
    </div>
    </section>
  )


export default Hero