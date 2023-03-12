import {
  DataGridBody,
  DataGridRow,
  DataGrid,
  DataGridCell,
  TableCellLayout,
  TableColumnDefinition,
  createTableColumn,
} from "@fluentui/react-components";
import * as React from "react";
import { Open24Regular } from "@fluentui/react-icons";

type UrlCell = {
  label: string | JSX.Element;
  icon: JSX.Element;
};

type LastUpdatedCell = {
  label: string;
  timestamp: number;
};

type Item = {
  url: UrlCell;
  lastUpdated: LastUpdatedCell;
};

const items: Item[] = [
  {
    url: {
      label: (
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://devblogs.microsoft.com/"
        >
          MSFT Developer Blogs
        </a>
      ),
      icon: <Open24Regular />,
    },
    lastUpdated: { label: "1h ago", timestamp: 1 },
  },
  {
    url: {
      label: (
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://blog.cloudflare.com/"
        >
          Cloudflare Blogs
        </a>
      ),
      icon: <Open24Regular />,
    },
    lastUpdated: { label: "1h ago", timestamp: 2 },
  },
  {
    url: {
      label: (
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.ibm.com/blogs/"
        >
          IBM Blogs
        </a>
      ),
      icon: <Open24Regular />,
    },
    lastUpdated: { label: "1h ago", timestamp: 3 },
  },
  {
    url: {
      label: (
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://cloud.google.com/blog"
        >
          Google Cloud Blog
        </a>
      ),
      icon: <Open24Regular />,
    },
    lastUpdated: { label: "1h ago", timestamp: 3 },
  },
  {
    url: {
      label: (
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://aws.amazon.com/blogs/"
        >
          AWS Blogs
        </a>
      ),
      icon: <Open24Regular />,
    },
    lastUpdated: { label: "1h ago", timestamp: 3 },
  },
  {
    url: {
      label: (
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.reuters.com/technology/"
        >
          Reuters Technology Blog
        </a>
      ),
      icon: <Open24Regular />,
    },
    lastUpdated: { label: "1h ago", timestamp: 3 },
  },
];

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "url",
    compare: (a, b) => {
      return a.lastUpdated.label.localeCompare(b.lastUpdated.label);
    },
    renderCell: (item) => {
      return (
        <TableCellLayout media={item.url.icon}>
          {item.url.label}
        </TableCellLayout>
      );
    },
  }),
];

export const ListCard = () => {
  return (
    <DataGrid
      items={items}
      columns={columns}
      sortable
      getRowId={(item) => item.url.label}
      size="extra-small"
      columnSizingOptions={{
        url: {
          minWidth: 50,
          idealWidth: 120,
          defaultWidth: 95,
        }
      }}
    >
      <DataGridBody<Item>>
        {({ item, rowId }) => (
          <DataGridRow<Item> key={rowId}>
            {({ renderCell }) => (
              <div style={{ display: "grid", placeContent: "center" }}>
                <DataGridCell>{renderCell(item)}</DataGridCell>
              </div>
            )}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
};
