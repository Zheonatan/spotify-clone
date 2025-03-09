import {
  HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from "lucide-react";

import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library />
              Library
            </a>
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Rock Hits
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Top Brasil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Hits do Momento
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              OldSchool Hip Hop
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft />
            </button>
            <button className="p-1 rounded-full bg-black/40">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a className="bg-white/5 group hover:bg-white/10 transition-colors rounded-md flex items-center gap-4 overflow-hidden">
              <Image
                src="/redhot-album.jpg"
                alt="album"
                width={104}
                height={104}
              />
              <strong>Californication</strong>
              <button className="bg-green-400 rounded-full p-2 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play fill='bg-black' />
              </button>
            </a>
            <a className="bg-white/5 group hover:bg-white/10 transition-colors rounded-md flex items-center gap-4 overflow-hidden">
              <Image
                src="/redhot-album.jpg"
                alt="album"
                width={104}
                height={104}
              />
              <strong>Californication</strong>
              <button className="bg-green-400 rounded-full p-2 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play fill='bg-black' />
              </button>
            </a>
            <a className="bg-white/5 group hover:bg-white/10 transition-colors rounded-md flex items-center gap-4 overflow-hidden">
              <Image
                src="/redhot-album.jpg"
                alt="album"
                width={104}
                height={104}
              />
              <strong>Californication</strong>
              <button className="bg-green-400 rounded-full p-2 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play fill='bg-black' />
              </button>
            </a>
            <a className="bg-white/5 group hover:bg-white/10 transition-colors rounded-md flex items-center gap-4 overflow-hidden">
              <Image
                src="/redhot-album.jpg"
                alt="album"
                width={104}
                height={104}
              />
              <strong>Californication</strong>
              <button className="bg-green-400 rounded-full p-2 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play fill='bg-black' />
              </button>
            </a>
            <a className="bg-white/5 group hover:bg-white/10 transition-colors rounded-md flex items-center gap-4 overflow-hidden">
              <Image
                src="/redhot-album.jpg"
                alt="album"
                width={104}
                height={104}
              />
              <strong>Californication</strong>
              <button className="bg-green-400 rounded-full p-2 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play fill='bg-black' />
              </button>
            </a>
            <a className="bg-white/5 group hover:bg-white/10 transition-colors rounded-md flex items-center gap-4 overflow-hidden">
              <Image
                src="/redhot-album.jpg"
                alt="album"
                width={104}
                height={104}
              />
              <strong>Californication</strong>
              <button className="bg-green-400 rounded-full p-2 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play fill='bg-black' />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10 hover:underline ">
            Made for Ruan Silva
          </h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a className="bg-white/5 hover:bg-white/10 p-3 rounded-md flex flex-col ">
              <Image
                src="/redhot-album.jpg"
                alt="album"
                width={120}
                height={120}
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Stephen Warrel, Coins, Girl in red and more
              </span>
            </a>
            <a className="bg-white/5 hover:bg-white/10 p-3 rounded-md flex flex-col">
              <Image
                src="/redhot-album.jpg"
                alt="album"
                width={120}
                height={120}
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Stephen Warrel, Coins, Girl in red and more
              </span>
            </a>
            <a className="bg-white/5 hover:bg-white/10 p-3 rounded-md flex flex-col">
              <Image
                src="/redhot-album.jpg"
                alt="album"
                width={120}
                height={120}
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Stephen Warrel, Coins, Girl in red and more
              </span>
            </a>
            <a className="bg-white/5 hover:bg-white/10 p-3 rounded-md flex flex-col">
              <Image
                src="/redhot-album.jpg"
                alt="album"
                width={120}
                height={120}
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Stephen Warrel, Coins, Girl in red and more
              </span>
            </a>
            <a className="bg-white/5 hover:bg-white/10 p-3 rounded-md flex flex-col">
              <Image
                src="/redhot-album.jpg"
                alt="album"
                width={120}
                height={120}
                className="w-full "
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Stephen Warrel, Coins, Girl in red and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/redhot-album.jpg" alt="album" width={56} height={56} />
          <div className="flex flex-col">
            <strong className="font-normal">Californication</strong>
            <span className="text-xs text-zinc-400">
              Red Hot Chilli Peppers
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />
          <button className="h-10 w-10 bg-white rounded-full p-2 text-black ml-auto   ">
            <Play fill='bg-black' />
          </button>
          <SkipForward size={20} className="text-zinc-200"/>
          <Repeat size={20} className="text-zinc-200"/>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:47</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="h-1 rounded-full w-40 bg-zinc-200" ></div>
            </div>
            <span className="text-xs text-zinc-400">3:12</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className="flex items-center gap-2">
          <Volume  size={20}/>
          <div className="h-1 rounded-full w-16 bg-zinc-600">
              <div className="h-1 rounded-full w-12 bg-zinc-200" ></div>
            </div>
          </div>
          <Maximize2 size={20}/>
        </div>
      </footer>
    </div>
  );
}
