import Image from "next/image";
import React from "react";

interface QuoteCardProps {
  imageSrc: string;
  quote: string;
  author: string;
}

const ProfileCard: React.FC<QuoteCardProps> = ({ imageSrc, quote, author }) => {
  return (
    <div className="quote-card">
      <Image
        src={imageSrc}
        alt={author}
        className="author-image"
        width={40}
        height={40}
      />
      <div className="quote-content">
        <p className="quote">"{quote}"</p>
        <h4 className="author">- {author}</h4>
      </div>
      <style jsx>{`
        .quote-card {
          background-color: #ffffff;
          border-radius: 15px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          margin: 20px auto;
          transition: transform 0.3s;
        }

        .quote-card:hover {
          transform: scale(1.05);
        }

        .quote-content {
          margin: 15px 0;
        }

        .quote {
          font-size: 1.2em;
          color: #333;
          font-style: italic;
          margin: 10px 0;
        }

        .author {
          font-size: 1em;
          color: #555;
          margin: 0;
        }

        .author-image {
          border-radius: 50%;
          width: 80px;
          height: 80px;
          object-fit: cover;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  );
};

export default ProfileCard;
