import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import react from '@astrojs/react';

import prefetch from '@astrojs/prefetch';

// https://astro.build/config
export default defineConfig({
  // integrations: [image(), react(), compress()],
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    react(),
    prefetch(),
  ],
});
