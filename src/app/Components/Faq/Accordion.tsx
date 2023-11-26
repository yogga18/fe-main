const Accordion = () => {
  return (
    <div className='w-5/6 m-auto mt-20 mb-10 shadow-md rounded-sm'>
      <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-10'>
        Frequency Ask <b className='text-blue-500'>Question</b>
      </p>
      <div className='collapse collapse-arrow bg-white rounded-none'>
        <input type='radio' name='my-accordion-2' />
        <div className='collapse-title text-xl font-medium '>
          What this website is about ?
        </div>
        <div className='collapse-content bg-gray-100 shadow-md'>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className='collapse collapse-arrow bg-white rounded-none'>
        <input type='radio' name='my-accordion-2' />
        <div className='collapse-title text-xl font-medium '>
          This is website safe ?
        </div>
        <div className='collapse-content bg-gray-100'>
          <p>
            t has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
      <div className='collapse collapse-arrow bg-white rounded-none'>
        <input type='radio' name='my-accordion-2' />
        <div className='collapse-title text-xl font-medium '>
          Does the course have an active period ?
        </div>
        <div className='collapse-content bg-gray-100'>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur,{' '}
          </p>
        </div>
      </div>
      <div className='collapse collapse-arrow bg-white rounded-none'>
        <input type='radio' name='my-accordion-2' />
        <div className='collapse-title text-xl font-medium '>
          Is the payment method easy and safe?
        </div>
        <div className='collapse-content bg-gray-100'>
          <p>
            from a Lorem Ipsum passage, and going through the cites of the word
            in classical literature, discovered the undoubtable source. Lorem
            Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum
          </p>
        </div>
      </div>
      <div className='collapse collapse-arrow bg-white rounded-none'>
        <input type='radio' name='my-accordion-2' />
        <div className='collapse-title text-xl font-medium '>
          Can the course be followed by all groups ?
        </div>
        <div className='collapse-content bg-gray-100'>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from de
            Finibus Bonorum et Malorum by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
