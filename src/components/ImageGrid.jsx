import React from 'react';
import { Section, Row, Text, Column, Link, Img } from '@react-email/components';
import { colors } from '../config/brand.js';

/**
 * ImageGrid component - Three column image grid with header
 *
 * @param {Object} props
 * @param {string} props.tagline - Small eyebrow text (optional)
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {Array} props.images - Array of image objects (3 images recommended)
 * @param {string} props.images[].src - Image URL
 * @param {string} props.images[].alt - Image alt text
 * @param {string} props.images[].href - Link URL (optional)
 * @param {string} props.className - Additional CSS classes
 */
export const ImageGrid = ({
  tagline,
  title,
  description,
  images,
  className = '',
}) => {
  return (
    <Section className={`my-[16px] ${className}`}>
      <Section>
        <Row>
          {tagline && (
            <Text
              className="m-0 font-semibold text-[16px] leading-[24px]"
              style={{ color: colors.gradient.stops.orange }}
            >
              {tagline}
            </Text>
          )}
          <Text className="m-0 mt-[8px] font-semibold text-[24px] text-gray-900 leading-[32px]">
            {title}
          </Text>
          <Text className="mt-[8px] text-[16px] text-gray-500 leading-[24px]">
            {description}
          </Text>
        </Row>
      </Section>

      <Section>
        <Row>
          {images.map((image, index) => {
            const columnClass =
              index === 0
                ? 'w-1/3 pr-[8px]'
                : index === images.length - 1
                ? 'w-1/3 pl-[8px]'
                : 'w-1/3 px-[8px]';

            const imageElement = (
              <Img
                alt={image.alt}
                className="w-full rounded-[12px] object-cover"
                height={186}
                src={image.src}
              />
            );

            return (
              <Column key={index} className={columnClass}>
                {image.href ? (
                  <Link href={image.href}>{imageElement}</Link>
                ) : (
                  imageElement
                )}
              </Column>
            );
          })}
        </Row>
      </Section>
    </Section>
  );
};

export default ImageGrid;
