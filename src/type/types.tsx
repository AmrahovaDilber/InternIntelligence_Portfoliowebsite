export type techType = {
    src: string,
    name: string,
    percent:number
}

export type validationType = {
    firstName?: string,
    lastName?: string,
    email?: string,
    message?:string
}
export type connectionType = {
    id: number;
    name: string;
    infor: string;
    icon: JSX.Element;
    href: string;
};


 export type NavlinkProps={
    href: string,
    title:string
}

export type ProjectType = {
    link: string;
    image: string;
    title: string;
    des: string;
    icons: string[]; 
  };
  