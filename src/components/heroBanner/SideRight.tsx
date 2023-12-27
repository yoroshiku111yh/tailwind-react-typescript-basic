import heroBannerImg from '../../assets/images/hero-banner-img.png';


function HeroBannerSideRight() {
    return (
        <div className='lg:mt-[60px] mt-3 basis-auto'>
            <img src={heroBannerImg} className=' 2xl:w-full lg:w-[90%] max-w-[100%] object-contain lg:max-w-[634px] aspect-[634/531]' />
        </div>
    )
}

export default HeroBannerSideRight;