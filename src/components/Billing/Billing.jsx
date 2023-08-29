
import{advogados} from '../../assets';
import styles,{layout} from '../../style';

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
     <div className={layout.sectionImgReverse}>
      <img src={advogados} alt="Cobrança" className='w-[100%] h-[100%] relative z-[5]' />
      <div className='absolute z-[3] top-0 -left-1/2 w-[50%] h-[50%] rounded-full white__gradient'/>
      <div className='absolute z-[0] bottom-0 -left-1/2 w-[50%] h-[50%] rounded-full pink__gradient'/>
     </div>
     <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Nosso Time de Advogados  </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Permitindo-nos assegurar resultados superiores com agilidade, responsabilidade e sólidos princípios éticos. Nossa dedicação a um atendimento de excelência reflete nosso compromisso inabalável com a satisfação dos clientes que confiam em nossos serviços.</p>
     
     </div>
    </section>
  )
}

export default Billing