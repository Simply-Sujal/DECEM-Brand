import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const ItemsInfo = () => {
    const [selectedOption, setSelectedOption] = useState(1);

    const [isOpen, setIsOpen] = useState({
        description: true,
        taste: false,
        serve: false,
    });

    const toggleAccordion = (section) => {
        setIsOpen((prevState) => ({
            description: section === 'description' ? !prevState.description : false,
            taste: section === 'taste' ? !prevState.taste : false,
            serve: section === 'serve' ? !prevState.serve : false,
        }));
    };

    const options = [
        { id: 1, img: ["src/assets/LD.jpg", "src/assets/LD12.jpg", "src/assets/LD13.jpg"], title: 'London Dry', made: 'made with British Gin', distilled: 'Distilled in England', vol: '10%vol / 700ml', description: "LONDON DRY is perfect for those who love a G&T. It's full of flavour but at 10% ABV it means you can enjoy the same ritual and taste but just with less alcohol. The unique combination of botanicals are steeped for 24 hours, then distilled, capturing the essential oils and big flavours. Before being masterfully blended with natural flavours to boost the character and provide a long refreshing finish at just 10%.", taste: "Upfront Juniper berry, authentic woody juniper with more of a floral berry coming through the mid palate, coriander seed in the middle, finishing with herbaceous backnotes.", serve: "Simply serve 50ml chilled over ice with 150ml premium Indian Tonic and a lemon slice. 2.3% ABV." }
        ,
        { id: 2, img: ["src/assets/SB1.jpg", "src/assets/SB2.jpg", "src/assets/SB3.jpg"], title: 'Spiced Blend', made: 'made with Caribbean Rum', distilled: 'Blended in England', vol: '10%vol / 700ml', description: "Blending a duo of light and white Caribbean rums from Martinique and Dominican Republic as the smooth base. Spices are then added and the mix is allowed to steep for 2 days to draw out all of the flavour before being filtered and masterfully blended with natural distillates to 10%ABV. The result is a buttery, caramel-forward, savoury and spicy light spirit with a big impact both on the nose and the taste buds.", taste: "Deep bonfire toffee, warming savoury spice, rounded honey sweetness, buttery caramel throughout with a hint of tropical fruit.", serve: "Simply serve 50ml chilled over ice with 150ml premium Ginger Ale and a lime wedge. 2.3% ABV." }
        ,
        { id: 3, img: ["src/assets/AS1.jpg", "src/assets/AS2.jpg", "src/assets/AS3.jpg"], title: 'Aperitif', made: 'made with Heritage Botanicals', distilled: 'Macerated in England', vol: '10%vol / 700ml', description: "Using a special combination of botanicals, from the hedgerow to the vegetable patch. Chosen to tickle the taste buds with interesting hints of approachable bitterness, but cleverly rounded off with the tart strawberry and sweet grape to create the most adult and uniquely moreish of aperitifs. We macerate the botanicals for 2 days to extract maximum flavour, before carefully blending with the real fruit juices to create this distinctly delicious flavour.", taste: "Complex woody and herbal, full bodied guelder rose with slight floral characters. Sweet grape and subtle strawberry.", serve: "Simply serve 50ml chilled over ice with 100ml English Sparkling Wine and a dash of premium soda. 10% ABV." }
        ,
        { id: 4, img: ["src/assets/TR1.jpg", "src/assets/TR2.jpg", "src/assets/TR3.jpg", "src/assets/TR4.jpg"], title: 'Trio', made: 'London Dry, Spiced Blend & Aperitif', distilled: 'Made in England', vol: '10%vol / 700ml x3', description: "The complete tasting set. Made up of LONDON DRY heavy with juniper but light with citrus, rounded off with a subtle woody undertone. SPICED BLEND using a duo of light and white Caribbean rums from Martinique and Dominican Republic as its smooth base packed full of buttery dark caramel and spices. APERITIF a special combination of botanicals, from the hedgerow to the vegetable carefully blended with the floral sweetness of Strawberries.", taste: "LONDON DRY Upfront Juniper berry, authentic woody juniper with more of a floral berry coming through the mid palate, coriander seed in the middle, finishing with woody spiced backnotes. SPICED BLEND Deep caramel, warming savoury spice, rounded honey sweetness, buttery throughout with a hint of tropical fruit. APERITIF Complex woody and herbal, full bodied guelder rose with slight floral characters. Sweet grape and subtle strawberry.", serve: "Simply serve 50ml LONDON DRY chilled over ice with 150ml premium Indian Tonic and a lemon slice / 50ml SPICED BLEND chilled over ice with 150ml premium Ginger Ale and a lime wedge / 50ml APERITIF chilled over ice with 100ml English Sparkling Wine and a dash of premium soda." },
    ];

    const handleOptionSelect = (optionId) => {
        setSelectedOption(optionId);
    };

    return (
        <div className='flex flex-col md:flex-row transform translate-y-2 transition-transform mx-auto h-auto md:h-screen'>
            <div className='w-[100%] md:w-[50%] transform translate-y-2 transition-transform relative py-10'>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {selectedOption !== null && options[selectedOption - 1].img.map((imgUrl, index) => (
                        <div className=''>
                            <SwiperSlide key={index}>
                                <img
                                    src={imgUrl}
                                    alt={`Image ${index + 1}`}
                                    className='mx-auto w-98 h-[450px] md:h-[600px] py-10 group-hover:scale-105 transition-transform'
                                />
                            </SwiperSlide>
                        </div>
                    ))}
                </Swiper>
            </div>


            <div className="w-[100%] md:w-[34%] mx-auto p-5 mt-5 md:mt-20 transform translate-y-2 transition-transform">
                <div className="space-y-2">
                    <div className=" border-b-[0px] md:border-b-[1px] border-[#45474B] pb-4 flex md:flex-row justify-between">
                        {options.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => handleOptionSelect(option.id)}
                                className={` ${selectedOption === option.id
                                    ? 'text-black border-b-[1px] border-black font-semibold'
                                    : 'text-black'
                                    }`}
                            >
                                {option.title}
                            </button>
                        ))}
                    </div>
                    {selectedOption !== null && (
                        <div className="w-full">
                            <h2 className="text-3xl font-normal">{options[selectedOption - 1].title} <br /><p className='text-2xl'>{options[selectedOption - 1].made}</p></h2>
                            <div className='flex justify-between pt-5'>
                                <h1 className='text-[20px]'>{options[selectedOption - 1].distilled}</h1>
                                <p className='text-[18px]'>{options[selectedOption - 1].vol}</p>
                            </div>
                            <button className='w-full rounded-full bg-black text-white hover:bg-blue-600 transition duration-150 ease-in-out py-2 mt-7 text-[20px]'>£29.95 — Add to Bag</button>
                            <h1 className='text-center my-2 text-blue-600 font-medium'>FREE UK DELIVERY</h1>

                            {/* ------ Accordion ----------  */}
                            <div className="p-2">
                                <div className="accordion">
                                    <div className="accordion-item border-[#45474B] border-t-2 py-1 border-b-2">
                                        <div
                                            className="accordion-header flex justify-between items-center"
                                            onClick={() => toggleAccordion('description')}
                                        >
                                            <h2 className="text-lg font-medium uppercase">Description</h2>
                                            <span className="toggle-icon text-4xl pb-2">
                                                {isOpen.description ? '-' : '+'}
                                            </span>
                                        </div>
                                        <div
                                            className={`accordion-content overflow-hidden transition-max-h-0 transition-all duration-500 ease-in-out ${isOpen.description ? 'max-h-[500px]' : 'max-h-0 p-0'}`}
                                        >
                                            <p>{options[selectedOption - 1].description}</p>
                                        </div>
                                    </div>

                                    <div className="accordion-item py-1 border-[#45474B] border-b-2">
                                        <div
                                            className="accordion-header flex justify-between items-center"
                                            onClick={() => toggleAccordion('taste')}
                                        >
                                            <h2 className="text-lg font-medium uppercase">Taste</h2>
                                            <span className="toggle-icon text-4xl pb-2">{isOpen.taste ? '-' : '+'}</span>
                                        </div>
                                        <div
                                            className={`accordion-content overflow-hidden transition-max-h-0 transition-all duration-300 ease-in-out ${isOpen.taste ? 'max-h-[500px]' : 'max-h-0 p-0'}`}
                                        >
                                            <p>{options[selectedOption - 1].taste}</p>
                                        </div>
                                    </div>

                                    <div className="accordion-item py-1 border-[#45474B] border-b-2">
                                        <div
                                            className="accordion-header flex justify-between items-center"
                                            onClick={() => toggleAccordion('serve')}
                                        >
                                            <h2 className="text-lg font-medium uppercase">Serve</h2>
                                            <span className="toggle-icon text-4xl pb-2">{isOpen.serve ? '-' : '+'}</span>
                                        </div>
                                        <div
                                            className={`accordion-content overflow-hidden transition-max-h-0 transition-all duration-300 ease-in-out ${isOpen.serve ? 'max-h-[500px]' : 'max-h-0 p-0'}`}
                                        >
                                            <p>{options[selectedOption - 1].serve}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default ItemsInfo;
