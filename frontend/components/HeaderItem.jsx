import NextLink from 'next/link';

function HeaderItem({ Icon, title }) {
  let link = `/${title === 'HOME' ? '' : title}`;
  return (
    <NextLink href={link.toLowerCase()}>
      <div className="flex flex-col items-center cursor-pointer group w-9 sm:w-20 hover:text-purple-500">
        <Icon className="h-6 mb-1 text-black-500 group-hover:animate-bounce" />
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">
          {title}
        </p>
      </div>
    </NextLink>
  );
}

export default HeaderItem;
