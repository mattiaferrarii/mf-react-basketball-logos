import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TOR from './TOR';
import LAL from './LAL';
import BOS from './BOS';

describe('NBA Logo Components', () => {
  describe('TOR (Toronto Raptors)', () => {
    it('renders with default size', () => {
      const { container } = render(<TOR />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute('width', '100');
      expect(svg).toHaveAttribute('height', '100');
    });

    it('renders with custom size', () => {
      const { container } = render(<TOR size={150} />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '150');
      expect(svg).toHaveAttribute('height', '150');
    });

    it('renders with default title', () => {
      render(<TOR />);
      const svg = screen.getByLabelText('Toronto Raptors');
      expect(svg).toBeInTheDocument();
    });

    it('renders with custom title', () => {
      render(<TOR title="Custom Raptors" />);
      const svg = screen.getByLabelText('Custom Raptors');
      expect(svg).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(<TOR className="custom-class" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('custom-class');
    });

    it('accepts additional SVG props', () => {
      const { container } = render(<TOR data-testid="test-logo" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('data-testid', 'test-logo');
    });
  });

  describe('LAL (Los Angeles Lakers)', () => {
    it('renders with default size', () => {
      const { container } = render(<LAL />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute('width', '100');
      expect(svg).toHaveAttribute('height', '100');
    });

    it('renders with default title', () => {
      render(<LAL />);
      const svg = screen.getByLabelText('Los Angeles Lakers');
      expect(svg).toBeInTheDocument();
    });
  });

  describe('BOS (Boston Celtics)', () => {
    it('renders with default size', () => {
      const { container } = render(<BOS />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute('width', '100');
      expect(svg).toHaveAttribute('height', '100');
    });

    it('renders with default title', () => {
      render(<BOS />);
      const svg = screen.getByLabelText('Boston Celtics');
      expect(svg).toBeInTheDocument();
    });
  });
});
