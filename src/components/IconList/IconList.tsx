"use client";

import type { IconItem } from "@/data/content";
import { Copy, List, Row, Text, Title } from "./StylesIconList";

type IconListProps = {
  items: IconItem[];
  columns?: 1 | 2 | 3;
  iconSize?: number;
};

export const IconList = ({ items, columns = 2, iconSize = 24 }: IconListProps) => (
  <List $columns={columns}>
    {items.map(({ icon: Icon, title, text }) => (
      <Row key={title} $hasText={Boolean(text)}>
        <Icon size={iconSize} strokeWidth={1.6} aria-hidden="true" />
        <Copy>
          <Title $strong={Boolean(text)}>{title}</Title>
          {text ? <Text>{text}</Text> : null}
        </Copy>
      </Row>
    ))}
  </List>
);
