import Image from 'next/image';
import React from 'react';

interface LearnMoreButtonProps {
  text: string;
  href: string;
}

const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({ text, href }) => {
  return (
    <a
      href={href}
      className="flex items-center px-6 py-2 text-white bg-[#86B2D6] rounded-lg hover:bg-[#6f9bcf] transition-colors"
    >
      {text}
      <Image
        src="/arrow.png"
        alt="arrow image"
        width={26}
        height={26}
        style={{ marginLeft: 10 }}
      />
    </a>
  );
};

export default LearnMoreButton;