import fs from 'node:fs';
import path from 'node:path';

const nichesDir = path.join(process.cwd(), 'niches');

const nicheRedirects = fs.existsSync(nichesDir)
  ? fs
      .readdirSync(nichesDir)
      .filter((file) => file.endsWith('.html'))
      .map((file) => {
        const slug = file.replace(/\.html$/, '');

        return {
          source: `/niches/${slug}.html`,
          destination: `/niches/${slug}`,
          permanent: true,
        };
      })
  : [];

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      ...nicheRedirects,
    ];
  },
};

export default nextConfig;
