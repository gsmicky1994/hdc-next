/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript :{
    ignoreBuildErrors: true,
  },
  images:{ 
    unoptimized:false,
    domains: ['http://ec2-13-233-34-176.ap-south-1.compute.amazonaws.com:1337/'],
  },
  trailingSlash: true,

}


module.exports = nextConfig
