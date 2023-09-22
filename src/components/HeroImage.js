import Image from 'react-bootstrap/Image';
import hero from '../images/hero-img.jpg'

function HeroImage() {
  return (
    <div className='heroImage-wrapper'>
     <Image src={hero} fluid className='heroImage'/>
    </div>
  )
}

export default HeroImage;