
import icoCheck from '../../assets/images/ico-check-white.png';
import icoPlay from '../../assets/images/ico-play-orange.png';


const listPros: string[] = [
    "Free Register",
    "Great Service",
    "Easy Payment",
];

function HeroBannerSideLeft() {
    const prosListItem = listPros.map((item, index) => (
        <div className='flex gap-2 lg:text-base text-xs justify-center items-center' key={index}>
            <div className='ico-2'><img src={icoCheck} /></div>
            <p>{item}</p>
        </div>
    ))
    return (
        <div className='lg:pr-8 basis-auto lg:mt-0 mt-20'>
            <div className='inline-flex gap-3 items-center p-5 rounded-[20px] bg-white/40 '>
                {prosListItem}
            </div>
            <h2 className='headline text-left font-light 2xl:text-[70px] xl:text-[55px] lg:text-[40px] text-[28px] mb-2 mt-3 leading-tight'>
                Getting the best and<br /> latest style has never
            </h2>
            <b className='text-blue-1000 font-extrabold 2xl:text-[70px] xl:text-[55px] lg:text-[40px] lg:text-[28px] mb-2 block'>been easier!</b>
            <p className='xl:text-2xl lg:text-lg text-base max-w-[90%] text-gray-700 leading-tight'>
                <b>FashionForAll</b> is a platform that helps to make fashion accessible to all.<br/> It brings fashion to your doorstep!
            </p>
            <div className='mt-11 flex lg:flex-row flex-col-reverse lg:items-center items-start justify-start gap-7'>
                <a href="/" className='btn rounded-[10px]'>Shop collections</a>
                <a href='/' className='flex items-center gap-3'>
                    <img src={icoPlay} />
                    <p className='text-blue-1000 text-[17px] font-medium'>Watch reviews</p>
                </a>
            </div>
        </div>
    )
}

export default HeroBannerSideLeft;

