import { registerRoute } from "workbox-routing";
import { NetworkFirst } from "workbox-strategies";

registerRoute(
  // ({url}) => url.pathname.startsWith('/social-timeline/'),
  ({ url }) => true,
  new NetworkFirst()
);

self.addEventListener("install", () => {
  console.log("SW Install");
});
