import React from "react";

const About = () => {
    return (
        <div className="h-full flex  items-center">
            {/* screen >=sm */}
            <div className="h-[95%] hidden sm:flex w-full flex-row items-center bg-blue-600">
                <div
                    className="caps  h-[105%] px-16 py-10 w-full relative z-5 bg-[#278645] text-white "
                    style={{
                        clipPath: "polygon(0 0, 75% 0, 50% 100%, 0 100%)",
                    }}
                >
                    <div className="caption w-[70%]  ">
                        <div className="title font-bold text-2xl font-open pb-2 px-3 border-b border-white">
                            LABORATORIUM PRODI S1 ADMINISTRASI KESEHATAN
                        </div>
                        <div className="desc mt-5 mr-36">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iure eos natus inventore perspiciatis, dolor,
                            delectus voluptatem dolorem quae omnis asperiores
                            minima exercitationem eaque aperiam perferendis
                            quaerat animi a nulla. Quam sint laboriosam
                            recusandae, esse tenetur distinctio inventore
                            nostrum ab dignissimos, non ducimus nobis! Nesciunt
                            perferendis ea ullam temporibus illum vero labore
                            alias sequi. Harum maiores excepturi repellendus,
                            omnis beatae nam, illo incidunt molestiae quis,
                            reprehenderit deleniti dignissimos earum ipsam
                            nesciunt ipsa fugit inventore est ea. Cum tempore
                            amet, architecto perspiciatis itaque, neque minima
                            vel voluptatum laudantium repudiandae repellat, iste
                            quidem? Voluptate illum pariatur exercitationem quae
                            quaerat, in quod eligendi quos iure quidem
                            distinctio illo magni perspiciatis sit facilis nemo
                            blanditiis sunt neque rerum ut ullam soluta ad quia!
                            Cum aliquam commodi neque nisi veniam. Soluta
                            recusandae, eum commodi, at illo quas consequatur
                            tenetur, quo similique accusantium tempora sed
                            aperiam quos culpa tempore. Iste, fuga vel dolorum
                            ut eveniet voluptates necessitatibus.
                        </div>
                    </div>
                </div>
            </div>

            {/* anddroid screen */}
            <div className="sm:hidden flex flex-col h-full w-full px-3 py-5 text-white bg-[#278645]">
                <div className="title font-bold text-2xl text-center font-open pb-2 px-3 border-b border-white">
                    LABORATORIUM PRODI S1 ADMINISTRASI KESEHATAN
                </div>
                <div className="desc text-justify mt-3 overflow-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure eos natus inventore perspiciatis, dolor, delectus
                    voluptatem dolorem quae omnis asperiores minima
                    exercitationem eaque aperiam perferendis quaerat animi a
                    nulla. Quam sint laboriosam recusandae, esse tenetur
                    distinctio inventore nostrum ab dignissimos, non ducimus
                    nobis! Nesciunt perferendis ea ullam temporibus illum vero
                    labore alias sequi. Harum maiores excepturi repellendus,
                    omnis beatae nam, illo incidunt molestiae quis,
                    reprehenderit deleniti dignissimos earum ipsam nesciunt ipsa
                    fugit inventore est ea. Cum tempore amet, architecto
                    perspiciatis itaque, neque minima vel voluptatum laudantium
                    repudiandae repellat, iste quidem? Voluptate illum pariatur
                    exercitationem quae quaerat, in quod eligendi quos iure
                    quidem distinctio illo magni perspiciatis sit facilis nemo
                    blanditiis sunt neque rerum ut ullam soluta ad quia! Cum
                    aliquam commodi neque nisi veniam. Soluta recusandae, eum
                    commodi, at illo quas consequatur tenetur, quo similique
                    accusantium tempora sed aperiam quos culpa tempore. Iste,
                    fuga vel dolorum ut eveniet voluptates necessitatibus.
                </div>
            </div>
        </div>
    );
};

export default About;
