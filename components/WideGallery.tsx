import Image from 'next/image';

interface WideGalleryProps {
    gallery_images: { src: string; alt: string }[];
}

export default function WideGallery({ gallery_images }: WideGalleryProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 w-full">
            {gallery_images.map((img, index) => (
                <div key={img.src} className="relative w-full aspect-square">
                <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover rounded-lg"
                />
                </div>
            ))}
        </div>
    );
};