"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { MessageCircle, Minus, Phone, Plus, Tag } from "lucide-react";
import { bookingCopy, MAX_GUESTS, MIN_GUESTS, packages, type StayPackage } from "@/data/content";
import { formatRupees, site, whatsappLink } from "@/lib/site";
import { Button } from "@/styles/StylesUi";
import {
  Aside,
  Breakdown,
  CallLine,
  Card,
  ErrorText,
  Field,
  FieldLabel,
  Fields,
  GuestCopy,
  GuestRow,
  Note,
  Offer,
  PriceLine,
  StepButton,
  Stepper,
  Total,
} from "./StylesBookingCard";

type BookingCardProps = {
  selected: StayPackage;
  guests: number;
  onPackageChange: (stayPackage: StayPackage) => void;
  onGuestsChange: (guests: number) => void;
};

const toInputDate = (date: Date) => {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
};

const buildMessage = (stayPackage: StayPackage, guests: number, checkIn: string, checkOut: string) =>
  [
    "Hello Adventure Zone, I would like to book a stay.",
    "",
    `Package: ${stayPackage.name} (${stayPackage.label}) — ${formatRupees(stayPackage.price)} per person`,
    `Guests: ${guests}`,
    `Check-in: ${checkIn || "Flexible"}`,
    `Checkout: ${checkOut || "Flexible"}`,
    `Estimated total: ${formatRupees(stayPackage.price * guests)}`,
    "",
    "Please confirm availability and the first-10-bookings discount.",
  ].join("\n");

export const BookingCard = ({ selected, guests, onPackageChange, onGuestsChange }: BookingCardProps) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [error, setError] = useState("");
  const [fallbackLink, setFallbackLink] = useState("");
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);
  const total = selected.price * guests;

  useEffect(() => {
    const today = toInputDate(new Date());
    if (checkInRef.current) checkInRef.current.min = today;
    if (checkOutRef.current) checkOutRef.current.min = today;
  }, []);

  const handleCheckInChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCheckIn(value);
    setError("");
    if (checkOutRef.current) checkOutRef.current.min = value || checkInRef.current?.min || "";
    if (checkOut && value && checkOut <= value) setCheckOut("");
  };

  const handleCheckOutChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckOut(event.target.value);
    setError("");
  };

  const handlePackageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const next = packages.find((item) => item.id === event.target.value);
    if (next) onPackageChange(next);
  };

  const handleDecrease = () => onGuestsChange(Math.max(MIN_GUESTS, guests - 1));
  const handleIncrease = () => onGuestsChange(Math.min(MAX_GUESTS, guests + 1));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (checkIn && checkOut && checkOut <= checkIn) {
      setError(bookingCopy.datesError);
      return;
    }

    const link = whatsappLink(buildMessage(selected, guests, checkIn, checkOut));
    if (window.matchMedia("(pointer: coarse)").matches) {
      window.location.assign(link);
      return;
    }
    const opened = window.open(link, "_blank", "noopener,noreferrer");
    setFallbackLink(opened ? "" : link);
  };

  return (
    <Aside id="book" aria-label="Book your stay">
      <Card onSubmit={handleSubmit} noValidate>
        <PriceLine>
          <strong>{formatRupees(selected.price)}</strong> <span>{bookingCopy.perPerson}</span>
        </PriceLine>
        <Offer>
          <Tag size={16} aria-hidden="true" />
          {bookingCopy.offer}
        </Offer>
        <Fields>
          <Field $top>
            <FieldLabel>{bookingCopy.checkIn}</FieldLabel>
            <input ref={checkInRef} type="date" value={checkIn} onChange={handleCheckInChange} aria-label="Check-in date" />
          </Field>
          <Field $top $right>
            <FieldLabel>{bookingCopy.checkOut}</FieldLabel>
            <input ref={checkOutRef} type="date" value={checkOut} onChange={handleCheckOutChange} aria-label="Checkout date" />
          </Field>
          <Field $wide>
            <FieldLabel>{bookingCopy.package}</FieldLabel>
            <select value={selected.id} onChange={handlePackageChange}>
              {packages.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} · {item.label} · {formatRupees(item.price)}
                </option>
              ))}
            </select>
          </Field>
          <GuestRow>
            <GuestCopy>
              <FieldLabel id="guests-label">{bookingCopy.guests}</FieldLabel>
              <span>Minimum {MIN_GUESTS}</span>
            </GuestCopy>
            <Stepper role="group" aria-labelledby="guests-label">
              <StepButton type="button" onClick={handleDecrease} disabled={guests <= MIN_GUESTS} aria-label="Remove a guest">
                <Minus size={16} aria-hidden="true" />
              </StepButton>
              <output aria-live="polite">{guests}</output>
              <StepButton type="button" onClick={handleIncrease} disabled={guests >= MAX_GUESTS} aria-label="Add a guest">
                <Plus size={16} aria-hidden="true" />
              </StepButton>
            </Stepper>
          </GuestRow>
        </Fields>
        {error ? <ErrorText role="alert">{error}</ErrorText> : null}
        <Button type="submit" $tone="primary" $full $size="lg">
          <MessageCircle size={18} aria-hidden="true" />
          {bookingCopy.reserve}
        </Button>
        {fallbackLink ? (
          <Note role="status">
            {bookingCopy.popupFallback}{" "}
            <a href={fallbackLink} target="_blank" rel="noopener noreferrer">
              {bookingCopy.popupLink}
            </a>
          </Note>
        ) : null}
        <Note>{bookingCopy.notCharged}</Note>
        <Breakdown>
          <div>
            <dt>
              {formatRupees(selected.price)} × {guests} guests
            </dt>
            <dd>{formatRupees(total)}</dd>
          </div>
          <Total>
            <dt>{bookingCopy.total}</dt>
            <dd>{formatRupees(total)}</dd>
          </Total>
        </Breakdown>
        <Note>{bookingCopy.discountNote}</Note>
        <CallLine>
          {bookingCopy.or}
          <a href={`tel:${site.phoneTel}`}>
            <Phone size={14} aria-hidden="true" />
            {site.phoneDisplay}
          </a>
        </CallLine>
      </Card>
    </Aside>
  );
};
