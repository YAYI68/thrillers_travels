import { NotAvailable } from "@/components/notFound";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <main className="w-full mt-6 min-h-screen flex flex-col items-center ">
      <NotAvailable />
    </main>
  );
};

export default Page;
