import Lens from "../../components/ui/Lens"

const Skills = () => {

    return(
        <div className="flex flex-col items-center gap-[1rem] mt-[1rem] lg:flex-row lg:text-left lg:items-start lg:gap-[3rem]">
            <h1 className="font-bgs text-[2.1rem] md:text-[3.5rem] lg:text-[3rem] lg:w-[220px]">Skills</h1>
            <div className="flex flex-col items-center gap-[1rem] mt-[1rem] lg:flex-row lg:items-start lg:gap-[3rem] lg:ml-[5rem]">
            <Lens children={
                <div className="skill-card flex flex-col items-center gap-[.7rem] font-mont p-[1rem] text-center">
                    <div className="rounded-[10px] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <p className="text-[1.1rem]">UI/UX Design</p>
                    <p className="text-[.8rem]">Prototyping, Design Systems, Presentations, and Graphic Design</p>
                </div>
            }/>

            <Lens children={
                <div className="skill-card flex flex-col items-center gap-[.7rem] font-mont p-[1rem] text-center">
                    <div className="rounded-[10px] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <p className="text-[1.1rem]">Web Development</p>
                    <p className="text-[.8rem]">Front-End Development, Back-End Development, SEO, and CMS</p>
                </div>
            }/>
            </div>

        </div>
    );
}

export default Skills;