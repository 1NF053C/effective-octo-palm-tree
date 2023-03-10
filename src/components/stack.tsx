import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    width: "auto",
    height: "auto",
    boxSizing: "border-box",
    "> *": {
      textOverflow: "ellipsis",
    },
    "> :not(:first-child)": {
      marginTop: "0px",
    },
    "> *:not(.ms-StackItem)": {
      flexShrink: 1,
    },
  },
  item: {
    height: 'auto',
    width: 'auto',
    flexShrink: 1,
  },
});

interface StackProps {
    children: any
}

export function Stack({ children }: StackProps) {
  const styles = useStyles();
  return <div className={styles.root}>
    {children}
  </div>;
}

export function StackItem ({ children }: StackProps){
    const styles = useStyles();
    return <div className={styles.item}>
        {children}
    </div>
}
