import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>Task Tracker {title}</h1>
      <Button color="green" text="Add" />
    </header>
  );
};

export default Header;
