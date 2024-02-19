import classes from "./Tag.module.css";

const Tag = ({ tag }: { tag: string }) => {
  return (
    <a className={classes.tag} href="">
      {tag}
    </a>
  );
};

export default Tag;
