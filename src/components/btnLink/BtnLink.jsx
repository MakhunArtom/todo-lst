import { PrimaryLink, SecondaryLink } from './BtnLink.styled';

export const BtnLink = ({ children, type, path }) => {
  return (
    <>
      {type === 'primery' && <PrimaryLink to={`${path}`}>{children}</PrimaryLink>}
      {type !== 'primery' && <SecondaryLink to={`${path}`}>{children}</SecondaryLink>}
    </>
  );
};
