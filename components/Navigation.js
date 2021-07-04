import Link from "next/Link";

const Navigation = (props) => {
  return (
    <div>
      <Link href={props.pageTitle}>
        <a>{props.linkTitle}</a>
      </Link>
    </div>
  );
};

export default Navigation;
