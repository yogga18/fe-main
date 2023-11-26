const Accordion = () => {
  return (
    <div className='w-5/6 m-auto my-10 shadow-md rounded-sm'>
      <div className='collapse collapse-arrow bg-white rounded-none'>
        <input type='radio' name='my-accordion-2' />
        <div className='collapse-title text-xl font-medium '>
          Click to open this one and close others
        </div>
        <div className='collapse-content bg-gray-100 shadow-md'>
          <p>hello</p>
        </div>
      </div>
      <div className='collapse collapse-arrow bg-white rounded-none'>
        <input type='radio' name='my-accordion-2' />
        <div className='collapse-title text-xl font-medium '>
          Click to open this one and close others
        </div>
        <div className='collapse-content bg-gray-100'>
          <p>hello</p>
        </div>
      </div>
      <div className='collapse collapse-arrow bg-white rounded-none'>
        <input type='radio' name='my-accordion-2' />
        <div className='collapse-title text-xl font-medium '>
          Click to open this one and close others
        </div>
        <div className='collapse-content bg-gray-100'>
          <p>hello</p>
        </div>
      </div>
      <div className='collapse collapse-arrow bg-white rounded-none'>
        <input type='radio' name='my-accordion-2' />
        <div className='collapse-title text-xl font-medium '>
          Click to open this one and close others
        </div>
        <div className='collapse-content bg-gray-100'>
          <p>hello</p>
        </div>
      </div>
      <div className='collapse collapse-arrow bg-white rounded-none'>
        <input type='radio' name='my-accordion-2' />
        <div className='collapse-title text-xl font-medium '>
          Click to open this one and close others
        </div>
        <div className='collapse-content bg-gray-100'>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
