import { listenNowAlbums } from "@/components/data/albums";
import { AlbumArtwork } from "@/components/interior-project";

export default function Home() {
  return (
    <main className="container grid grid-cols-3 gap-4 mx-auto p-24 ">
      {listenNowAlbums.map((album) => (
        <>
          <AlbumArtwork
            key={album.name}
            album={album}
            className="max-w-[376px] max-h-[420px] overflow-hidden "
            aspectRatio="square"
            width={376}
            height={376}
          />
        </>
      ))}
    </main>
  );
}
