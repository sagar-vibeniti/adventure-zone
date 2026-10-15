"use client";

import { bookingCopy, type StayPackage } from "@/data/content";
import { formatRupees } from "@/lib/site";
import { ButtonLink } from "@/styles/StylesUi";
import { Bar, Summary } from "./StylesMobileReserveBar";

type MobileReserveBarProps = {
  selected: StayPackage;
  guests: number;
};

export const MobileReserveBar = ({ selected, guests }: MobileReserveBarProps) => (
  <Bar>
    <Summary>
      <strong>
        {formatRupees(selected.price)} {bookingCopy.perPerson}
      </strong>
      <span>
        {selected.name} · {guests} guests
      </span>
    </Summary>
    <ButtonLink href="#book" $tone="primary" $size="lg">
      {bookingCopy.mobileReserve}
    </ButtonLink>
  </Bar>
);
