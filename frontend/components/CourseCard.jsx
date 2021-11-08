import React from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';

function CourseCard({
  thumbnail,
  category,
  title,
  publishedDate,
  author,
  description,
  id,
}) {
  return (
    <NextLink href={`/takecourse/${id}`} key={id + 10}>
      <div className="cursor-pointer">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <NextImage
            src={thumbnail}
            alt="thumbnail of a course"
            width="270px"
            height="150px"
            layout="responsive"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base overflow-ellipsis">
              {description}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {category}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {author}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {publishedDate}
            </span>
          </div>
        </div>
      </div>
    </NextLink>
  );
}

export default CourseCard;
