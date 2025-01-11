import { DEV_STORIES } from "@/services/dev-stories"
import DevStoryCard, { iDevStory } from "../../components/dev-story-card"




export default function Note() {
    const STORIES = DEV_STORIES
    return (
        <div className="flex flex-col justify-center gap-5 font-irishgrover ">
            <h1 className="w-full text-center text-5xl font-extrabold my-5">
                Dev Stories
            </h1>


            <div className="grid grid-cols-1 pb-24 md:grid-cols-2 gap-3 md:gap-4 container px-2 md:px-8 lg:px-16 mx-auto">   
                {STORIES.map((story: iDevStory) => (
                    <DevStoryCard key={story.id} {...story}/>
                    ))
                }
            </div>
         </div>
    )
}

