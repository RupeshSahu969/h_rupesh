import { useState, useEffect } from 'react';

const reviews = [
  { name: 'Ajit Singh', source: 'Google Review', text: 'I found myself in Home not in Hospital, It was a very good experience with everyone. Special Thanks to Dr. Abhishek.' },
  { name: 'John Doe', source: 'Google Review', text: 'Amazing service and very friendly staff. Highly recommend!' },
  { name: 'Jane Smith', source: 'Google Review', text: 'The facilities were top-notch and the care was excellent.' },
  { name: 'Alice Johnson', source: 'Google Review', text: 'Very professional and caring environment. Thank you!' },
  { name: 'John Doe', source: 'Google Review', text: 'Amazing service and very friendly staff. Highly recommend!' },
  { name: 'Jane Smith', source: 'Google Review', text: 'The facilities were top-notch and the care was excellent.' },
  { name: 'Alice Johnson', source: 'Google Review', text: 'Very professional and caring environment. Thank you!' },
  // Add more reviews here
];

export default function ReviewPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1); // Default to 1 slide for mobile view

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };

    // Set initial value based on window size
    setSlidesToShow(getSlidesToShow());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getSlidesToShow() {
    if (window.innerWidth >= 1024) return 4; // Desktop
    if (window.innerWidth >= 768) return 3;  // Tablet
    return 1;  // Mobile
  }

  const handleNext = () => {
    if (currentSlide < reviews.length - slidesToShow) {
      setCurrentSlide(currentSlide + slidesToShow);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - slidesToShow);
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-3xl">Testimonial</h2>
      <h3 className="text-4xl font-bold my-4">What Our Patients Are Saying</h3>
      <div className="bg-[#AAB8CB] w-full p-8">
        <div className="flex justify-between mb-4">
          <button onClick={handlePrev} disabled={currentSlide === 0} className="bg-gray-300 p-2 rounded">Prev</button>
          <button onClick={handleNext} disabled={currentSlide >= reviews.length - slidesToShow} className="bg-gray-300 p-2 rounded">Next</button>
        </div>
        <div className="overflow-x-auto flex snap-x">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-4 m-2 flex-shrink-0 w-full md:w-1/3 lg:w-1/4 snap-start"
              style={{ minWidth: `${100 / slidesToShow}%` }}
            >
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current text-yellow-500" viewBox="0 0 20 20">
                    <path d="M10 15l-5.09 2.67 1-5.78L1 7.47l5.91-.86L10 2l2.09 4.61 5.91.86-4.28 4.42 1 5.78L10 15z" />
                  </svg>
                ))}
              </div>
              <p>{review.text}</p>
              <div className="mt-4 text-sm text-gray-600">
                <div>{review.name}</div>
                <div>{review.source}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
