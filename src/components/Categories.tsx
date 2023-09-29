import { FC } from 'react';

const categories = [
  {
    name: 'New Arrivals',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dfwt0gh29/image/upload/w_350,h_190,c_fill,f_auto,q_auto/v1513862176/606d24be-8ead-40aa-a622-22e5dfd02375_581101_TABLET_LANDSCAPE_LARGE_16_9',
  },
  {
    name: 'Productivity',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dfwt0gh29/image/upload/w_350,h_190,c_fill,f_auto,q_auto/v1513862176/a422c329-c1b9-4bc4-8a3d-7fd470db7888_515151_TABLET_LANDSCAPE_LARGE_16_9',
  },
  {
    name: 'Workspace',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dfwt0gh29/image/upload/w_350,h_190,c_fill,f_auto,q_auto/v1513862176/Manchester_United_Panorama__8051523746_vkolvf',
  },
  {
    name: 'Accessories',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dfwt0gh29/image/upload/w_350,h_190,c_fill,f_auto,q_auto/v1513862176/Stamford_Bridge_-_West_Stand_w9f9hj',
  },
  {
    name: 'Sale',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dfwt0gh29/image/upload/w_350,h_190,c_fill,f_auto,q_auto/v1513862176/02b00cfc-6280-4104-a0de-c6ff95630733_224841_TABLET_LANDSCAPE_16_9',
  },
  {
    name: 'New Arrival',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dfwt0gh29/image/upload/w_350,h_190,c_fill,f_auto,q_auto/v1513862176/6b4c86dd-b18f-48de-89ee-c9bff5da7f14_614411_TABLET_LANDSCAPE_LARGE_16_9',
  },
  {
    name: 'Product',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dfwt0gh29/image/upload/w_350,h_190,c_fill,f_auto,q_auto/v1513862176/Emirates_Stadium_-_East_side_-_Composite_fit0wv',
  },
  {
    name: 'Workspaces',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dfwt0gh29/image/upload/w_350,h_190,c_fill,f_auto,q_auto/v1513862176/b6bb7f66-191e-41e2-a6a1-6591e00a13cb_882011_TABLET_LANDSCAPE_LARGE_16_9',
  },
  {
    name: 'Accessory',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dfwt0gh29/image/upload/w_350,h_190,c_fill,f_auto,q_auto/v1513862176/4799596d-6031-4c02-9578-427502422dc8_847581_TABLET_LANDSCAPE_LARGE_16_9',
  },
  {
    name: 'Sales',
    href: '#',
    imageSrc:
      'https://res.cloudinary.com/dfwt0gh29/image/upload/w_350,h_190,c_fill,f_auto,q_auto/v1513862176/Stadium_Pictures/La_Liga/Sevilla2-1Lega2017',
  },
];

interface Props {
  title: string;
}

const Categories: FC<Props> = ({ title }) => {
  return (
    <div className="bg-white px-4 md:px-12">
      <div className="py-8">
        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            {title}
          </h2>
          <a
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="w-full flex overflow-x-scroll gap-4 no-scrollbar mt-[10px]">
          {categories.map((category) => (
            <div key={category.name} className="">
              <div className="w-[141px] md:w-[260px] border-2 border-[#e2e2e2] rounded-md">
                <img
                  src={category.imageSrc}
                  alt={category.name}
                  className="w-[141px] md:w-[260px] h-[114px] md:h-[162px] rounded-md object-cover"
                />
              </div>
              <div className="p-2">
                <p className="font-medium font-base">{category.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
