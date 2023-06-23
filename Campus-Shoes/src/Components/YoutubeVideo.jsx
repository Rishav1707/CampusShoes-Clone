import "./YoutubeVideo.css";

export default function YoutubeVideo() {
  return (
    <section className="YoutubeVideo-Section">
      <div className="YoutubeVideo-Container">
        <iframe
          src="https://www.youtube.com/embed/KDuF6xxgJzs?list=TLGGPIQt0BkwKCUyMzA2MjAyMw"
          title="#TakeTheLeap | Show what you got with Campus"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
