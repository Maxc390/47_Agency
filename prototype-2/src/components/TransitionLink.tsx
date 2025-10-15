import { Link } from "next-view-transitions";
import { Link as LinkType } from "@/types/content";

export type TransitionLinkProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  tabIndex?: number;
  href?: string;
  link?: LinkType;
};

export const TransitionLink = ({
  link,
  href,
  children,
  className,
  onClick,
  tabIndex,
}: TransitionLinkProps) => {
  const url = href ?? link?.url;

  if (!url) {
    console.warn("TransitionLink: No URL Found");
    return null;
  }

  return (
    <Link
      href={url}
      className={className}
      onClick={onClick}
      tabIndex={tabIndex}
      target={link?.target}
    >
      {link?.text ?? children}
    </Link>
  );
};
