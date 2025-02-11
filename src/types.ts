export interface CountdownProps {
  targetDate: Date;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}