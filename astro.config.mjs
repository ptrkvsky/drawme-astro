import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import react from '@astrojs/react';
// import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  // integrations: [image(), react(), compress()],
  integrations: [image(), react()],
});
