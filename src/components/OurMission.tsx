const incentives = [
  {
    name: 'Free shipping',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: '10-year warranty',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: 'Exchanges',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
];

export default function Example() {
  return (
    <div className="w-full">
      <hr className="mt-[70px] mb-[20px] md:my-[70px]" />
      <div className="px-4 md:px-12">
        <h2 className="hidden md:block text-2xl font-semibold tracking-tight text-gray-900">
          We built our business on great customer service
        </h2>
        <div className="flex flex-col-reverse md:flex-row w-full">
          <div className="w-full md:w-[60%]">
            <div>
              <p className="mt-4 text-gray-500 text-center md:text-left">
                At the beginning at least, but then we realized we could make a
                lot more money if we kinda stopped caring about that. Our new
                strategy is to write a bunch of things that look really good in
                the headlines, then clarify in the small print but hope people
                don't actually read it.
              </p>
            </div>
            <div className="mt-0 md:mt-[70px]">
              {incentives.map((incentive) => (
                <div key={incentive.name}>
                  <div
                    key={incentive.name}
                    className="flex flex-col md:flex-row mt-10 mb-0 md:mb-8"
                  >
                    <div className="flex justify-center mr-0 md:mr-[35px]">
                      <img
                        className="h-16 w-16"
                        src={incentive.imageSrc}
                        alt=""
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-sm font-medium text-gray-900">
                        {incentive.name}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        {incentive.description}
                      </p>
                    </div>
                  </div>
                  <hr className="md:hidden mt-20" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center md:block w-full md:w-auto pl-0 md:pl-10 m-auto">
            <img
              src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
              alt=""
              className="py-10 w-[280px] md:w-[362px] object-cover object-center"
            />
            <h2 className="md:hidden text-center text-2xl font-semibold tracking-tight text-gray-900">
              We built our business on great customer service
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
