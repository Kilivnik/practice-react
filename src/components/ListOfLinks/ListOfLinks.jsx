import {LinkAnotherPage} from "../LinkAnotherPage/LinkAnotherPage"

export const ListOfLinks = () => {
  return (
    <div>
      <ul>
        <LinkAnotherPage text="About" path="/" />
        <LinkAnotherPage text="Support" path="/support" />
      </ul>
    </div>
  );
};
