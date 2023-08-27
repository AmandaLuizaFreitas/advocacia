import{escritorio} from '../../assets'
import styles,{layout} from '../../style';
import Button from '../Button/Button';

const CardDeal = () => {
  return (
  <section  className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Nosso Escritório</h2>
      
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Escolha do cartão ideal é uma decisão crucial para o seu estilo de vida financeiro. É por isso que estamos comprometidos em tornar essa jornada fácil, rápida e recompensadora para você.</p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Nossos valores fundamentais são a ética e o respeito pelas bases dos direitos e garantias. Somos incansáveis na defesa dos interesses de nossos clientes, empregando nossa habilidade e competência distintas para aplicar técnicas jurídicas e legais com o objetivo constante de alcançar o sucesso nas demandas.</p>
    <Button styles="mt-10"/>
    </div>
    <div className={layout.sectionImg}>
      <img src={escritorio} alt=" cartão" className='w-[100%] h-[100%]' />
    </div>
  </section>
  )
}

export default CardDeal