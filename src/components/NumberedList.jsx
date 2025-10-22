import React from 'react';
import { Section, Heading, Text } from '@react-email/components';
import { colors } from '../config/brand.js';

/**
 * NumberedList component - Simple numbered list with title and description
 *
 * @param {Object} props
 * @param {string} props.title - Main heading
 * @param {Array} props.items - Array of list items
 * @param {number} props.items[].number - Item number (optional, auto-numbered if not provided)
 * @param {string} props.items[].title - Item title
 * @param {string} props.items[].description - Item description
 * @param {string} props.className - Additional CSS classes
 */
export const NumberedList = ({
  title,
  items,
  className = '',
}) => {
  return (
    <Section className={className}>
      {title && (
        <Heading className="mb-[42px] text-center text-[24px] leading-[32px]">
          {title}
        </Heading>
      )}

      {items.map((item, index) => (
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
                          {item.number || index + 1}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style={{ verticalAlign: 'top' }}>
                  <Heading
                    as="h2"
                    style={{
                      margin: '2px 0 0 0',
                      fontSize: '18px',
                      fontWeight: '600',
                      color: colors.text.primary,
                      lineHeight: '28px',
                    }}
                  >
                    {item.title}
                  </Heading>
                  <Text
                    style={{
                      margin: '8px 0 0 0',
                      fontSize: '14px',
                      color: colors.text.secondary,
                      lineHeight: '24px',
                    }}
                  >
                    {item.description}
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

export default NumberedList;
