import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cwlwm Systems",
    short_name: "Cwlwm",
    description: "Connected systems. Clearer operations.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1e8",
    theme_color: "#071b13",
    icons: [{ src: "/cwlwm-icon-512.png", sizes: "512x512", type: "image/png" }],
  };
}
