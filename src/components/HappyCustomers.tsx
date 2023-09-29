import { Rating } from 'react-simple-star-rating';

const testimonials = [
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander 1',
      handle: 'lesliealexander1',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 4.5,
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander 2',
      handle: 'lesliealexander2',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 4,
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander 3',
      handle: 'lesliealexander3',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 5,
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander 4',
      handle: 'lesliealexander4',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 4.5,
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander 5',
      handle: 'lesliealexander5',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 4.8,
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander 6',
      handle: 'lesliealexander6',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 5,
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander 7',
      handle: 'lesliealexander7',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 4.5,
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander 8',
      handle: 'lesliealexander8',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 4.8,
    },
  },
];

const HappyCustomers = () => {
  return (
    <div className="bg-[#f8f8f8] py-8 border-y-2 border-[#e1e3e5]">
      <div className="px-4 md:px-12">
        <div className="w-full text-center mb-4">
          <h2 className="text-[30px] font-semibold">Happy Costumers</h2>
        </div>
        <div className="box-content flex overflow-x-scroll gap-4 no-scrollbar">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author.handle}
              className="w-[300px] bg-white shadow-md rounded-md"
            >
              <figure className="w-[300px] rounded-2xl px-5 py-6 text-sm leading-6">
                <figcaption className="flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src={testimonial.author.imageUrl}
                    alt=""
                  />
                  <div>
                    <div className="text-[15px] font-base text-gray-900">
                      {testimonial.author.name}
                    </div>
                    <div className="text-xs text-gray-500">{`@${testimonial.author.handle}`}</div>
                  </div>
                </figcaption>
                <blockquote className="text-gray-500 font-normal mt-2 mb-2">
                  <p className="text-xs">{`“${testimonial.body}”`}</p>
                </blockquote>
                <Rating
                  initialValue={testimonial.author.rating}
                  emptyStyle={{ display: 'flex' }}
                  fillStyle={{ display: '-webkit-inline-box' }}
                  allowFraction
                  readonly
                  size={22}
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HappyCustomers;
