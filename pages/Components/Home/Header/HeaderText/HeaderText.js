import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
    "با کیفیت ترین اجناس ایران",
    "پر تنوع ترین لباس های بازار",
    "برند های اصیل و اورجینال",
    "لباس هایی خوش رنگ و ضمانت دار"
];

const HeaderText = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
                setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <h3 className=" text-center">
            <TextTransition
                data-headerTitr="null"
                text={ TEXTS[index % TEXTS.length] }
                springConfig={ presets.wobbly }
            />
        </h3>
    );
};

export default HeaderText