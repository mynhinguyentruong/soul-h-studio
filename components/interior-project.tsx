import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";

import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import { Album } from "./data/albums";
import { playlists } from "./data/playlists";

import ProjectImage from "@/public/project_images/vinh_phe_la/1.jpg";

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album;
  aspectRatio?: "long" | "square" | "wide";
  width?: number;
  height?: number;
}

function transformToKebabCase(input: string): string {
  return input
    .toLowerCase() // Convert the string to lowercase
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^a-z0-9\-]/g, ""); // Remove non-alphanumeric characters except hyphens
}

export function AlbumArtwork({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
}: AlbumArtworkProps) {
  const cookieStore = cookies();
  const visited_id = cookieStore.get("visited_id");
  const isVisited = visited_id?.value.includes(album.id);
  return (
    <Link
      href={`/project/${album.id}`}
      className={cn("space-y-3 relative", className)}
    >
      {isVisited && (
        <div className="absolute w-full h-full max-w-[378px] max-h-[378px] hover:hidden">
          <svg
            preserveAspectRatio="xMidYMid meet"
            width="378"
            height="377"
            viewBox="0 0 378 377"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.34876"
              y1="0.641714"
              x2="377.349"
              y2="366.642"
              stroke="white"
            />
            {/*
            The problem is, this line shift as the svg size does not shrink with the container.
            Need to do some magic calculate or something
            <line
            x1="0.646447"
            y1="376.646"
            x2="376.646"
            y2="0.646436"
            stroke="white"
          />

          */}
          </svg>
        </div>
      )}

      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden max-h-[376px] ">
            <Image
              src={ProjectImage}
              alt={album.name}
              width={width}
              height={height}
              className={cn(
                "h-auto w-auto transition-all hover:scale-105 hover:opacity-80 aspect-square"
              )}
            />
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          <ContextMenuItem>Add to Library</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>New Playlist</ContextMenuItem>
              <ContextMenuSeparator />
              {playlists.map((playlist) => (
                <ContextMenuItem key={playlist}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="mr-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3" />
                  </svg>
                  {playlist}
                </ContextMenuItem>
              ))}
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Play Next</ContextMenuItem>
          <ContextMenuItem>Play Later</ContextMenuItem>
          <ContextMenuItem>Create Station</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Like</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="text-sm md:text-base text-center tracking-wide text-[#404040] ">
        <h3 className=" font-rubik uppercase leading-none">
          Los Gatos Treehouses
        </h3>
      </div>
    </Link>
  );
}
