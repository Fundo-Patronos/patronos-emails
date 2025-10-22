import React from 'react';
import { Section, Text, Hr, Row } from '@react-email/components';
import { colors } from '../config/brand.js';

/**
 * FeatureList component - Numbered list of features with header
 *
 * @param {Object} props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {Array} props.features - Array of feature objects
 * @param {string} props.features[].title - Feature title
 * @param {string} props.features[].description - Feature description
 * @param {string} props.className - Additional CSS classes
 */
export const FeatureList = ({
  title,
  description,
  features,
  className = '',
}) => {
  return (
    <Section className={`my-[16px] ${className}`}>
      <Section>
        <Row>
          <Text className="m-0 font-semibold text-[24px] text-gray-900 leading-[32px]">
            {title}
          </Text>
          <Text className="mt-[8px] text-[16px] text-gray-500 leading-[24px]">
            {description}
          </Text>
        </Row>
      </Section>
      <Hr className="!border-gray-300 mx-0 my-[24px] w-full border border-solid" />

      {features.map((feature, index) => (
        <Section key={index} style={{ marginTop: index > 0 ? '36px' : '0' }}>
          <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td width="60" style={{ verticalAlign: 'top', paddingRight: '16px' }}>
                  <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: 'collapse' }}>
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          valign="middle"
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '22px',
                            background: colors.gradient.css,
                            fontSize: '18px',
                            fontWeight: '700',
                            color: '#ffffff',
                            textAlign: 'center',
                            lineHeight: '44px',
                          }}
                        >
                          {index + 1}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style={{ verticalAlign: 'top' }}>
                  <Text
                    style={{
                      margin: '2px 0 0 0',
                      fontSize: '20px',
                      fontWeight: '600',
                      color: colors.text.primary,
                      lineHeight: '28px',
                    }}
                  >
                    {feature.title}
                  </Text>
                  <Text
                    style={{
                      margin: '8px 0 0 0',
                      fontSize: '16px',
                      color: colors.text.secondary,
                      lineHeight: '26px',
                    }}
                  >
                    {feature.description}
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </Section>
      ))}
    </Section>
  );
};

export default FeatureList;
