import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import { Fragment } from "react";
import PlayCircle from "../icons/playCircle";
import Share from "../icons/share";
import { playerWidget, showKey } from "../lib/mixcloud";
import { ShowInterface } from "../types/shared";
import { getMixcloudKey, sort } from "../util";
import Badge from "./badge";
import Date from "./date";
import Pill from "./pill";

export default function ShowBody({
  title,
  genresCollection,
  artistsCollection,
  slug,
  date,
  content,
  mixcloudLink,
}: ShowInterface) {
  const genres = genresCollection.items
    .map((genre) => genre.name)
    .sort(sort.alpha);

  const artists = artistsCollection.items;

  const persons = (
    <Fragment>
      {artists?.map((artist, i) => {
        const isLast = artists.length === i + 1;

        const a = (
          <Link key={i} href={`/artists/${artist.slug}`}>
            <a className="underline">{artist.name}</a>
          </Link>
        );

        if (artists.length === 1) return a;

        if (isLast) return <Fragment key={i}>and {a}</Fragment>;

        return <Fragment key={i}>{a}, </Fragment>;
      })}
    </Fragment>
  );

  const [, setKey] = showKey.use();
  const player = playerWidget.useValue();

  const handlePlayShow = async () => {
    setKey(getMixcloudKey(mixcloudLink));

    if (player?.play) {
      console.log("[Mixcloud]", "Play");

      try {
        await player.togglePlay();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleShare = async () => {
    const shareData: ShareData = {
      text: title,
      title: "Refuge Worldwide",
      url: `https://refuge-worldwide.vercel.app/radio/${slug}`,
    };

    try {
      /**
       * @todo Handle sharing on devices without the Share API
       */
      await navigator.share(shareData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <section>
        <div className="p-4 sm:p-8">
          <div className="container-md">
            <div className="flex justify-between">
              <div>
                {mixcloudLink && (
                  <button
                    className="w-20 h-20 sm:w-28 sm:h-28 rounded-full focus:outline-none focus:ring-4"
                    onClick={handlePlayShow}
                  >
                    <PlayCircle />
                  </button>
                )}
              </div>

              <div>
                <button
                  className="w-20 h-20 sm:w-28 sm:h-28 focus:outline-none"
                  onClick={handleShare}
                >
                  <Share />
                </button>
              </div>
            </div>

            <p className="text-small text-center">
              <Date dateString={date} />
            </p>

            <div className="h-6" />

            <h1 className="text-base sm:text-large text-center">{title}</h1>

            <div className="h-6" />

            <ul className="w-full flex flex-wrap justify-center -mr-2 -mb-2">
              {genres.map((genre, i) => (
                <li key={i} className="pr-2 pb-2">
                  <Badge text={genre} />
                </li>
              ))}
            </ul>

            <div className="h-6" />

            <p className="font-medium text-center">With {persons}</p>

            <div className="h-6" />

            <div className="prose sm:prose-lg max-w-none">
              {documentToReactComponents(content?.json)}
            </div>
          </div>
        </div>
      </section>

      <div className="h-12 md:h-24" />

      <section className="border-t-2">
        <div className="p-4 md:p-8">
          <div className="container-md">
            <Pill>
              <span className="font-serif">Persons</span>
            </Pill>

            <div className="h-8" />

            <p className="font-medium">{persons}</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
