import { makeStyles } from "@fluentui/react-components";
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
  item: {
    height: "auto",
    width: "auto",
    flexShrink: 1,
  },
});

interface StackProps {
  children: any;
  overrideStyles?: CSSProperties;
  overrideItemStyles?: CSSProperties;
}

export function Stack({ children, overrideStyles, overrideItemStyles }: StackProps) {
  const styles = useStyles();

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      /* @ts-ignore */
      return React.cloneElement(child, { overrideItemStyles });
    }
    return child;
  });

  return <div className={styles.root} style={overrideStyles}>{childrenWithProps}</div>;
}

interface StackItemProps {
  overrideItemStyles?: CSSProperties;
  children: any;
}

export function StackItem({ children, overrideItemStyles }: StackItemProps) {
  const styles = useStyles();
  return (
    <div className={styles.item} style={overrideItemStyles}>
      {children}
    </div>
  );
}
