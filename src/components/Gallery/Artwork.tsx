import { combineClassName } from '@/utils';
import NextImage from 'next/image';
import { useState } from 'react';
import { saveAs } from 'file-saver';
type ArtWordProps = {
  src: string;
  prompt?: string;
};
const Artwork = ({ src, prompt = '' }: ArtWordProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleOnSave = () => {
    saveAs(src, 'image.jpg');
  };
  return (
    <div className="relative w-full h-full group">
      <NextImage
        alt={prompt}
        fill
        src={src}
        className={combineClassName(
          'rounded-lg group-hover:brightness-50',
          isLoading
            ? 'grayscale blur-2xl scale-110'
            : 'grayscale-0 blur-0 scale-100'
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
      <button
        onClick={handleOnSave}
        className="bg-gray-700 backdrop-blur-2xl hidden group-hover:inline-flex bg-opacity-50 hover:bg-gray-400 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-300 font-bold py-2 px-2 rounded items-center absolute right-2 top-2 text-xs"
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Save</span>
      </button>
      <div className="hidden group-hover:block absolute left-2 bottom-2 font-bold text-gray-200">
        {prompt}
      </div>
    </div>
  );
};

export default Artwork;
