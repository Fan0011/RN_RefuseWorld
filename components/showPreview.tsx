import Image from "next/image";
import Link from "next/link";
import type { ShowInterface } from "../types/shared";
import { formatArtistNames } from "../util";
import Badge from "./badge";

export default function ShowPreview({
  slug,
  title,
  coverImage,
  artistsCollection,
  genresCollection,
}: ShowInterface) {
  const genres = genresCollection.items;
  const artists = formatArtistNames(artistsCollection.items);

  return (
    <Link href={`/radio/${slug}`}>
      <a>
        <article className="text-small">
          <Image
            key={slug}
            src={coverImage.url}
            width={340}
            height={190}
            objectFit="cover"
            objectPosition="center"
            alt={title}
          />

          <h2 className="font-sans font-medium truncate">{title}</h2>

          <p className="truncate">{artists}</p>

          <ul className="flex">
            {genres.map((genre, i) => (
              <li key={i}>
                <Badge text={genre.name} />
              </li>
            ))}
          </ul>
        </article>
      </a>
    </Link>
  );
}
