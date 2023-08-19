import { Button } from '..'

export const EventsSkeleton = () => (
  <ul className='flex flex-col gap-24'>
    {Array(3)
      .fill(0)
      .map((_, i) => (
        <li className='text-center flex flex-col gap-4 items-center' key={i}>
          <h2 className='text-[2rem] font-bold uppercase mb-2'>
            <span className='bg-gray-100 animate-pulse h-8 w-80' />
          </h2>
          <div className='w-full max-w-sm text-2xl leading-normal tracking-widest '>
            <p>
              <span className='bg-gray-100 animate-pulse h-6 w-72 mx-auto mb-3' />
            </p>
            <p>
              <span className='bg-gray-100 animate-pulse h-6 w-sm' />
            </p>
          </div>

          <Button className='w-32'>tickets</Button>
        </li>
      ))}
  </ul>
)
