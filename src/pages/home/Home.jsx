import { Hero, HomeSection, MultiPlatforms, Recomended } from './../../components/index';

import {
  OrganizeSectionContent,
  CalendarSectionContent,
  UnaiteSectionContent,
  CollaboratingSectionContent,
} from './../../constants/home/homeConstant';

import { arreyColaborationsSvg } from './../../constants/recomended/recomendedConstant';

export const Home = () => {
  return (
    <>
      <Hero />
      <HomeSection options={OrganizeSectionContent} />
      <HomeSection options={CalendarSectionContent} />
      <HomeSection options={UnaiteSectionContent} />
      <HomeSection options={CollaboratingSectionContent} />
      <MultiPlatforms />
      <Recomended options={arreyColaborationsSvg} />
    </>
  );
};
