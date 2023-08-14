import React from 'react';

interface TestimonialAvatarProps{
  src: string;
  name: string;
  title: string;
}

const Testimonial = (props: any) => {
  const {children} = props;

  return <div>{children}</div>
}

const TestimonialContent = (props: any) => {
  const {children} = props;

  return (
    <div
      className={`bg-white shadow-lg p-8 rounded-xl text-center relative after:absolute after:content[''] after:w-0 after:h-0 after:border-left['solid transparent'] after:border-left-width[16] after:border-right['solid transparent'] after:border-right-width[16] after:border-top['solid'] after:border-top-width[16] after:border-top-color-white after:bottom[-16px] after:left[50%] after:transform['translateX(-50%)']`}>
      {children}
    </div>
  );
}

const TestimonialHeadig = (props: any) => {
  const {children} = props;

  return (
    <div className='text-xl font-semibold'>
      {children}
    </div>
  );
}

const TestimonialText = (props: any) => {
  const {children} = props;

  return (
    <div className='text-sm text-gray-400'>
      {children}
    </div>
  );
}

const TestimonialAvatar = ({src, name, title}: TestimonialAvatarProps) => {
  return (
    <div className='flex flex-col items-center mt-8'>
      <img src={src} alt={name} className='w-16 h-16 mb-2 rounded-full'/>

      <div className='flex flex-col items-center'>
        <span className='font-semibold text-black'>{name}</span>
        <span className='text-xs text-gray-400'>{title}</span>
      </div>
    </div>
  );
}

const Testimonials = () => {
  return (
    <div className='bg-gray-100'>
        <div className='max-w-7xl py-16'>
          <div className='text-center-mb-8'>
            <h1 className='text-3xl text-black font-semibold'>Our clients speak</h1>
          </div>

          <div className='flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-4 lg:space-x-10'>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeadig>Efficient collaborating</TestimonialHeadig>

                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                  imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>

              <TestimonialAvatar src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
                name={'Jane Cooper'}
                title={'CEO at ABC Corporation'}
              />
            </Testimonial>

            <Testimonial>
              <TestimonialContent>
                <TestimonialHeadig>Very fast and easy to use</TestimonialHeadig>

                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                  imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>

              <TestimonialAvatar src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
                name={'Nick Gordon'}
                title={'CEO at CNN'}
              />
            </Testimonial>
          </div>
        </div>
    </div>
  )
}

export default Testimonials;