import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music2, Pause, Play } from "lucide-react";

const ITUNES_SEARCH_URL =
  "https://itunes.apple.com/search?term=Don%27t%20Stop%20%27Til%20You%20Get%20Enough%20Michael%20Jackson&media=music&entity=song&limit=5";

const spring = { type: "spring", stiffness: 230, damping: 22, mass: 0.6 };

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [previewUrl, setPreviewUrl] = useState("");
  const [storeUrl, setStoreUrl] = useState("https://music.apple.com/us/song/159293312");

  useEffect(() => {
    let cancelled = false;

    fetch(ITUNES_SEARCH_URL)
      .then((response) => response.json())
      .then((data) => {
        if (cancelled) {
          return;
        }

        const track = data.results?.find(
          (item) =>
            item.artistName === "Michael Jackson" &&
            item.trackName?.toLowerCase().includes("don't stop"),
        );

        if (track?.previewUrl) {
          setPreviewUrl(track.previewUrl);
          setStoreUrl(track.trackViewUrl || "https://music.apple.com/us/song/159293312");
        }
      })
      .catch(() => {
        setPreviewUrl("");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio || !previewUrl) {
      return;
    }

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;

    if (!audio || !audio.duration) {
      return;
    }

    setProgress((audio.currentTime / audio.duration) * 100);
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;

    if (!audio || !audio.duration) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const nextProgress = (event.clientX - bounds.left) / bounds.width;
    audio.currentTime = nextProgress * audio.duration;
    setProgress(nextProgress * 100);
  };

  const bars = [34, 64, 42, 76, 50, 88, 40];

  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={spring}
      className="border border-divider bg-surface p-5"
    >
      <audio
        ref={audioRef}
        src={previewUrl}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
        onEnded={() => {
          setIsPlaying(false);
          setProgress(0);
        }}
      />
      <div className="mb-10 flex items-start justify-between gap-5">
        <div>
          <p className="mb-2 text-xs uppercase leading-none text-muted">
            Audio // Michael Jackson
          </p>
          <h3 className="text-2xl font-semibold leading-tight text-crisp md:text-3xl">
            Don&apos;t Stop &apos;Til You Get Enough
          </h3>
        </div>
        <Music2 size={21} strokeWidth={1.7} className="mt-1 text-muted" />
      </div>
      <div className="flex items-center gap-5">
        <button
          type="button"
          onClick={togglePlayback}
          disabled={!previewUrl}
          aria-label={isPlaying ? "Pause audio" : "Play audio"}
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-divider text-crisp transition-opacity duration-300 hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <button
          type="button"
          onClick={handleSeek}
          aria-label="Seek audio"
          className="group h-8 flex-1 py-3"
        >
          <span className="block h-px w-full bg-divider">
            <span
              className="block h-px bg-crisp transition-[width] duration-200"
              style={{ width: `${progress}%` }}
            />
          </span>
        </button>
        <span className="w-10 text-right text-xs tabular-nums text-muted">
          {duration ? Math.floor(duration) : "--"}s
        </span>
      </div>
      <div
        className={`mt-8 flex h-8 items-end gap-1 ${isPlaying ? "is-playing" : ""}`}
        aria-hidden="true"
      >
        {bars.map((height, index) => (
          <span
            key={height + index}
            className="waveform-bar block w-1 bg-crisp/80"
            style={{
              height: `${height}%`,
              animationDelay: `${index * 90}ms`,
            }}
          />
        ))}
      </div>
      <a
        href={storeUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block text-xs uppercase text-muted transition-opacity duration-300 hover:opacity-70"
      >
        Apple Music Preview
      </a>
    </motion.article>
  );
}
