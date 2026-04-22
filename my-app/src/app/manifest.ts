import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteConfig.name,
        short_name: 'Servicios Andalusí',
        description: siteConfig.description,
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#D4AF37',
        icons: [
            {
                src: '/icon.png',
                sizes: 'any',
                type: 'image/png',
            },
            {
                src: '/apple-icon.png',
                sizes: 'any', // Apple icons are usually handled by Next.js automatically, but good to have in manifest for PWA
                type: 'image/png',
            },
        ],
    }
}
