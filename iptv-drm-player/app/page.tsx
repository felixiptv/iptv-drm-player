import ShakaPlayer from "../components/ShakaPlayer";
import JWPlayer from "../components/JWPlayer";
import ArtPlayerComponent from "../components/ArtPlayerComponent";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>📺 IPTV DRM Player</h1>

      <h2>▶ Shaka Player (DRM)</h2>
      <ShakaPlayer
        manifestUri="https://storage.googleapis.com/shaka-demo-assets/angel-one-widevine/dash.mpd"
        licenseServerUrl="https://cwip-shaka-proxy.appspot.com/no_auth"
      />

      <h2>▶ JW Player (Basic)</h2>
      <JWPlayer videoId="my-jw-player" fileUrl="https://cdn.jwplayer.com/manifests/yp34SRmf.m3u8" />

      <h2>▶ Art Player (Basic)</h2>
      <ArtPlayerComponent url="https://vjs.zencdn.net/v/oceans.mp4" />
    </main>
  );
}