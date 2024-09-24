import css from "./Logo.module.css"
import { ReactComponent as LogoIcon } from "../../assets/Logo.svg";

export const Logo = () => {
    return <div><LogoIcon className={css.logo} /></div>;
}