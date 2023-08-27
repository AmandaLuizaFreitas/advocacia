import styles from "../../style";
import Button from "../Button/Button";


const Cta = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div  className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2} text-white`}>Somos um renomado escritório LexJuris</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>Em cada uma dessas esferas de atuação nosso objetivo primordial é oferecer serviços jurídicos de excelência técnica</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button/>
      </div>
    </section>
  )
}

export default Cta