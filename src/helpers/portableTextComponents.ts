import { slugify } from '@lib/slugify';
import type { PortableTextHtmlComponents } from '@portabletext/to-html';

export const portableTextComponents: Partial<PortableTextHtmlComponents> = {
  marks: {
    internalLink: ({ children, value }) => {
      const href = value.href || '';
      return `<a href="${href}" class="internalLink">${children}</a>`;
    },
    zigwigwi: ({ text }) => {
      return `<span class="zigwigwi">${text} <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      class="svg-zigwigwi"
    >
      <path
      class="path-zigwigwi"
        id="zzzzzzzzzzzzzz"
        class="st0"
        d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"
      ></path>
    </svg>
    </span>`;
    },
  },

  block: {
    h2: ({ value }: any) => {
      return `<h2 id="${slugify(value.children[0].text)}">${
        value.children[0].text
      }</h2>`;
    },
    h3: ({ value }: any) => {
      return `<h2 id="${slugify(value.children[0].text)}">${
        value.children[0].text
      }</h2>`;
    },
    h4: ({ value }: any) => {
      return `<h2 id="${slugify(value.children[0].text)}">${
        value.children[0].text
      }</h2>`;
    },
    h5: ({ value }: any) => {
      return `<h2 id="${slugify(value.children[0].text)}">${
        value.children[0].text
      }</h2>`;
    },
    h6: ({ value }: any) => {
      return `<h2 id="${slugify(value.children[0].text)}">${
        value.children[0].text
      }</h2>`;
    },
    animate: ({ value }: any) => {
      console.log('🅰️', value);

      return `<span class="animate">${value.children[0].text}</span>`;
    },
  },
};
