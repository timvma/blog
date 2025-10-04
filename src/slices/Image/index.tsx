import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */
const Image: FC<ImageProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* <picture>
        <source media="(min-width: 990px)" srcset={slice.primary.desktop.url} />
        <img src={slice.primary.mobile.url} alt={slice.primary.mobile.alt} />
      </picture> */}
    </section>
  );
};

export default Image;
