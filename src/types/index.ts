import type { SVGProps, FC } from 'react';

/**
 * Props for basketball logo components
 */
export interface LogoProps extends SVGProps<SVGSVGElement> {
  /**
   * Size of the logo in pixels (sets both width and height)
   * @default 100
   */
  size?: number | string;

  /**
   * Accessible title for the logo
   */
  title?: string;

  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * Type for logo components
 */
export type LogoComponent = FC<LogoProps>;
