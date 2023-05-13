export type AuthContextType = {
  user: any;
};

export type Props = { children: React.ReactNode };

export type sidebarItemProps = {
  title: string;
  imgSrc: string;
};

export type cardProps = {
  title: string;
  img: string;
  value: string;
};

export type itemProp = {
  organization: string;
  phoneNumber: string;
  email: string;
  profile: {
    firstName: string;
    lastName: string;
  };
};

export type positionProp = {
  position: {
    top: number;
    left: number;
  };
  id: string;
};


export type socialProp = {
  socials: {
    twitter: string;
    facebook: string;
    instagram?: string;
  };
};