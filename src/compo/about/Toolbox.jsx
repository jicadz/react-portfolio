import html from "../../assets/html-5.png"
import css from "../../assets/css-3.png"
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

const Toolbox  = () => {

    return(
        <div className="flex flex-wrap gap-[1rem] lg:ml-[5rem]">
            <BackgroundGradient children={
                <div className="flex flex-col gap-[1rem] items-center">
                    <div className="icon-box flex items-center gap-[1rem]">
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                    </div>
                    <p>HTML & CSS</p>
                    <p className="text-center">HTML defines the structure of a webpage, and CSS controls its visual style.</p>
                </div>
            } className={'max-w-[250px] max-h-[300px] p-[1rem] font-mont'}/>
            
        </div>
    );

}

export default Toolbox;