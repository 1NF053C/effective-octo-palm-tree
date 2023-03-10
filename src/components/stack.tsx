import { makeStyles, mergeClasses } from "@fluentui/react-components";
import React from "react";
import { CSSProperties } from "react";

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
  flexDirRow: {
    flexDirection: "row",
  },
  item: {
    height: "auto",
    width: "auto",
    flexShrink: 1,
  },
});

interface StackProps {
  dir: "row" | "col";
  children: any;
  itemStyles?: CSSProperties;
}

export function Stack({ children, dir, itemStyles }: StackProps) {
  const styles = useStyles();

  if (dir === "row") {
    styles.root = mergeClasses(styles.root, styles.flexDirRow);
  }

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      /* @ts-ignore */
      return React.cloneElement(child, { itemStyles });
    }
    return child;
  });

  return <div className={styles.root}>{childrenWithProps}</div>;
}

interface StackItemProps {
  itemStyles?: CSSProperties;
  children: any;
}

export function StackItem({ children, itemStyles }: StackItemProps) {
  const styles = useStyles();
  return (
    <div className={styles.item} style={itemStyles}>
      {children}
    </div>
  );
}
