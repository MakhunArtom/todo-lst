import { Hero, HomeSection, MultiPlatforms } from './../../components/index';

import {
  OrganizeSectionContent,
  CalendarSectionContent,
  UnaiteSectionContent,
  CollaboratingSectionContent,
} from '../../constants/Contants';

export const Home = () => {
  return (
    <>
      <Hero />
      <HomeSection options={OrganizeSectionContent} />
      <HomeSection options={CalendarSectionContent} />
      <HomeSection options={UnaiteSectionContent} />
      <HomeSection options={CollaboratingSectionContent} />
      {/* <MultiPlatforms /> */}
    </>
  );
};
