import React, { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { MantineProvider } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";

import Gambar1 from "../../../../public/asset/image/dashboard.png";
import Gambar2 from "../../../../public/asset/image/dashboard2.png";

const Hero = () => {
    const autoplay = useRef(Autoplay({ delay: 2000 }));

    return (
        <MantineProvider>
            <div className="">
                <Carousel
                    withIndicators
                    // height={{ base: 520 }}
                    slideSize="70%"
                    slideGap="xs"
                    controlSize={25}
                    loop
                    withControls={false}
                    plugins={[autoplay.current]}
                >
                    <Carousel.Slide>
                        <img src={Gambar1} alt="" />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <img src={Gambar2} alt="" />
                    </Carousel.Slide>
                </Carousel>
            </div>
        </MantineProvider>
    );
};

export default Hero;
