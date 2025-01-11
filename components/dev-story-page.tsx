    "use client";
    import { Inspiration } from "@/components/dev-story-card";
    import { DEV_STORIES, DISCOVERY_LOCATION } from "@/services/dev-stories";
    import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
    import Link from "next/link";
    import { FormEvent, useState } from "react";
    import { toast } from "react-toastify";
    import { TwitterTweetEmbed } from "react-twitter-embed";
import NoteEntryCard from "./note-entry-card";


    interface DevStoryPageProps {
        id: string;
    }


    export default function DevStoryPage({ id }: DevStoryPageProps) {
        const [email, setEmail] = useState<string>("");
        const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
        const story = DEV_STORIES.find((story) => story.id === id);

        if (!story) {
            return <div className="w-full">Story not found</div>;
        }

        async function joinWaitlist(e: FormEvent<HTMLFormElement>) {
            e.preventDefault();
            // Default to "friends_family" if no location is selected
            const location = selectedLocation || "friends_family";


            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    discovery_location: location,
                }),
            });

            const res = await response.json();
            if (response.ok) {
                console.log(res);
                toast.success("Thanks for joining our waitlist")
            } else if (response.status == 401) {
                console.error(res);
                toast.success("You've added this email to our list.")
            } else {
                console.error(res);
                toast.error("An error occured while attempting to join our waitlist")
            }
        }


        function handleTagClick(tag: string): void {
            throw new Error("Function not implemented.");
        }

        return (
            <div className="font-irishgrover flex flex-col gap-2 md:gap-4 container px-2 md:px-8 lg:px-16 mx-auto">
                <section className="flex flex-col gap-3 bg-orange-500 bg-white/5 shadow-[inset_10px_-80px_94px_0_rgb(199,199,199,0.1)] backdrop-blur-lg p-5 rounded-lg p-2 bg-opacity-10">
                    <span className="flex justify-between items-start">     
                        <span className="items-start">
                            <h1 className="text-3xl md:text-5xl font-bold">{story.title}</h1>
                            <p className="text-[10px] w-fit rounded-full p-1 border border-orange-500">{story.tag}</p>                
                        </span>
                        <Link 
                            target="_blank" 
                            href={story.product_url} className="font-bold items-center flex gap-2 p-2 font-medium transition-all duration-500 ease-in-out text-[12px] orange-gradient border light-btn">
                            Try {story.title}
                            <ArrowLongRightIcon className="w-6 h-6 text-orange-500" /> 
                        </Link> 
                    
                    
                    </span>


                    <p className="text-md md:text-xl lg:text-3xl text-pretty">{story.description}</p>
                </section>
                
                
                <form onSubmit={joinWaitlist} className="my-3 flex flex-col items-center gap-3 md:gap-6 justify-center">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="your@email.com"
                        className="w-[90%] md:w-[70%] lg:w-[60] shadow shadow-orange-500 border-orange-500 text-white bg-transparent border outline-none px-4 py-2 rounded-full"
                    />
                    <span className="w-full flex items-center justify-center gap-3">
                        <span className="p-2 gap-2 flex items-center  rounded-md italics">
                            <select
                                className="flex gap-2 border-none ring-0 outline-none bg-transparent justify-center text-orange-500"
                                onChange={(e) => setSelectedLocation(e.target.value)}
                            >
                                <option className="bg-transparent  text-slate-900" value="friends_family" >
                                    How did you hear about us?
                                </option>
                                {DISCOVERY_LOCATION.map((location: string) => (
                                    <option key={location} className="bg-transparent text-slate-900" value={location}>
                                        {location.toUpperCase().replace("_", " ")}
                                    </option>
                                ))}
                            </select>
                        </span>
                        <button className="w-full  md:w-fit orange-gradient-bg font-kanit text-sm text-white px-6 py-2 rounded-full text-white  font-medium transition-all duration-300">
                            Join Waitlist
                        </button>
                    </span>
                </form>
                
                <section className="flex flex-col mt-4 items-center bg-black bg-white/10 shadow-[inset_10px_-80px_94px_0_rgb(199,199,199,0.1)] backdrop-blur-lg rounded-xl ">
                    <h1 className="text-3xl text-center font-medium py-2">
                        Join the conversion on 
                        <span className="orange-gradient">{" "}{story.title}</span> 
                    </h1>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 p-2">
                        {story.inspirations.map((inspiration: Inspiration, index) => (
                            <div key={index}>
                                {inspiration.tweetId && !inspiration.note && (
                                    <TwitterTweetEmbed 
                                        tweetId={inspiration.tweetId}
                                    />
                                )}
                                {inspiration.note && (
                                    <NoteEntryCard
                                        post={inspiration.note}
                                        handleTagClick={handleTagClick}
                                        handleEdit={() => console.log("Edit", inspiration!.note!._id)} // Replace with actual edit logic
                                        handleDelete={() => console.log("Delete", inspiration!.note!._id)} // Replace with actual delete logic
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        );
    }
