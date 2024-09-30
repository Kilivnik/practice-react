export const LinkAnotherPage = ({text, path}) => {
    return (
      <li>
        <a href={path}>{text}</a>
      </li>
    );
}