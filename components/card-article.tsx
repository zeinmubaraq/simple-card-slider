import Image from 'next/image';
import Link from 'next/link';

type Props = {
  image: string;
  category: string;
  title: string;
};

const CardArticle = ({ image, category, title }: Props) => {
  return (
    <article className="flex min-w-[90%] snap-center flex-col lg:min-w-0">
      <div className="relative h-48 overflow-hidden rounded">
        <Image src={image} alt="card cover" fill sizes="100vw" style={{ objectFit: 'cover' }} />
      </div>
      <div className="mt-5 flex-1">
        <p className="mb-2 text-xs uppercase">{category}</p>
        <h3 className="font-bold capitalize">{title}</h3>
        <p className="mt-2 text-sm">
          National parks help preserve and connect people to Native American, Alaska Native, Native
          Hawaiian, and Indigenous heritage past and present.
        </p>
      </div>
      <div className="mt-3">
        <Link href="#" className="font-semibold text-blue-500 hover:text-blue-700">
          Read More &rarr;
        </Link>
      </div>
    </article>
  );
};

export default CardArticle;
