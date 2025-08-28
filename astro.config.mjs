// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Devocionales de Danny",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "",
          items: [
            {
              label: "Inicio",
              slug: "inicio",
            },
          ],
        },
        {
          label: "Devocionales",
          autogenerate: { directory: "devocionales" },
        },
      ],
    }),
  ],
});
