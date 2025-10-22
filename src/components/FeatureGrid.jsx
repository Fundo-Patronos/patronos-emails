import React from 'react';
import { Section, Row, Text, Column, Img } from '@react-email/components';

/**
 * FeatureGrid component - 2x2 grid of features with icons
 *
 * @param {Object} props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {Array} props.features - Array of feature objects (up to 4)
 * @param {string} props.features[].icon - Icon image URL
 * @param {string} props.features[].iconAlt - Icon alt text
 * @param {string} props.features[].title - Feature title
 * @param {string} props.features[].description - Feature description
 * @param {string} props.className - Additional CSS classes
 */
export const FeatureGrid = ({
  title,
  description,
  features,
  className = '',
}) => {
  // Split features into pairs for 2-column layout
  const featurePairs = [];
  for (let i = 0; i < features.length; i += 2) {
    featurePairs.push(features.slice(i, i + 2));
  }

  return (
    <Section className={`my-[16px] ${className}`}>
      <Row>
        <Text className="m-0 font-semibold text-[24px] text-gray-900 leading-[32px]">
          {title}
        </Text>
        <Text className="mt-[8px] text-[16px] text-gray-500 leading-[24px]">
          {description}
        </Text>
      </Row>

      {featurePairs.map((pair, pairIndex) => (
        <Row key={pairIndex} className={pairIndex === 0 ? 'mt-[16px]' : 'mt-[32px]'}>
          {pair.map((feature, featureIndex) => (
            <Column
              key={featureIndex}
              className={`w-1/2 ${featureIndex === 0 ? 'pr-[12px]' : 'pl-[12px]'} align-baseline`}
              colSpan={1}
            >
              {feature.icon && (
                <Img
                  alt={feature.iconAlt || feature.title}
                  height="48"
                  src={feature.icon}
                  width="48"
                />
              )}
              <Text className="m-0 mt-[16px] font-semibold text-[20px] text-gray-900 leading-[28px]">
                {feature.title}
              </Text>
              <Text className="mt-[8px] mb-0 text-[16px] text-gray-500 leading-[24px]">
                {feature.description}
              </Text>
            </Column>
          ))}
        </Row>
      ))}
    </Section>
  );
};

export default FeatureGrid;
