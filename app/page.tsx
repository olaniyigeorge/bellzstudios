  import ScrollDownAnimation from "../components/scroll";
  import ContactSection from "../components/contact-section";
  import AboutUsSection from "../components/about-us-section";
  import DevStoriesSection from "../components/dev-stories-section";
  import NotesSection from "../components/notes-section";
  import { auth } from "@/services/auth";
  import { BookOpenIcon, EnvelopeIcon, PencilIcon, UserGroupIcon } from "@heroicons/react/24/outline";
  import Typer from "@/components/typer";
  import PageSection from "@/components/page-section";


  export default async function Landing() {
    const session = await auth();
    console.log(session)
    const links = [
      { name: "About Us", id: "about-us", icon: UserGroupIcon },
      { name: "Contact", id: "contact", icon: EnvelopeIcon  },
      { name: "Stories", id: "dev-stories", icon: BookOpenIcon  },
      { name: "Notes", id: "notes", icon: PencilIcon  },
    ];




    return (
      <div className="w-full font-poppins flex flex-col gap-8 justify-center">
        
        <PageSection id="hero-section" className="bg-black">
            <section className="w-full flex flex-col items-center gap-2 py-4 md:py-6">
              <Typer 
                id='hero' 
                delay={50}
                loop={true}
                className="font-irishgrover text-[60px] md:text-[160px] text-white font-extrabold " 
                words={["bellzstudio", "bellzstudio"]}
              /> 
              <span
                id='hero-mini' 
                className="font-irishgrover text-3xl px-4 md:px-20 text-white orange_gradient text-center" 
              >
                  Building and contributing to open-source products we believe should exist.
              </span> 

              <div className="w-full flex mt-8 lg:mt-10 gap-3 justify-between items-center" >
                {links.map((link) => (
                  <ScrollDownAnimation 
                      key={link.id} 
                      targetId={link.id} 
                      className="w-full p-3 md:p-4 flex hover:animate-swivvleV  flex-col  rounded-2xl md:rounded-[50px] border-orange-900 gap-3 shadow shadow-orange-900  items-center"
                      child={
                    <>
                      <span className="text-white text-xs md:text-lg font-irishgrover">{link.name}</span>
                    
                      <link.icon className="text-orange-500 hover:text-white animate-swivvleV w-5 h-5"/>
                    </>
                  } />
                ))}
              </div>

            </section> 
        </PageSection>

        <PageSection id="about-us" className="orange-gradient-bg">
          <AboutUsSection />
        </PageSection>

        <PageSection id="contact" className="bg-black">
          <ContactSection />
        </PageSection> 
      
        <PageSection id="dev-stories" className="bg-black">
          <DevStoriesSection />
        </PageSection>

        <PageSection id="notes" className="orange-gradient-bg">
          <NotesSection />  
        </PageSection>
      </div>
    );
  }





