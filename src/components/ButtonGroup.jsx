import React from 'react';
import { Row, Column, Button as ReactEmailButton } from '@react-email/components';
import { colors } from '../config/brand.js';

/**
 * ButtonGroup component - Two buttons side by side
 *
 * @param {Object} props
 * @param {Object} props.primaryButton - Primary button configuration
 * @param {string} props.primaryButton.text - Primary button text
 * @param {string} props.primaryButton.href - Primary button URL
 * @param {Object} props.secondaryButton - Secondary button configuration
 * @param {string} props.secondaryButton.text - Secondary button text
 * @param {string} props.secondaryButton.href - Secondary button URL
 * @param {string} props.className - Additional CSS classes for the row
 */
export const ButtonGroup = ({
  primaryButton,
  secondaryButton,
  className = '',
}) => {
  const primaryStyles = {
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: '8px',
    padding: '12px 20px',
    textAlign: 'center',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-block',
    background: colors.gradient.css,
    color: '#ffffff',
    border: 'none',
    fontSize: '16px',
    lineHeight: '24px',
  };

  const secondaryStyles = {
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: '8px',
    padding: '12px 20px',
    textAlign: 'center',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-block',
    background: '#ffffff',
    color: colors.text.primary,
    border: '1px solid #E5E7EB',
    fontSize: '16px',
    lineHeight: '24px',
  };

  return (
    <Row className={className}>
      <Column align="center">
        <Row>
          <td align="center" style={{ width: '50%', paddingRight: '16px' }} colSpan={1}>
            <ReactEmailButton
              style={primaryStyles}
              href={primaryButton.href}
            >
              {primaryButton.text}
            </ReactEmailButton>
          </td>
          <td align="center" style={{ width: '50%', paddingLeft: '16px' }} colSpan={1}>
            <ReactEmailButton
              style={secondaryStyles}
              href={secondaryButton.href}
            >
              {secondaryButton.text}
            </ReactEmailButton>
          </td>
        </Row>
      </Column>
    </Row>
  );
};

export default ButtonGroup;
