import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { isFilled } from "@prismicio/client";
/**
 * Props for `Richtext`.
 */
export type RichtextProps = SliceComponentProps<Content.RichtextSlice>;

/**
 * Component for "Richtext" Slices.
 */
const Richtext: FC<RichtextProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText
        field={slice.primary.content}
        components={{
          heading1: ({ children }) => (
            <h1 className="font-bold text-3xl">{children}</h1>
          ),
          heading2: ({ children }) => (
            <h2 className="font-bold text-2xl">{children}</h2>
          ),
          heading3: ({ children }) => (
            <h3 className="text-xl font-bold">{children}</h3>
          ),
          heading4: ({ children }) => <h4 className="text-lg">{children}</h4>,
          heading5: ({ children }) => (
            <h5 className="text-base font-bold">{children}</h5>
          ),
          heading6: ({ children }) => (
            <h6 className="text-base font-bold">{children}</h6>
          ),
          paragraph: ({ children }) => <Paragraph>{children}</Paragraph>,
        }}
      />
    </section>
  );
};

export const Paragraph = ({ children }) => {
  const isEmty = isFilled.keyText(children);
  return <p className={isEmty ? "mb-6" : ""}>{children}</p>;
};

type HeadingProps = {
  as: String;
};

const Heading = (props: HeadingProps) => {
  return <></>;
};

export default Richtext;
