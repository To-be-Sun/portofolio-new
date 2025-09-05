'use client';
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function New() {
  const events = [
    {
      year: 2004,
      event: '岐阜県出身',
    },
    {
      year: 2010,
      event: '岐阜聖徳学園大学付属小学校入学',
    },
    {
      year: 2016,
      event: '岐阜聖徳学園大学付属小学校卒業',
    },
    {
      year: 2016,
      event: '名古屋中学校入学',
    },
    {
      year: 2019,
      event: '名古屋中学校卒業',
    },
    {
      year: 2019,
      event: '名古屋高校入学',
    },
    {
      year: 2022,
      event: '名古屋高校卒業',
    },
    {
      year: 2023,
      event: '日本医科大学入学',
    },
  ];

  return (
    <>
    <div className="size-max">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Year</TableHead>
            <TableHead className="text-left">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.event}>
              <TableCell className="font-medium">{event.year}</TableCell>
              <TableCell className="text-left">{event.event}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>     
    </>
  );
}
