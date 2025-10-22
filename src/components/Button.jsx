import React from 'react';
import { Button as ReactEmailButton } from '@react-email/components';
import { colors } from '../config/brand.js';

/**
 * Customizable Button component with Patronos branding
 *
 * @param {Object} props
 * @param {string} props.href - Button link URL
 * @param {('primary'|'secondary')} props.variant - Button style variant (default: 'primary')
 * @param {string} props.children - Button text content
 * @param {string} props.className - Additional Tailwind CSS classes
 * @param {Object} props.style - Additional inline styles
 */
export const Button = ({
  href,
  variant = 'primary',
  children,
  className = '',
  style = {},
  ...props
}) => {
  const baseStyles = {
    boxSizing: 'border-box',
    borderRadius: '8px',
    padding: '14px 32px',
    textAlign: 'center',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    lineHeight: '24px',
  };

  const variantStyles = {
    primary: {
      background: colors.gradient.css,
      color: '#ffffff',
      border: 'none',
    },
    secondary: {
      background: '#ffffff',
      color: colors.text.primary,
      border: '1px solid #E5E7EB',
    },
  };

  const combinedStyle = {
    ...baseStyles,
    ...variantStyles[variant],
    ...style,
  };

  return (
    <ReactEmailButton
      style={combinedStyle}
      href={href}
      {...props}
    >
      {children}
    </ReactEmailButton>
  );
};

export default Button;
