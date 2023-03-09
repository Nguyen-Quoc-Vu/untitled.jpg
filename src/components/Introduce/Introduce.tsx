import { useAppDispatch } from '@/hooks/useRedux';
import { useActions } from '@/slices/GeneratedPhotoSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { surpriseMePrompts } from '../../constants/prompts';
import BackgroundBlob from './BackgroundBlob';
import Button from './Button';
import Input from './Input';

const Introduce = () => {
  const router = useRouter();
  const { fetchGeneratedPhoto } = useActions();
  const [inputValue, setInputValue] = useState('');

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchGeneratedPhoto(inputValue);
    router.push({ pathname: '/post', query: { search: inputValue } });
  };

  const handleSurpriseMeBtn = () => {
    const index = Math.floor(Math.random() * surpriseMePrompts.length);
    setInputValue(surpriseMePrompts[index]);
  };

  return (
    <div
      id="introduce"
      className={`snap-start flex flex-col justify-center items-center backdrop-opacity-60 relative`}
    >
      <div className="w-full py-16 px-4 sm:py-24 sm:px-6 flex flex-col items-center justify-around min-h-screen overflow-x-hidden">
        <BackgroundBlob />
        <div>
          <div className="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6x text-center backdrop-blur-2xl px-8 py-3 shadow text-gray-50 text-opacity-70 rounded-full">
            ImaginArt
          </div>
          <div className="mb-4 text-lg md:text-xl font-bold text-gray-400 text-center dark:text-gray-400">
            Free online AI picture generator from text
          </div>
        </div>
        <div className="flex gap-10 flex-col w-full justify-center items-center mt-4 md:w-2/3">
          <Input
            rightButtonValue="Draw"
            placeholder={
              'An oil pastel drawing of an annoyed cat in a spaceship...'
            }
            value={inputValue}
            onInputValue={setInputValue}
            onSubmit={(e) => handleOnSubmit(e)}
          />
          <div className="flex gap-2 md:gap-5 flex-col md:flex-row md:w-2/3 w-full">
            <Button onClick={handleSurpriseMeBtn} value={'Surprise me'} />
            <Button
              onClick={() => router.push('#gallery')}
              value={'Community gallery'}
            />
          </div>
        </div>
        <div className="text-gray-400 font-semibold text-center text-xs md:text-base">
          Credits:{' '}
          <Link
            href="https://github.com/nguyen-quoc-vu"
            className="text-blue-500 underline"
          >
            Vu Nguyen
          </Link>{' '}
          - Powered by OpenAI
        </div>
      </div>
    </div>
  );
};
export default Introduce;
