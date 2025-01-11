  "use client";

  import { useState, useEffect } from "react";

  import NoteEntryCard, { iNoteEntry } from "./note-entry-card";

  interface NoteEntryCardListProps {
      data: iNoteEntry[];
      handleTagClick: (tag: string) => void;
    }

  const NoteEntryCardList = (props: NoteEntryCardListProps) => {
      const {data, handleTagClick} = props
    return (
      <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.map((entry: iNoteEntry) => (
          <NoteEntryCard
            key={entry._id}
            post={entry}
            handleTagClick={handleTagClick}
            handleEdit={() => console.log("Edit", entry._id)} // Replace with actual edit logic
            handleDelete={() => console.log("Delete", entry._id)} // Replace with actual delete logic
          />
        ))}
      </div>
    );
  };

  const Feed = () => {
    const [allPosts, setAllPosts] = useState<iNoteEntry[]>([]);

    // Search states
    const [searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null); // const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState<iNoteEntry[]>([]);

    const fetchPosts = async () => {
      const response = await fetch("/api/notes/");

      const data = noteEntries // await response.json();
      console.log(data, response)

      setAllPosts(data);
    };

    useEffect(() => {
      fetchPosts();
    }, []);

    const filterPrompts = (searchtext: string): iNoteEntry[] => {
      const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
      return allPosts.filter(
        (item: iNoteEntry) =>
          regex.test(item.author.username) ||
          regex.test(item.tags[0]) ||
          regex.test(item.body)
      );
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (searchTimeout) clearTimeout(searchTimeout);
      setSearchText(e.target.value);

      // debounce method
      setSearchTimeout(
          setTimeout(() => {
            const searchResult = filterPrompts(e.target.value);
            setSearchedResults(searchResult);
          }, 500)
        );
      };  
      
    const handleTagClick = (tagName: string) => {
      setSearchText(tagName);

      const searchResult = filterPrompts(tagName);
      setSearchedResults(searchResult);
    };

    return (
      <section className='w-full p-4'>
        <form className='w-full flex-center'>
          <input
            type='text'
            placeholder='Enter a keyword or a tag name'
            value={searchText}
            onChange={handleSearchChange}
            required
            className='search_input peer md:w-1/2'
          />
        </form>

        {/* All Prompts */}
        {searchText ? (
          <NoteEntryCardList
            data={searchedResults}
            handleTagClick={handleTagClick}
          />
        ) : (
          <NoteEntryCardList data={allPosts} handleTagClick={handleTagClick} />
        )}
      </section>
    );
  };

  export default Feed;



  const noteEntries: iNoteEntry[] = [
    {
      _id: "1",
      author: {
        _id: "user1",
        username: "alice_01",
        email: "alice@example.com",
        image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
      },
      body: "This is a note about web development.",
      title: "Web Dev Notes",
      tags: ["web", "development", "javascript"],
      privacy_level: "public",
      description: "Notes on the latest JavaScript trends.",
      written_at: new Date("2025-01-09T08:30:00Z"),
      updated_at: new Date("2025-01-09T09:00:00Z")
    },
    {
      _id: "2",
      author: {
        _id: "user2",
        username: "bob_02",
        email: "bob@example.com",
        image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
      },
      body: "This is a personal note about my vacation plans.",
      title: "Vacation Plans",
      tags: ["vacation", "plans"],
      privacy_level: "private",
      written_at: new Date("2025-01-08T10:00:00Z")
    },
    {
      _id: "3",
      author: {
        _id: "user3",
        username: "charlie_03",
        email: "charlie@example.com",
        image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
      },
      body: "Meeting notes from the project planning session.",
      title: "Project Planning",
      tags: ["project", "meeting", "planning"],
      privacy_level: "restricted",
      description: "Important notes that need approval.",
      written_at: new Date("2025-01-07T14:00:00Z"),
      updated_at: new Date("2025-01-07T15:00:00Z")
    },
    {
      _id: "4",
      author: {
        _id: "user4",
        username: "dana_04",
        email: "dana@example.com",
        image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
      },
      title: "Team building",
      body: "This is a note about upcoming team-building activities.",
      tags: ["team-building", "activities", "work"],
      privacy_level: "public",
      written_at: new Date("2025-01-06T16:30:00Z")
    },

    
    {
      _id: "5",
      author: {
        _id: "user4",
        username: "dana_04",
        email: "dana@example.com",
        image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
      },
      title: "Clean Code",
      body: "I should refactor my code as a part of a new habit task to write clean code.",
      tags: ["clean-code", "refactor", "habit"],
      privacy_level: "public",
      written_at: new Date("2025-01-11T00:30:00Z")
    },
  ];