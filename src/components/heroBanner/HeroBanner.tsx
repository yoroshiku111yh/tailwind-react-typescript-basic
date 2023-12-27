import heroBannerImg from '../../assets/images/hero-banner-bg.jpg';
import HeroBannerSideRight from './SideRight';
import HeroBannerSideLeft from './SideLeft';



function HeroBanner() {

    return (
        <section className="relative lg:px-0 px-[15px]">
            <img src={heroBannerImg} alt='top banner' className='lg:relative absolute left-0 right-0 w-full lg:h-auto h-full object-cover' />
            <div className='lg:absolute relative lg:pt-36 pt-20 pb-10 top-0 left-0 right-0 bottom-0'>
                <div className='flex lg:flex-row flex-col-reverse container relative mx-auto'>
                    <HeroBannerSideLeft />
                    <HeroBannerSideRight />
                </div>
            </div>
        </section>
    )
}


export default HeroBanner