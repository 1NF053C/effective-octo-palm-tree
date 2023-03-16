import { Image } from "@chakra-ui/react";

type BackgroundImageProps = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export function BackgroundImage({ src, alt, objectPosition }: BackgroundImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      objectFit="cover"
      objectPosition={objectPosition}
      overflowX="hidden"
      height="100%"
      // width="100%"
      // zIndex="-1"
      position="absolute"
    />
  );
}
