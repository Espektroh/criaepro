/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Paginas de prospeccao (HTML estatico em public/clientes/<slug>/).
  // Os rewrites deixam a URL limpa: /clientes/<slug> e /clientes/<slug>/proposta,
  // sem o "index.html" no fim.
  async rewrites() {
    return [
      {
        source: "/clientes/:slug/proposta",
        destination: "/clientes/:slug/proposta/index.html",
      },
      {
        source: "/clientes/:slug",
        destination: "/clientes/:slug/index.html",
      },
    ];
  },

  // Essas paginas sao material comercial, nao devem entrar no indice do site.
  async headers() {
    return [
      {
        source: "/clientes/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
