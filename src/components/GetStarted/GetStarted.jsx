import styles from '../../style';
import { arrowUp } from '../../assets';

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[160px] h-[160px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>Consultoria</span>
          </p>
            <img src={arrowUp } alt="seta" className='w-[23px h-[23px] object-contain' />
        </div>
      </div>
     
    </div>
  )
}

export default GetStarted