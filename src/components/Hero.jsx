import React from 'react';
import { Section, Img, Text, Heading, Button as ReactEmailButton } from '@react-email/components';
import { colors } from '../config/brand.js';

/**
 * Hero component - Header with image, tagline, title, description and CTA
 *
 * @param {Object} props
 * @param {string} props.image - Image URL
 * @param {string} props.imageAlt - Image alt text
 * @param {string} props.tagline - Small tagline/eyebrow text (optional)
 * @param {string} props.title - Main heading
 * @param {string} props.description - Description text
 * @param {Object} props.cta - Call to action button configuration
 * @param {string} props.cta.text - Button text
 * @param {string} props.cta.href - Button URL
 * @param {string} props.className - Additional CSS classes
 */
export const Hero = ({
  image,
  imageAlt = '',
  tagline,
  title,
  description,
  cta,
  className = '',
}) => {
  return (
    <Section className={`my-[16px] ${className}`}>
      <Img
        alt={imageAlt}
        className="w-full rounded-[12px] object-cover"
        height="320"
        src={image}
      />
      <Section className="mt-[32px] text-center">
        {tagline && (
          <Text className="my-[16px] font-semibold text-[18px] leading-[28px]" style={{ color: colors.gradient.stops.orange }}>
            {tagline}
          </Text>
        )}
        <Heading
          as="h1"
          className="m-0 mt-[8px] font-semibold text-[36px] text-gray-900 leading-[36px]"
        >
          {title}
        </Heading>
        <Text className="text-[16px] text-gray-500 leading-[24px]">
          {description}
        </Text>
        {cta && (
          <ReactEmailButton
            style={{
              marginTop: '16px',
              borderRadius: '8px',
              padding: '14px 32px',
              fontWeight: '600',
              color: '#ffffff',
              background: colors.gradient.css,
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '16px',
              lineHeight: '24px',
              border: 'none',
            }}
            href={cta.href}
          >
            {cta.text}
          </ReactEmailButton>
        )}
      </Section>
    </Section>
  );
};

export default Hero;
