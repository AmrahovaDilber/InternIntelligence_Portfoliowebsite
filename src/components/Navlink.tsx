import { NavlinkProps } from "../type/types";

function NavLink({ href, title }:NavlinkProps) {
  return <a href={href} className='nav'>{title}</a>;
}
export default NavLink;
