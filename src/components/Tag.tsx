import classes from "./Tag.module.css";

const Tag = ({ tag }: { tag: string }) => {
  return (
    <a className={classes.tag} href={`/tags/${tag}`}>
      {tag}
    </a>
  );
};

export default Tag;
