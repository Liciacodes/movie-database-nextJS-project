import Link from "next/link";
import Image from "next/image";

const Movie = ({ title, key, id, poster_path, release_date }) => {
  const ImagePath = "https://image.tmdb.org/t/p/original";
  console.log(poster_path);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={ImagePath + poster_path}
          alt={title}
          width={800}
          height={800}
        />
      </Link>
    </div>
  );
};

export default Movie;
