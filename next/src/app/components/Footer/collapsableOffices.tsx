import { type Offices } from '@/app/utils/coordinates';

import CollapsibleList from '../Collapsible';

type CollapsableOfficesProps = {
  offices: Offices;
};

export const CollapsableOffices = ({ offices }: CollapsableOfficesProps) => {
  if (!offices || offices.length === 0) return null;

  return (
    <CollapsibleList
      accentFontColor='#9AA09D'
      items={offices?.map((office, index) => ({
        id: office.id,
        title: office.title,
        content: (
          <div className='space-y-5 text-white' key={index}>
            <div className='space-y-4'>
              <p className='text-xs font-bold'>{office.name}</p>
              <ul className='space-y-1 text-xs leading-5 text-c-gray-200'>
                <li>{office.phone}</li>
                <li>
                  <a href={`mailto:${office.email}`}>{office.email}</a>
                </li>
              </ul>
            </div>
          </div>
        ),
      }))}
      fontColor='white'
    />
  );
};
