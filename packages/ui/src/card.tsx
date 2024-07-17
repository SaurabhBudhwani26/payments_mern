/* eslint-disable no-redeclare */
import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div
      className="border p-6 bg-white rounded-xl bg-[#ededed]"
    >
      <h1 className="text-xl border-b pb-2">
        {title}
      </h1>
      <main>
      <p>
        {children}
      </p>
      </main>
    </div>
  );
}
