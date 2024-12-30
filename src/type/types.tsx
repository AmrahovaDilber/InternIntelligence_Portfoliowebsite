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
    id: number,
    name: string,
    infor: string,
    icon: React.JSX,
    href:string
}