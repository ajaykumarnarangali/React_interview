import { useEffect, useState } from 'react'
import Image_1 from '../../public/image_1.jpeg'
import Image_2 from '../../public/image_2.jpg'
import Image_3 from '../../public/image_3.jpg'
import Image_4 from '../../public/image_4.avif'
import Image_5 from '../../public/image_5.avif'


function ImageCarousel() {

    const ImageArray = [Image_1, Image_2, Image_3, Image_4, Image_5];
    const [currentImage, setCurrentImage] = useState(0);
    const Total_Images = ImageArray.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => {
                return (prev + 1) % Total_Images
            })
        }, 2000);
        return () => {
            clearInterval(interval);
        }
    }, [])

    const handleRight = () => {
        setCurrentImage(prev => {
            return (prev + 1) % Total_Images
        })
    }

    const handleLeft = () => {
        setCurrentImage(prev => {
            return prev == 0 ? Total_Images-1 : prev - 1;
        })
    }

    return (
        <div className="w-full h-screen bg-green-200 flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-white h-1/2 p-3 flex flex-col relative">
                <div className="w-full flex-1 bg-red-200 flex overflow-hidden">
                    {ImageArray.map((image, ind) => {
                        return <img key={ind} src={image} className={`w-full h-full translate-x-[-${currentImage * 100}%]`} />
                    })}
                </div>
                <div className="flex gap-3 items-center justify-center pt-2 cursor-pointer">
                    {ImageArray.map((_, i) => {
                        return <div key={i} className={`h-3 w-3 rounded-full ${currentImage == i ? 'bg-black' : 'bg-slate-300'}`}
                            onClick={() => { setCurrentImage(i) }}>
                        </div>
                    })}
                </div>
                <button
                    aria-label="Previous Slide"
                    className="absolute top-1/2 -translate-y-1/2 left-2 z-10 
             text-white bg-black/30 hover:bg-black/50 
             rounded-full w-10 h-10 flex items-center justify-center 
             transition-colors duration-300 shadow-md backdrop-blur"
                    onClick={handleLeft}
                >
                    ‹
                </button>
                <button
                    aria-label="Next Slide"
                    className="absolute top-1/2 -translate-y-1/2 right-2 z-10 
                    text-white bg-black/30 hover:bg-black/50 
                    rounded-full w-10 h-10 flex items-center justify-center 
                    transition-colors duration-300 shadow-md backdrop-blur"
                    onClick={handleRight}
                >
                    ›
                </button>
            </div>
        </div>
    )
}

export default ImageCarousel